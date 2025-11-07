'use client';

import Link from 'next/link';
import { usePathname, useSearchParams } from 'next/navigation';
import { useLocale } from 'next-intl';
import { useEffect, useRef, useState } from 'react';
import { GlobeAltIcon, CheckIcon } from '@heroicons/react/24/outline';

type Props = {
  // Optional callback when a language is chosen (e.g., close mobile menu)
  onSelect?: () => void;
  // Where the menu should open relative to the button
  placement?: 'bottom' | 'top';
};

export default function LanguageSwitcher({ onSelect, placement = 'bottom' }: Props) {
  const locale = useLocale();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const [open, setOpen] = useState(false);
  const rootRef = useRef<HTMLDivElement>(null);

  const locales = ['en', 'ar'] as const;
  const labels: Record<(typeof locales)[number], string> = {
    en: 'English',
    ar: 'العربية'
  };

  const pathFor = (target: (typeof locales)[number]) => {
    const segments = pathname.split('/').filter(Boolean);
    const rest = segments.slice(1);
    const base = `/${[target, ...rest].join('/')}`;
    const qs = searchParams?.toString();
    return qs ? `${base}?${qs}` : base;
  };

  // Close on outside click or Escape
  useEffect(() => {
    function onClickOutside(e: MouseEvent) {
      if (!rootRef.current) return;
      if (!rootRef.current.contains(e.target as Node)) setOpen(false);
    }
    function onKeyDown(e: KeyboardEvent) {
      if (e.key === 'Escape') setOpen(false);
    }
    document.addEventListener('mousedown', onClickOutside);
    document.addEventListener('keydown', onKeyDown);
    return () => {
      document.removeEventListener('mousedown', onClickOutside);
      document.removeEventListener('keydown', onKeyDown);
    };
  }, []);

  return (
    <div ref={rootRef} className="relative z-50 pointer-events-auto">
      <button
        type="button"
        aria-label="Change language"
        aria-haspopup="menu"
        aria-expanded={open}
        onClick={() => setOpen((v) => !v)}
        className="group inline-flex items-center justify-center h-9 w-9 rounded-full border border-gray-200 bg-white/80 backdrop-blur text-gray-600 shadow-sm hover:text-[#007ec7] hover:border-[#007ec7]/40 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#009fe3] focus-visible:ring-offset-2"
        title="Language"
      >
        <GlobeAltIcon className="h-5 w-5 transition-colors" />
      </button>

      {open && (
        <div
          role="menu"
          aria-label="Select language"
          className={
            `absolute right-0 w-44 overflow-hidden rounded-xl border border-gray-200 bg-white/95 backdrop-blur shadow-lg ring-1 ring-black/5 ` +
            (placement === 'top' ? 'bottom-full mb-2' : 'top-full mt-2')
          }
        >
          <ul className="py-1" dir="ltr">
            {locales.map((lang) => {
              const active = locale === lang;
              return (
                <li key={lang} role="none">
                  <Link
                    href={pathFor(lang)}
                    role="menuitemradio"
                    aria-checked={active}
                    className={
                      `flex items-center gap-2 px-3 py-2 text-sm transition-colors ` +
                      (active
                        ? 'text-[#007ec7] bg-blue-50'
                        : 'text-gray-700 hover:bg-gray-50 hover:text-[#007ec7]')
                    }
                    onClick={() => {
                      setOpen(false);
                      onSelect?.();
                    }}
                  >
                    <CheckIcon className={`h-4 w-4 ${active ? 'opacity-100' : 'opacity-0'}`} />
                    <span className="font-medium">{labels[lang]}</span>
                    <span className="ml-auto text-xs text-gray-400">{lang.toUpperCase()}</span>
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      )}
    </div>
  );
}
