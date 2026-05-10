'use client'

import { motion } from 'framer-motion'
import { cn } from '@/lib/helpers'

export const FeatureCard = ({ title, description, icon, className = '' }) => {
  return (
    <motion.div
      className={cn(
        "group relative overflow-hidden rounded-2xl",
        "bg-white dark:bg-slate-800",
        "border border-slate-200 dark:border-slate-700",
        "p-8 transition-all duration-500",
        "hover:shadow-2xl hover:shadow-blue-500/10 dark:hover:shadow-blue-500/5",
        "hover:border-blue-500/30 dark:hover:border-blue-400/30",
        className
      )}
      whileHover={{ y: -4 }}
      transition={{ duration: 0.3 }}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-blue-500/0 via-purple-500/0 to-blue-500/0 
        group-hover:from-blue-500/5 group-hover:via-purple-500/5 group-hover:to-blue-500/5 
        transition-all duration-500" />
      
      <div className="relative">
        <div className="mb-6 inline-flex items-center justify-center w-14 h-14 rounded-xl 
          bg-gradient-to-br from-blue-500 to-purple-600 text-white shadow-lg shadow-blue-500/30
          group-hover:scale-110 group-hover:rotate-3 transition-transform duration-500">
          <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d={icon} />
          </svg>
        </div>
        
        <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-3 
          group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
          {title}
        </h3>
        
        <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
          {description}
        </p>
      </div>
    </motion.div>
  )
}