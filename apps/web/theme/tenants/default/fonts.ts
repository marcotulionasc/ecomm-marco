import { Inter } from 'next/font/google';

export const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

export const fonts = {
  sans: [inter.variable, 'system-ui', 'sans-serif'],
  serif: ['Georgia', 'serif'],
  mono: ['JetBrains Mono', 'monospace'],
};
