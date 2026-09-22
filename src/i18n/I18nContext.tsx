/* eslint-disable react-refresh/only-export-components */
import { createContext, useContext, useMemo, type ReactNode } from 'react';
import { translations } from './translations';
import type { Locale } from '../types/content';

type I18nValue = { locale: Locale; t: (key: string, vars?: Record<string, string | number>) => string };
const I18nContext = createContext<I18nValue | null>(null);

function resolve(obj: unknown, path: string): unknown {
  return path.split('.').reduce<unknown>((current, part) => {
    if (current && typeof current === 'object' && part in current) return (current as Record<string, unknown>)[part];
    return undefined;
  }, obj);
}

export function I18nProvider({ locale, children }: { locale: Locale; children: ReactNode }) {
  const value = useMemo<I18nValue>(() => ({
    locale,
    t: (key, vars = {}) => {
      const found = resolve(translations[locale], key) ?? resolve(translations.zh, key);
      if (typeof found !== 'string') {
        if (import.meta.env.DEV) console.warn(`[i18n] Missing translation: ${locale}.${key}`);
        return key;
      }
      return Object.entries(vars).reduce((text, [name, replacement]) => text.replaceAll(`{{${name}}}`, String(replacement)), found);
    },
  }), [locale]);
  return <I18nContext.Provider value={value}>{children}</I18nContext.Provider>;
}

export function useI18n() {
  const context = useContext(I18nContext);
  if (!context) throw new Error('useI18n must be used within I18nProvider');
  return context;
}
