import { useEffect } from 'react';
import { useLocation } from '../../router';
import { useI18n } from '../../i18n/I18nContext';
import { siteSettings } from '../../data/site';
import { assetPath } from '../../utils/assetPath';

type PageMetaProps = {
  page: string;
  image?: string;
  titleOverride?: string;
  descriptionOverride?: string;
  alternateZh?: string;
  alternateEn?: string;
};

export function PageMeta({ page, image = '/images/property/entrance-seaview.webp', titleOverride, descriptionOverride, alternateZh, alternateEn }: PageMetaProps) {
  const { locale, t } = useI18n();
  const location = useLocation();
  const title = titleOverride || t(`seo.${page}.0`);
  const description = descriptionOverride || t(`seo.${page}.1`);

  useEffect(() => {
    document.title = title;
    document.documentElement.lang = locale === 'zh' ? 'zh-CN' : 'en';
    const setMeta = (selector: string, attr: 'name' | 'property', value: string, content: string) => {
      let element = document.head.querySelector<HTMLMetaElement>(`${selector}[${attr}="${value}"]`);
      if (!element) { element = document.createElement('meta'); element.setAttribute(attr, value); document.head.appendChild(element); }
      element.content = content;
    };
    setMeta('meta', 'name', 'description', description);
    setMeta('meta', 'property', 'og:title', title);
    setMeta('meta', 'property', 'og:description', description);
    const siteBase = `${siteSettings.siteUrl.replace(/\/+$/, '')}/`;
    const absolutePageUrl = (path: string) => new URL(path.replace(/^\//, ''), siteBase).href;
    const imageUrl = new URL(assetPath(image), window.location.origin).href;
    setMeta('meta', 'property', 'og:image', imageUrl);
    setMeta('meta', 'property', 'og:type', 'website');
    setMeta('meta', 'property', 'og:url', absolutePageUrl(location.pathname));

    const upsertLink = (rel: string, href: string, hreflang?: string) => {
      const key = hreflang ? `link[rel="${rel}"][hreflang="${hreflang}"]` : `link[rel="${rel}"]:not([hreflang])`;
      let link = document.head.querySelector<HTMLLinkElement>(key);
      if (!link) { link = document.createElement('link'); link.rel = rel; if (hreflang) link.hreflang = hreflang; document.head.appendChild(link); }
      link.href = href;
    };
    const canonical = absolutePageUrl(location.pathname);
    upsertLink('canonical', canonical);
    upsertLink('alternate', absolutePageUrl(alternateZh || location.pathname.replace(/^\/(zh|en)/, '/zh')), 'zh-CN');
    upsertLink('alternate', absolutePageUrl(alternateEn || location.pathname.replace(/^\/(zh|en)/, '/en')), 'en');

    let schema = document.head.querySelector<HTMLScriptElement>('#lodging-schema');
    if (!schema) { schema = document.createElement('script'); schema.id = 'lodging-schema'; schema.type = 'application/ld+json'; document.head.appendChild(schema); }
    schema.textContent = JSON.stringify({
      '@context': 'https://schema.org', '@type': 'LodgingBusiness', name: siteSettings.name[locale],
      url: canonical, telephone: siteSettings.phone, image: imageUrl,
      address: { '@type': 'PostalAddress', streetAddress: siteSettings.address[locale], addressCountry: 'CN' },
      amenityFeature: siteSettings.facilities.map((name) => ({ '@type': 'LocationFeatureSpecification', name: t(`facilities.${name}`), value: true })),
    });
  }, [alternateEn, alternateZh, description, image, locale, location.pathname, t, title]);
  return null;
}
