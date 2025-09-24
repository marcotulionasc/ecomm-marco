import { NextRequest, NextResponse } from 'next/server';
import { revalidatePath } from 'next/cache';
import { validateEnv } from '@/lib/config/env';
import { logger } from '@/lib/logger';
import crypto from 'crypto';

const env = validateEnv();

function verifyWebhookSignature(body: string, signature: string, secret: string): boolean {
  const expectedSignature = crypto
    .createHmac('sha256', secret)
    .update(body, 'utf8')
    .digest('base64');

  return crypto.timingSafeEqual(
    Buffer.from(signature, 'base64'),
    Buffer.from(expectedSignature, 'base64')
  );
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.text();
    const signature = request.headers.get('X-Shopify-Hmac-Sha256');

    if (!signature) {
      logger.warn('Webhook request missing HMAC signature');
      return NextResponse.json(
        { error: 'Missing HMAC signature' },
        { status: 401 }
      );
    }

    const isValidSignature = verifyWebhookSignature(
      body,
      signature,
      env.SHOPIFY_WEBHOOK_SECRET
    );

    if (!isValidSignature) {
      logger.warn('Webhook request with invalid HMAC signature');
      return NextResponse.json(
        { error: 'Invalid HMAC signature' },
        { status: 401 }
      );
    }

    const webhookData = JSON.parse(body);
    const topic = request.headers.get('X-Shopify-Topic');

    logger.info('Webhook received', { topic });

    switch (topic) {
      case 'orders/create':
      case 'orders/updated':
        logger.info('Order webhook processed', { orderId: webhookData.id });
        break;

      case 'products/update':
        if (webhookData.handle) {
          revalidatePath(`/produto/${webhookData.handle}`);
          logger.info('Product page revalidated', { handle: webhookData.handle });
        }
        
        if (webhookData.product_type) {
          revalidatePath(`/colecao/${webhookData.product_type.toLowerCase()}`);
          logger.info('Collection page revalidated', { productType: webhookData.product_type });
        }
        break;

      default:
        logger.info('Unhandled webhook topic', { topic });
    }

    return NextResponse.json({ success: true }, { status: 200 });
  } catch (error) {
    logger.error('Webhook processing error', { 
      error: error instanceof Error ? error.message : 'Unknown error' 
    });
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}
