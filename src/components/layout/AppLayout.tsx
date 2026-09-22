import { useLocation, useParams } from '../../router';
import { Suspense, useEffect, type ReactNode } from 'react';
import { I18nProvider } from '../../i18n/I18nContext';
import { translations } from '../../i18n/translations';
import type { Locale } from '../../types/content';
import { Header } from './Header';
import { Footer } from './Footer';
import { LoadingState } from '../common/Primitives';

export function AppLayout({ children }: { children: ReactNode }) {
  const { locale: localeParam } = useParams();
  const location = useLocation();
  const locale: Locale = localeParam === 'en' ? 'en' : 'zh';
  useEffect(() => { window.scrollTo({ top: 0, behavior: 'instant' }); }, [location.pathname]);
  return <I18nProvider locale={locale}>
    <a className="skip-link" href="#main-content">{translations[locale].common.skip}</a>
    <Header />
    <main id="main-content"><Suspense fallback={<LoadingState />}>{children}</Suspense></main>
    <Footer />
  </I18nProvider>;
}
