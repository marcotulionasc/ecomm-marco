'use client';

import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { BackgroundGrid } from '@/components/magic/background-grid';
import { Spotlight } from '@/components/magic/spotlight';
import { BlurFade } from '@/components/magic/blur-fade';
import { ArrowRight, Sparkles } from 'lucide-react';
import Link from 'next/link';

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <BackgroundGrid className="absolute inset-0" />
      <Spotlight className="absolute inset-0" />
      
      <div className="relative z-10 container mx-auto px-4 text-center">
        <BlurFade delay={0.2}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto"
          >
            <div className="flex items-center justify-center mb-6">
              <Sparkles className="h-8 w-8 text-primary mr-2" />
              <span className="text-sm font-medium text-primary">
                Novos produtos chegando
              </span>
            </div>
            
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6">
              <span className="bg-gradient-to-r from-primary via-purple-500 to-pink-500 bg-clip-text text-transparent">
                Descubra
              </span>
              <br />
              <span className="text-foreground">
                Produtos Incríveis
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Encontre os melhores produtos com qualidade premium e preços competitivos. 
              Sua experiência de compra começa aqui.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="text-lg px-8 py-6" asChild>
                <Link href="/colecao/destaque">
                  Ver Coleções
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" className="text-lg px-8 py-6" asChild>
                <Link href="/buscar">
                  Buscar Produtos
                </Link>
              </Button>
            </div>
          </motion.div>
        </BlurFade>
      </div>
      
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-6 h-10 border-2 border-foreground/30 rounded-full flex justify-center"
        >
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-1 h-3 bg-foreground/30 rounded-full mt-2"
          />
        </motion.div>
      </div>
    </section>
  );
}
