import { Link } from '../../router';
import { Icon } from './Icon';
import { useI18n } from '../../i18n/I18nContext';
import { assetPath } from '../../utils/assetPath';

export function SectionHeading({ title, text, action }: { title: string; text?: string; action?: { label: string; to: string } }) {
  return <header className="section-heading"><div><h2>{title}</h2>{text && <p>{text}</p>}</div>{action && <Link className="text-link" to={action.to}>{action.label}<Icon name="arrow" /></Link>}</header>;
}

export function PageIntro({ title, text }: { title: string; text: string }) {
  return <header className="page-intro"><h1>{title}</h1><p>{text}</p></header>;
}

export function LoadingState() { const { t } = useI18n(); return <div className="state" role="status"><span className="state-line" />{t('common.loading')}</div>; }
export function EmptyState() { const { t } = useI18n(); return <div className="state"><span className="state-line" />{t('common.empty')}</div>; }
export function ErrorState() { const { t } = useI18n(); return <div className="state" role="alert"><span className="state-line" />{t('common.error')}</div>; }

export function Breadcrumbs({ items }: { items: { label: string; to?: string }[] }) {
  return <nav className="breadcrumbs" aria-label="Breadcrumb">{items.map((item, index) => <span key={`${item.label}-${index}`}>{item.to ? <Link to={item.to}>{item.label}</Link> : item.label}{index < items.length - 1 && <i>/</i>}</span>)}</nav>;
}

export function ImageTextSection({ image, alt, title, text, reverse = false, children }: { image: string; alt: string; title: string; text: string; reverse?: boolean; children?: React.ReactNode }) {
  return <section className={`image-text${reverse ? ' image-text--reverse' : ''}`}><div className="image-text__media"><img src={assetPath(image)} alt={alt} width="1238" height="2200" loading="lazy" /></div><div className="image-text__copy"><h2>{title}</h2><p>{text}</p>{children}</div></section>;
}
