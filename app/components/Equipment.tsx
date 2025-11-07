"use client";

import Image from 'next/image';
import { CheckCircleIcon } from '@heroicons/react/24/solid';
import { motion } from 'framer-motion';
import { useTranslations } from 'next-intl';

// This 'features' array should just contain simple strings
const featureIds = ['feature1', 'feature2', 'feature3', 'feature4'] as const;

export default function Equipment() {
  const t = useTranslations('Equipment');
  const left = { hidden: { opacity: 0, x: -30 }, show: { opacity: 1, x: 0 } };
  const right = { hidden: { opacity: 0, x: 30 }, show: { opacity: 1, x: 0 } };

  return (
    <section id="equipment" className="w-full bg-[#009fe3] py-20 md:py-32">
      <div className="page-margin">
        <div dir="ltr" className="grid grid-cols-1 items-start gap-12 md:grid-cols-2 md:gap-16">
          <div className="md:col-start-1 md:row-start-1 text-left text-white rtl:text-right">
            <motion.h2
              variants={left}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              className="mb-6 text-3xl font-bold text-white md:text-4xl lg:text-5xl"
            >
              {t('heading')}
            </motion.h2>
            <motion.p
              variants={left}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
              className="mb-8 text-base leading-relaxed text-white md:text-lg"
            >
              {t('description')}
            </motion.p>
            <ul className="space-y-4">
              {featureIds.map((id, index) => (
                <motion.li
                  key={id}
                  variants={left}
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.5, delay: 0.1 * (index + 2), ease: [0.22, 1, 0.36, 1] }}
                  className={`flex items-center text-base md:text-lg rtl:flex-row-reverse`}
                >
                  <CheckCircleIcon className="mr-4 rtl:mr-0 rtl:ml-4 h-6 w-6 flex-shrink-0 text-white" />
                  <span className="text-white leading-relaxed">{t(`features.${id}`)}</span>
                </motion.li>
              ))}
            </ul>
          </div>

          <motion.div
            variants={right}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="relative h-96 w-full md:h-[450px] lg:h-[500px] md:col-start-2 md:row-start-1"
          >
            <div className="absolute inset-0 angled-image-right-responsive overflow-hidden rounded-2xl shadow-2xl">
              <Image
                src="https://images.pexels.com/photos/209230/pexels-photo-209230.jpeg"
                alt="Professional cleaning equipment"
                fill
                className="object-cover"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}