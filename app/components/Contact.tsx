"use client";

import { useTranslations } from 'next-intl';

// Simple form component - no state logic yet
function QuoteForm() {
  const t = useTranslations('Contact.form');
  return (
    <form action="#" method="POST" className="space-y-8">
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
        <div>
          <label htmlFor="name" className="block text-sm font-semibold text-gray-800 mb-3">
            {t('fullName')}
          </label>
          <input
            type="text"
            name="name"
            id="name"
            autoComplete="name"
            required
            placeholder={t('fullNamePlaceholder')}
            className="block w-full px-4 py-3 text-gray-900 bg-gray-50 border-2 border-gray-200 rounded-xl focus:border-[#007ec7] focus:ring-4 focus:ring-[#007ec7]/10 focus:bg-white transition-all duration-300 placeholder-gray-500"
          />
        </div>
        <div>
          <label htmlFor="phone" className="block text-sm font-semibold text-gray-800 mb-3">
            {t('phone')}
          </label>
          <input
            type="tel"
            name="phone"
            id="phone"
            autoComplete="tel"
            required
            placeholder={t('phonePlaceholder')}
            className="block w-full px-4 py-3 text-gray-900 bg-gray-50 border-2 border-gray-200 rounded-xl focus:border-[#007ec7] focus:ring-4 focus:ring-[#007ec7]/10 focus:bg-white transition-all duration-300 placeholder-gray-500"
          />
        </div>
      </div>
      
      <div>
        <label htmlFor="email" className="block text-sm font-semibold text-gray-800 mb-3">
          {t('email')}
        </label>
        <input
          type="email"
          name="email"
          id="email"
          autoComplete="email"
          placeholder={t('emailPlaceholder')}
          className="block w-full px-4 py-3 text-gray-900 bg-gray-50 border-2 border-gray-200 rounded-xl focus:border-[#007ec7] focus:ring-4 focus:ring-[#007ec7]/10 focus:bg-white transition-all duration-300 placeholder-gray-500"
        />
      </div>
      
      <div>
        <label htmlFor="service" className="block text-sm font-semibold text-gray-800 mb-3">
          {t('service')}
        </label>
        <select
          id="service"
          name="service"
          required
          className="block w-full px-4 py-3 text-gray-900 bg-gray-50 border-2 border-gray-200 rounded-xl focus:border-[#007ec7] focus:ring-4 focus:ring-[#007ec7]/10 focus:bg-white transition-all duration-300 appearance-none cursor-pointer"
        >
          <option value="">{t('servicePlaceholder')}</option>
          <option value="sofa">{t('services.sofa')}</option>
          <option value="carpet">{t('services.carpet')}</option>
          <option value="curtain">{t('services.curtain')}</option>
          <option value="deep">{t('services.deep')}</option>
          <option value="other">{t('services.other')}</option>
        </select>
      </div>
      
      <div>
        <label htmlFor="message" className="block text-sm font-semibold text-gray-800 mb-3">
          {t('details')}
        </label>
        <textarea
          id="message"
          name="message"
          rows={4}
          placeholder={t('detailsPlaceholder')}
          className="block w-full px-4 py-3 text-gray-900 bg-gray-50 border-2 border-gray-200 rounded-xl focus:border-[#007ec7] focus:ring-4 focus:ring-[#007ec7]/10 focus:bg-white transition-all duration-300 placeholder-gray-500 resize-none"
        />
      </div>
      
      <div className="pt-4">
        <button
          type="submit"
          className="w-full bg-gradient-to-r from-[#007ec7] to-[#009fe3] text-white px-8 py-4 rounded-xl font-semibold text-lg shadow-lg hover:shadow-xl hover:from-[#006bb3] hover:to-[#008bd6] transform hover:scale-[1.02] transition-all duration-300 focus:ring-4 focus:ring-[#007ec7]/30"
        >
          {t('submit')}
        </button>
        <p className="text-sm text-gray-600 text-center mt-3">
          {t('responseTime')}
        </p>
      </div>
    </form>
  );
}

export default function Contact() {
  const t = useTranslations('Contact');
  return (
    <section
      id="contact"
      className="w-full bg-[#41c0f0] py-20 md:py-32"
    >
      <div className="page-margin">
        <div className="mb-16 text-center">
          <h2 className="text-4xl font-bold text-white md:text-5xl">
            {t('heading')}
          </h2>
          <p className="mt-6 text-xl text-white">
            {t('subheading')}
          </p>
        </div>

        <div className="grid grid-cols-1 gap-16 lg:grid-cols-2">
          {/* Form */}
          <div className="rounded-3xl bg-white p-12 shadow-2xl border border-white/20 backdrop-blur-sm">
            <div className="mb-8">
              <h3 className="text-2xl font-bold text-gray-800 mb-2">{t('formHeading')}</h3>
              <p className="text-gray-600">{t('formSubheading')}</p>
            </div>
            <QuoteForm />
          </div>

          {/* Contact Info */}
          <div className="text-left">
            <h3 className="mb-8 text-3xl font-bold text-white">
              {t('directHeading')}
            </h3>
            <p className="mb-10 text-xl text-white">
              {t('directSubheading')}
            </p>
            <div className="space-y-8">
              <div className="rounded-xl bg-white/10 p-6 backdrop-blur-sm">
                <h4 className="text-xl font-bold text-white">Anil Bepu</h4>
                <p className="text-white/80">{t('managerGeneral')}</p>
                <a
                  href="tel:+971503545972"
                  className="text-xl font-semibold text-white hover:text-[#41c0f0] transition-colors"
                >
                  +971 50-3545972
                </a>
              </div>
              <div className="rounded-xl bg-white/10 p-6 backdrop-blur-sm">
                <h4 className="text-xl font-bold text-white">Mani</h4>
                <p className="text-white/80">{t('managerOperations')}</p>
                <a
                  href="tel:+971552601223"
                  className="text-xl font-semibold text-white hover:text-[#41c0f0] transition-colors"
                >
                  +971 55-2601223
                </a>
              </div>
              <div className="rounded-xl bg-white/10 p-6 backdrop-blur-sm">
                <h4 className="text-xl font-bold text-white">{t('emailLabel')}</h4>
                <a
                  href="mailto:info@mwooduae.com"
                  className="text-xl font-semibold text-white hover:text-[#41c0f0] transition-colors"
                >
                  info@mwooduae.com
                </a>
              </div>
              <div className="rounded-xl bg-white/10 p-6 backdrop-blur-sm">
                <h4 className="text-xl font-bold text-white">{t('addressLabel')}</h4>
                <p className="text-lg text-white/90" style={{ whiteSpace: 'pre-line' }}>
                  {t('address')}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}