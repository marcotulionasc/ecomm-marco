'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

export function ConstructionBanners() {
  return (
    <section className="py-8 px-4 sm:px-6 lg:px-10 bg-gray-100">
      <div className="max-w-screen-xl mx-auto space-y-6">
        {/* Banner 1 */}
        <motion.div
          className="bg-white rounded-2xl overflow-hidden shadow-lg"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          whileHover={{ y: -5 }}
        >
          <div className="relative h-48 w-full">
            <Image
              src="https://via.placeholder.com/1200x200/8B5CF6/FFFFFF?text=BANNER+1"
              alt="Banner 1 Placeholder"
              fill
              className="object-cover"
            />
          </div>
        </motion.div>

        {/* Banner 2 */}
        <motion.div
          className="bg-white rounded-2xl overflow-hidden shadow-lg"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          viewport={{ once: true }}
          whileHover={{ y: -5 }}
        >
          <div className="relative h-48 w-full">
            <Image
              src="https://via.placeholder.com/1200x200/A3E635/FFFFFF?text=BANNER+2"
              alt="Banner 2 Placeholder"
              fill
              className="object-cover"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
