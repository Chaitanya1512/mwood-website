"use client";

import Image from 'next/image';
import { motion } from 'framer-motion';
import { useTranslations } from 'next-intl';

// Use stable IDs and translate name/alt via next-intl
const clientLogos = [
  { id: 'jetex', logo: 'assets/logos/jetex.png' },
  { id: 'emiratesGolfClub', logo: 'assets/logos/emirates-golf-club.png' },
  { id: 'sushisamba', logo: 'assets/logos/sushisamba.png' },
  { id: 'alBateen', logo: 'assets/logos/al-bateen.png' },
  { id: 'hampton', logo: 'assets/logos/hampton.png' },
  { id: 'leatherDoctor', logo: 'assets/logos/leather-doctor.png' },
];

export default function Clients() {
  const t = useTranslations('Clients');
  const fadeUp = { hidden: { opacity: 0, y: 30 }, show: { opacity: 1, y: 0 } };

  return (
  <section id="clients" className="w-full bg-white py-20 md:py-32">
      <div className="page-margin">
        <div className="mb-16 text-center">
          <motion.h2
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="text-4xl font-bold text-[#007ec7] md:text-5xl"
          >
            {t('heading')}
          </motion.h2>
          <motion.p
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
            className="mt-6 text-xl text-gray-600"
          >
            {t('subheading')}
          </motion.p>
        </div>
        
        <div className="grid grid-cols-2 gap-8 md:grid-cols-3 lg:grid-cols-6">
          {clientLogos.map((client, index) => (
            <motion.div
              key={client.id}
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: 0.05 * index, ease: [0.22, 1, 0.36, 1] }}
              className={`group`}
            >
              <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-blue-50 to-blue-100 shadow-lg border border-blue-200 transition-all duration-500 hover:shadow-2xl hover:-translate-y-2 hover:from-blue-100 hover:to-blue-200 p-6 h-28 flex items-center justify-center">
                <Image
                  src={`/${client.logo}`}
                  alt={t(`logos.${client.id}.alt`)}
                  title={t(`logos.${client.id}.name`)}
                  width={200}
                  height={200}
                  className="object-contain max-h-16 max-w-full w-auto opacity-90 group-hover:opacity-100 transition-all duration-300 group-hover:scale-105"
                />
                {/* Fallback text for missing logos */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-[#007ec7]/90 backdrop-blur-sm">
                  <span className="text-sm font-semibold text-white text-center px-3 leading-tight">
                    {t(`logos.${client.id}.name`)}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}