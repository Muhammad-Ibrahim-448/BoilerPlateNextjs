'use client';

import { cn } from '@/lib/helpers';
import { motion } from 'framer-motion';

const sizes = {
  xs: 'h-8 w-8 text-xs',
  sm: 'h-10 w-10 text-sm',
  md: 'h-12 w-12 text-base',
  lg: 'h-14 w-14 text-lg',
  xl: 'h-20 w-20 text-xl',
};

export const Avatar = ({ 
  src, 
  alt, 
  fallback, 
  size = 'md', 
  className,
  ...props 
}) => {
  return (
    <motion.div 
      className={cn(
        "relative inline-flex items-center justify-center rounded-full overflow-hidden flex-shrink-0",
        "bg-gradient-to-br from-blue-500 to-purple-600",
        "ring-2 ring-white dark:ring-slate-800 shadow-lg",
        sizes[size],
        className
      )}
      whileHover={{ scale: 1.05 }}
      transition={{ type: 'spring', stiffness: 300, damping: 20 }}
      {...props}
    >
      {src ? (
        <img 
          src={src} 
          alt={alt || 'Avatar'} 
          className="h-full w-full object-cover"
          onError={(e) => {
            e.target.style.display = 'none';
            e.target.nextSibling.style.display = 'flex';
          }}
        />
      ) : null}
      <span 
        className={cn(
          "font-semibold text-white",
          src && "hidden"
        )}
        style={{ display: src ? 'none' : 'flex' }}
      >
        {fallback || alt?.charAt(0) || '?'}
      </span>
    </motion.div>
  );
};