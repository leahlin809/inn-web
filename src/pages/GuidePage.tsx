import { PageMeta } from '../components/common/PageMeta';
import { PageIntro } from '../components/common/Primitives';
import { guideItems } from '../data/guide';
import { siteSettings } from '../data/site';
import { useI18n } from '../i18n/I18nContext';
import { Icon } from '../components/common/Icon';

export default function GuidePage() {
  const { locale, t } = useI18n();
  const groups = ['arrival', 'sight', 'dining'] as const;
  return <><PageMeta page="guide" /><div className="page shell"><PageIntro title={t('guide.title')} text={t('guide.intro')} /><section className="map-panel"><div className="map-panel__topography" aria-hidden="true"><span /><span /><span /></div><div><Icon name="pin" size={28} /><h2>{t('guide.mapPending')}</h2><p>{siteSettings.address[locale]}</p></div></section><div className="guide-groups">{groups.map((group) => <section key={group}><h2>{t(`guide.${group}`)}</h2><div className="guide-table">{guideItems.filter((item) => item.category === group).map((item) => <div key={item.id}><h3>{item.name[locale]}</h3><p>{item.distance[locale]}</p><span>{item.travelTime?.[locale] ?? '—'}</span></div>)}</div></section>)}</div><p className="fine-print">{t('common.actualTraffic')}</p></div></>;
}
