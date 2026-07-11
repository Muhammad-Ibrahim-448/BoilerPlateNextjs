'use client'

import { motion, useMotionValue, useTransform, animate, useSpring } from 'framer-motion'
import { useEffect, useState } from 'react'
import { TrendingUp, TrendingDown, Minus } from 'lucide-react'
import { cn } from '@/lib/helpers'
import { useTheme } from '@/context/ThemeContext'

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

const StatsCard = ({ 
  title, 
  value, 
  change, 
  changeType, 
  icon: Icon, 
  subtitle, 
  prefix = '', 
  suffix = '',
  loading = false,
  className = '',
}) => {
  const { theme } = useTheme()
  const isDark = theme === 'dark'
  const count = useCountUp(typeof value === 'number' ? value : 0, 2.5)
  
  const getTrendIcon = () => {
    if (changeType === 'positive') return <TrendingUp className="h-4 w-4 text-emerald-500" />
    if (changeType === 'negative') return <TrendingDown className="h-4 w-4 text-rose-500" />
    return <Minus className="h-4 w-4 text-slate-500" />
  }

  const getTrendColor = () => {
    if (changeType === 'positive') {
      return isDark 
        ? 'text-emerald-400 bg-emerald-500/10 border-emerald-500/20'
        : 'text-emerald-600 bg-emerald-50 border-emerald-200'
    }
    if (changeType === 'negative') {
      return isDark
        ? 'text-rose-400 bg-rose-500/10 border-rose-500/20'
        : 'text-rose-600 bg-rose-50 border-rose-200'
    }
    return isDark
      ? 'text-slate-400 bg-slate-800 border-slate-700'
      : 'text-slate-600 bg-slate-100 border-slate-200'
  }

  if (loading) {
    return (
      <div className={cn(
        'relative overflow-hidden rounded-2xl border p-6 shadow-sm theme-transition',
        isDark 
          ? 'bg-slate-900/50 border-slate-800/80 shadow-slate-950/50'
          : 'bg-slate-50/80 border-slate-200/80 shadow-slate-200/50',
        className
      )}>
        <div className="animate-pulse space-y-4">
          <div className="flex items-start justify-between">
            <div className="space-y-2">
              <div className={cn(
                "h-4 w-24 rounded",
                isDark ? "bg-slate-700" : "bg-slate-200"
              )} />
              <div className={cn(
                "h-8 w-32 rounded",
                isDark ? "bg-slate-700" : "bg-slate-200"
              )} />
            </div>
            <div className={cn(
              "h-12 w-12 rounded-xl",
              isDark ? "bg-slate-700" : "bg-slate-200"
            )} />
          </div>
          <div className={cn(
            "h-6 w-36 rounded",
            isDark ? "bg-slate-700" : "bg-slate-200"
          )} />
        </div>
      </div>
    )
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ 
        y: -4, 
        boxShadow: isDark 
          ? '0 25px 50px -12px rgba(0, 0, 0, 0.5)'
          : '0 25px 50px -12px rgba(0, 0, 0, 0.1)',
        transition: { duration: 0.3 }
      }}
      className={cn(
        'relative overflow-hidden rounded-2xl border p-6 shadow-sm theme-transition',
        isDark 
          ? 'bg-slate-900/50 border-slate-800/80 shadow-slate-950/50'
          : 'bg-slate-50/80 border-slate-200/80 shadow-slate-200/50',
        className
      )}
    >
      {/* Background decoration */}
      <div className={cn(
        "absolute top-0 right-0 w-32 h-32 rounded-full blur-3xl -mr-16 -mt-16",
        isDark 
          ? "bg-gradient-to-br from-blue-500/10 to-purple-500/10"
          : "bg-gradient-to-br from-blue-500/5 to-purple-500/5"
      )} />
      
      <div className="relative">
        <div className="flex items-start justify-between mb-4">
          <div>
            <p className={cn(
              "text-sm font-medium mb-1",
              isDark ? "text-slate-400" : "text-slate-600"
            )}>
              {title}
            </p>
            <h3 className={cn(
              "text-3xl font-bold tracking-tight",
              isDark ? "text-white" : "text-slate-900"
            )}>
              {prefix}{typeof value === 'number' ? count.toLocaleString() : value}{suffix}
            </h3>
          </div>
          <motion.div
            whileHover={{ scale: 1.1, rotate: 5 }}
            className={cn(
              "p-3 rounded-xl",
              isDark 
                ? "bg-gradient-to-br from-blue-500/10 to-indigo-500/10 text-blue-400"
                : "bg-gradient-to-br from-blue-50 to-indigo-50 text-blue-600"
            )}
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
                "flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-semibold border",
                getTrendColor()
              )}
            >
              {getTrendIcon()}
              {change}
            </motion.div>
            <span className={cn(
              "text-sm",
              isDark ? "text-slate-400" : "text-slate-500"
            )}>
              {subtitle || 'vs last month'}
            </span>
          </div>
        )}
      </div>
    </motion.div>
  )
}

export { StatsCard }