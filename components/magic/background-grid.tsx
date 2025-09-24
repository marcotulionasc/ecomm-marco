'use client';

import { cn } from '@/lib/utils';

interface BackgroundGridProps {
  className?: string;
  children?: React.ReactNode;
}

export function BackgroundGrid({ className, children }: BackgroundGridProps) {
  return (
    <div className={cn('relative', className)}>
      <div className="absolute inset-0 bg-grid-pattern opacity-20" />
      <div className="relative z-10">{children}</div>
    </div>
  );
}
