import { Hero } from '@/components/Hero';
import { CategoryTiles } from '@/components/CategoryTiles';
import { ProductsGrid } from '@/components/ProductsGrid';
import { RoomsInspiration } from '@/components/RoomsInspiration';
import { SocialGallery } from '@/components/SocialGallery';

export default function HomePage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Hero />
      <CategoryTiles />
      <ProductsGrid />
      <RoomsInspiration />
      <SocialGallery />
    </div>
  );
}
