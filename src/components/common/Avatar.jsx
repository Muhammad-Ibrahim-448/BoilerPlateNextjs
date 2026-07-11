'use client'

import { cn } from '@/lib/helpers'
import { motion } from 'framer-motion'
import { useState } from 'react'

const sizes = {
  xs: 'h-6 w-6 text-xs',
  sm: 'h-8 w-8 text-sm',
  md: 'h-10 w-10 text-base',
  lg: 'h-12 w-12 text-lg',
  xl: 'h-14 w-14 text-xl',
  '2xl': 'h-20 w-20 text-2xl',
}

const Avatar = ({ 
  src, 
  alt, 
  fallback, 
  size = 'md', 
  className,
  status,
  ring = false,
  onClick,
  ...props 
}) => {
  const [imageError, setImageError] = useState(false)

  const statusColors = {
    online: 'bg-emerald-500',
    offline: 'bg-slate-400',
    away: 'bg-amber-500',
    busy: 'bg-rose-500',
  }

  const statusSizes = {
    xs: 'h-1.5 w-1.5',
    sm: 'h-2 w-2',
    md: 'h-2.5 w-2.5',
    lg: 'h-3 w-3',
    xl: 'h-3.5 w-3.5',
    '2xl': 'h-4 w-4',
  }

  const initials = fallback || alt?.split(' ').map(n => n[0]).join('').toUpperCase().slice(0, 2)

  return (
    <motion.div 
      className={cn(
        "relative inline-flex items-center justify-center rounded-full overflow-hidden flex-shrink-0",
        "bg-gradient-to-br from-blue-500 to-purple-600",
        ring && "ring-2 ring-white dark:ring-slate-800 shadow-lg",
        sizes[size],
        onClick && "cursor-pointer",
        className
      )}
      whileHover={onClick ? { scale: 1.05 } : undefined}
      whileTap={onClick ? { scale: 0.95 } : undefined}
      transition={{ type: 'spring', stiffness: 300, damping: 20 }}
      onClick={onClick}
      {...props}
    >
      {src && !imageError ? (
        <img 
          src={src} 
          alt={alt || 'Avatar'} 
          className="h-full w-full object-cover"
          onError={() => setImageError(true)}
        />
      ) : (
        <span className="font-semibold text-white">
          {initials || '?'}
        </span>
      )}
      
      {status && (
        <span className={cn(
          "absolute bottom-0 right-0 rounded-full ring-2 ring-white dark:ring-slate-800",
          statusColors[status],
          statusSizes[size]
        )} />
      )}
    </motion.div>
  )
}

const AvatarGroup = ({ children, max = 4, className = '' }) => {
  const childrenArray = Array.isArray(children) ? children : [children]
  const visible = childrenArray.slice(0, max)
  const remaining = childrenArray.length - max

  return (
    <div className={cn('flex -space-x-2', className)}>
      {visible.map((child, index) => (
        <div key={index} className="ring-2 ring-white dark:ring-slate-800 rounded-full">
          {child}
        </div>
      ))}
      {remaining > 0 && (
        <div className="flex items-center justify-center h-10 w-10 rounded-full bg-slate-200 dark:bg-slate-700 text-sm font-medium text-slate-600 dark:text-slate-300 ring-2 ring-white dark:ring-slate-800">
          +{remaining}
        </div>
      )}
    </div>
  )
}

export { Avatar, AvatarGroup }