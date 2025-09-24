import * as React from 'react';
import { cn } from '../lib/utils';

interface FooterProps extends React.HTMLAttributes<HTMLElement> {
  children?: React.ReactNode;
}

const Footer = React.forwardRef<HTMLElement, FooterProps>(
  ({ className, children, ...props }, ref) => (
    <footer
      ref={ref}
      className={cn(
        'border-t bg-background px-4 py-8',
        className
      )}
      {...props}
    >
      {children}
    </footer>
  )
);
Footer.displayName = 'Footer';

const FooterContent = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, children, ...props }, ref) => (
  <div
    ref={ref}
    className={cn('container mx-auto grid grid-cols-1 gap-8 md:grid-cols-4', className)}
    {...props}
  >
    {children}
  </div>
));
FooterContent.displayName = 'FooterContent';

const FooterSection = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, children, ...props }, ref) => (
  <div ref={ref} className={cn('space-y-4', className)} {...props}>
    {children}
  </div>
));
FooterSection.displayName = 'FooterSection';

const FooterTitle = React.forwardRef<
  HTMLHeadingElement,
  React.HTMLAttributes<HTMLHeadingElement>
>(({ className, children, ...props }, ref) => (
  <h3
    ref={ref}
    className={cn('text-sm font-semibold', className)}
    {...props}
  >
    {children}
  </h3>
));
FooterTitle.displayName = 'FooterTitle';

const FooterLinks = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, children, ...props }, ref) => (
  <div ref={ref} className={cn('space-y-2', className)} {...props}>
    {children}
  </div>
));
FooterLinks.displayName = 'FooterLinks';

const FooterLink = React.forwardRef<
  HTMLAnchorElement,
  React.AnchorHTMLAttributes<HTMLAnchorElement>
>(({ className, ...props }, ref) => (
  <a
    ref={ref}
    className={cn('text-sm text-muted-foreground hover:text-foreground', className)}
    {...props}
  />
));
FooterLink.displayName = 'FooterLink';

export { Footer, FooterContent, FooterSection, FooterTitle, FooterLinks, FooterLink };
