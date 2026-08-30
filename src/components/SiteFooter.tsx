import { SiteLink } from '@/components/SiteLink';
import { company } from '@/lib/site';

const companyLinks = [
  { href: '/about.php', label: 'About us' },
  { href: '/products.php', label: 'Products' },
  { href: '/manufacturing.php', label: 'Manufacturing' },
  { href: '/contact.php', label: 'Contact' },
  { href: '/quote.php', label: 'Request a quote' },
  { href: '/privacy.php', label: 'Privacy policy' },
];

export function SiteFooter() {
  const currentYear = new Date().getUTCFullYear();

  return (
    <footer id="site-footer" className="site-footer" aria-labelledby="footer-brand-title">
      <div className="site-footer-grid" aria-hidden="true" />

      <div className="container site-footer-shell">
        <div className="footer-cta">
          <div className="footer-cta-copy">
            <p className="footer-eyebrow">Engineering partnership</p>
            <h2>Let&apos;s build what your production line needs.</h2>
            <p className="footer-cta-description">
              Share a drawing, target volume, or manufacturing challenge. Our team will help
              define the right wire solution.
            </p>
          </div>

          <SiteLink href="/quote.php" className="footer-cta-button">
            <span>Start a project</span>
            <span className="footer-cta-arrow" aria-hidden="true">↗</span>
          </SiteLink>
        </div>

        <div className="footer-main">
          <div className="footer-brand">
            <SiteLink href="/" className="footer-brand-link" aria-label={`${company.name} home`}>
              <img
                src="/assets/logos/logo.webp"
                alt=""
                width="86"
                height="86"
                loading="lazy"
                decoding="async"
              />
              <span>
                <strong id="footer-brand-title">Abdelhamid</strong>
                <small>For Engineering Industries</small>
              </span>
            </SiteLink>

            <p className="footer-brand-description">{company.description}</p>

            <div className="footer-credentials" aria-label="Management system certifications">
              <span>ISO 9001</span>
              <span>ISO 14001</span>
              <span>ISO 45001</span>
            </div>
          </div>

          <nav className="footer-column" aria-labelledby="footer-company-heading">
            <h2 id="footer-company-heading">Company</h2>
            <ul>
              {companyLinks.map((link) => (
                <li key={link.href}>
                  <SiteLink href={link.href} className="footer-link">
                    {link.label}
                  </SiteLink>
                </li>
              ))}
            </ul>
          </nav>

          <div className="footer-column footer-contact">
            <h2>Contact</h2>
            <address>
              <a
                className="footer-address-link"
                href={company.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                {company.address.street}<br />
                P.O. Box {company.address.postOfficeBox}, {company.address.locality}<br />
                {company.address.country}
              </a>

              <div className="footer-contact-links">
                <a href={`tel:${company.phones.primary.value}`}>
                  <span>Telephone</span>
                  {company.phones.primary.display}
                </a>
                <a href={`tel:${company.phones.mobile.value}`}>
                  <span>Mobile</span>
                  {company.phones.mobile.display}
                </a>
                <a href={`mailto:${company.email}`}>
                  <span>Email</span>
                  {company.email}
                </a>
              </div>
            </address>
          </div>
        </div>

        <div className="footer-bottom">
          <p>© {currentYear} {company.name}. All rights reserved.</p>
          <p className="footer-origin">
            <span aria-hidden="true" />
            Engineered and manufactured in Egypt since {company.founded}
          </p>
        </div>
      </div>
    </footer>
  );
}
