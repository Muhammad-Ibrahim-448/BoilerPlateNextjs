'use client'

import { LineChart } from '@/components/charts/LineChart'
import { BarChart } from '@/components/charts/BarChart'
import { PieChart } from '@/components/charts/PieChart'
import { motion } from 'framer-motion'
import { useTheme } from '@/context/ThemeContext'
import { cn } from '@/lib/helpers'

export const AnalyticsOverview = () => {
  const { theme } = useTheme()
  const isDark = theme === 'dark'

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
      <motion.div 
        className={cn(
          "rounded-2xl shadow-sm border p-6 theme-transition",
          isDark 
            ? "bg-slate-900/50 border-slate-800/80 shadow-slate-950/50" 
            : "bg-slate-50/80 border-slate-200/80 shadow-slate-200/50"
        )}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
      >
        <h3 className={cn(
          "text-lg font-semibold mb-4",
          isDark ? "text-white" : "text-slate-900"
        )}>
          Revenue Trends
        </h3>
        <LineChart />
      </motion.div>

      <motion.div 
        className={cn(
          "rounded-2xl shadow-sm border p-6 theme-transition",
          isDark 
            ? "bg-slate-900/50 border-slate-800/80 shadow-slate-950/50" 
            : "bg-slate-50/80 border-slate-200/80 shadow-slate-200/50"
        )}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
      >
        <h3 className={cn(
          "text-lg font-semibold mb-4",
          isDark ? "text-white" : "text-slate-900"
        )}>
          Sales by Product
        </h3>
        <BarChart />
      </motion.div>

      <motion.div 
        className={cn(
          "rounded-2xl shadow-sm border p-6 theme-transition",
          isDark 
            ? "bg-slate-900/50 border-slate-800/80 shadow-slate-950/50" 
            : "bg-slate-50/80 border-slate-200/80 shadow-slate-200/50"
        )}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
      >
        <h3 className={cn(
          "text-lg font-semibold mb-4",
          isDark ? "text-white" : "text-slate-900"
        )}>
          Traffic Sources
        </h3>
        <PieChart />
      </motion.div>

      <motion.div 
        className={cn(
          "rounded-2xl shadow-sm border p-6 theme-transition",
          isDark 
            ? "bg-slate-900/50 border-slate-800/80 shadow-slate-950/50" 
            : "bg-slate-50/80 border-slate-200/80 shadow-slate-200/50"
        )}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
      >
        <h3 className={cn(
          "text-lg font-semibold mb-6",
          isDark ? "text-white" : "text-slate-900"
        )}>
          Key Metrics
        </h3>

        <div className="space-y-6">
          {[
            { label: 'Conversion Rate', value: '3.24%', width: '65%', color: 'bg-blue-500' },
            { label: 'Bounce Rate', value: '42.3%', width: '42%', color: 'bg-emerald-500' },
            { label: 'Avg. Session', value: '4m 32s', width: '78%', color: 'bg-amber-500' },
          ].map((metric, index) => (
            <div key={metric.label}>
              <div className="flex justify-between mb-2">
                <span className={cn(
                  "text-sm font-medium",
                  isDark ? "text-slate-400" : "text-slate-600"
                )}>
                  {metric.label}
                </span>

                <span className={cn(
                  "text-lg font-bold",
                  isDark ? "text-white" : "text-slate-900"
                )}>
                  {metric.value}
                </span>
              </div>

              <div className={cn(
                "w-full rounded-full h-2 overflow-hidden",
                isDark ? "bg-slate-700" : "bg-slate-100"
              )}>
                <motion.div 
                  className={`h-2 rounded-full ${metric.color}`}
                  initial={{ width: 0 }}
                  animate={{ width: metric.width }}
                  transition={{ duration: 1, delay: 0.5 + index * 0.1 }}
                />
              </div>
            </div>
          ))}
        </div>
      </motion.div>
    </div>
  )
}