import { PageMeta } from '../components/common/PageMeta';
import { useI18n } from '../i18n/I18nContext';

export default function TermsPage() { const { t } = useI18n(); return <><PageMeta page="terms" /><article className="page legal-page shell"><h1>{t('legal.termsTitle')}</h1><p>{t('legal.termsText')}</p></article></>; }
