import { notFound } from 'next/navigation';
import { getProductsByCollection } from '@/lib/shopify/queries';
import { ProductGrid } from '@/components/ProductGrid';
import { H1, H2, P } from '@ecomm/ui';

interface CollectionPageProps {
  params: {
    handle: string;
  };
}

export const revalidate = 300;

export default async function CollectionPage({ params }: CollectionPageProps) {
  const collection = await getProductsByCollection(params.handle, 20);

  if (!collection) {
    notFound();
  }

  const products = collection.products.edges.map(edge => edge.node);

  return (
    <div className="space-y-8">
      <div>
        <H1>{collection.title}</H1>
        {collection.description && (
          <P className="text-muted-foreground mt-4">
            {collection.description}
          </P>
        )}
      </div>

      <div>
        <H2 className="mb-6">
          Produtos ({collection.products.edges.length})
        </H2>
        <ProductGrid products={products} />
      </div>

      {collection.products.pageInfo.hasNextPage && (
        <div className="text-center">
          <button className="btn btn-primary">
            Carregar mais produtos
          </button>
        </div>
      )}
    </div>
  );
}

export async function generateMetadata({ params }: CollectionPageProps) {
  const collection = await getProductsByCollection(params.handle, 1);
  
  return {
    title: collection?.title || 'Coleção',
    description: collection?.description || 'Produtos da coleção',
  };
}
