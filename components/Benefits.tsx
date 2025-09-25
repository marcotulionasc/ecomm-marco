'use client';

import { motion } from 'framer-motion';
import { Truck, Shield, Award, RotateCcw, Headphones, CreditCard } from 'lucide-react';

export function Benefits() {
  const benefits = [
    {
      icon: Truck,
      title: 'Frete Grátis',
      description: 'Acima de R$ 99 em todo o Brasil',
      color: 'text-leva-primary'
    },
    {
      icon: Shield,
      title: 'Compra Segura',
      description: 'SSL e proteção de dados',
      color: 'text-leva-secondary'
    },
    {
      icon: Award,
      title: 'Qualidade Premium',
      description: '100% algodão e acabamento perfeito',
      color: 'text-leva-primary'
    },
    {
      icon: RotateCcw,
      title: 'Troca Fácil',
      description: '30 dias para trocar ou devolver',
      color: 'text-leva-secondary'
    },
    {
      icon: Headphones,
      title: 'Suporte 24/7',
      description: 'Atendimento especializado',
      color: 'text-leva-primary'
    },
    {
      icon: CreditCard,
      title: 'Parcelamento',
      description: 'Até 12x sem juros no cartão',
      color: 'text-leva-secondary'
    }
  ];

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-10 bg-white border-b border-leva-text-light/10">
      <div className="max-w-screen-xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
          {benefits.map((benefit, index) => (
            <motion.div
              key={benefit.title}
              className="text-center group cursor-pointer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
            >
              <div className="w-16 h-16 mx-auto mb-4 bg-leva-bg-light rounded-2xl flex items-center justify-center group-hover:bg-leva-primary transition-colors duration-300">
                <benefit.icon 
                  className={`w-8 h-8 ${benefit.color} group-hover:text-white transition-colors duration-300`} 
                />
              </div>
              <h3 className="font-poppins font-semibold text-sm text-leva-text-secondary mb-2">
                {benefit.title}
              </h3>
              <p className="font-poppins font-medium text-xs text-leva-text-muted leading-relaxed">
                {benefit.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}