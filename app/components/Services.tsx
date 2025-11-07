"use client";

import Image from 'next/image';
import { motion } from 'framer-motion';
import { useTranslations } from 'next-intl';

const serviceItems = [
  {
    id: 'sofa',
    imageUrl: 'https://images.pexels.com/photos/7534547/pexels-photo-7534547.jpeg',
  },
  {
    id: 'carpet',
    imageUrl: 'https://images.pexels.com/photos/4107286/pexels-photo-4107286.jpeg',
  },
  {
    id: 'curtain',
    imageUrl: 'https://images.pexels.com/photos/17573843/pexels-photo-17573843.jpeg',
  },
  {
    id: 'deep',
    imageUrl: 'https://images.pexels.com/photos/4098778/pexels-photo-4098778.jpeg',
  },
] as const;

export default function Services() {
  const t = useTranslations('Services');
  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0 }
  };

  return (
  <section id="services" className="w-full bg-[#007ec7] py-20 md:py-32">
      <div className="page-margin">
        <div className="mb-16 text-center">
          <motion.h2
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="text-4xl font-bold text-white md:text-5xl"
          >
            {t('heading')}
          </motion.h2>
          <motion.p
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
            className="mt-6 text-xl text-white"
          >
            {t('subheading')}
          </motion.p>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          {serviceItems.map((service, index) => {
            const title = t(`items.${service.id}.title`);
            const description = t(`items.${service.id}.description`);
            return (
            <motion.div
              key={service.id}
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, delay: 0.1 * index, ease: [0.22, 1, 0.36, 1] }}
              className={`group overflow-hidden rounded-2xl bg-white shadow-2xl transition-all duration-500 hover:shadow-3xl hover:-translate-y-2`}
            >
              <div className="relative h-64 w-full overflow-hidden">
                <Image
                  src={service.imageUrl}
                  alt={title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
              <div className="p-8">
                <h3 className="mb-4 text-2xl font-bold text-[#007ec7]">
                  {title}
                </h3>
                <p className="text-gray-700 leading-relaxed">{description}</p>
              </div>
            </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}