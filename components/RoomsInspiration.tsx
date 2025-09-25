'use client';

import { useState } from 'react';
import Image from 'next/image';
import { ChevronRight, ChevronLeft } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export function RoomsInspiration() {
  const [activeSlide, setActiveSlide] = useState(0);
  
  const slides = [
    {
      id: 1,
      image: 'https://via.placeholder.com/404x582/8B5CF6/A3E635?text=QUARTO+MODERNO',
      number: '01',
      title: 'Quarto',
      subtitle: 'Paz Interior'
    },
    {
      id: 2,
      image: 'https://via.placeholder.com/404x582/A3E635/8B5CF6?text=SALA+DE+ESTAR',
      number: '02',
      title: 'Sala de Estar',
      subtitle: 'Espaço Acolhedor'
    },
    {
      id: 3,
      image: 'https://via.placeholder.com/404x582/8B5CF6/A3E635?text=COZINHA+MODERNA',
      number: '03',
      title: 'Cozinha',
      subtitle: 'Estilo Moderno'
    }
  ];

  return (
    <section className="bg-gradient-to-br from-leva-bg-warm via-yellow-50 to-leva-bg-warm py-20 px-4 sm:px-6 lg:px-10">
      <div className="max-w-screen-xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <motion.div 
          className="space-y-8"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="font-poppins font-bold text-[48px] leading-[56px] bg-gradient-to-r from-leva-primary to-leva-secondary bg-clip-text text-transparent">
            50+ Ambientes<br />
            Inspiradores
          </h2>
          
          <p className="font-poppins font-medium text-[18px] text-leva-text-muted max-w-[400px] leading-relaxed">
            Nossos designers criaram diversos ambientes lindos e inspiradores para transformar sua casa em um espaço único e acolhedor.
          </p>
          
          <motion.button 
            className="bg-gradient-to-r from-leva-primary to-leva-secondary text-white font-poppins font-bold text-[18px] px-10 py-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-leva-primary/50 focus:ring-offset-2"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Explorar Mais
          </motion.button>
        </motion.div>
        
        <motion.div 
          className="relative flex items-center space-x-6"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <div className="relative">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeSlide}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 1.1 }}
                transition={{ duration: 0.5 }}
                className="relative"
              >
                <Image
                  src={slides[activeSlide].image}
                  alt={slides[activeSlide].title}
                  width={404}
                  height={582}
                  className="w-[404px] h-[582px] object-cover rounded-2xl shadow-2xl"
                />
                
                <motion.div 
                  className="absolute bottom-6 left-6 w-[240px] h-[140px] bg-white/90 backdrop-blur-md rounded-2xl p-6 flex flex-col justify-between shadow-lg"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                >
                  <div className="flex items-center space-x-2">
                    <span className="font-poppins font-bold text-[16px] text-leva-primary">
                      {slides[activeSlide].number}
                    </span>
                    <span className="font-poppins font-medium text-[16px] text-leva-text-muted">
                      —
                    </span>
                    <span className="font-poppins font-medium text-[16px] text-leva-text-muted">
                      {slides[activeSlide].title}
                    </span>
                  </div>
                  <h3 className="font-poppins font-bold text-[28px] text-leva-text-secondary">
                    {slides[activeSlide].subtitle}
                  </h3>
                </motion.div>
              </motion.div>
            </AnimatePresence>
            
            <motion.button 
              className="absolute bottom-6 right-6 w-14 h-14 bg-gradient-to-r from-leva-primary to-leva-secondary rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300"
              onClick={() => setActiveSlide((prev) => (prev + 1) % slides.length)}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <ChevronRight className="text-white" size={24} />
            </motion.button>
          </div>
          
          <div className="space-y-6">
            <motion.div
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              <Image
                src="https://via.placeholder.com/372x486/A3E635/8B5CF6?text=AMBIENTE+INSPIRADOR"
                alt="Ambiente Inspirador"
                width={372}
                height={486}
                className="w-[372px] h-[486px] object-cover rounded-2xl shadow-lg"
              />
            </motion.div>
            
            <div className="flex items-center justify-center space-x-4">
              {slides.map((_, index) => (
                <motion.button
                  key={index}
                  className={`w-4 h-4 rounded-full transition-all duration-300 ${
                    index === activeSlide
                      ? 'bg-leva-primary ring-4 ring-leva-primary/30 scale-125'
                      : 'bg-leva-text-light hover:bg-leva-text-medium'
                  }`}
                  onClick={() => setActiveSlide(index)}
                  whileHover={{ scale: 1.2 }}
                  whileTap={{ scale: 0.9 }}
                />
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
