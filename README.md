# E-commerce Monorepo

Monorepo com Next.js 14 para e-commerce white label usando Shopify Storefront API.

## Estrutura

```
├── apps/
│   └── web/                 # App Next.js 14
├── packages/
│   ├── core/               # Tipos, utilitários e configuração
│   └── ui/                 # Design system com shadcn/ui
└── ...
```

## Configuração

1. Copie o arquivo de exemplo:
```bash
cp apps/web/env.example apps/web/.env.local
```

2. Configure as variáveis de ambiente:
```env
NEXT_PUBLIC_TENANT_ID=default
SHOPIFY_STORE_DOMAIN=loja-exemplo.myshopify.com
SHOPIFY_STOREFRONT_TOKEN=xxxxx
SHOPIFY_API_VERSION=2025-01
NEXT_PUBLIC_DEFAULT_LOCALE=pt-BR
NEXT_PUBLIC_CURRENCY=BRL
SHOPIFY_WEBHOOK_SECRET=xxxxx
```

## Instalação

```bash
yarn install
```

## Desenvolvimento

```bash
yarn dev
```

## Scripts

- `yarn dev` - Inicia o servidor de desenvolvimento
- `yarn build` - Build para produção
- `yarn start` - Inicia o servidor de produção
- `yarn lint` - Executa o linter
- `yarn typecheck` - Verifica tipos TypeScript

## Funcionalidades

- ✅ Multi-tenant por configuração .env
- ✅ Integração com Shopify Storefront API
- ✅ Sistema de tema white label
- ✅ Carrinho e checkout
- ✅ Webhooks com validação HMAC
- ✅ ISR (Incremental Static Regeneration)
- ✅ SEO básico
- ✅ Design system com shadcn/ui
