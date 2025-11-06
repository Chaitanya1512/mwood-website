"use client";

import Image from 'next/image';
import { motion } from 'framer-motion';

export default function About() {
  const left = { hidden: { opacity: 0, x: -30 }, show: { opacity: 1, x: 0 } };
  const right = { hidden: { opacity: 0, x: 30 }, show: { opacity: 1, x: 0 } };

  return (
  <section id="about" className="w-full bg-white py-20 md:py-32">
      <div className="page-margin">
        <div className="grid grid-cols-1 items-stretch gap-12 md:grid-cols-2 md:items-center md:gap-16">
          {/* Image with responsive slant */}
          <motion.div
            variants={left}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="relative h-96 w-full md:h-[450px] lg:h-[500px]"
          >
            <div className="absolute inset-0 overflow-hidden rounded-2xl shadow-2xl angled-image-left-responsive">
              <Image
                src="https://images.pexels.com/photos/7133130/pexels-photo-7133130.jpeg"
                alt="MWood cleaning team"
                fill
                className="object-cover"
              />
            </div>
          </motion.div>

          {/* Content on white background with proper contrast */}
          <div className="text-left flex flex-col justify-center">
            <motion.h2
              variants={right}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              className="mb-6 text-3xl font-bold text-[#007ec7] md:text-4xl lg:text-5xl"
            >
              About MWood Cleaning Services
            </motion.h2>
            <motion.p
              variants={right}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
              className="mb-6 text-base text-gray-700 leading-relaxed md:text-lg"
            >
              MWood Cleaning Services is a professional team dedicated to
              delivering top‑quality cleaning for both residential and
              commercial spaces across Dubai. We combine trained staff,
              pro‑grade equipment and safe, ISO‑certified chemicals to achieve
              consistently excellent results.
            </motion.p>

            <motion.h3
              variants={right}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
              className="mb-4 text-xl font-bold text-[#007ec7] md:text-2xl"
            >
              Our Mission
            </motion.h3>
            <motion.p
              variants={right}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, delay: 0.35, ease: [0.22, 1, 0.36, 1] }}
              className="text-base text-gray-700 leading-relaxed md:text-lg"
            >
              Create clean, healthy environments by delivering exceptional
              service with a focus on quality, reliability and customer
              satisfaction—every visit.
            </motion.p>
          </div>
        </div>
      </div>
    </section>
  );
}