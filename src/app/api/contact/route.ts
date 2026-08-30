import { NextResponse } from 'next/server';
import {
  escapeHtml,
  FormValidationError,
  isPlainObject,
  readEmailField,
  readTextField,
} from '@/lib/form-validation';
import { checkRateLimit, hasAllowedOrigin } from '@/lib/request-safety';
import { createTransporter, mailFrom, mailTo } from '@/lib/smtp';

const MAX_JSON_BYTES = 64 * 1024;

export async function POST(request: Request) {
  if (!hasAllowedOrigin(request)) {
    return NextResponse.json(
      { ok: false, error: 'This request origin is not allowed.' },
      { status: 403 },
    );
  }

  const rateLimit = checkRateLimit(request, 'contact');
  if (!rateLimit.allowed) {
    return NextResponse.json(
      { ok: false, error: 'Too many requests. Please try again later.' },
      {
        status: 429,
        headers: { 'Retry-After': String(rateLimit.retryAfterSeconds) },
      },
    );
  }

  const contentType = request.headers.get('content-type')?.toLowerCase() || '';
  if (!contentType.includes('application/json')) {
    return NextResponse.json(
      { ok: false, error: 'Expected a JSON request.' },
      { status: 415 },
    );
  }

  const contentLength = Number(request.headers.get('content-length'));
  if (Number.isFinite(contentLength) && contentLength > MAX_JSON_BYTES) {
    return NextResponse.json(
      { ok: false, error: 'The request is too large.' },
      { status: 413 },
    );
  }

  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json(
      { ok: false, error: 'The request body is not valid JSON.' },
      { status: 400 },
    );
  }

  if (!isPlainObject(body)) {
    return NextResponse.json(
      { ok: false, error: 'The request body is invalid.' },
      { status: 400 },
    );
  }

  try {
    const website = readTextField(body.website, {
      label: 'Website',
      maxLength: 200,
    });
    if (website) return NextResponse.json({ ok: true });

    const fullName = readTextField(body.full_name, {
      label: 'Full name',
      required: true,
      maxLength: 100,
    });
    const companyName = readTextField(body.company_name, {
      label: 'Company name',
      maxLength: 150,
    });
    const email = readEmailField(body.email);
    const phone = readTextField(body.phone, {
      label: 'Phone',
      maxLength: 40,
    });
    const subject = readTextField(body.subject, {
      label: 'Subject',
      required: true,
      maxLength: 150,
    });
    const message = readTextField(body.message, {
      label: 'Message',
      required: true,
      maxLength: 5_000,
    });

    const htmlBody = `
      <h2>New Contact Form Submission</h2>
      <table style="border-collapse:collapse;width:100%;max-width:600px;font-family:Arial,sans-serif;">
        <tr><td style="padding:10px 14px;border:1px solid #ddd;font-weight:bold;width:140px;">Name</td><td style="padding:10px 14px;border:1px solid #ddd;">${escapeHtml(fullName)}</td></tr>
        <tr><td style="padding:10px 14px;border:1px solid #ddd;font-weight:bold;">Company</td><td style="padding:10px 14px;border:1px solid #ddd;">${escapeHtml(companyName || 'Not provided')}</td></tr>
        <tr><td style="padding:10px 14px;border:1px solid #ddd;font-weight:bold;">Email</td><td style="padding:10px 14px;border:1px solid #ddd;"><a href="mailto:${escapeHtml(email)}">${escapeHtml(email)}</a></td></tr>
        <tr><td style="padding:10px 14px;border:1px solid #ddd;font-weight:bold;">Phone</td><td style="padding:10px 14px;border:1px solid #ddd;">${escapeHtml(phone || 'Not provided')}</td></tr>
        <tr><td style="padding:10px 14px;border:1px solid #ddd;font-weight:bold;">Subject</td><td style="padding:10px 14px;border:1px solid #ddd;">${escapeHtml(subject)}</td></tr>
        <tr><td style="padding:10px 14px;border:1px solid #ddd;font-weight:bold;vertical-align:top;">Message</td><td style="padding:10px 14px;border:1px solid #ddd;white-space:pre-wrap;">${escapeHtml(message)}</td></tr>
      </table>
    `;

    const transporter = createTransporter();
    await transporter.sendMail({
      from: `"Abdelhamid Website" <${mailFrom()}>`,
      to: mailTo(),
      replyTo: email,
      subject: `[Contact] ${subject}`,
      html: htmlBody,
    });

    return NextResponse.json({ ok: true });
  } catch (error) {
    if (error instanceof FormValidationError) {
      return NextResponse.json(
        { ok: false, error: error.message },
        { status: 400 },
      );
    }

    console.error('Contact form error:', error);
    return NextResponse.json(
      { ok: false, error: 'Failed to send message. Please try again later.' },
      { status: 500 },
    );
  }
}
