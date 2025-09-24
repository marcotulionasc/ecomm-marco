'use client';

import { useState } from 'react';
import { searchProducts } from '@/lib/shopify/queries';
import { ProductGrid } from '@/components/ProductGrid';
import { Input } from '@/components/ui/input';
import { Search } from 'lucide-react';
import type { Product } from '@/lib/types/shopify';

export default function SearchPage() {
  const [query, setQuery] = useState('');
  const [products, setProducts] = useState<Product[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [hasSearched, setHasSearched] = useState(false);

  const handleSearch = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!query.trim()) return;

    setIsLoading(true);
    setHasSearched(true);

    try {
      const result = await searchProducts(query.trim(), 20);
      setProducts(result.edges.map((edge: any) => edge.node));
    } catch (error) {
      console.error('Search error:', error);
      setProducts([]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="container mx-auto px-4 py-8 space-y-8">
      <div>
        <h1 className="text-4xl font-bold mb-4">Buscar Produtos</h1>
        <form onSubmit={handleSearch} className="flex gap-2">
          <Input
            type="text"
            placeholder="Digite o que você está procurando..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="flex-1"
          />
          <button
            type="submit"
            disabled={isLoading || !query.trim()}
            className="px-4 py-2 bg-primary text-primary-foreground rounded-md hover:bg-primary/90 disabled:opacity-50"
          >
            <Search className="w-4 h-4" />
          </button>
        </form>
      </div>

      {isLoading && (
        <div className="text-center py-8">
          <p>Buscando produtos...</p>
        </div>
      )}

      {hasSearched && !isLoading && (
        <div>
          <h2 className="text-2xl font-semibold mb-4">
            Resultados da busca{query && ` para "${query}"`}
          </h2>
          <ProductGrid products={products} />
        </div>
      )}

      {!hasSearched && (
        <div className="text-center py-12">
          <p className="text-muted-foreground">
            Digite um termo de busca para encontrar produtos.
          </p>
        </div>
      )}
    </div>
  );
}
