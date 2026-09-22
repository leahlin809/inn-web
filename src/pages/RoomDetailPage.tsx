import { Navigate, useParams } from '../router';
import { BookingCTA } from '../components/booking/BookingCTA';
import { Breadcrumbs } from '../components/common/Primitives';
import { PageMeta } from '../components/common/PageMeta';
import { RoomGallery } from '../components/rooms/RoomGallery';
import { findRoom } from '../data/rooms';
import { siteSettings } from '../data/site';
import { useI18n } from '../i18n/I18nContext';

export default function RoomDetailPage() {
  const { slug } = useParams();
  const { locale, t } = useI18n();
  const room = slug ? findRoom(locale, slug) : undefined;
  if (!room) return <Navigate to={`/${locale}/404`} replace />;

  return <>
    <PageMeta page="rooms" image={room.images[0]?.src} titleOverride={`${room.name[locale]}｜${siteSettings.shortName[locale]}`} descriptionOverride={room.summary[locale]} alternateZh={`/zh/rooms/${room.slug.zh}`} alternateEn={`/en/rooms/${room.slug.en}`} />
    <div className="room-detail page">
      <div className="shell">
        <Breadcrumbs items={[
          { label: t('nav.home'), to: `/${locale}` },
          { label: t('nav.rooms'), to: `/${locale}/rooms` },
          { label: room.name[locale] },
        ]} />
      </div>
      {room.images.length > 0 && <RoomGallery key={room.id} images={room.images} name={room.name[locale]} immersive />}
      <section className="room-detail__info shell">
        <header><h1>{room.name[locale]}</h1><p className="room-name-en">{room.nameEnLong}</p><p>{room.summary[locale]}</p>{room.images.length === 0 && <p className="room-photo-note">{t('rooms.photoPending')}</p>}</header>
        <dl className="room-facts">
          <div><dt>{t('rooms.area')}</dt><dd>{room.area} m²</dd></div>
          <div><dt>{t('rooms.guests')}</dt><dd>{t('rooms.guestValue', { count: room.maxGuests })}</dd></div>
          <div><dt>{t('rooms.bed')}</dt><dd>{t('rooms.oneBed', { width: room.bedWidth })}</dd></div>
          <div><dt>{t('rooms.floor')}</dt><dd>{t('rooms.floorValue', { floor: room.floor })}</dd></div>
          {room.suite && <div><dt>{t('rooms.layout')}</dt><dd>{t('rooms.layoutValue')}</dd></div>}
          {room.seaView && <div><dt>{t('rooms.view')}</dt><dd>{t('rooms.seaView')}</dd></div>}
        </dl>
      </section>
      <section className="room-amenities shell"><h2>{t('common.details')}</h2><div>{room.amenities.map((item) => <span key={item}>{t(`rooms.${item}`)}</span>)}</div></section>
      <section className="availability shell"><h2>{t('rooms.availability')}</h2><p>{t('rooms.availabilityText')}</p></section>
    </div>
    <BookingCTA />
  </>;
}
