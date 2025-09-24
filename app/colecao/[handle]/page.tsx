import { notFound } from 'next/navigation';
import { getProductsByCollection } from '@/lib/shopify/queries';
import { ProductGrid } from '@/components/ProductGrid';

interface CollectionPageProps {
  params: {
    handle: string;
  };
}

export const revalidate = 60;

export default async function CollectionPage({ params }: CollectionPageProps) {
  try {
    const collection = await getProductsByCollection(params.handle, 20);

    if (!collection) {
      return (
        <div className="container mx-auto px-4 py-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold mb-4">Coleção não encontrada</h1>
            <p className="text-muted-foreground mb-8">
              A coleção "{params.handle}" não existe ou não está disponível.
            </p>
            <p className="text-sm text-muted-foreground">
              Verifique se a coleção existe na sua Shopify e se está publicada.
            </p>
          </div>
        </div>
      );
    }

    const products = collection.products.edges.map((edge: any) => edge.node);

    if (products.length === 0) {
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
          <div className="text-center py-12">
            <h2 className="text-2xl font-semibold mb-4">Nenhum produto encontrado</h2>
            <p className="text-muted-foreground">
              Esta coleção ainda não possui produtos ou eles não estão disponíveis.
            </p>
          </div>
        </div>
      );
    }

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
  } catch (error) {
    console.error('Erro ao carregar coleção:', error);
    return (
      <div className="container mx-auto px-4 py-8">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Erro ao carregar coleção</h1>
          <p className="text-muted-foreground mb-8">
            Ocorreu um erro ao tentar carregar a coleção "{params.handle}".
          </p>
          <p className="text-sm text-muted-foreground">
            Verifique sua conexão e as configurações da Shopify.
          </p>
        </div>
      </div>
    );
  }
}

export async function generateMetadata({ params }: CollectionPageProps) {
  const collection = await getProductsByCollection(params.handle, 1);
  
  return {
    title: collection?.title || 'Coleção',
    description: collection?.description || 'Produtos da coleção',
  };
}
