// src/components/common/Badge.jsx
'use client'

import { cn } from '@/lib/helpers'
import { forwardRef } from 'react'
import { useTheme } from '@/context/ThemeContext'
import { useBadgeStyles } from '@/lib/theme-helpers'

const variants = {
  primary: 'bg-blue-100 text-blue-800 dark:bg-blue-500/20 dark:text-blue-400 border-blue-200 dark:border-blue-500/20',
  success: 'bg-emerald-100 text-emerald-800 dark:bg-emerald-500/20 dark:text-emerald-400 border-emerald-200 dark:border-emerald-500/20',
  warning: 'bg-amber-100 text-amber-800 dark:bg-amber-500/20 dark:text-amber-400 border-amber-200 dark:border-amber-500/20',
  danger: 'bg-rose-100 text-rose-800 dark:bg-rose-500/20 dark:text-rose-400 border-rose-200 dark:border-rose-500/20',
  info: 'bg-cyan-100 text-cyan-800 dark:bg-cyan-500/20 dark:text-cyan-400 border-cyan-200 dark:border-cyan-500/20',
  neutral: 'bg-slate-100 text-slate-800 dark:bg-slate-800 dark:text-slate-300 border-slate-200 dark:border-slate-700',
  premium: 'bg-gradient-to-r from-purple-500 to-pink-500 text-white border-transparent shadow-lg shadow-purple-500/25',
  outline: 'bg-transparent border-2 border-current text-slate-700 dark:text-slate-300',
  dot: 'bg-transparent border-0 text-slate-700 dark:text-slate-300',
}

const sizes = {
  xs: 'px-2 py-0.5 text-[10px] leading-4',
  sm: 'px-2.5 py-0.5 text-xs',
  md: 'px-3 py-1 text-sm',
  lg: 'px-4 py-1.5 text-base',
}

const Badge = forwardRef(({
  children,
  variant = 'neutral',
  size = 'md',
  className = '',
  dot = false,
  removable = false,
  onRemove,
  ...props
}, ref) => {
  const { theme } = useTheme()
  const isDark = theme === 'dark'
  const badgeStyles = useBadgeStyles()

  // Get dot color based on variant
  const getDotColor = () => {
    const colors = {
      primary: 'bg-blue-500',
      success: 'bg-emerald-500',
      warning: 'bg-amber-500',
      danger: 'bg-rose-500',
      info: 'bg-cyan-500',
      neutral: 'bg-slate-500',
      premium: 'bg-white',
      outline: isDark ? 'bg-slate-300' : 'bg-slate-700',
      dot: isDark ? 'bg-slate-300' : 'bg-slate-700',
    }
    return colors[variant] || colors.neutral
  }

  return (
    <span
      ref={ref}
      className={cn(
        'inline-flex items-center gap-1.5 font-medium rounded-full border',
        variants[variant],
        sizes[size],
        dot && 'pl-2',
        badgeStyles.base,
        className
      )}
      {...props}
    >
      {dot && (
        <span className={cn(
          'h-2 w-2 rounded-full flex-shrink-0',
          getDotColor()
        )} />
      )}
      {children}
      {removable && (
        <button
          onClick={onRemove}
          className={cn(
            "ml-1 transition-opacity hover:opacity-70",
            "focus:outline-none focus:ring-2 focus:ring-offset-2",
            variant === 'premium' 
              ? "focus:ring-white/50" 
              : "focus:ring-blue-500/50"
          )}
          aria-label="Remove badge"
        >
          <svg className="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      )}
    </span>
  )
})

Badge.displayName = 'Badge'

export { Badge }