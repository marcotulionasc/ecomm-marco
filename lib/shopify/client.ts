import { validateEnv } from '@/lib/config/env';
import type { ShopifyResponse } from '@/lib/types/shopify';

const env = validateEnv();

export class ShopifyClient {
  private storeDomain: string;
  private storefrontToken: string;
  private apiVersion: string;

  constructor() {
    this.storeDomain = env.SHOPIFY_STORE_DOMAIN;
    this.storefrontToken = env.SHOPIFY_STOREFRONT_TOKEN;
    this.apiVersion = env.SHOPIFY_API_VERSION;
  }

  private getEndpoint(): string {
    return `https://${this.storeDomain}/api/${this.apiVersion}/graphql.json`;
  }

  private getHeaders() {
    return {
      'Content-Type': 'application/json',
      'X-Shopify-Storefront-Access-Token': this.storefrontToken,
    };
  }

  async query<T>(query: string, variables?: Record<string, any>): Promise<ShopifyResponse<T>> {
    try {
      const response = await fetch(this.getEndpoint(), {
        method: 'POST',
        headers: this.getHeaders(),
        body: JSON.stringify({
          query,
          variables: variables || {},
        }),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Shopify GraphQL error:', error);
      throw error;
    }
  }
}

export const shopifyClient = new ShopifyClient();
