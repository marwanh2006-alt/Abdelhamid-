import { NextResponse } from 'next/server';
import {
  escapeHtml,
  FormValidationError,
  readEmailField,
  readTextField,
} from '@/lib/form-validation';
import { checkRateLimit, hasAllowedOrigin } from '@/lib/request-safety';
import { createTransporter, mailFrom, mailTo } from '@/lib/smtp';

const MEBIBYTE = 1024 * 1024;
const MAX_FILES = 5;
const MAX_FILE_BYTES = 10 * MEBIBYTE;
const MAX_TOTAL_FILE_BYTES = 25 * MEBIBYTE;
const MAX_REQUEST_BYTES = 26 * MEBIBYTE;

const MIME_TYPES_BY_EXTENSION: Record<string, ReadonlySet<string>> = {
  '.jpg': new Set(['image/jpeg']),
  '.jpeg': new Set(['image/jpeg']),
  '.png': new Set(['image/png']),
  '.pdf': new Set(['application/pdf']),
  '.dwg': new Set([
    'application/acad',
    'application/autocad_dwg',
    'application/dwg',
    'application/octet-stream',
    'application/vnd.dwg',
    'application/x-acad',
    'application/x-dwg',
    'image/vnd.dwg',
  ]),
  '.dxf': new Set([
    'application/dxf',
    'application/octet-stream',
    'application/vnd.dxf',
    'application/x-autocad',
    'application/x-dxf',
    'image/vnd.dxf',
  ]),
  '.step': new Set([
    'application/octet-stream',
    'application/step',
    'application/step-file',
    'application/x-step',
    'model/step',
  ]),
  '.stp': new Set([
    'application/octet-stream',
    'application/step',
    'application/step-file',
    'application/x-step',
    'model/step',
  ]),
  '.iges': new Set([
    'application/iges',
    'application/octet-stream',
    'application/x-iges',
    'model/iges',
  ]),
  '.igs': new Set([
    'application/iges',
    'application/octet-stream',
    'application/x-iges',
    'model/iges',
  ]),
};

const MIME_OPTIONAL_EXTENSIONS = new Set([
  '.dwg',
  '.dxf',
  '.step',
  '.stp',
  '.iges',
  '.igs',
]);

class UploadValidationError extends Error {
  constructor(
    message: string,
    readonly status: 400 | 413 | 415,
  ) {
    super(message);
    this.name = 'UploadValidationError';
  }
}

export async function POST(request: Request) {
  if (!hasAllowedOrigin(request)) {
    return NextResponse.json(
      { ok: false, error: 'This request origin is not allowed.' },
      { status: 403 },
    );
  }

  const rateLimit = checkRateLimit(request, 'quote');
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
  if (!contentType.includes('multipart/form-data')) {
    return NextResponse.json(
      { ok: false, error: 'Expected a multipart form submission.' },
      { status: 415 },
    );
  }

  const contentLength = Number(request.headers.get('content-length'));
  if (Number.isFinite(contentLength) && contentLength > MAX_REQUEST_BYTES) {
    return NextResponse.json(
      { ok: false, error: 'The upload is larger than the 25 MB total limit.' },
      { status: 413 },
    );
  }

  let formData: FormData;
  try {
    formData = await request.formData();
  } catch {
    return NextResponse.json(
      { ok: false, error: 'The form submission could not be read.' },
      { status: 400 },
    );
  }

  try {
    const website = readTextField(formData.get('website'), {
      label: 'Website',
      maxLength: 200,
    });
    if (website) return NextResponse.json({ ok: true });

    const name = readTextField(formData.get('name'), {
      label: 'Name',
      required: true,
      maxLength: 100,
    });
    const company = readTextField(formData.get('company'), {
      label: 'Company',
      maxLength: 150,
    });
    const email = readEmailField(formData.get('email'));
    const phone = readTextField(formData.get('phone'), {
      label: 'Phone',
      maxLength: 40,
    });
    const project = readTextField(formData.get('project'), {
      label: 'Project or product',
      required: true,
      maxLength: 200,
    });
    const requirements = readTextField(formData.get('requirements'), {
      label: 'Requirements',
      required: true,
      maxLength: 10_000,
    });

    const fileEntries = formData.getAll('files[]');
    if (fileEntries.some((entry) => typeof entry === 'string')) {
      throw new UploadValidationError('One or more attachments are invalid.', 400);
    }

    const files = (fileEntries as File[]).filter((file) => file.size > 0);
    const attachments = await validateAndPrepareAttachments(files);

    const htmlBody = `
      <h2>New Quote Request</h2>
      <table style="border-collapse:collapse;width:100%;max-width:600px;font-family:Arial,sans-serif;">
        <tr><td style="padding:10px 14px;border:1px solid #ddd;font-weight:bold;width:160px;">Name</td><td style="padding:10px 14px;border:1px solid #ddd;">${escapeHtml(name)}</td></tr>
        <tr><td style="padding:10px 14px;border:1px solid #ddd;font-weight:bold;">Company</td><td style="padding:10px 14px;border:1px solid #ddd;">${escapeHtml(company || 'Not provided')}</td></tr>
        <tr><td style="padding:10px 14px;border:1px solid #ddd;font-weight:bold;">Email</td><td style="padding:10px 14px;border:1px solid #ddd;"><a href="mailto:${escapeHtml(email)}">${escapeHtml(email)}</a></td></tr>
        <tr><td style="padding:10px 14px;border:1px solid #ddd;font-weight:bold;">Phone</td><td style="padding:10px 14px;border:1px solid #ddd;">${escapeHtml(phone || 'Not provided')}</td></tr>
        <tr><td style="padding:10px 14px;border:1px solid #ddd;font-weight:bold;">Project / Product</td><td style="padding:10px 14px;border:1px solid #ddd;">${escapeHtml(project)}</td></tr>
        <tr><td style="padding:10px 14px;border:1px solid #ddd;font-weight:bold;vertical-align:top;">Requirements</td><td style="padding:10px 14px;border:1px solid #ddd;white-space:pre-wrap;">${escapeHtml(requirements)}</td></tr>
        ${
          attachments.length > 0
            ? `<tr><td style="padding:10px 14px;border:1px solid #ddd;font-weight:bold;">Attachments</td><td style="padding:10px 14px;border:1px solid #ddd;">${attachments.length} file(s) attached</td></tr>`
            : ''
        }
      </table>
    `;

    const transporter = createTransporter();
    await transporter.sendMail({
      from: `"Abdelhamid Website" <${mailFrom()}>`,
      to: mailTo(),
      replyTo: email,
      subject: `[Quote Request] ${project}`,
      html: htmlBody,
      attachments,
    });

    return NextResponse.json({ ok: true });
  } catch (error) {
    if (error instanceof FormValidationError) {
      return NextResponse.json(
        { ok: false, error: error.message },
        { status: 400 },
      );
    }
    if (error instanceof UploadValidationError) {
      return NextResponse.json(
        { ok: false, error: error.message },
        { status: error.status },
      );
    }

    console.error('Quote form error:', error);
    return NextResponse.json(
      { ok: false, error: 'Failed to send request. Please try again later.' },
      { status: 500 },
    );
  }
}

async function validateAndPrepareAttachments(files: File[]) {
  if (files.length > MAX_FILES) {
    throw new UploadValidationError(
      `You can attach up to ${MAX_FILES} files.`,
      413,
    );
  }

  let totalBytes = 0;
  const attachments = [];

  for (const [index, file] of files.entries()) {
    if (file.size > MAX_FILE_BYTES) {
      throw new UploadValidationError(
        `${file.name || 'An attachment'} is larger than 10 MB.`,
        413,
      );
    }

    totalBytes += file.size;
    if (totalBytes > MAX_TOTAL_FILE_BYTES) {
      throw new UploadValidationError(
        'Attachments exceed the 25 MB total limit.',
        413,
      );
    }

    const extension = fileExtension(file.name);
    const allowedTypes = MIME_TYPES_BY_EXTENSION[extension];
    if (!allowedTypes) {
      throw new UploadValidationError(
        `${file.name || 'An attachment'} has an unsupported file type.`,
        415,
      );
    }

    const normalizedMime = file.type.toLowerCase();
    if (
      (!normalizedMime && !MIME_OPTIONAL_EXTENSIONS.has(extension)) ||
      (normalizedMime && !allowedTypes.has(normalizedMime))
    ) {
      throw new UploadValidationError(
        `${file.name || 'An attachment'} does not match an allowed file type.`,
        415,
      );
    }

    await verifyKnownFileSignature(file, extension);
    const content = Buffer.from(await file.arrayBuffer());
    attachments.push({
      filename: safeFilename(file.name, index),
      content,
      contentType: normalizedMime || 'application/octet-stream',
    });
  }

  return attachments;
}

function fileExtension(filename: string) {
  const match = filename.toLowerCase().match(/\.[a-z0-9]+$/);
  return match?.[0] || '';
}

function safeFilename(filename: string, index: number) {
  const basename = filename.split(/[\\/]/).pop() || `attachment-${index + 1}`;
  const extension = fileExtension(basename);
  const stem = basename.slice(0, Math.max(0, basename.length - extension.length));
  const safeStem =
    stem
      .normalize('NFKC')
      .replace(/[\u0000-\u001f\u007f]/g, '')
      .replace(/[^a-zA-Z0-9._-]+/g, '_')
      .replace(/^\.+|\.+$/g, '')
      .slice(0, 90) || 'attachment';

  return `${String(index + 1).padStart(2, '0')}-${safeStem}${extension}`;
}

async function verifyKnownFileSignature(file: File, extension: string) {
  const header = new Uint8Array(await file.slice(0, 8).arrayBuffer());
  const matchesJpeg =
    header[0] === 0xff && header[1] === 0xd8 && header[2] === 0xff;
  const matchesPng =
    header[0] === 0x89 &&
    header[1] === 0x50 &&
    header[2] === 0x4e &&
    header[3] === 0x47 &&
    header[4] === 0x0d &&
    header[5] === 0x0a &&
    header[6] === 0x1a &&
    header[7] === 0x0a;
  const matchesPdf =
    header[0] === 0x25 &&
    header[1] === 0x50 &&
    header[2] === 0x44 &&
    header[3] === 0x46 &&
    header[4] === 0x2d;

  if (
    (['.jpg', '.jpeg'].includes(extension) && !matchesJpeg) ||
    (extension === '.png' && !matchesPng) ||
    (extension === '.pdf' && !matchesPdf)
  ) {
    throw new UploadValidationError(
      `${file.name || 'An attachment'} has invalid file contents.`,
      415,
    );
  }
}
