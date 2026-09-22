import { useRef, useState } from 'react';
import { Icon } from '../components/common/Icon';
import { PageMeta } from '../components/common/PageMeta';
import { ImageTextSection, PageIntro } from '../components/common/Primitives';
import { useI18n } from '../i18n/I18nContext';
import { assetPath } from '../utils/assetPath';

const gallery = [
  ['dsc09261.webp', 'alt01', 2200, 1238], ['dsc09262.webp', 'alt02', 2200, 1238],
  ['dsc09263.webp', 'alt03', 1238, 2200], ['dsc09264.webp', 'alt04', 1238, 2200],
  ['dsc09265.webp', 'alt05', 2200, 1238], ['dsc09268.webp', 'alt06', 2200, 1238],
  ['dsc09269.webp', 'alt07', 2200, 1238], ['dsc09274.webp', 'alt08', 2200, 1238],
  ['dsc09277.webp', 'alt09', 2200, 1238], ['dsc09281.webp', 'alt10', 2200, 1238],
] as const;

export default function GalleryPage() {
  const { t } = useI18n();
  const [active, setActive] = useState<number | null>(null);
  const dialog = useRef<HTMLDialogElement>(null);
  const open = (index: number) => { setActive(index); requestAnimationFrame(() => dialog.current?.showModal()); };
  const move = (direction: number) => setActive((current) => current === null ? 0 : (current + direction + gallery.length) % gallery.length);
  return <><PageMeta page="gallery" image="/images/property/dsc09265.webp" /><div className="page shell"><PageIntro title={t('gallery.title')} text={t('gallery.intro')} /><ImageTextSection image="/images/property/dsc09259.webp" alt={t('experiences.gardenAlt')} title={t('experiences.everydayTitle')} text={t('experiences.everydayText')} /><div className="gallery-grid">{gallery.map((item, index) => <button type="button" key={item[0]} onClick={() => open(index)} aria-label={`${t('gallery.open')}: ${t(`gallery.${item[1]}`)}`}><img src={assetPath(`/images/property/${item[0]}`)} alt={t(`gallery.${item[1]}`)} width={item[2]} height={item[3]} loading={index < 3 ? 'eager' : 'lazy'} /><span>{String(index + 1).padStart(2, '0')}</span></button>)}</div></div><dialog className="lightbox" ref={dialog} onClose={() => setActive(null)}>{active !== null && <><button className="lightbox__close" type="button" onClick={() => dialog.current?.close()} aria-label={t('common.close')}><Icon name="close" /></button><button className="lightbox__prev" type="button" onClick={() => move(-1)} aria-label={t('common.previous')}><Icon name="chevronLeft" /></button><img src={assetPath(`/images/property/${gallery[active][0]}`)} alt={t(`gallery.${gallery[active][1]}`)} /><button className="lightbox__next" type="button" onClick={() => move(1)} aria-label={t('common.next')}><Icon name="chevronRight" /></button><p>{String(active + 1).padStart(2, '0')} / {String(gallery.length).padStart(2, '0')}</p></>}</dialog></>;
}
