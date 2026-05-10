'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'
import { cn } from '@/lib/helpers'

export const Input = ({
  label,
  error,
  helperText,
  className = '',
  containerClassName = '',
  id,
  type = 'text',
  icon: Icon,
  ...props
}) => {
  const [isFocused, setIsFocused] = useState(false)
  const inputId = id || Math.random().toString(36).substr(2, 9)

  return (
    <motion.div 
      className={cn('w-full', containerClassName)}
      initial={false}
    >
      {label && (
        <motion.label
          htmlFor={inputId}
          className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2"
          animate={isFocused ? { color: '#3B82F6' } : { color: '#64748B' }}
          transition={{ duration: 0.2 }}
        >
          {label}
        </motion.label>
      )}
      <div className="relative">
        {Icon && (
          <div className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400">
            <Icon className="h-5 w-5" />
          </div>
        )}
        <input
          id={inputId}
          type={type}
          className={cn(
            'w-full px-4 py-3 rounded-xl',
            'bg-white dark:bg-slate-800',
            'border-2 border-slate-200 dark:border-slate-700',
            'text-slate-900 dark:text-slate-100',
            'placeholder-slate-400 dark:placeholder-slate-500',
            'transition-all duration-300',
            'focus:outline-none focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10',
            'hover:border-slate-300 dark:hover:border-slate-600',
            error && 'border-rose-500 focus:border-rose-500 focus:ring-rose-500/10',
            Icon && 'pl-11',
            className
          )}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          {...props}
        />
        <motion.div
          className="absolute bottom-0 left-0 h-0.5 bg-blue-500"
          initial={{ width: 0 }}
          animate={{ width: isFocused ? '100%' : 0 }}
          transition={{ duration: 0.3 }}
        />
      </div>
      {error && (
        <motion.p
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="mt-2 text-sm text-rose-600 dark:text-rose-400"
        >
          {error}
        </motion.p>
      )}
      {helperText && !error && (
        <p className="mt-2 text-sm text-slate-500 dark:text-slate-400">{helperText}</p>
      )}
    </motion.div>
  )
}