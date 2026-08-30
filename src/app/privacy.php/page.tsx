import { SiteLink } from '@/components/SiteLink';
import { company, createPageMetadata } from '@/lib/site';

export const metadata = createPageMetadata({
  title: 'Privacy Policy',
  description:
    'Read how Abdelhamid Engineering Industries handles information submitted through its contact and quotation forms.',
  path: '/privacy.php',
  image: '/assets/images/hero.jpeg',
  imageAlt: 'Abdelhamid Engineering Industries facility',
});

export default function PrivacyPage() {
  return (
    <main id="main-content" tabIndex={-1} className="privacy-page">
      <div className="privacy-shell">
        <header className="privacy-header">
          <p className="privacy-eyebrow">Company information</p>
          <h1>Privacy policy</h1>
          <p>
            This policy explains how {company.name} handles information you
            submit through this website.
          </p>
          <p className="privacy-updated">Last updated: August 30, 2026</p>
        </header>

        <div className="privacy-content">
          <section>
            <h2>Information we collect</h2>
            <p>
              When you contact us or request a quotation, we may collect your
              name, company, email address, phone number, project details,
              message, and any drawings or files you choose to attach. Our
              hosting and security systems may also process basic request
              information needed to operate and protect the website.
            </p>
          </section>

          <section>
            <h2>How we use information</h2>
            <p>
              We use submitted information to respond to enquiries, assess
              manufacturing requirements, prepare quotations, communicate
              about a project, protect the website from misuse, and meet
              applicable legal obligations.
            </p>
          </section>

          <section>
            <h2>Sharing and service providers</h2>
            <p>
              We do not sell personal information. Information may be handled
              by service providers that support website hosting, email, and
              business operations, or disclosed when required by law. These
              providers should only process information for the services they
              provide to us.
            </p>
          </section>

          <section>
            <h2>Attachments and confidential drawings</h2>
            <p>
              Please send only files needed for your enquiry. Do not submit
              personal information or confidential material that is unrelated
              to the requested engineering review.
            </p>
          </section>

          <section>
            <h2>Retention and security</h2>
            <p>
              We keep enquiry and quotation information only for as long as
              reasonably necessary for the purposes described above, business
              records, and legal requirements. We use reasonable safeguards,
              but no internet transmission or storage method can be guaranteed
              to be completely secure.
            </p>
          </section>

          <section>
            <h2>Your choices</h2>
            <p>
              You may ask about, correct, or request deletion of information
              you submitted, subject to applicable legal and business record
              requirements. Contact us using the details below.
            </p>
          </section>

          <section>
            <h2>Contact us</h2>
            <p>
              Email <a href={`mailto:${company.email}`}>{company.email}</a>{' '}
              or use our <SiteLink href="/contact.php">contact page</SiteLink>{' '}
              for privacy questions.
            </p>
          </section>

          <section>
            <h2>Policy updates</h2>
            <p>
              We may update this policy when our website or practices change.
              The latest version and its update date will remain available on
              this page.
            </p>
          </section>
        </div>
      </div>
    </main>
  );
}
