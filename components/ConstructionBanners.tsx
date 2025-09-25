'use client';

import { motion } from 'framer-motion';
import { ArrowRight, Shirt, Star, Crown, Sparkles } from 'lucide-react';

export function ConstructionBanners() {
  return (
    <section className="py-8 px-4 sm:px-6 lg:px-10 bg-gray-100">
      <div className="max-w-screen-xl mx-auto space-y-6">
        {/* Primeiro Banner - Tudo para seu estilo */}
        <motion.div
          className="bg-white rounded-2xl overflow-hidden shadow-lg"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          whileHover={{ y: -5 }}
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 h-48">
            {/* Seção Azul */}
            <div className="bg-blue-600 relative overflow-hidden">
              <div className="absolute inset-0 bg-blue-600/90" />
              <div className="absolute inset-0 bg-grid-pattern opacity-10" />
              
              <div className="relative p-6 h-full flex flex-col justify-between">
                <div>
                  <div className="bg-red-600 text-white font-poppins font-bold text-sm px-3 py-1 rounded mb-4 inline-block">
                    Leva Ecom
                  </div>
                  <h3 className="font-poppins font-bold text-2xl text-white mb-4">
                    TUDO PARA SEU ESTILO
                  </h3>
                </div>
                
                <motion.button
                  className="bg-white text-black font-poppins font-bold text-sm px-6 py-3 rounded-full w-fit"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  ATÉ 30% OFF
                </motion.button>
              </div>
            </div>

            {/* Seção Laranja */}
            <div className="bg-orange-500 relative overflow-hidden">
              <div className="absolute inset-0 bg-orange-500/90" />
              
              <div className="relative p-6 h-full flex items-center justify-between">
                <div className="flex-1">
                  <div className="text-white font-poppins font-bold text-lg mb-2">
                    Style
                  </div>
                  <h4 className="font-poppins font-bold text-xl text-white leading-tight">
                    MODA QUE INSPIRA,<br />
                    ESTILO QUE TRANSFORMA
                  </h4>
                </div>
                
                <div className="flex space-x-4">
                  <div className="w-16 h-16 bg-orange-200 rounded-lg flex items-center justify-center">
                    <Shirt className="w-8 h-8 text-orange-600" />
                  </div>
                  <div className="w-16 h-16 bg-gray-200 rounded-lg flex items-center justify-center">
                    <Star className="w-8 h-8 text-gray-600" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Segundo Banner - Finalize seu look com estilo */}
        <motion.div
          className="bg-white rounded-2xl overflow-hidden shadow-lg"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          viewport={{ once: true }}
          whileHover={{ y: -5 }}
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 h-48">
            {/* Seção Azul */}
            <div className="bg-blue-600 relative overflow-hidden">
              <div className="absolute inset-0 bg-blue-600/90" />
              <div className="absolute inset-0 bg-grid-pattern opacity-10" />
              
              <div className="relative p-6 h-full flex flex-col justify-between">
                <div>
                  <p className="text-white/80 font-poppins font-medium text-sm mb-2">
                    MODA E ESTILO
                  </p>
                  <h3 className="font-poppins font-bold text-2xl text-white leading-tight">
                    FINALIZE SEU LOOK<br />
                    COM ESTILO
                  </h3>
                </div>
                
                <motion.button
                  className="bg-white text-black font-poppins font-bold text-sm px-6 py-3 rounded-full w-fit"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  ATÉ 30% OFF
                </motion.button>
              </div>
            </div>

            {/* Seção Laranja */}
            <div className="bg-orange-500 relative overflow-hidden">
              <div className="absolute inset-0 bg-orange-500/90" />
              
              <div className="relative p-6 h-full flex items-center justify-between">
                <div className="flex space-x-4">
                  <div className="w-16 h-16 bg-orange-200 rounded-lg flex items-center justify-center">
                    <Crown className="w-8 h-8 text-orange-600" />
                  </div>
                  <div className="w-16 h-16 bg-gray-200 rounded-lg flex items-center justify-center">
                    <Sparkles className="w-8 h-8 text-gray-600" />
                  </div>
                </div>
                
                <div className="text-center">
                  <div className="bg-red-600 text-white font-poppins font-bold text-sm px-3 py-1 rounded mb-4 inline-block">
                    Leva Ecom
                  </div>
                  <motion.button
                    className="text-black font-poppins font-bold text-base flex items-center space-x-2"
                    whileHover={{ x: 5 }}
                  >
                    <span>Ver mais</span>
                    <ArrowRight size={16} />
                  </motion.button>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
