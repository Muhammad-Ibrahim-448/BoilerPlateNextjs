'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { useEffect } from 'react'
import { X } from 'lucide-react'
import { Button } from './Button'
import { cn } from '@/lib/helpers'
import { useTheme } from '@/context/ThemeContext'

const sizes = {
  sm: 'max-w-md',
  md: 'max-w-lg',
  lg: 'max-w-2xl',
  xl: 'max-w-4xl',
  '2xl': 'max-w-6xl',
  full: 'max-w-full mx-4',
}

const Modal = ({
  isOpen,
  onClose,
  title,
  children,
  footer,
  size = 'md',
  showCloseButton = true,
  closeOnOverlayClick = true,
  className = '',
  overlayClassName = '',
  contentClassName = '',
}) => {
  const { theme } = useTheme()
  const isDark = theme === 'dark'

  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape') onClose()
    }
    
    if (isOpen) {
      document.addEventListener('keydown', handleEscape)
      document.body.style.overflow = 'hidden'
    }
    
    return () => {
      document.removeEventListener('keydown', handleEscape)
      document.body.style.overflow = 'unset'
    }
  }, [isOpen, onClose])

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className={cn(
              'fixed inset-0 bg-slate-900/60 backdrop-blur-sm',
              overlayClassName
            )}
            onClick={closeOnOverlayClick ? onClose : undefined}
          />
          
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ duration: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
            className={cn(
              'relative w-full',
              sizes[size],
              'rounded-2xl',
              'border',
              'shadow-2xl',
              'overflow-hidden z-10',
              'theme-transition',
              isDark 
                ? 'bg-slate-900 border-slate-800 shadow-slate-950/50' 
                : 'bg-white border-slate-200 shadow-slate-900/20',
              className
            )}
          >
            {title && (
              <div className={cn(
                "flex items-center justify-between px-6 py-4 border-b",
                isDark 
                  ? "border-slate-800 bg-slate-800/50" 
                  : "border-slate-200 bg-slate-50/50"
              )}>
                <motion.h3 
                  className={cn(
                    "text-lg font-semibold",
                    isDark ? "text-white" : "text-slate-900"
                  )}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.1 }}
                >
                  {title}
                </motion.h3>
                {showCloseButton && (
                  <motion.button
                    whileHover={{ scale: 1.1, rotate: 90 }}
                    whileTap={{ scale: 0.9 }}
                    onClick={onClose}
                    className={cn(
                      "p-2 rounded-lg transition-colors",
                      isDark 
                        ? "text-slate-400 hover:text-slate-200 hover:bg-slate-700" 
                        : "text-slate-400 hover:text-slate-600 hover:bg-slate-100"
                    )}
                  >
                    <X className="h-5 w-5" />
                  </motion.button>
                )}
              </div>
            )}
            
            <motion.div 
              className={cn('px-6 py-6', contentClassName)}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.15 }}
            >
              {children}
            </motion.div>
            
            {footer && (
              <motion.div 
                className={cn(
                  'flex justify-end gap-3 px-6 py-4',
                  'border-t',
                  isDark 
                    ? 'bg-slate-800/50 border-slate-800' 
                    : 'bg-slate-50/50 border-slate-200'
                )}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
              >
                {footer}
              </motion.div>
            )}
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  )
}

const ModalActions = ({ children, className = '' }) => {
  return (
    <div className={cn('flex flex-col sm:flex-row gap-3', className)}>
      {children}
    </div>
  )
}

export { Modal, ModalActions }