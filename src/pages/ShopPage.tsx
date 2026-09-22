import { Link } from '../router';
import { Icon } from '../components/common/Icon';
import { PageMeta } from '../components/common/PageMeta';
import { PageIntro } from '../components/common/Primitives';
import { useI18n } from '../i18n/I18nContext';
import { assetPath } from '../utils/assetPath';

export default function ShopPage() {
  const { locale, t } = useI18n();
  return <><PageMeta page="shop" image="/images/property/dsc09274.webp" /><div className="page shell"><PageIntro title={t('shop.title')} text={t('shop.intro')} /><section className="shop-window"><img src={assetPath('/images/property/dsc09274.webp')} alt={t('shop.imageAlt')} width="2200" height="1238" /><div><span>{t('common.placeholder')}</span><h2>{t('shop.pending')}</h2><Link className="text-link" to={`/${locale}/contact`}>{t('shop.ask')}<Icon name="arrow" /></Link></div></section></div></>;
}
