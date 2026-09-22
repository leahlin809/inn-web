import { useI18n } from '../../i18n/I18nContext';
import { siteSettings } from '../../data/site';
import { Icon } from '../common/Icon';

export function BookingCTA() {
  const { t } = useI18n();
  return <section className="booking-cta"><div><h2>{t('booking.externalTitle')}</h2><p>{t('booking.externalText')}</p></div><a className="button button--light" href={siteSettings.bookingUrl} target="_blank" rel="noreferrer">{t('nav.booking')}<Icon name="arrow" /></a></section>;
}
