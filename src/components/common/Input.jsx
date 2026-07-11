// src/components/common/Input.jsx
'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { useState } from 'react'
import { cn } from '@/lib/helpers'
import { Eye, EyeOff, AlertCircle, CheckCircle } from 'lucide-react'
import { useTheme } from '@/context/ThemeContext'
import { useInputStyles } from '@/lib/theme-helpers'

export const Input = ({
  label,
  error,
  success,
  helperText,
  className = '',
  containerClassName = '',
  id,
  type = 'text',
  icon: Icon,
  iconPosition = 'left',
  required = false,
  disabled = false,
  placeholder,
  value,
  onChange,
  onFocus,
  onBlur,
  ...props
}) => {
  const { theme } = useTheme()
  const inputStyles = useInputStyles()
  const isDark = theme === 'dark'
  const [isFocused, setIsFocused] = useState(false)
  const [showPassword, setShowPassword] = useState(false)
  const inputId = id || Math.random().toString(36).substr(2, 9)

  const isPassword = type === 'password'
  const inputType = isPassword ? (showPassword ? 'text' : 'password') : type

  const handleFocus = (e) => {
    setIsFocused(true)
    onFocus?.(e)
  }

  const handleBlur = (e) => {
    setIsFocused(false)
    onBlur?.(e)
  }

  // Get input container styles based on state
  const getInputContainerStyles = () => {
    if (error) {
      return inputStyles.error
    }
    if (isFocused) {
      return inputStyles.focused
    }
    return inputStyles.default
  }

  // Get icon color based on state
  const getIconColor = () => {
    if (error) return 'text-rose-500'
    if (isFocused) return 'text-blue-500'
    return isDark ? 'text-slate-500' : 'text-slate-400'
  }

  // Get label color based on state
  const getLabelColor = () => {
    if (error) return 'text-rose-600 dark:text-rose-400'
    if (isFocused) return 'text-blue-600 dark:text-blue-400'
    return isDark ? 'text-slate-300' : 'text-slate-700'
  }

  const inputContainerStyles = getInputContainerStyles()

  return (
    <motion.div 
      className={cn('w-full', containerClassName)}
      initial={false}
    >
      {label && (
        <label
          htmlFor={inputId}
          className={cn(
            'block text-sm font-semibold mb-2 transition-colors duration-200',
            getLabelColor()
          )}
        >
          {label}
          {required && <span className="text-rose-500 ml-1">*</span>}
        </label>
      )}
      
      <div className="relative">
        {Icon && iconPosition === 'left' && (
          <div className={cn(
            'absolute left-4 top-1/2 -translate-y-1/2 transition-colors duration-200',
            getIconColor()
          )}>
            <Icon className="h-5 w-5" />
          </div>
        )}
        
        <input
          id={inputId}
          type={inputType}
          disabled={disabled}
          required={required}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          onFocus={handleFocus}
          onBlur={handleBlur}
          className={cn(
            'w-full px-4 py-3.5 rounded-xl',
            'transition-all duration-200',
            'focus:outline-none',
            'disabled:opacity-50 disabled:cursor-not-allowed',
            
            // Dynamic styles based on state
            inputContainerStyles,
            
            // Icon padding
            Icon && iconPosition === 'left' && 'pl-11',
            (Icon && iconPosition === 'right') || isPassword || success ? 'pr-11' : '',
            className
          )}
          {...props}
        />
        
        {Icon && iconPosition === 'right' && (
          <div className={cn(
            'absolute right-4 top-1/2 -translate-y-1/2 transition-colors duration-200',
            getIconColor()
          )}>
            <Icon className="h-5 w-5" />
          </div>
        )}
        
        {isPassword && (
          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            className={cn(
              'absolute right-4 top-1/2 -translate-y-1/2 transition-colors duration-200',
              'focus:outline-none focus:ring-2 focus:ring-blue-500/50 rounded-lg p-1',
              isDark 
                ? 'text-slate-500 hover:text-slate-300' 
                : 'text-slate-400 hover:text-slate-600'
            )}
            aria-label={showPassword ? 'Hide password' : 'Show password'}
          >
            {showPassword ? (
              <EyeOff className="h-5 w-5" />
            ) : (
              <Eye className="h-5 w-5" />
            )}
          </button>
        )}
        
        {success && (
          <div className="absolute right-4 top-1/2 -translate-y-1/2 text-emerald-500">
            <CheckCircle className="h-5 w-5" />
          </div>
        )}
      </div>
      
      <AnimatePresence>
        {error && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            className="mt-2 flex items-center gap-1.5 text-sm text-rose-600 dark:text-rose-400"
          >
            <AlertCircle className="h-4 w-4 flex-shrink-0" />
            <span>{error}</span>
          </motion.div>
        )}
        {success && !error && (
          <motion.p
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            className="mt-2 text-sm text-emerald-600 dark:text-emerald-400"
          >
            {success}
          </motion.p>
        )}
        {helperText && !error && !success && (
          <p className={cn(
            "mt-2 text-sm",
            isDark ? "text-slate-400" : "text-slate-500"
          )}>
            {helperText}
          </p>
        )}
      </AnimatePresence>
    </motion.div>
  )
}

Input.displayName = 'Input'

export default Input