import { notFound } from 'next/navigation';
import Image from 'next/image';
import { getProductByHandle } from '@/lib/shopify/queries';
import { AddToCartButton } from '@/components/AddToCartButton';
import { Price } from '@/components/Price';
import { Badge } from '@/components/ui/badge';
import type { Image as ShopifyImage } from '@/lib/types/shopify';

interface ProductPageProps {
  params: {
    handle: string;
  };
}

export const revalidate = 300;

export default async function ProductPage({ params }: ProductPageProps) {
  const product = await getProductByHandle(params.handle);

  if (!product) {
    notFound();
  }

  const firstVariant = product.variants[0];
  const firstImage = product.images[0];

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="space-y-4">
          {firstImage && (
            <div className="relative aspect-square overflow-hidden rounded-lg">
              <Image
                src={firstImage.url}
                alt={firstImage.altText || product.title}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
                priority
              />
            </div>
          )}
          
          {product.images.length > 1 && (
            <div className="grid grid-cols-4 gap-2">
              {product.images.slice(1, 5).map((image: ShopifyImage) => (
                <div key={image.id} className="relative aspect-square overflow-hidden rounded-md">
                  <Image
                    src={image.url}
                    alt={image.altText || product.title}
                    fill
                    className="object-cover"
                    sizes="25vw"
                  />
                </div>
              ))}
            </div>
          )}
        </div>

        <div className="space-y-6">
          <div>
            <h1 className="text-4xl font-bold">{product.title}</h1>
            {product.vendor && (
              <p className="text-muted-foreground">por {product.vendor}</p>
            )}
          </div>

          {firstVariant && (
            <div className="space-y-4">
              <Price
                price={firstVariant.price}
                compareAtPrice={firstVariant.compareAtPrice}
                className="text-2xl"
              />
              
              {product.tags.length > 0 && (
                <div className="flex flex-wrap gap-2">
                  {product.tags.map((tag: string) => (
                    <Badge key={tag} variant="secondary">
                      {tag}
                    </Badge>
                  ))}
                </div>
              )}
            </div>
          )}

          {product.description && (
            <div>
              <h2 className="text-2xl font-semibold mb-2">Descrição</h2>
              <p className="text-muted-foreground">{product.description}</p>
            </div>
          )}

          {product.options.length > 0 && (
            <div className="space-y-4">
              {product.options.map((option: any) => (
                <div key={option.id}>
                  <h3 className="text-lg font-semibold mb-2">{option.name}</h3>
                  <div className="flex flex-wrap gap-2">
                    {option.values.map((value: string) => (
                      <button
                        key={value}
                        className="px-3 py-1 border rounded-md hover:bg-muted"
                      >
                        {value}
                      </button>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          )}

          {firstVariant && (
            <AddToCartButton
              variantId={firstVariant.id}
              disabled={!firstVariant.availableForSale}
              className="w-full"
            />
          )}

          {product.descriptionHtml && (
            <div>
              <h2 className="text-2xl font-semibold mb-2">Detalhes</h2>
              <div
                className="prose max-w-none"
                dangerouslySetInnerHTML={{ __html: product.descriptionHtml }}
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export async function generateMetadata({ params }: ProductPageProps) {
  const product = await getProductByHandle(params.handle);
  
  return {
    title: product?.title || 'Produto',
    description: product?.description || 'Detalhes do produto',
  };
}
