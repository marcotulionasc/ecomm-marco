import * as React from 'react';
import { cn } from '../lib/utils';
import { Button } from './button';

interface NavbarProps extends React.HTMLAttributes<HTMLElement> {
  children?: React.ReactNode;
}

const Navbar = React.forwardRef<HTMLElement, NavbarProps>(
  ({ className, children, ...props }, ref) => (
    <nav
      ref={ref}
      className={cn(
        'flex h-16 items-center justify-between border-b bg-background px-4',
        className
      )}
      {...props}
    >
      {children}
    </nav>
  )
);
Navbar.displayName = 'Navbar';

const NavbarBrand = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, children, ...props }, ref) => (
  <div ref={ref} className={cn('flex items-center', className)} {...props}>
    {children}
  </div>
));
NavbarBrand.displayName = 'NavbarBrand';

const NavbarNav = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, children, ...props }, ref) => (
  <div
    ref={ref}
    className={cn('flex items-center space-x-4', className)}
    {...props}
  >
    {children}
  </div>
));
NavbarNav.displayName = 'NavbarNav';

const NavbarLink = React.forwardRef<
  HTMLAnchorElement,
  React.AnchorHTMLAttributes<HTMLAnchorElement> & {
    active?: boolean;
  }
>(({ className, active, ...props }, ref) => (
  <a
    ref={ref}
    className={cn(
      'text-sm font-medium transition-colors hover:text-primary',
      active ? 'text-foreground' : 'text-muted-foreground',
      className
    )}
    {...props}
  />
));
NavbarLink.displayName = 'NavbarLink';

export { Navbar, NavbarBrand, NavbarNav, NavbarLink };
