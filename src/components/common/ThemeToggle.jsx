// src/components/common/ThemeToggle.jsx
'use client'

import { motion } from 'framer-motion'
import { Moon, Sun } from 'lucide-react'
import { useTheme } from '@/context/ThemeContext'
import { cn } from '@/lib/helpers'
import { useThemeClasses } from '@/lib/theme-helpers'

export const ThemeToggle = ({ className = '' }) => {
  const { theme, toggleTheme, mounted } = useTheme()
  const themeClasses = useThemeClasses()
  const isDark = theme === 'dark'

  if (!mounted) {
    return (
      <div className={cn(
        'w-10 h-10 rounded-full bg-slate-200 dark:bg-slate-700 animate-pulse',
        className
      )} />
    )
  }

  return (
    <motion.button
      onClick={toggleTheme}
      className={cn(
        'relative w-12 h-12 rounded-full flex items-center justify-center',
        'transition-all duration-300 ease-in-out',
        'hover:scale-110 active:scale-95',
        isDark 
          ? 'bg-slate-800/80 text-yellow-400 hover:bg-slate-700/80' 
          : 'bg-white/80 text-slate-700 hover:bg-slate-100/80',
        'backdrop-blur-sm border',
        isDark ? 'border-slate-700' : 'border-slate-200',
        className
      )}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      aria-label="Toggle theme"
    >
      <motion.div
        initial={false}
        animate={{ 
          rotate: isDark ? 360 : 0,
          scale: [0.8, 1.2, 1],
        }}
        transition={{ duration: 0.4 }}
        className="relative"
      >
        {isDark ? (
          <Moon className="h-5 w-5" />
        ) : (
          <Sun className="h-5 w-5" />
        )}
      </motion.div>
      
      {/* Ripple effect */}
      <span className="absolute inset-0 rounded-full -z-10">
        <span className={cn(
          "absolute inset-0 rounded-full opacity-0",
          "transition-opacity duration-300",
          isDark ? "bg-blue-500/10" : "bg-yellow-500/10"
        )} />
      </span>
    </motion.button>
  )
}