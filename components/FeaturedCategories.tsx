'use client';

import { motion } from 'framer-motion';
import { ChevronRight, Shirt, Palette, Crown, Zap, Star, Heart, Sparkles } from 'lucide-react';

export function FeaturedCategories() {
  const categories = [
    {
      id: 1,
      name: 'BÁSICAS',
      icon: Shirt,
      color: 'bg-yellow-400',
      iconColor: 'text-black'
    },
    {
      id: 2,
      name: 'ESTAMPADAS',
      icon: Palette,
      color: 'bg-blue-500',
      iconColor: 'text-white'
    },
    {
      id: 3,
      name: 'PREMIUM',
      icon: Crown,
      color: 'bg-orange-500',
      iconColor: 'text-white'
    },
    {
      id: 4,
      name: 'STREETWEAR',
      icon: Zap,
      color: 'bg-blue-500',
      iconColor: 'text-white'
    },
    {
      id: 5,
      name: 'VINTAGE',
      icon: Star,
      color: 'bg-orange-500',
      iconColor: 'text-white'
    },
    {
      id: 6,
      name: 'MINIMALISTA',
      icon: Heart,
      color: 'bg-blue-500',
      iconColor: 'text-white'
    },
    {
      id: 7,
      name: 'KITS',
      icon: Sparkles,
      color: 'bg-blue-500',
      iconColor: 'text-white'
    }
  ];

  return (
    <section className="py-12 px-4 sm:px-6 lg:px-10 bg-gray-100">
      <div className="max-w-screen-xl mx-auto">
        <motion.h2
          className="text-center font-poppins font-bold text-2xl text-black mb-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          CATEGORIAS EM DESTAQUE
        </motion.h2>

        <div className="flex justify-center">
          <div className="flex space-x-4 max-w-4xl">
            {categories.map((category, index) => (
              <motion.div
                key={category.id}
                className="flex-shrink-0 w-32 h-32 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer group"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5, scale: 1.05 }}
              >
                <div className="w-full h-full flex flex-col items-center justify-center p-4">
                  <div className={`w-12 h-12 ${category.color} rounded-xl flex items-center justify-center mb-3 group-hover:scale-110 transition-transform duration-300`}>
                    <category.icon className={`w-6 h-6 ${category.iconColor}`} />
                  </div>
                  <span className="font-poppins font-bold text-xs text-center text-gray-800">
                    {category.name}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
