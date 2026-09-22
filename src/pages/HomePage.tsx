import { Link } from '../router';
import { BookingBar } from '../components/booking/BookingBar';
import { BookingCTA } from '../components/booking/BookingCTA';
import { ImageTextSection, SectionHeading } from '../components/common/Primitives';
import { PageMeta } from '../components/common/PageMeta';
import { RoomCard } from '../components/rooms/RoomCard';
import { rooms } from '../data/rooms';
import { guideItems } from '../data/guide';
import { siteSettings } from '../data/site';
import { useI18n } from '../i18n/I18nContext';
import { Icon } from '../components/common/Icon';
import { BrandMark } from '../components/common/BrandMark';
import { assetPath } from '../utils/assetPath';

export default function HomePage() {
  const { locale, t } = useI18n();
  const suites = rooms.filter((room) => room.featured);
  return <>
    <PageMeta page="home" />
    <section className="hero" aria-label={t('home.videoAria')}>
      <video className="hero__image" autoPlay muted loop playsInline preload="metadata" poster={assetPath('/images/property/dsc09269.webp')} aria-hidden="true">
        <source src={assetPath('/videos/haimingju-home.mp4')} type="video/mp4" />
      </video>
      <div className="hero__shade" />
      <div className="hero__content"><p>{t('home.heroLocation')}</p><h1>{t('home.heroTitle')}</h1><span>{t('home.heroEn')}</span></div>
      <Link className="hero-mobile-book" to={`/${locale}/booking`}>{t('booking.mobileAction')}<Icon name="arrow" /></Link>
      <div className="hero__scroll" aria-hidden="true"><span /></div>
    </section>
    <div className="hero-booking"><BookingBar /></div>

    <section className="intro-section shell"><div className="intro-mark" aria-hidden="true"><BrandMark className="brand-mark--intro" /></div><div><h2>{t('home.introTitle')}</h2><p>{t('home.intro')}</p></div></section>

    <section className="section shell rooms-section"><SectionHeading title={t('home.roomsTitle')} action={{ label: t('common.viewAllRooms'), to: `/${locale}/rooms` }} /><div className="rooms-grid">{rooms.map((room, index) => <RoomCard key={room.id} room={room} priority={index < 2} />)}</div></section>

    <section className="section sea-suites"><div className="sea-suites__media"><img src={assetPath('/images/property/dsc09269.webp')} alt={t('home.seaviewAlt')} width="2200" height="1238" loading="lazy" /></div><div className="sea-suites__copy"><h2>{t('home.suitesTitle')}</h2><p>{t('home.suitesText')}</p><div className="suite-links">{suites.map((room) => <Link key={room.id} to={`/${locale}/rooms/${room.slug[locale]}`}>{room.name[locale]}<Icon name="arrow" /></Link>)}</div></div></section>

    <section className="section shell"><ImageTextSection image="/images/property/exterior-garden.webp" alt={t('home.exteriorAlt')} title={t('home.spacesTitle')} text={t('home.spacesText')} /><ImageTextSection reverse image="/images/property/dsc09258.webp" alt={t('home.breakfastAlt')} title={t('home.diningTitle')} text={t('home.diningText')} /></section>

    <section className="section gallery-teaser"><div className="gallery-teaser__copy"><h2>{t('home.galleryTitle')}</h2><p>{t('home.galleryText')}</p><Link className="text-link" to={`/${locale}/gallery`}>{t('nav.gallery')}<Icon name="arrow" /></Link></div><div className="gallery-teaser__images"><img src={assetPath('/images/property/dsc09265.webp')} alt={t('home.vaseAlt')} width="2200" height="1238" loading="lazy" /><img src={assetPath('/images/property/dsc09268.webp')} alt={t('home.flowerAlt')} width="2200" height="1238" loading="lazy" /><img src={assetPath('/images/property/dsc09263.webp')} alt={t('home.floralAlt')} width="1238" height="2200" loading="lazy" /></div></section>

    <section className="section shell guide-preview"><SectionHeading title={t('home.guideTitle')} text={t('home.guideText')} /><div className="guide-lines">{guideItems.slice(0, 4).map((item) => <Link key={item.id} to={`/${locale}/guide`}><span>{item.name[locale]}</span><span>{item.distance[locale]}{item.travelTime ? ` · ${item.travelTime[locale]}` : ''}</span></Link>)}</div><p className="fine-print">{t('common.actualTraffic')}</p></section>

    <section className="section shell policy-preview"><SectionHeading title={t('home.policiesTitle')} /><div className="policy-grid"><p>{t('policies.checkin')}</p><p>{t('policies.checkout')}</p><p>{t('policies.pets')}</p><p>{t('policies.cooking')}</p><p>{t('policies.parties')}</p><p>{t('policies.age')}</p></div><Link className="text-link" to={`/${locale}/booking`}>{t('common.details')}<Icon name="arrow" /></Link></section>

    <section className="facilities-band"><div className="facilities-track">{siteSettings.facilities.map((facility) => <span key={facility}>{t(`facilities.${facility}`)}</span>)}</div></section>
    <BookingCTA />
  </>;
}
