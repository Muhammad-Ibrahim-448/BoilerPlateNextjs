'use client'

import { useState, useRef, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { cn } from '@/lib/helpers'
import { useTheme } from '@/context/ThemeContext'

const Dropdown = ({
  trigger,
  children,
  align = 'left',
  className = '',
  width = 'auto',
  offset = 8,
  isOpen: controlledIsOpen,
  onOpenChange,
  closeOnClick = true,
}) => {
  const { theme } = useTheme()
  const isDark = theme === 'dark'
  const [internalIsOpen, setInternalIsOpen] = useState(false)
  const dropdownRef = useRef(null)

  const isOpen = controlledIsOpen !== undefined ? controlledIsOpen : internalIsOpen
  const setIsOpen = onOpenChange || setInternalIsOpen

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false)
      }
    }

    const handleEscape = (event) => {
      if (event.key === 'Escape') {
        setIsOpen(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    document.addEventListener('keydown', handleEscape)
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
      document.removeEventListener('keydown', handleEscape)
    }
  }, [setIsOpen])

  const alignClasses = {
    left: 'left-0',
    right: 'right-0',
    center: 'left-1/2 -translate-x-1/2',
    'start': 'left-0',
    'end': 'right-0',
  }

  const widthClasses = {
    auto: 'w-auto',
    full: 'w-full',
    sm: 'w-40',
    md: 'w-56',
    lg: 'w-72',
    xl: 'w-96',
  }

  const handleTriggerClick = () => {
    setIsOpen(!isOpen)
  }

  const handleItemClick = (callback) => {
    if (closeOnClick) {
      setIsOpen(false)
    }
    if (callback) {
      callback()
    }
  }

  return (
    <div className={cn('relative inline-block text-left', className)} ref={dropdownRef}>
      <div onClick={handleTriggerClick} className="cursor-pointer">
        {typeof trigger === 'function' ? trigger({ isOpen }) : trigger}
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -8, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -8, scale: 0.95 }}
            transition={{ duration: 0.15, ease: [0.25, 0.1, 0.25, 1] }}
            className={cn(
              'absolute z-50 mt-2',
              'rounded-xl',
              'border',
              'shadow-xl',
              'overflow-hidden',
              'theme-transition',
              alignClasses[align],
              widthClasses[width] || 'w-auto',
              'min-w-[180px]',
              isDark 
                ? 'bg-slate-900 border-slate-800 shadow-slate-950/50' 
                : 'bg-white border-slate-200 shadow-slate-200/50'
            )}
            style={{ marginTop: offset }}
          >
            {typeof children === 'function' 
              ? children({ close: () => setIsOpen(false) })
              : children
            }
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

const DropdownItem = ({ 
  children, 
  onClick, 
  className = '', 
  icon: Icon,
  disabled = false,
  danger = false,
  shortcut,
}) => {
  const { theme } = useTheme()
  const isDark = theme === 'dark'

  return (
    <button
      onClick={() => !disabled && onClick?.()}
      disabled={disabled}
      className={cn(
        'flex w-full items-center gap-3 px-4 py-2.5 text-sm',
        'transition-colors duration-150',
        'border-l-2 border-transparent',
        disabled ? 'opacity-50 cursor-not-allowed' : 
          isDark ? 'hover:bg-slate-800/50' : 'hover:bg-slate-100',
        danger 
          ? 'text-rose-600 dark:text-rose-400 hover:border-rose-500' 
          : isDark ? 'text-slate-300 hover:border-blue-400' : 'text-slate-700 hover:border-blue-500',
        className
      )}
      role="menuitem"
    >
      {Icon && (
        <Icon className={cn(
          "h-4 w-4 flex-shrink-0",
          danger ? 'text-rose-500 dark:text-rose-400' : 'text-slate-400 dark:text-slate-500'
        )} />
      )}
      <span className="flex-1 text-left">{children}</span>
      {shortcut && (
        <span className={cn(
          "text-xs",
          isDark ? "text-slate-500" : "text-slate-400"
        )}>
          {shortcut}
        </span>
      )}
    </button>
  )
}

const DropdownDivider = ({ className = '' }) => {
  const { theme } = useTheme()
  const isDark = theme === 'dark'

  return (
    <div className={cn(
      'h-px my-1',
      isDark ? 'bg-slate-700' : 'bg-slate-200',
      className
    )} />
  )
}

const DropdownHeader = ({ children, className = '' }) => {
  const { theme } = useTheme()
  const isDark = theme === 'dark'

  return (
    <div className={cn(
      'px-4 py-2.5 text-sm font-medium',
      isDark ? 'text-slate-400' : 'text-slate-500',
      className
    )}>
      {children}
    </div>
  )
}

export { Dropdown, DropdownItem, DropdownDivider, DropdownHeader }