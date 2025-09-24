import { getCollections } from '@/lib/shopify/queries';
import Link from 'next/link';
import Image from 'next/image';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ShoppingBag } from 'lucide-react';

export const revalidate = 60;

export default async function CollectionsPage() {
  try {
    const collections = await getCollections(50);

    return (
      <div className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-4xl font-bold mb-4">Todas as Coleções</h1>
          <p className="text-muted-foreground">
            Encontramos {collections.length} coleções disponíveis.
          </p>
        </div>

        {collections.length === 0 ? (
          <div className="text-center py-12">
            <h2 className="text-2xl font-semibold mb-4">Nenhuma coleção encontrada</h2>
            <p className="text-muted-foreground">
              Crie coleções na sua Shopify para organizar seus produtos.
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {collections.map((collection) => (
              <Link key={collection.id} href={`/colecao/${collection.handle}`}>
                <Card className="group cursor-pointer transition-transform hover:scale-105">
                  <CardContent className="p-0">
                    <div className="relative aspect-video overflow-hidden rounded-t-lg">
                      {collection.image ? (
                        <Image
                          src={collection.image.url}
                          alt={collection.image.altText || collection.title}
                          fill
                          className="object-cover group-hover:scale-110 transition-transform"
                          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        />
                      ) : (
                        <div className="w-full h-full bg-muted flex items-center justify-center">
                          <ShoppingBag className="h-12 w-12 text-muted-foreground" />
                        </div>
                      )}
                    </div>
                  </CardContent>
                  <CardHeader>
                    <CardTitle className="line-clamp-2">{collection.title}</CardTitle>
                    {collection.description && (
                      <p className="text-sm text-muted-foreground line-clamp-3">
                        {collection.description}
                      </p>
                    )}
                    <p className="text-xs text-muted-foreground">
                      Handle: <code className="bg-muted px-1 rounded">{collection.handle}</code>
                    </p>
                  </CardHeader>
                </Card>
              </Link>
            ))}
          </div>
        )}
      </div>
    );
  } catch (error) {
    console.error('Erro ao carregar coleções:', error);
    return (
      <div className="container mx-auto px-4 py-8">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Erro ao carregar coleções</h1>
          <p className="text-muted-foreground">
            Ocorreu um erro ao tentar carregar as coleções.
          </p>
        </div>
      </div>
    );
  }
}

export const metadata = {
  title: 'Coleções',
  description: 'Explore todas as nossas coleções de produtos',
};
