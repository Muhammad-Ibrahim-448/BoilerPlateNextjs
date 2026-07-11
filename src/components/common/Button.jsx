// src/components/common/Button.jsx
'use client'

import { motion } from 'framer-motion'
import { Loader2 } from 'lucide-react'
import { cn } from '@/lib/helpers'
import { forwardRef } from 'react'
import { useTheme } from '@/context/ThemeContext'
import { useThemeClasses } from '@/lib/theme-helpers'

// Define variant styles centrally
const variantStyles = {
  primary: 'bg-blue-600 text-white hover:bg-blue-700 shadow-lg shadow-blue-500/25 hover:shadow-blue-500/40',
  secondary: 'bg-white text-slate-900 border border-slate-200 hover:bg-slate-50 shadow-sm',
  success: 'bg-emerald-600 text-white hover:bg-emerald-700 shadow-lg shadow-emerald-500/25 hover:shadow-emerald-500/40',
  danger: 'bg-rose-600 text-white hover:bg-rose-700 shadow-lg shadow-rose-500/25 hover:shadow-rose-500/40',
  warning: 'bg-amber-500 text-white hover:bg-amber-600 shadow-lg shadow-amber-500/25 hover:shadow-amber-500/40',
  ghost: 'bg-transparent text-slate-700 hover:bg-slate-100',
  outline: 'bg-transparent border-2 border-slate-600 text-slate-700 hover:border-slate-800 hover:bg-slate-50',
  premium: 'bg-gradient-to-r from-violet-600 to-purple-600 text-white hover:from-violet-700 hover:to-purple-700 shadow-lg shadow-purple-500/25 hover:shadow-purple-500/40',
  glass: 'glass text-slate-900 hover:bg-white/20',
  dark: 'bg-slate-900 text-white hover:bg-slate-800 shadow-lg shadow-slate-900/25',
}

const sizes = {
  xs: 'px-3 py-1.5 text-xs rounded-lg',
  sm: 'px-4 py-2 text-sm rounded-xl',
  md: 'px-6 py-2.5 text-base rounded-xl',
  lg: 'px-8 py-3 text-lg rounded-xl',
  xl: 'px-10 py-4 text-xl rounded-2xl',
}

const Button = forwardRef(({
  children,
  variant = 'primary',
  size = 'md',
  loading = false,
  disabled = false,
  className = '',
  type = 'button',
  onClick,
  icon: Icon,
  iconPosition = 'left',
  fullWidth = false,
  ...props
}, ref) => {
  const { theme } = useTheme()
  const themeClasses = useThemeClasses()
  const isDark = theme === 'dark'

  // Get dynamic variant styles based on theme
  const getVariantStyles = () => {
    // Handle outline specifically for better visibility
    if (variant === 'outline') {
      return isDark 
        ? 'bg-transparent border-2 border-slate-600 text-slate-300 hover:border-slate-500 hover:bg-slate-800'
        : 'bg-transparent border-2 border-slate-600 text-slate-700 hover:border-slate-800 hover:bg-slate-100'
    }

    // For dark theme specific adjustments
    if (isDark) {
      switch (variant) {
        case 'primary':
          return 'bg-blue-600 text-white hover:bg-blue-700 shadow-lg shadow-blue-500/20'
        case 'secondary':
          return 'bg-slate-800 text-white border border-slate-700 hover:bg-slate-700 shadow-sm'
        case 'ghost':
          return 'bg-transparent text-slate-300 hover:bg-slate-800'
        case 'glass':
          return 'glass text-white hover:bg-white/5'
        case 'dark':
          return 'bg-slate-950 text-white hover:bg-slate-900 shadow-lg shadow-slate-950/50'
        default:
          return variantStyles[variant] || variantStyles.primary
      }
    }

    // For light theme or default
    return variantStyles[variant] || variantStyles.primary
  }

  const variantStyle = getVariantStyles()

  return (
    <motion.button
      ref={ref}
      type={type}
      disabled={disabled || loading}
      onClick={onClick}
      whileHover={{ scale: disabled ? 1 : 1.02, y: disabled ? 0 : -1 }}
      whileTap={{ scale: disabled ? 1 : 0.98 }}
      transition={{ duration: 0.2, ease: [0.25, 0.1, 0.25, 1] }}
      className={cn(
        'relative inline-flex items-center justify-center gap-2',
        'font-semibold',
        'transition-all duration-300',
        'focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:ring-offset-2',
        'focus:ring-offset-white dark:focus:ring-offset-slate-900',
        'disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none',
        variantStyle,
        sizes[size],
        fullWidth && 'w-full',
        className
      )}
      {...props}
    >
      {loading && (
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          className="mr-1"
        >
          <Loader2 className="h-4 w-4 animate-spin" />
        </motion.div>
      )}
      {Icon && iconPosition === 'left' && !loading && (
        <Icon className={cn(
          'h-4 w-4',
          children && 'mr-1',
          variant === 'ghost' || variant === 'outline' 
            ? isDark ? 'text-slate-300' : 'text-slate-700'
            : 'text-white'
        )} />
      )}
      <span className={loading ? 'opacity-90' : ''}>{children}</span>
      {Icon && iconPosition === 'right' && !loading && (
        <Icon className={cn(
          'h-4 w-4',
          children && 'ml-1',
          variant === 'ghost' || variant === 'outline' 
            ? isDark ? 'text-slate-300' : 'text-slate-700'
            : 'text-white'
        )} />
      )}
    </motion.button>
  )
})

Button.displayName = 'Button'

export { Button }