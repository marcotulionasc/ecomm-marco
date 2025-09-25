'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';

export function Hero() {
  return (
    <section className="relative h-[716px] overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-leva-primary via-purple-600 to-leva-secondary">
        <Image
          src="https://via.placeholder.com/1440x1008/8B5CF6/A3E635?text=HERO+BACKGROUND"
          alt="Hero Background - Móveis Modernos"
          width={1440}
          height={1008}
          className="w-full h-full object-cover opacity-20"
          style={{
            marginTop: '-75px'
          }}
          priority
        />
      </div>
      
      <div className="absolute inset-0 bg-gradient-to-r from-leva-primary/30 to-leva-secondary/30" />
      
      <div className="relative max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-10 h-full flex items-center justify-end">
        <motion.div 
          className="relative"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <motion.div 
            className="absolute -top-8 left-4"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            <span className="font-poppins font-semibold text-[16px] tracking-[3px] text-white bg-leva-secondary px-4 py-2 rounded-full">
              NOVA CHEGADA
            </span>
          </motion.div>
          
          <motion.div 
            className="w-[643px] h-[443px] bg-white/95 backdrop-blur-sm rounded-[20px] flex flex-col justify-center px-[39px] py-[62px] shadow-2xl border border-white/20"
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.8, ease: "easeOut" }}
            whileHover={{ scale: 1.02 }}
          >
            <motion.h1 
              className="font-poppins font-bold text-[52px] leading-[65px] bg-gradient-to-r from-leva-primary to-leva-secondary bg-clip-text text-transparent mb-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.6 }}
            >
              Descubra Nossa<br />
              Nova Coleção
            </motion.h1>
            
            <motion.p 
              className="font-poppins font-medium text-[18px] leading-[24px] text-leva-text-dark mb-12 max-w-[546px]"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9, duration: 0.6 }}
            >
              Móveis modernos e elegantes para transformar sua casa em um espaço único e acolhedor. Qualidade premium com design contemporâneo.
            </motion.p>
            
            <motion.button 
              className="relative bg-gradient-to-r from-leva-primary to-leva-secondary text-white font-poppins font-bold text-[16px] uppercase px-[72px] py-[25px] rounded-full shadow-lg hover:shadow-xl transition-all duration-300 ease-out focus:outline-none focus:ring-4 focus:ring-leva-primary/50 focus:ring-offset-2 overflow-hidden group"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.1, duration: 0.6 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="relative z-10">COMPRAR AGORA</span>
              <div className="absolute inset-0 bg-gradient-to-r from-leva-secondary to-leva-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </motion.button>
          </motion.div>
        </motion.div>
      </div>
      
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <motion.div
          className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        >
          <motion.div
            className="w-1 h-3 bg-white/70 rounded-full mt-2"
            animate={{ opacity: [0.5, 1, 0.5] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          />
        </motion.div>
      </div>
    </section>
  );
}
