import { PageMeta } from '../components/common/PageMeta';
import { PageIntro, ImageTextSection } from '../components/common/Primitives';
import { useI18n } from '../i18n/I18nContext';

export default function AboutPage() {
  const { t } = useI18n();
  return <><PageMeta page="about" image="/images/property/exterior-signage.webp" /><div className="page shell"><PageIntro title={t('about.title')} text={t('about.intro')} /><ImageTextSection image="/images/property/exterior-signage.webp" alt={t('about.exteriorAlt')} title={t('about.storyTitle')} text={t('about.storyText')} /><ImageTextSection reverse image="/images/property/dsc09262.webp" alt={t('about.interiorAlt')} title={t('about.valuesTitle')} text={t('about.valuesText')} /></div></>;
}
