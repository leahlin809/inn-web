import { useRef, useState } from 'react';
import type { RoomImage } from '../../types/content';
import { useI18n } from '../../i18n/I18nContext';
import { Icon } from '../common/Icon';

export function RoomGallery({ images, name, immersive = false }: { images: RoomImage[]; name: string; immersive?: boolean }) {
  const { locale, t } = useI18n();
  const [index, setIndex] = useState(0);
  const touchStart = useRef(0);
  const move = (direction: number) => setIndex((current) => (current + direction + images.length) % images.length);
  return <div className={`room-gallery${immersive ? ' room-gallery--immersive' : ''}`} onTouchStart={(event) => { touchStart.current = event.touches[0].clientX; }} onTouchEnd={(event) => { const delta = event.changedTouches[0].clientX - touchStart.current; if (Math.abs(delta) > 50) move(delta > 0 ? -1 : 1); }}>
    <div className="room-gallery__track" style={{ transform: `translateX(-${index * 100}%)` }}>{images.map((item) => <figure className={item.height > item.width ? 'room-gallery__portrait' : undefined} key={item.src}><img src={item.src} alt={item.alt[locale]} width={item.width} height={item.height} loading={index === 0 ? 'eager' : 'lazy'} /><figcaption>{name}</figcaption></figure>)}</div>
    {images.length > 1 && <><button className="gallery-control gallery-control--prev" type="button" onClick={() => move(-1)} aria-label={t('common.previous')}><Icon name="chevronLeft" /></button><button className="gallery-control gallery-control--next" type="button" onClick={() => move(1)} aria-label={t('common.next')}><Icon name="chevronRight" /></button></>}
    <div className="gallery-progress"><span style={{ width: `${((index + 1) / images.length) * 100}%` }} /><output>{String(index + 1).padStart(2, '0')} {t('common.of')} {String(images.length).padStart(2, '0')}</output></div>
  </div>;
}
