import { BookingBar } from '../components/booking/BookingBar';
import { PageMeta } from '../components/common/PageMeta';
import { PageIntro } from '../components/common/Primitives';
import { siteSettings } from '../data/site';
import { useI18n } from '../i18n/I18nContext';
import { Icon } from '../components/common/Icon';

export default function BookingPage() {
  const { t } = useI18n();
  const policies = ['checkin', 'checkout', 'nationality', 'age', 'children', 'pets', 'cooking', 'parties', 'minors'];
  return <><PageMeta page="booking" /><div className="page shell booking-page"><PageIntro title={t('booking.title')} text={t('booking.externalText')} /><BookingBar compact /><p className="booking-note">{t('booking.note')}</p><section className="policy-full"><h2>{t('policies.title')}</h2><div>{policies.map((key) => <p key={key}>{t(`policies.${key}`)}</p>)}</div><aside>{t('policies.pending')}</aside></section><a className="button button--dark direct-booking" href={siteSettings.bookingUrl} target="_blank" rel="noreferrer">{t('booking.search')}<Icon name="external" /></a></div></>;
}
