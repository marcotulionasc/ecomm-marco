'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { BlurFade } from '@/components/magic/blur-fade';
import { Skeleton } from '@/components/ui/skeleton';
import Image from 'next/image';

const mockProducts = [
  {
    id: '1',
    name: 'Produto Exemplo 1',
    price: 'R$ 99,90',
    image: '/placeholder-product.jpg',
    badge: 'Novo',
  },
  {
    id: '2',
    name: 'Produto Exemplo 2',
    price: 'R$ 149,90',
    image: '/placeholder-product.jpg',
    badge: 'Oferta',
  },
  {
    id: '3',
    name: 'Produto Exemplo 3',
    price: 'R$ 199,90',
    image: '/placeholder-product.jpg',
    badge: null,
  },
  {
    id: '4',
    name: 'Produto Exemplo 4',
    price: 'R$ 79,90',
    image: '/placeholder-product.jpg',
    badge: 'Popular',
  },
];

export function ProductCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isLoading] = useState(false);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % mockProducts.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + mockProducts.length) % mockProducts.length);
  };

  if (isLoading) {
    return (
      <div className="flex space-x-4 overflow-hidden">
        {[...Array(4)].map((_, i) => (
          <div key={i} className="flex-shrink-0 w-64">
            <Card>
              <CardContent className="p-0">
                <Skeleton className="h-64 w-full" />
                <div className="p-4 space-y-2">
                  <Skeleton className="h-4 w-3/4" />
                  <Skeleton className="h-4 w-1/2" />
                </div>
              </CardContent>
            </Card>
          </div>
        ))}
      </div>
    );
  }

  return (
    <div className="relative">
      <div className="flex space-x-4 overflow-hidden">
        <motion.div
          className="flex space-x-4"
          animate={{ x: -currentIndex * 272 }}
          transition={{ duration: 0.5, ease: 'easeInOut' }}
        >
          {mockProducts.map((product, index) => (
            <BlurFade key={product.id} delay={index * 0.1}>
              <div className="flex-shrink-0 w-64">
                <Card className="group hover:shadow-lg transition-shadow">
                  <CardContent className="p-0">
                    <div className="relative aspect-square overflow-hidden rounded-t-lg">
                      <div className="w-full h-full bg-muted flex items-center justify-center">
                        <span className="text-muted-foreground">Imagem do Produto</span>
                      </div>
                      {product.badge && (
                        <Badge className="absolute top-2 left-2" variant="secondary">
                          {product.badge}
                        </Badge>
                      )}
                    </div>
                    <div className="p-4">
                      <h3 className="font-semibold mb-2 line-clamp-2">{product.name}</h3>
                      <p className="text-lg font-bold text-primary">{product.price}</p>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </BlurFade>
          ))}
        </motion.div>
      </div>
      
      <Button
        variant="outline"
        size="icon"
        className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 bg-background/80 backdrop-blur-sm"
        onClick={prevSlide}
        disabled={currentIndex === 0}
      >
        <ChevronLeft className="h-4 w-4" />
      </Button>
      
      <Button
        variant="outline"
        size="icon"
        className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 bg-background/80 backdrop-blur-sm"
        onClick={nextSlide}
        disabled={currentIndex === mockProducts.length - 1}
      >
        <ChevronRight className="h-4 w-4" />
      </Button>
    </div>
  );
}
