import { notFound } from 'next/navigation';
import Image from 'next/image';
import { getProductByHandle } from '@/lib/shopify/queries';
import { AddToCartButton } from '@/components/AddToCartButton';
import { Price } from '@/components/Price';
import { Badge } from '@ecomm/ui';
import { H1, H2, P } from '@ecomm/ui';

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

  const firstVariant = product.variants.edges[0]?.node;
  const firstImage = product.images.edges[0]?.node;

  return (
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
        
        {product.images.edges.length > 1 && (
          <div className="grid grid-cols-4 gap-2">
            {product.images.edges.slice(1, 5).map(({ node: image }) => (
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
          <H1>{product.title}</H1>
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
                {product.tags.map((tag) => (
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
            <H2>Tamanho</H2>
            <P className="text-muted-foreground">{product.description}</P>
          </div>
        )}

        {product.options.length > 0 && (
          <div className="space-y-4">
            {product.options.map((option) => (
              <div key={option.id}>
                <H2>{option.name}</H2>
                <div className="flex flex-wrap gap-2 mt-2">
                  {option.values.map((value) => (
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
            <H2>Descrição</H2>
            <div
              className="prose max-w-none"
              dangerouslySetInnerHTML={{ __html: product.descriptionHtml }}
            />
          </div>
        )}
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
