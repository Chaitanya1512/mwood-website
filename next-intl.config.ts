// Basic next-intl config export (no helper) so the library can discover locales
import { i18n } from './i18n.config';

const config = {
  locales: i18n.locales,
  defaultLocale: i18n.defaultLocale
};

export default config;
