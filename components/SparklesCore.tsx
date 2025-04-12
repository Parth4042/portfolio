// components/ui/sparkles.tsx
'use client';

import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

export const SparklesCore = ({ children }: { children?: React.ReactNode }) => {
  const [sparkles, setSparkles] = useState<{ id: number; x: number; y: number }[]>([]);

  useEffect(() => {
    const interval = setInterval(() => {
      setSparkles((prev) => [
        ...prev.slice(-30),
        {
          id: Date.now(),
          x: Math.random() * window.innerWidth,
          y: Math.random() * window.innerHeight,
        },
      ]);
    }, 200);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="absolute inset-0 pointer-events-none z-10">
      {sparkles.map((sparkle) => (
        <motion.div
          key={sparkle.id}
          initial={{ opacity: 1, scale: 0.2 }}
          animate={{ opacity: 0, scale: 1.5 }}
          transition={{ duration: 1.5, ease: 'easeOut' }}
          className="absolute w-1 h-1 bg-yellow-400 rounded-full blur-sm"
          style={{ top: sparkle.y, left: sparkle.x }}
        />
      ))}
      {children}
    </div>
  );
};
