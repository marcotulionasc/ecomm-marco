'use client';

import { motion } from 'framer-motion';
import { Users, Award, Truck, Heart } from 'lucide-react';

export function Stats() {
  const stats = [
    {
      icon: Users,
      number: '10.000+',
      label: 'Clientes Satisfeitos',
      color: 'text-leva-primary'
    },
    {
      icon: Award,
      number: '500+',
      label: 'Produtos Premium',
      color: 'text-leva-secondary'
    },
    {
      icon: Truck,
      number: '50+',
      label: 'Cidades Atendidas',
      color: 'text-leva-primary'
    },
    {
      icon: Heart,
      number: '99%',
      label: 'Satisfação Garantida',
      color: 'text-leva-secondary'
    }
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-10 bg-leva-primary">
      <div className="max-w-screen-xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              className="text-center text-white"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="w-16 h-16 mx-auto mb-4 bg-white/20 rounded-2xl flex items-center justify-center">
                <stat.icon className={`w-8 h-8 ${stat.color === 'text-leva-primary' ? 'text-white' : 'text-leva-secondary'}`} />
              </div>
              <motion.h3 
                className="font-poppins font-bold text-3xl mb-2"
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                viewport={{ once: true }}
              >
                {stat.number}
              </motion.h3>
              <p className="font-poppins font-medium text-base opacity-90">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
