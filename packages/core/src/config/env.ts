import { z } from 'zod';

const envSchema = z.object({
  NEXT_PUBLIC_TENANT_ID: z.string().min(1),
  SHOPIFY_STORE_DOMAIN: z.string().min(1),
  SHOPIFY_STOREFRONT_TOKEN: z.string().min(1),
  SHOPIFY_API_VERSION: z.string().min(1),
  NEXT_PUBLIC_DEFAULT_LOCALE: z.string().min(1),
  NEXT_PUBLIC_CURRENCY: z.string().min(1),
  SHOPIFY_WEBHOOK_SECRET: z.string().min(1),
});

export type EnvConfig = z.infer<typeof envSchema>;

export function validateEnv(): EnvConfig {
  try {
    return envSchema.parse(process.env);
  } catch (error) {
    if (error instanceof z.ZodError) {
      const missingVars = error.errors
        .map((err) => `${err.path.join('.')}: ${err.message}`)
        .join('\n');
      throw new Error(`Environment validation failed:\n${missingVars}`);
    }
    throw error;
  }
}

export const env = validateEnv();
