'use client';

import { Parallax } from '@/components/magic/parallax';
import { BlurFade } from '@/components/magic/blur-fade';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

interface ParallaxBannerProps {
  collection: {
    id: string;
    title: string;
    description: string;
    handle: string;
    image?: {
      url: string;
      altText?: string;
    };
  };
}

export function ParallaxBanner({ collection }: ParallaxBannerProps) {
  return (
    <section className="relative h-[60vh] overflow-hidden">
      <Parallax speed={0.5}>
        <div className="absolute inset-0">
          {collection.image ? (
            <Image
              src={collection.image.url}
              alt={collection.image.altText || collection.title}
              fill
              className="object-cover"
              sizes="100vw"
            />
          ) : (
            <div className="w-full h-full bg-gradient-to-r from-primary/20 to-purple-500/20" />
          )}
          <div className="absolute inset-0 bg-black/40" />
        </div>
      </Parallax>
      
      <div className="relative z-10 h-full flex items-center justify-center">
        <div className="text-center text-white max-w-2xl mx-auto px-4">
          <BlurFade delay={0.2}>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              {collection.title}
            </h2>
            <p className="text-xl mb-8 opacity-90">
              {collection.description}
            </p>
            <Button size="lg" className="bg-white text-black hover:bg-white/90" asChild>
              <Link href={`/colecao/${collection.handle}`}>
                Explorar Coleção
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </BlurFade>
        </div>
      </div>
    </section>
  );
}
