import { lazy, type ReactNode } from 'react';
import { Navigate, useLocation } from './router';
import { AppLayout } from './components/layout/AppLayout';

const HomePage = lazy(() => import('./pages/HomePage'));
const RoomsPage = lazy(() => import('./pages/RoomsPage'));
const RoomDetailPage = lazy(() => import('./pages/RoomDetailPage'));
const GuidePage = lazy(() => import('./pages/GuidePage'));
const AboutPage = lazy(() => import('./pages/AboutPage'));
const ContactPage = lazy(() => import('./pages/ContactPage'));
const BookingPage = lazy(() => import('./pages/BookingPage'));
const GalleryPage = lazy(() => import('./pages/GalleryPage'));
const ShopPage = lazy(() => import('./pages/ShopPage'));
const PrivacyPage = lazy(() => import('./pages/PrivacyPage'));
const TermsPage = lazy(() => import('./pages/TermsPage'));
const NotFoundPage = lazy(() => import('./pages/NotFoundPage'));

function DefaultRedirect() {
  const saved = localStorage.getItem('wiseadom-locale');
  const locale = saved === 'en' || saved === 'zh' ? saved : navigator.language.toLowerCase().startsWith('en') ? 'en' : 'zh';
  return <Navigate to={`/${locale}`} replace />;
}

export default function App() {
  const { pathname } = useLocation();
  const parts = pathname.split('/').filter(Boolean);
  if (parts.length === 0) return <DefaultRedirect />;
  if (parts[0] !== 'zh' && parts[0] !== 'en') return <Navigate to="/zh/404" replace />;

  const route = parts.slice(1);
  let page: ReactNode;
  if (route.length === 0) page = <HomePage />;
  else if (route[0] === 'rooms' && route.length === 1) page = <RoomsPage />;
  else if (route[0] === 'rooms' && route.length === 2) page = <RoomDetailPage />;
  else if (route[0] === 'experiences' && route.length === 1) page = <GalleryPage />;
  else if (route.length === 1) {
    const pages: Record<string, ReactNode> = {
      guide: <GuidePage />,
      about: <AboutPage />,
      contact: <ContactPage />,
      booking: <BookingPage />,
      gallery: <GalleryPage />,
      shop: <ShopPage />,
      privacy: <PrivacyPage />,
      terms: <TermsPage />,
      '404': <NotFoundPage />,
    };
    page = pages[route[0]] ?? <NotFoundPage />;
  } else page = <NotFoundPage />;

  return <AppLayout>{page}</AppLayout>;
}
