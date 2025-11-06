"use client";

import Image from 'next/image';
import { CheckCircleIcon } from '@heroicons/react/24/solid';
import { motion } from 'framer-motion';

// This 'features' array should just contain simple strings
const features = [
  'State-of-the-art Karcher Puzzi 10/2 Adv extraction technology',
  'Advanced Karcher BDS 43/180 C disc cleaning systems',
  'Premium ISO-certified eco-friendly cleaning solutions',
  'Specialized CarpetPro RM 760 restoration treatments',
];

export default function Equipment() {
  const left = { hidden: { opacity: 0, x: -30 }, show: { opacity: 1, x: 0 } };
  const right = { hidden: { opacity: 0, x: 30 }, show: { opacity: 1, x: 0 } };

  return (
  <section id="equipment" className="w-full bg-[#009fe3] py-20 md:py-32">
      <div className="page-margin">
        <div className="grid grid-cols-1 items-center gap-12 md:grid-cols-2 md:gap-16">
          {/* Content on blue background with proper contrast */}
          <div className="text-left text-white">
            <motion.h2
              variants={left}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              className="mb-6 text-3xl font-bold text-white md:text-4xl lg:text-5xl"
            >
              Professional Equipment & Chemicals
            </motion.h2>
            <motion.p
              variants={left}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
              className="mb-8 text-base leading-relaxed text-white md:text-lg"
            >
              We don&#39;t just clean, we restore. We use industry-leading Karcher
              machines and safe, ISO-certified chemicals to ensure a deep clean
              without harming your valuable carpets, sofas, or your family&#39;s
              health.
            </motion.p>
            <ul className="space-y-4">
              {features.map((feature, index) => (
                <motion.li
                  key={index}
                  variants={left}
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.5, delay: 0.1 * (index + 2), ease: [0.22, 1, 0.36, 1] }}
                  className={`flex items-center text-base md:text-lg`}
                >
                  <CheckCircleIcon className="mr-4 h-6 w-6 flex-shrink-0 text-white" />
                  <span className="text-white">{feature}</span>
                </motion.li>
              ))}
            </ul>
          </div>

          {/* Image with angled cut */}
          <motion.div
            variants={right}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="relative h-96 w-full md:h-[450px] lg:h-[500px]"
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