import { ContactForm } from '../components/common/ContactForm';
import { Icon } from '../components/common/Icon';
import { PageMeta } from '../components/common/PageMeta';
import { PageIntro } from '../components/common/Primitives';
import { siteSettings } from '../data/site';
import { useI18n } from '../i18n/I18nContext';

export default function ContactPage() {
  const { locale, t } = useI18n();
  return <><PageMeta page="contact" /><div className="page shell"><PageIntro title={t('contact.title')} text={t('contact.intro')} /><div className="contact-layout"><section className="contact-details"><div><Icon name="pin" /><h2>{t('common.address')}</h2><address>{siteSettings.address[locale]}</address></div><div><Icon name="phone" /><h2>{t('common.phone')}</h2><a href={`tel:${siteSettings.phone.replace(/\s/g, '')}`}>{siteSettings.phone}</a></div><div><span className="social-mark">视</span><h2>{t('common.social')}</h2><p>{siteSettings.social[locale]}</p></div><p className="contact-activity">{t('contact.activity')}</p></section><section className="contact-form-wrap"><h2>{t('contact.formTitle')}</h2><ContactForm /></section></div></div></>;
}
