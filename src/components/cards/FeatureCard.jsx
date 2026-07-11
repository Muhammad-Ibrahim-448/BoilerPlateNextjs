// src/components/cards/FeatureCard.jsx
'use client'

import { motion } from 'framer-motion'
import { cn } from '@/lib/helpers'
import { useTheme } from '@/context/ThemeContext'
import { useThemeClasses } from '@/lib/theme-helpers'
import { ArrowRight } from 'lucide-react'

export const FeatureCard = ({ 
  title, 
  description, 
  icon, 
  delay = 0,
  className = '' 
}) => {
  const { theme } = useTheme()
  const themeClasses = useThemeClasses()
  const isDark = theme === 'dark'

  return (
    <motion.div
      className={cn(
        "group relative rounded-xl p-6",
        "transition-all duration-300 ease-in-out",
        "hover:scale-[1.02]",
        isDark 
          ? "bg-slate-900/50 hover:bg-slate-900/80 border border-slate-800/50 hover:border-blue-500/30" 
          : "bg-white hover:bg-slate-50/80 border border-slate-200/60 hover:border-blue-500/20",
        isDark ? "shadow-lg shadow-black/20" : "shadow-sm",
        className
      )}
      whileHover={{ y: -4 }}
      transition={{ duration: 0.25 }}
    >
      <div className="space-y-4">
        {/* Icon - Using centralized theme */}
        <div className={cn(
          "w-10 h-10 rounded-lg flex items-center justify-center",
          "transition-colors duration-300",
          isDark 
            ? "bg-blue-500/10 text-blue-400 group-hover:bg-blue-500/20" 
            : "bg-blue-50 text-blue-600 group-hover:bg-blue-100"
        )}>
          <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d={icon} />
          </svg>
        </div>

        {/* Text - Using centralized theme */}
        <div>
          <h3 className={cn(
            "text-base font-semibold tracking-tight mb-1.5",
            themeClasses.text.primary
          )}>
            {title}
          </h3>
          <p className={cn(
            "text-sm leading-relaxed",
            themeClasses.text.secondary
          )}>
            {description}
          </p>
        </div>

        {/* CTA - Using centralized theme */}
        <motion.div 
          className={cn(
            "inline-flex items-center gap-1 text-sm font-medium",
            "transition-colors duration-300",
            isDark 
              ? "text-slate-300 group-hover:text-blue-400" 
              : "text-slate-400 group-hover:text-blue-600"
          )}
          whileHover={{ x: 2 }}
        >
          Learn more <ArrowRight className="w-3.5 h-3.5" />
        </motion.div>
      </div>
    </motion.div>
  )
}