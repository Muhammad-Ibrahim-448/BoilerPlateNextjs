'use client'

import { motion, useMotionValue, useTransform, animate, useSpring } from 'framer-motion'
import { useEffect, useState } from 'react'
import { TrendingUp, TrendingDown, Minus } from 'lucide-react'
import { cn } from '@/lib/helpers'

const useCountUp = (end, duration = 2) => {
  const [count, setCount] = useState(0)
  const motionValue = useMotionValue(0)
  const springValue = useSpring(motionValue, { damping: 30, stiffness: 100 })

  useEffect(() => {
    const controls = animate(motionValue, end, {
      duration,
      ease: [0.25, 0.1, 0.25, 1],
    })

    const unsubscribe = springValue.on('change', (v) => setCount(Math.round(v)))

    return () => {
      controls.stop()
      unsubscribe()
    }
  }, [end, duration, motionValue, springValue])

  return count
}

export const StatsCard = ({ title, value, change, changeType, icon: Icon, subtitle, prefix = '', suffix = '' }) => {
  const count = useCountUp(typeof value === 'number' ? value : 0, 2.5)
  
  const getTrendIcon = () => {
    if (changeType === 'positive') return <TrendingUp className="h-4 w-4 text-emerald-500" />
    if (changeType === 'negative') return <TrendingDown className="h-4 w-4 text-rose-500" />
    return <Minus className="h-4 w-4 text-slate-500" />
  }

  const getTrendColor = () => {
    if (changeType === 'positive') return 'text-emerald-600 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-500/10'
    if (changeType === 'negative') return 'text-rose-600 dark:text-rose-400 bg-rose-50 dark:bg-rose-500/10'
    return 'text-slate-600 dark:text-slate-400 bg-slate-100 dark:bg-slate-800'
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ 
        y: -4, 
        boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.1)',
        transition: { duration: 0.3 }
      }}
      className="relative overflow-hidden rounded-2xl bg-white dark:bg-slate-800 
        border border-slate-200 dark:border-slate-700 p-6 shadow-sm"
    >
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-blue-500/5 to-purple-500/5 
        rounded-full blur-3xl -mr-16 -mt-16" />
      
      <div className="relative">
        <div className="flex items-start justify-between mb-4">
          <div>
            <p className="text-sm font-medium text-slate-600 dark:text-slate-400 mb-1">{title}</p>
            <h3 className="text-3xl font-bold text-slate-900 dark:text-white tracking-tight">
              {prefix}{typeof value === 'number' ? count.toLocaleString() : value}{suffix}
            </h3>
          </div>
          <motion.div
            whileHover={{ scale: 1.1, rotate: 5 }}
            className="p-3 rounded-xl bg-gradient-to-br from-blue-50 to-indigo-50 
              dark:from-blue-500/10 dark:to-indigo-500/10 text-blue-600 dark:text-blue-400"
          >
            <Icon className="h-6 w-6" />
          </motion.div>
        </div>

        {change && (
          <div className="flex items-center gap-2">
            <motion.div
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.5, type: 'spring', stiffness: 500, damping: 30 }}
              className={cn(
                "flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-semibold",
                getTrendColor()
              )}
            >
              {getTrendIcon()}
              {change}
            </motion.div>
            <span className="text-sm text-slate-500 dark:text-slate-400">{subtitle || 'vs last month'}</span>
          </div>
        )}
      </div>
    </motion.div>
  )
}