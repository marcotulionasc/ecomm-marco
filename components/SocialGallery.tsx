'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { socialImages } from '@/lib/data';

export function SocialGallery() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-10 bg-white">
      <div className="max-w-screen-xl mx-auto">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <p className="font-poppins font-semibold text-2xl text-leva-text-muted mb-4">
            Compartilhe seu ambiente com
          </p>
          <h2 className="font-poppins font-bold text-4xl text-leva-primary">
            #LevaEcom
          </h2>
          <p className="font-poppins font-medium text-lg text-leva-text-medium max-w-2xl mx-auto mt-4">
            Inspire-se com os ambientes criados por nossos clientes usando nossos móveis
          </p>
        </motion.div>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6 auto-rows-max">
          {socialImages.map((image, index) => (
            <motion.div 
              key={image.id}
              className={`relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 group cursor-pointer ${
                index === 0 ? 'md:row-span-2' :
                index === 1 ? 'lg:col-span-2' :
                index === 2 ? 'md:row-span-2' :
                index === 7 ? 'lg:col-span-2 md:row-span-2' :
                ''
              }`}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -10, scale: 1.02 }}
            >
              <Image
                src={`https://via.placeholder.com/${image.width}x${image.height}/8B5CF6/A3E635?text=AMBIENTE+${index + 1}`}
                alt={`Ambiente inspirador ${image.id}`}
                width={image.width}
                height={image.height}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
                style={{
                  aspectRatio: `${image.width}/${image.height}`
                }}
              />
              
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              
              <div className="absolute bottom-4 left-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="bg-white/95 rounded-xl p-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-leva-primary rounded-full flex items-center justify-center">
                      <span className="text-white font-bold text-sm">L</span>
                    </div>
                    <div>
                      <p className="font-poppins font-semibold text-sm text-leva-text-secondary">
                        Cliente Leva Ecom
                      </p>
                      <p className="font-poppins font-medium text-xs text-leva-text-muted">
                        @levaecom
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="bg-white/90 backdrop-blur-sm rounded-full p-2">
                  <span className="text-leva-primary font-bold text-sm">❤️</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        
        <motion.div 
          className="text-center mt-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          viewport={{ once: true }}
        >
          <motion.button 
            className="bg-leva-primary text-white font-poppins font-bold text-lg px-12 py-4 rounded-lg shadow-lg hover:bg-leva-primary/90 transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-leva-primary/30"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Compartilhar Seu Ambiente
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}
