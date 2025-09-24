import { getTenantConfig } from '@/lib/config/tenants';
import { validateEnv } from '@/lib/config/env';
import type { TenantConfig } from '@/lib/types/tenant';

const env = validateEnv();

export function getCurrentTenant(): TenantConfig {
  return getTenantConfig(env.NEXT_PUBLIC_TENANT_ID);
}

export function getThemeTokens() {
  const tenant = getCurrentTenant();
  return tenant.themeTokens;
}

export function getThemeCSSVariables() {
  const tokens = getThemeTokens();
  
  return {
    '--background': '0 0% 100%',
    '--foreground': '222.2 84% 4.9%',
    '--card': '0 0% 100%',
    '--card-foreground': '222.2 84% 4.9%',
    '--popover': '0 0% 100%',
    '--popover-foreground': '222.2 84% 4.9%',
    '--primary': '221.2 83.2% 53.3%',
    '--primary-foreground': '210 40% 98%',
    '--secondary': '210 40% 96%',
    '--secondary-foreground': '222.2 84% 4.9%',
    '--muted': '210 40% 96%',
    '--muted-foreground': '215.4 16.3% 46.9%',
    '--accent': '210 40% 96%',
    '--accent-foreground': '222.2 84% 4.9%',
    '--destructive': '0 84.2% 60.2%',
    '--destructive-foreground': '210 40% 98%',
    '--border': '214.3 31.8% 91.4%',
    '--input': '214.3 31.8% 91.4%',
    '--ring': '221.2 83.2% 53.3%',
    '--radius': '0.5rem',
  };
}
