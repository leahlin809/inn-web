import { useEffect, useRef, useState } from 'react';
import { Link, NavLink, useLocation } from '../../router';
import { useI18n } from '../../i18n/I18nContext';
import { findRoom } from '../../data/rooms';
import type { Locale } from '../../types/content';
import { Icon } from '../common/Icon';
import { BrandMark } from '../common/BrandMark';

const navKeys = ['home', 'rooms', 'guide', 'gallery', 'about', 'contact', 'shop'] as const;
const navPaths = { home: '', rooms: '/rooms', guide: '/guide', gallery: '/gallery', about: '/about', contact: '/contact', shop: '/shop' };

function localePath(pathname: string, next: Locale) {
  const parts = pathname.split('/').filter(Boolean);
  const current = parts[0] === 'en' ? 'en' : 'zh';
  if (parts[1] === 'rooms' && parts[2]) {
    const room = findRoom(current, parts[2]);
    if (room) return `/${next}/rooms/${room.slug[next]}`;
  }
  parts[0] = next;
  return `/${parts.join('/')}`;
}

export function Header() {
  const { locale, t } = useI18n();
  const location = useLocation();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const menuButton = useRef<HTMLButtonElement>(null);
  const closeButton = useRef<HTMLButtonElement>(null);
  const menuPanel = useRef<HTMLDivElement>(null);
  const isHome = location.pathname === `/${locale}` || location.pathname === `/${locale}/`;

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 32);
    onScroll(); window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);
  useEffect(() => {
    if (!open) return;
    const previous = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    closeButton.current?.focus();
    const onKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape') { setOpen(false); menuButton.current?.focus(); return; }
      if (event.key !== 'Tab' || !menuPanel.current) return;
      const focusable = Array.from(menuPanel.current.querySelectorAll<HTMLElement>('a[href], button:not([disabled]), input:not([disabled]), [tabindex]:not([tabindex="-1"])'));
      if (focusable.length === 0) return;
      const first = focusable[0];
      const last = focusable[focusable.length - 1];
      if (event.shiftKey && document.activeElement === first) { event.preventDefault(); last.focus(); }
      else if (!event.shiftKey && document.activeElement === last) { event.preventDefault(); first.focus(); }
    };
    document.addEventListener('keydown', onKey);
    return () => { document.body.style.overflow = previous; document.removeEventListener('keydown', onKey); };
  }, [open]);

  const nav = <>{navKeys.map((key) => <NavLink key={key} to={`/${locale}${navPaths[key]}`} end={key === 'home'} onClick={() => setOpen(false)}>{t(`nav.${key}`)}</NavLink>)}</>;
  return <>
    <header className={`site-header ${isHome && !scrolled ? 'site-header--overlay' : ''}`}>
      <Link to={`/${locale}`} className="brand" aria-label={t('nav.home')}><BrandMark className="brand-mark--header" priority /></Link>
      <nav className="desktop-nav" aria-label={t('common.primaryNav')}>{nav}</nav>
      <div className="header-actions">
        <Link className="language-switch" to={localePath(location.pathname, locale === 'zh' ? 'en' : 'zh')} onClick={() => localStorage.setItem('wiseadom-locale', locale === 'zh' ? 'en' : 'zh')}>{locale === 'zh' ? t('common.languageEnglishShort') : t('common.languageChinese')}</Link>
        <Link className="header-book" to={`/${locale}/booking`}>{t('nav.booking')}</Link>
        <button ref={menuButton} className="menu-button" type="button" onClick={() => setOpen(true)} aria-label={t('common.menu')} aria-expanded={open} aria-controls="mobile-menu"><Icon name="menu" /><span aria-hidden="true">{t('common.menu')}</span></button>
      </div>
    </header>
    {open && <div className="mobile-menu-shell" role="presentation" onMouseDown={(event) => { if (event.currentTarget === event.target) setOpen(false); }}>
      <div ref={menuPanel} className="mobile-menu" id="mobile-menu" role="dialog" aria-modal="true" aria-label={t('common.menu')}>
        <div className="mobile-menu__top"><Link to={`/${locale}`} className="brand" aria-label={t('nav.home')} onClick={() => setOpen(false)}><BrandMark className="brand-mark--menu" /></Link><button ref={closeButton} type="button" className="icon-button" onClick={() => { setOpen(false); menuButton.current?.focus(); }} aria-label={t('common.close')}><Icon name="close" /></button></div>
        <nav aria-label={t('common.mobileNav')}>{nav}</nav>
        <div className="mobile-menu__bottom"><Link to={localePath(location.pathname, locale === 'zh' ? 'en' : 'zh')} onClick={() => { localStorage.setItem('wiseadom-locale', locale === 'zh' ? 'en' : 'zh'); setOpen(false); }}>{locale === 'zh' ? t('common.languageEnglish') : t('common.languageChinese')}</Link><Link className="button button--light" to={`/${locale}/booking`} onClick={() => setOpen(false)}>{t('nav.booking')}<Icon name="arrow" /></Link></div>
      </div>
    </div>}
  </>;
}
