import { PageMeta } from '../components/common/PageMeta';
import { useI18n } from '../i18n/I18nContext';

export default function PrivacyPage() { const { t } = useI18n(); return <><PageMeta page="privacy" /><article className="page legal-page shell"><h1>{t('legal.privacyTitle')}</h1><p>{t('legal.privacyText')}</p></article></>; }
