// components/ui/aurora.tsx
'use client';

import { cn } from './utils';
import { motion } from 'framer-motion';

export const AuroraBackground = ({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        'relative w-full h-full overflow-hidden bg-white',
        className
      )}
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.5, ease: 'easeInOut' }}
        className="absolute -top-32 left-0 w-full h-[200%] bg-gradient-to-tr from-yellow-200 via-yellow-300 to-orange-300 opacity-30 blur-3xl"
      />
      <div className="relative z-10">{children}</div>
    </div>
  );
};
