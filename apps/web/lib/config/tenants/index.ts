import { defaultTenant } from './default';
import type { TenantConfig } from '@ecomm/core';

const tenants: Record<string, TenantConfig> = {
  default: defaultTenant,
};

export function getTenantConfig(tenantId: string): TenantConfig {
  const tenant = tenants[tenantId];
  if (!tenant) {
    throw new Error(`Tenant configuration not found for ID: ${tenantId}`);
  }
  return tenant;
}

export { tenants };
