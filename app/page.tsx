import { getCollections } from '@/lib/shopify/queries';
import { HeroSection } from '@/components/HeroSection';
import { BentoGrid, BentoGridItem } from '@/components/magic/bento-grid';
import { BlurFade } from '@/components/magic/blur-fade';
import { Benefits } from '@/components/Benefits';
import { ProductCarousel } from '@/components/ProductCarousel';
import { ParallaxBanner } from '@/components/ParallaxBanner';
import { ShoppingBag } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

export const revalidate = 300;

export default async function HomePage() {
  const collections = await getCollections(6);

  return (
    <div className="flex flex-col min-h-screen">
      <HeroSection />
      
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <BlurFade>
            <h2 className="text-3xl font-bold text-center mb-12">
              Coleções em Destaque
            </h2>
          </BlurFade>
          <BentoGrid className="max-w-7xl mx-auto">
            {collections.slice(0, 6).map((collection, index) => (
              <BentoGridItem
                key={collection.id}
                title={collection.title}
                description={collection.description}
                header={
                  <Link href={`/colecao/${collection.handle}`} className="block">
                    <div className="relative aspect-square overflow-hidden rounded-lg">
                      {collection.image ? (
                        <Image
                          src={collection.image.url}
                          alt={collection.image.altText || collection.title}
                          fill
                          className="object-cover transition-transform group-hover/bento:scale-110"
                          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        />
                      ) : (
                        <div className="w-full h-full bg-muted flex items-center justify-center">
                          <ShoppingBag className="h-12 w-12 text-muted-foreground" />
                        </div>
                      )}
                    </div>
                  </Link>
                }
                className={index === 3 || index === 6 ? 'md:col-span-2' : ''}
              />
            ))}
          </BentoGrid>
        </div>
      </section>

      <Benefits />

      <section className="py-16 px-4 bg-muted/50">
        <div className="container mx-auto">
          <BlurFade>
            <h2 className="text-3xl font-bold text-center mb-12">
              Produtos Novos
            </h2>
          </BlurFade>
          <ProductCarousel />
        </div>
      </section>

      {collections.length > 0 && (
        <ParallaxBanner collection={collections[0]} />
      )}
    </div>
  );
}
