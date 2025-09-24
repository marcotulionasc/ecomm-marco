import Link from 'next/link';
import Image from 'next/image';
import { Card, CardContent } from '@ecomm/ui';
import { Price } from './Price';
import type { Product } from '@ecomm/core';

interface ProductCardProps {
  product: Product;
}

export function ProductCard({ product }: ProductCardProps) {
  const firstImage = product.images.edges[0]?.node;
  const priceRange = product.priceRange;

  return (
    <Link href={`/produto/${product.handle}`}>
      <Card className="group cursor-pointer transition-transform hover:scale-105">
        <CardContent className="p-0">
          {firstImage && (
            <div className="relative aspect-square overflow-hidden rounded-t-lg">
              <Image
                src={firstImage.url}
                alt={firstImage.altText || product.title}
                fill
                className="object-cover transition-transform group-hover:scale-110"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
            </div>
          )}
          <div className="p-4">
            <h3 className="font-semibold text-lg mb-2 line-clamp-2">
              {product.title}
            </h3>
            <div className="flex items-center justify-between">
              <Price
                price={priceRange.minVariantPrice}
                compareAtPrice={
                  priceRange.minVariantPrice.amount !== priceRange.maxVariantPrice.amount
                    ? priceRange.maxVariantPrice
                    : undefined
                }
              />
              {!product.availableForSale && (
                <span className="text-sm text-muted-foreground">
                  Indisponível
                </span>
              )}
            </div>
          </div>
        </CardContent>
      </Card>
    </Link>
  );
}
