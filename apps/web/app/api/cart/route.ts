import { NextRequest, NextResponse } from 'next/server';
import { cartCreate, cartLinesAdd, cartLinesUpdate, cartLinesRemove } from '@/lib/shopify/cart';
import { logger } from '@/lib/logger';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { action, cartId, lines, lineIds } = body;

    let result;

    switch (action) {
      case 'create':
        result = await cartCreate();
        logger.info('Cart created', { cartId: result.id });
        return NextResponse.json({
          success: true,
          cartId: result.id,
          cart: result,
        });

      case 'add':
        if (!cartId || !lines) {
          return NextResponse.json(
            { success: false, error: 'Missing cartId or lines' },
            { status: 400 }
          );
        }
        result = await cartLinesAdd(cartId, lines);
        logger.info('Items added to cart', { cartId, linesCount: lines.length });
        return NextResponse.json({
          success: true,
          cart: result,
        });

      case 'update':
        if (!cartId || !lines) {
          return NextResponse.json(
            { success: false, error: 'Missing cartId or lines' },
            { status: 400 }
          );
        }
        result = await cartLinesUpdate(cartId, lines);
        logger.info('Cart updated', { cartId, linesCount: lines.length });
        return NextResponse.json({
          success: true,
          cart: result,
        });

      case 'remove':
        if (!cartId || !lineIds) {
          return NextResponse.json(
            { success: false, error: 'Missing cartId or lineIds' },
            { status: 400 }
          );
        }
        result = await cartLinesRemove(cartId, lineIds);
        logger.info('Items removed from cart', { cartId, lineIdsCount: lineIds.length });
        return NextResponse.json({
          success: true,
          cart: result,
        });

      default:
        return NextResponse.json(
          { success: false, error: 'Invalid action' },
          { status: 400 }
        );
    }
  } catch (error) {
    logger.error('Cart API error', { error: error instanceof Error ? error.message : 'Unknown error' });
    return NextResponse.json(
      { success: false, error: 'Internal server error' },
      { status: 500 }
    );
  }
}
