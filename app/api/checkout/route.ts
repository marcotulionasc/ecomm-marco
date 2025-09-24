import { NextRequest, NextResponse } from 'next/server';
import { cartQuery } from '@/lib/shopify/cart';
import { logger } from '@/lib/logger';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { cartId } = body;

    if (!cartId) {
      return NextResponse.json(
        { success: false, error: 'Missing cartId' },
        { status: 400 }
      );
    }

    const cart = await cartQuery(cartId);

    if (!cart.checkoutUrl) {
      return NextResponse.json(
        { success: false, error: 'Checkout URL not available' },
        { status: 400 }
      );
    }

    logger.info('Checkout initiated', { cartId });

    return NextResponse.json({
      success: true,
      checkoutUrl: cart.checkoutUrl,
    });
  } catch (error) {
    logger.error('Checkout API error', { error: error instanceof Error ? error.message : 'Unknown error' });
    return NextResponse.json(
      { success: false, error: 'Internal server error' },
      { status: 500 }
    );
  }
}
