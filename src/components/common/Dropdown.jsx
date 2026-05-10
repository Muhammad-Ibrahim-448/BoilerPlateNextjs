'use client'

import { useState, useRef, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { cn } from '@/lib/helpers'

export const Dropdown = ({
  trigger,
  children,
  align = 'left',
  className = '',
}) => {
  const [isOpen, setIsOpen] = useState(false)
  const dropdownRef = useRef(null)

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  const alignClasses = {
    left: 'left-0',
    right: 'right-0',
    center: 'left-1/2 -translate-x-1/2',
  }

  return (
    <div className={cn('relative inline-block text-left', className)} ref={dropdownRef}>
      <div onClick={() => setIsOpen(!isOpen)} className="cursor-pointer">
        {trigger}
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 8, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 8, scale: 0.95 }}
            transition={{ duration: 0.2, ease: [0.25, 0.1, 0.25, 1] }}
            className={cn(
              'absolute z-50 mt-2 w-56 rounded-xl',
              'bg-white dark:bg-slate-800',
              'border border-slate-200 dark:border-slate-700',
              'shadow-xl shadow-slate-200/50 dark:shadow-slate-950/50',
              'overflow-hidden',
              alignClasses[align]
            )}
          >
            <div className="py-1" role="menu">
              {children}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export const DropdownItem = ({ children, onClick, className = '', icon: Icon }) => {
  return (
    <button
      onClick={onClick}
      className={cn(
        'flex w-full items-center px-4 py-2.5 text-sm',
        'text-slate-700 dark:text-slate-300',
        'hover:bg-slate-50 dark:hover:bg-slate-700/50',
        'transition-colors',
        className
      )}
      role="menuitem"
    >
      {Icon && <Icon className="mr-3 h-4 w-4 text-slate-400" />}
      {children}
    </button>
  )
}