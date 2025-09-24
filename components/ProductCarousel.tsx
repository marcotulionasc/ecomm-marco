import { searchProducts } from '@/lib/shopify/queries';
import { ProductCard } from './ProductCard';
import { BlurFade } from '@/components/magic/blur-fade';

export async function ProductCarousel() {
  try {
    const result = await searchProducts('*', 8);
    const products = result.edges.map((edge: any) => edge.node);

    if (!products.length) {
      return (
        <div className="text-center py-8">
          <p className="text-muted-foreground">Nenhum produto encontrado.</p>
        </div>
      );
    }

    return (
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {products.slice(0, 8).map((product, index) => (
          <BlurFade key={product.id} delay={index * 0.1}>
            <ProductCard product={product} />
          </BlurFade>
        ))}
      </div>
    );
  } catch (error) {
    console.error('Erro ao carregar produtos:', error);
    return (
      <div className="text-center py-8">
        <p className="text-muted-foreground">Erro ao carregar produtos.</p>
      </div>
    );
  }
}
