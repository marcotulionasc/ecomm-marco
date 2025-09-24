'use client';

import { useEffect, useRef } from 'react';
import { cn } from '@/lib/utils';

interface SpotlightProps {
  className?: string;
  children?: React.ReactNode;
}

export function Spotlight({ className, children }: SpotlightProps) {
  const divRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!divRef.current) return;

      const { clientX, clientY } = e;
      const { left, top, width, height } = divRef.current.getBoundingClientRect();

      const x = clientX - left;
      const y = clientY - top;

      divRef.current.style.background = `radial-gradient(600px circle at ${x}px ${y}px, rgba(29, 78, 216, 0.15), transparent 40%)`;
    };

    document.addEventListener('mousemove', handleMouseMove);
    return () => document.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div
      ref={divRef}
      className={cn(
        'relative h-full w-full rounded-md bg-background',
        className
      )}
    >
      {children}
    </div>
  );
}
