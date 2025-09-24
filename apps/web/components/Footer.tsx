import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Separator } from '@/components/ui/separator';
import { Facebook, Instagram, Twitter, Mail } from 'lucide-react';
import Link from 'next/link';

export function Footer() {
  return (
    <footer className="border-t bg-background">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Empresa</h3>
            <div className="space-y-2">
              <Link href="/sobre" className="block text-sm text-muted-foreground hover:text-foreground transition-colors">
                Sobre
              </Link>
              <Link href="/contato" className="block text-sm text-muted-foreground hover:text-foreground transition-colors">
                Contato
              </Link>
              <Link href="/carreiras" className="block text-sm text-muted-foreground hover:text-foreground transition-colors">
                Carreiras
              </Link>
            </div>
          </div>
          
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Suporte</h3>
            <div className="space-y-2">
              <Link href="/ajuda" className="block text-sm text-muted-foreground hover:text-foreground transition-colors">
                Central de Ajuda
              </Link>
              <Link href="/politica-privacidade" className="block text-sm text-muted-foreground hover:text-foreground transition-colors">
                Política de Privacidade
              </Link>
              <Link href="/termos" className="block text-sm text-muted-foreground hover:text-foreground transition-colors">
                Termos de Uso
              </Link>
            </div>
          </div>
          
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Redes Sociais</h3>
            <div className="flex space-x-4">
              <Button variant="ghost" size="icon" asChild>
                <Link href="#" aria-label="Facebook">
                  <Facebook className="h-4 w-4" />
                </Link>
              </Button>
              <Button variant="ghost" size="icon" asChild>
                <Link href="#" aria-label="Instagram">
                  <Instagram className="h-4 w-4" />
                </Link>
              </Button>
              <Button variant="ghost" size="icon" asChild>
                <Link href="#" aria-label="Twitter">
                  <Twitter className="h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
          
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Newsletter</h3>
            <p className="text-sm text-muted-foreground">
              Receba ofertas exclusivas e novidades em primeira mão.
            </p>
            <div className="flex space-x-2">
              <Input
                type="email"
                placeholder="Seu email"
                className="flex-1"
              />
              <Button size="icon">
                <Mail className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
        
        <Separator className="my-8" />
        
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-muted-foreground">
            © 2024 E-commerce Store. Todos os direitos reservados.
          </p>
          <div className="flex items-center space-x-4 mt-4 md:mt-0">
            <span className="text-sm text-muted-foreground">Formas de pagamento:</span>
            <div className="flex space-x-2">
              <div className="w-8 h-5 bg-muted rounded text-xs flex items-center justify-center">
                Visa
              </div>
              <div className="w-8 h-5 bg-muted rounded text-xs flex items-center justify-center">
                MC
              </div>
              <div className="w-8 h-5 bg-muted rounded text-xs flex items-center justify-center">
                PIX
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
