import { getCollections, searchProducts } from '@/lib/shopify/queries';
import { HeroSection } from '@/components/HeroSection';
import { BentoGrid, BentoGridItem } from '@/components/magic/bento-grid';
import { BlurFade } from '@/components/magic/blur-fade';
import { Benefits } from '@/components/Benefits';
import { ProductCarousel } from '@/components/ProductCarousel';
import { ParallaxBanner } from '@/components/ParallaxBanner';
import { ShoppingBag } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import { Badge } from '@/components/ui/badge';
import { Price } from '@/components/Price';

export const revalidate = 60;

export default async function HomePage() {
  const collections = await getCollections(6);
  const productsResult = await searchProducts('*', 6);
  const featuredProducts = productsResult.edges.map((edge: any) => edge.node);

  return (
    <div className="flex flex-col min-h-screen">
      <HeroSection />
      
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <BlurFade>
            <h2 className="text-3xl font-bold text-center mb-12">
              Produtos em Destaque
            </h2>
          </BlurFade>
          <BentoGrid className="max-w-7xl mx-auto">
            {featuredProducts.slice(0, 6).map((product, index) => (
              <BentoGridItem
                key={product.id}
                title={product.title}
                description={product.description}
                header={
                  <Link href={`/produto/${product.handle}`} className="block">
                    <div className="relative aspect-square overflow-hidden rounded-lg">
                      {product.images[0] ? (
                        <Image
                          src={product.images[0].url}
                          alt={product.images[0].altText || product.title}
                          fill
                          className="object-cover transition-transform group-hover/bento:scale-110"
                          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        />
                      ) : (
                        <div className="w-full h-full bg-muted flex items-center justify-center">
                          <ShoppingBag className="h-12 w-12 text-muted-foreground" />
                        </div>
                      )}
                      {product.variants[0] && (
                        <div className="absolute bottom-2 left-2">
                          <Badge variant="secondary" className="bg-background/80 backdrop-blur-sm">
                            <Price 
                              price={product.variants[0].price} 
                              compareAtPrice={product.variants[0].compareAtPrice}
                              className="text-xs"
                            />
                          </Badge>
                        </div>
                      )}
                    </div>
                  </Link>
                }
                className={index === 2 || index === 5 ? 'md:col-span-2' : ''}
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
