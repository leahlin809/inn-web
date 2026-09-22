import { Link } from '../router';
import { Icon } from '../components/common/Icon';
import { useI18n } from '../i18n/I18nContext';
import { PageMeta } from '../components/common/PageMeta';

export default function NotFoundPage() { const { locale, t } = useI18n(); return <><PageMeta page="notFound" /><div className="not-found"><span>404</span><h1>{t('notFound.title')}</h1><p>{t('notFound.text')}</p><Link className="button button--light" to={`/${locale}`}>{t('notFound.action')}<Icon name="arrow" /></Link></div></>; }
