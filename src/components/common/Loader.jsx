import { cn } from '@/lib/helpers'
import { motion } from 'framer-motion'

const Loader = ({ 
  size = 'md', 
  className = '',
  variant = 'primary',
  text,
}) => {
  const sizes = {
    xs: 'h-3 w-3 border-2',
    sm: 'h-4 w-4 border-2',
    md: 'h-8 w-8 border-3',
    lg: 'h-12 w-12 border-4',
    xl: 'h-16 w-16 border-4',
  }

  const variants = {
    primary: 'border-blue-500',
    white: 'border-white',
    dark: 'border-slate-800 dark:border-white',
  }

  return (
    <div className={cn('flex flex-col items-center gap-3', className)}>
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
        className={cn(
          'rounded-full border-t-transparent',
          sizes[size],
          variants[variant]
        )}
      />
      {text && (
        <span className="text-sm text-slate-500 dark:text-slate-400">{text}</span>
      )}
    </div>
  )
}

const Skeleton = ({ 
  className = '', 
  lines = 1, 
  width = '100%',
  height = 'h-4',
  rounded = 'rounded-lg',
}) => {
  return (
    <div className={cn('animate-pulse space-y-2', className)} style={{ width }}>
      {Array.from({ length: lines }).map((_, i) => (
        <div
          key={i}
          className={cn(
            height,
            rounded,
            'bg-slate-200 dark:bg-slate-700',
            i === lines - 1 && lines > 1 ? 'w-3/4' : 'w-full'
          )}
        />
      ))}
    </div>
  )
}

const Spinner = ({ size = 'md', className = '' }) => {
  const sizes = {
    sm: 'h-4 w-4',
    md: 'h-6 w-6',
    lg: 'h-8 w-8',
    xl: 'h-12 w-12',
  }

  return (
    <svg
      className={cn('animate-spin text-blue-600', sizes[size], className)}
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
    >
      <circle
        className="opacity-25"
        cx="12"
        cy="12"
        r="10"
        stroke="currentColor"
        strokeWidth="4"
      />
      <path
        className="opacity-75"
        fill="currentColor"
        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
      />
    </svg>
  )
}

export { Loader, Skeleton, Spinner }