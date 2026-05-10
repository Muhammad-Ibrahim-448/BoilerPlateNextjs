'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { useTheme } from '@/context/ThemeContext'
import { Sun, Moon } from 'lucide-react'
import { cn } from '@/lib/helpers'

export const ThemeToggle = ({ className = '' }) => {
  const { theme, toggleTheme, mounted } = useTheme()

  if (!mounted) {
    return (
      <div className={cn('w-10 h-10 rounded-xl bg-slate-200 dark:bg-slate-700 animate-pulse', className)} />
    )
  }

  const isDark = theme === 'dark'

  return (
    <motion.button
      onClick={toggleTheme}
      className={cn(
        'relative w-10 h-10 rounded-xl',
        'flex items-center justify-center',
        'transition-colors duration-300',
        'focus:outline-none focus:ring-2 focus:ring-blue-500/50',
        isDark 
          ? 'bg-slate-800 text-blue-400 hover:bg-slate-700' 
          : 'bg-white text-amber-500 hover:bg-slate-50 border border-slate-200',
        className
      )}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
    >
      <AnimatePresence mode="wait" initial={false}>
        {isDark ? (
          <motion.div
            key="moon"
            initial={{ scale: 0, rotate: -90 }}
            animate={{ scale: 1, rotate: 0 }}
            exit={{ scale: 0, rotate: 90 }}
            transition={{ duration: 0.2 }}
          >
            <Moon className="w-5 h-5" />
          </motion.div>
        ) : (
          <motion.div
            key="sun"
            initial={{ scale: 0, rotate: 90 }}
            animate={{ scale: 1, rotate: 0 }}
            exit={{ scale: 0, rotate: -90 }}
            transition={{ duration: 0.2 }}
          >
            <Sun className="w-5 h-5" />
          </motion.div>
        )}
      </AnimatePresence>
    </motion.button>
  )
}