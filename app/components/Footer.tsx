"use client";

import { useTranslations } from 'next-intl';

export default function Footer() {
  const t = useTranslations('Footer');
  return (
    <footer className="w-full bg-gradient-to-r from-primary via-secondary to-accent ">
      <div className="page-margin py-8 text-center">
        <p className="font-medium">
          &copy; {new Date().getFullYear()} {t('copyright')}
        </p>
        <p className="opacity-90">{t('locationLine')}</p>
      </div>
    </footer>
  );
}