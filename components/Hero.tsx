'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { ArrowRight, Star, Users, Award, Truck, Shield, CheckCircle, Sparkles } from 'lucide-react';

export function Hero() {
  return (
    <section className="relative h-[600px] overflow-hidden bg-leva-primary">
      <div className="absolute inset-0">
        <Image
          src="https://via.placeholder.com/1440x1008/8B5CF6/A3E635?text=HERO+BACKGROUND"
          alt="Hero Background - Móveis Modernos"
          width={1440}
          height={1008}
          className="w-full h-full object-cover opacity-30"
          style={{
            marginTop: '-75px'
          }}
          priority
        />
      </div>
      
      <div className="absolute inset-0 bg-leva-primary/40" />
      
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
            <span className="font-poppins font-semibold text-sm tracking-widest text-white bg-leva-secondary px-4 py-2 rounded-full">
              NOVA CHEGADA
            </span>
          </motion.div>
          
          <motion.div 
            className="w-[600px] h-[400px] bg-white rounded-2xl flex flex-col justify-center px-12 py-16 shadow-2xl"
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.8, ease: "easeOut" }}
            whileHover={{ scale: 1.02 }}
          >
            <motion.h1 
              className="font-poppins font-bold text-5xl leading-tight text-leva-primary mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.6 }}
            >
              Descubra Nossa<br />
              Nova Coleção
            </motion.h1>
            
            <motion.p 
              className="font-poppins font-medium text-lg leading-relaxed text-leva-text-dark mb-8 max-w-lg"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9, duration: 0.6 }}
            >
              Móveis modernos e elegantes para transformar sua casa em um espaço único e acolhedor. Qualidade premium com design contemporâneo.
            </motion.p>
            
            <motion.button 
              className="bg-leva-primary text-white font-poppins font-bold text-base uppercase px-12 py-4 rounded-lg shadow-lg hover:bg-leva-primary/90 transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-leva-primary/30 flex items-center space-x-2"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.1, duration: 0.6 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span>COMPRAR AGORA</span>
              <ArrowRight size={20} />
            </motion.button>
            
            <motion.div 
              className="flex items-center space-x-6 mt-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.3, duration: 0.6 }}
            >
              <div className="flex items-center space-x-2">
                <div className="flex -space-x-2">
                  {[1,2,3,4].map((i) => (
                    <div key={i} className="w-8 h-8 bg-leva-secondary rounded-full border-2 border-white flex items-center justify-center">
                      <span className="text-white text-xs font-bold">{i}</span>
                    </div>
                  ))}
                </div>
                <div className="ml-3">
                  <div className="flex items-center space-x-1">
                    {[1,2,3,4,5].map((i) => (
                      <Star key={i} className="w-4 h-4 fill-leva-secondary text-leva-secondary" />
                    ))}
                  </div>
                  <p className="text-sm text-leva-text-dark">+10.000 clientes satisfeitos</p>
                </div>
              </div>
            </motion.div>
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
