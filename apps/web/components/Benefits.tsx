'use client';

import { motion } from 'framer-motion';
import { BlurFade } from '@/components/magic/blur-fade';
import { Truck, Shield, Headphones, RotateCcw } from 'lucide-react';

const benefits = [
  {
    icon: Truck,
    title: 'Frete Grátis',
    description: 'Para compras acima de R$ 99',
  },
  {
    icon: Shield,
    title: 'Compra Segura',
    description: 'Seus dados protegidos',
  },
  {
    icon: RotateCcw,
    title: 'Troca Fácil',
    description: '30 dias para trocar',
  },
  {
    icon: Headphones,
    title: 'Suporte 24/7',
    description: 'Atendimento especializado',
  },
];

export function Benefits() {
  return (
    <section className="py-16 px-4">
      <div className="container mx-auto">
        <BlurFade>
          <h2 className="text-3xl font-bold text-center mb-12">
            Por que escolher nossa loja?
          </h2>
        </BlurFade>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => (
            <BlurFade key={benefit.title} delay={index * 0.1}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center group"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-4 group-hover:bg-primary/20 transition-colors">
                  <benefit.icon className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">{benefit.title}</h3>
                <p className="text-muted-foreground">{benefit.description}</p>
              </motion.div>
            </BlurFade>
          ))}
        </div>
      </div>
    </section>
  );
}
