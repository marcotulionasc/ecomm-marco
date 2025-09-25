'use client';

import { motion } from 'framer-motion';
import { ArrowRight, Zap, Truck, Percent } from 'lucide-react';

export function PromotionalBanner() {
  return (
    <section className="relative bg-leva-primary overflow-hidden">
      <div className="absolute inset-0 bg-black/10" />
      
      <div className="relative max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-10 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            className="text-white space-y-8"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="space-y-4">
              <motion.div
                className="inline-block"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
              >
                <span className="bg-leva-secondary text-leva-primary font-poppins font-bold text-sm px-4 py-2 rounded-full">
                  LEVA ECOM
                </span>
              </motion.div>
              
              <motion.h1
                className="font-poppins font-bold text-5xl lg:text-6xl leading-tight"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.8 }}
              >
                TRANSFORME SEU<br />
                <span className="text-leva-secondary">GUARDA-ROUPA</span><br />
                EM UMA SMART FASHION
              </motion.h1>
            </div>

            <motion.div
              className="flex flex-wrap gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
            >
              <div className="bg-white/20 backdrop-blur-sm rounded-full px-6 py-3 flex items-center space-x-2">
                <Percent className="w-5 h-5" />
                <span className="font-poppins font-bold text-lg">ATÉ 50% OFF</span>
              </div>
              
              <div className="bg-leva-secondary/20 backdrop-blur-sm rounded-full px-6 py-3 flex items-center space-x-2">
                <Zap className="w-5 h-5 text-leva-secondary" />
                <span className="font-poppins font-bold text-lg text-leva-secondary">FULL</span>
              </div>
              
              <div className="bg-white/20 backdrop-blur-sm rounded-full px-6 py-3 flex items-center space-x-2">
                <Truck className="w-5 h-5" />
                <span className="font-poppins font-bold text-lg">ENVIOS RÁPIDOS</span>
              </div>
            </motion.div>

            <motion.button
              className="bg-leva-secondary text-leva-primary font-poppins font-bold text-lg px-8 py-4 rounded-lg shadow-2xl hover:bg-leva-secondary/90 transition-all duration-300 flex items-center space-x-3"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.8 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span>VER OFERTAS</span>
              <ArrowRight size={20} />
            </motion.button>
          </motion.div>

          <motion.div
            className="relative"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="grid grid-cols-2 gap-6">
              <motion.div
                className="bg-white/95 backdrop-blur-sm rounded-2xl p-6 shadow-2xl"
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.4, duration: 0.6 }}
                whileHover={{ y: -10 }}
              >
                <div className="w-full h-32 bg-leva-primary/10 rounded-xl mb-4 flex items-center justify-center">
                  <span className="text-leva-primary font-bold text-sm">CAMISETA BÁSICA</span>
                </div>
                <div className="space-y-2">
                  <p className="text-gray-500 line-through text-sm">de R$ 79,90</p>
                  <p className="text-leva-primary font-bold text-2xl">por R$ 49,90</p>
                </div>
              </motion.div>

              <motion.div
                className="bg-white/95 backdrop-blur-sm rounded-2xl p-6 shadow-2xl"
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.6, duration: 0.6 }}
                whileHover={{ y: -10 }}
              >
                <div className="w-full h-32 bg-leva-secondary/10 rounded-xl mb-4 flex items-center justify-center">
                  <span className="text-leva-secondary font-bold text-sm">CAMISETA PREMIUM</span>
                </div>
                <div className="space-y-2">
                  <p className="text-gray-500 line-through text-sm">de R$ 129,90</p>
                  <p className="text-leva-primary font-bold text-2xl">por R$ 89,90</p>
                </div>
              </motion.div>

              <motion.div
                className="bg-white/95 backdrop-blur-sm rounded-2xl p-6 shadow-2xl col-span-2"
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.8, duration: 0.6 }}
                whileHover={{ y: -10 }}
              >
                <div className="w-full h-32 bg-leva-primary/10 rounded-xl mb-4 flex items-center justify-center">
                  <span className="text-leva-primary font-bold text-sm">KIT 3 CAMISETAS</span>
                </div>
                <div className="space-y-2">
                  <p className="text-gray-500 line-through text-sm">de R$ 179,90</p>
                  <p className="text-leva-primary font-bold text-2xl">por R$ 119,90</p>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {[1, 2, 3].map((dot) => (
          <motion.div
            key={dot}
            className={`w-2 h-2 rounded-full ${dot === 1 ? 'bg-leva-secondary' : 'bg-white/50'}`}
            animate={{ scale: dot === 1 ? 1.2 : 1 }}
            transition={{ duration: 0.3 }}
          />
        ))}
      </div>
    </section>
  );
}
