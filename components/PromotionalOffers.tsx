'use client';

import { motion } from 'framer-motion';
import { CreditCard, Gift, ArrowRight } from 'lucide-react';

export function PromotionalOffers() {
  return (
    <section className="py-8 px-4 sm:px-6 lg:px-10 bg-gray-100">
      <div className="max-w-screen-xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Banner PIX */}
          <motion.div
            className="bg-white rounded-2xl border border-gray-200 p-6 relative overflow-hidden"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            whileHover={{ y: -5 }}
          >
            <div className="absolute top-4 right-4">
              <div className="bg-yellow-400 text-black font-poppins font-bold text-sm px-4 py-2 rounded-full shadow-lg">
                GANHE ATÉ 15% OFF
              </div>
            </div>

            <div className="flex items-center justify-between">
              <div className="flex-1">
                <div className="flex items-center space-x-3 mb-4">
                  <span className="font-poppins font-bold text-2xl text-black">+ PAGUE COM +</span>
                  <div className="bg-teal-500 text-white font-poppins font-bold text-lg px-4 py-2 rounded-lg">
                    PIX
                  </div>
                </div>
                <p className="text-sm text-gray-600 mb-4">powered by Banco Central</p>
                
                <div className="flex space-x-4">
                  <div className="w-16 h-16 bg-gray-200 rounded-lg flex items-center justify-center">
                    <span className="text-xs font-bold text-gray-600">12V</span>
                  </div>
                  <div className="w-16 h-16 bg-orange-200 rounded-lg flex items-center justify-center">
                    <span className="text-xs font-bold text-orange-600">KIT</span>
                  </div>
                  <div className="w-16 h-16 bg-orange-200 rounded-lg flex items-center justify-center">
                    <span className="text-xs font-bold text-orange-600">KIT</span>
                  </div>
                </div>
              </div>

              <div className="w-32 h-32 bg-teal-100 rounded-2xl flex items-center justify-center">
                <CreditCard className="w-12 h-12 text-teal-600" />
              </div>
            </div>
          </motion.div>

          {/* Banner Cupons */}
          <motion.div
            className="bg-white rounded-2xl border border-gray-200 p-6 relative overflow-hidden"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            whileHover={{ y: -5 }}
          >
            <div className="flex items-center justify-between">
              <div className="flex-1">
                <div className="bg-yellow-400 text-black font-poppins font-bold text-lg px-6 py-4 rounded-2xl mb-4">
                  APROVEITE OS CUPONS EXCLUSIVOS
                </div>
                
                <motion.button
                  className="bg-leva-primary text-white font-poppins font-bold text-base px-6 py-3 rounded-lg flex items-center space-x-2 hover:bg-leva-primary/90 transition-colors duration-300"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <span>ATIVE AGORA</span>
                  <ArrowRight size={16} />
                </motion.button>
              </div>

              <div className="flex space-x-4">
                <div className="w-16 h-16 bg-gray-200 rounded-lg flex items-center justify-center">
                  <span className="text-xs font-bold text-gray-600">CAM</span>
                </div>
                <div className="w-16 h-16 bg-yellow-200 rounded-lg flex items-center justify-center">
                  <span className="text-xs font-bold text-yellow-600">WASH</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
