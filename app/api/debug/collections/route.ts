import { NextResponse } from 'next/server';
import { getCollections, getProductsByCollection } from '@/lib/shopify/queries';

export async function GET() {
  try {
    const collections = await getCollections(10);
    
    const collectionsWithProductCount = await Promise.all(
      collections.map(async (collection) => {
        try {
          const collectionWithProducts = await getProductsByCollection(collection.handle, 50);
          return {
            id: collection.id,
            handle: collection.handle,
            title: collection.title,
            productCount: collectionWithProducts?.products?.edges?.length || 0,
          };
        } catch (error) {
          return {
            id: collection.id,
            handle: collection.handle,
            title: collection.title,
            productCount: 'ERRO',
            error: error instanceof Error ? error.message : 'Unknown error',
          };
        }
      })
    );

    return NextResponse.json({
      success: true,
      collections: collectionsWithProductCount,
      timestamp: new Date().toISOString(),
    });
  } catch (error) {
    return NextResponse.json({
      success: false,
      error: error instanceof Error ? error.message : 'Unknown error',
      timestamp: new Date().toISOString(),
    });
  }
}
