import type { Metadata } from 'next';
import { Poppins, Montserrat } from 'next/font/google';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { Toaster } from '@/components/ui/toaster';
import './globals.css';

const poppins = Poppins({ 
  subsets: ['latin'], 
  weight: ['400', '500', '600', '700'],
  variable: '--font-poppins' 
});

const montserrat = Montserrat({ 
  subsets: ['latin'], 
  weight: ['700'],
  variable: '--font-montserrat' 
});

export const metadata: Metadata = {
  title: 'Leva Ecom',
  description: 'Descubra Nossa Nova Coleção de Camisetas com Design Único',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR" suppressHydrationWarning>
      <body className={`${poppins.variable} ${montserrat.variable} font-sans antialiased`}>
        <div className="min-h-screen flex flex-col bg-white">
          <Header />
          <main className="flex-1">
            {children}
          </main>
          <Footer />
          <Toaster />
        </div>
      </body>
    </html>
  );
}
