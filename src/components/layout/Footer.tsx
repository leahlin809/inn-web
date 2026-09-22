import { Link } from '../../router';
import { useI18n } from '../../i18n/I18nContext';
import { siteSettings } from '../../data/site';
import { BrandMark } from '../common/BrandMark';

export function Footer() {
  const { locale, t } = useI18n();
  return <footer className="site-footer">
    <div className="footer-statement"><p>{t('footer.stay')}</p><BrandMark className="brand-mark--footer" alt={siteSettings.name[locale]} /></div>
    <div className="footer-grid">
      <div><h2>{t('footer.links')}</h2><Link to={`/${locale}/rooms`}>{t('nav.rooms')}</Link><Link to={`/${locale}/gallery`}>{t('nav.gallery')}</Link><Link to={`/${locale}/guide`}>{t('nav.guide')}</Link><Link to={`/${locale}/shop`}>{t('nav.shop')}</Link></div>
      <div><h2>{t('footer.info')}</h2><a href={`tel:${siteSettings.phone.replace(/\s/g, '')}`}>{t('footer.telPrefix')}{siteSettings.phone}</a><a className="footer-address" href={siteSettings.mapUrl} target="_blank" rel="noreferrer"><address>{siteSettings.address[locale]}</address></a><span>{siteSettings.social[locale]}</span><span>{t('footer.wechatPrefix')}{siteSettings.wechat}</span></div>
      <div><h2>{t('footer.websiteSupport')}</h2><p>{t('footer.websiteSupportText')}</p><a className="support-email" href={`mailto:${siteSettings.maintenanceEmail}`}>{t('footer.emailPrefix')}{siteSettings.maintenanceEmail}</a></div>
    </div>
    <div className="footer-legal"><span>© {new Date().getFullYear()} {t('footer.copyright')}</span><span><Link to={`/${locale}/privacy`}>{t('footer.privacy')}</Link><Link to={`/${locale}/terms`}>{t('footer.terms')}</Link></span></div>
  </footer>;
}
