import { Link } from '../../router';
import type { Room } from '../../types/content';
import { useI18n } from '../../i18n/I18nContext';
import { Icon } from '../common/Icon';

export function RoomCard({ room, priority = false }: { room: Room; priority?: boolean }) {
  const { locale, t } = useI18n();
  const image = room.images[0];
  return <article className="room-card"><Link className={`room-card__image${image ? '' : ' room-card__image--placeholder'}`} to={`/${locale}/rooms/${room.slug[locale]}`}>{image ? <img src={image.src} alt={image.alt[locale]} width={image.width} height={image.height} loading={priority ? 'eager' : 'lazy'} /> : <span>{t('rooms.photoPending')}</span>}</Link><div className="room-card__content"><div><h2><Link to={`/${locale}/rooms/${room.slug[locale]}`}>{room.name[locale]}</Link></h2><p className="room-name-en">{room.nameEnLong}</p></div><dl><div><dt>{t('rooms.area')}</dt><dd>{room.area}㎡</dd></div><div><dt>{t('rooms.guests')}</dt><dd>{t('rooms.guestValue', { count: room.maxGuests })}</dd></div><div><dt>{t('rooms.floor')}</dt><dd>{t('rooms.floorValue', { floor: room.floor })}</dd></div></dl><Link className="text-link" to={`/${locale}/rooms/${room.slug[locale]}`}>{t('common.learnMore')}<Icon name="arrow" /></Link></div></article>;
}
