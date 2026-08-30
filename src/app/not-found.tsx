import { SiteLink } from '@/components/SiteLink';

export default function NotFound() {
  return (
    <main id="main-content" tabIndex={-1} className="not-found-page">
      <div className="not-found-card">
        <strong>Error 404</strong>
        <h1>Page not found.</h1>
        <p>
          The page may have moved or the address may be incorrect. Return to
          the homepage to continue browsing Abdelhamid Engineering Industries.
        </p>
        <SiteLink href="/">Return home</SiteLink>
      </div>
    </main>
  );
}
