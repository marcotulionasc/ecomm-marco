'use client';

import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

interface BlurFadeProps {
  className?: string;
  children?: React.ReactNode;
  delay?: number;
}

export function BlurFade({ className, children, delay = 0 }: BlurFadeProps) {
  return (
    <motion.div
      initial={{ opacity: 0, filter: 'blur(10px)' }}
      animate={{ opacity: 1, filter: 'blur(0px)' }}
      transition={{ duration: 0.5, delay }}
      className={cn(className)}
    >
      {children}
    </motion.div>
  );
}
