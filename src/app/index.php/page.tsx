import { permanentRedirect } from 'next/navigation';

/** Consolidate legacy inbound links and ranking signals on the canonical home URL. */
export default function LegacyHomePage() {
  permanentRedirect('/');
}
