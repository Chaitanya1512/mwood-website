import {getRequestConfig} from 'next-intl/server';

export default getRequestConfig(async ({locale}) => {
  const active = (locale ?? 'en');
  try {
    const messages = (await import(`@/messages/${active}.json`)).default;
    return {locale: active, messages};
  } catch {
    const fallback = (await import('@/messages/en.json')).default;
    return {locale: 'en', messages: fallback};
  }
});
