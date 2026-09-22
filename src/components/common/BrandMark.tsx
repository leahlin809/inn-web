import { assetPath } from '../../utils/assetPath';

type BrandMarkProps = {
  alt?: string;
  className?: string;
  priority?: boolean;
};

export function BrandMark({ alt = '', className = '', priority = false }: BrandMarkProps) {
  return <img
    className={`brand-mark ${className}`.trim()}
    src={assetPath('/images/brand/ming-logo.png')}
    alt={alt}
    width="1254"
    height="1254"
    loading={priority ? 'eager' : 'lazy'}
    decoding="async"
  />;
}
