import { notFound } from 'next/navigation';
import { getProductsByCollection } from '@/lib/shopify/queries';
import { ProductGrid } from '@/components/ProductGrid';

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
    <div className="container mx-auto px-4 py-8 space-y-8">
      <div>
        <h1 className="text-4xl font-bold">{collection.title}</h1>
        {collection.description && (
          <p className="text-muted-foreground mt-4 text-lg">
            {collection.description}
          </p>
        )}
      </div>

      <div>
        <h2 className="text-2xl font-semibold mb-6">
          Produtos ({collection.products.edges.length})
        </h2>
        <ProductGrid products={products} />
      </div>

      {collection.products.pageInfo.hasNextPage && (
        <div className="text-center">
          <button className="bg-primary text-primary-foreground px-6 py-3 rounded-md hover:bg-primary/90">
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
