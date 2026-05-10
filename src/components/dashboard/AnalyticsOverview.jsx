'use client'

import { LineChart } from '@/components/charts/LineChart'
import { BarChart } from '@/components/charts/BarChart'
import { PieChart } from '@/components/charts/PieChart'
import { motion } from 'framer-motion'

export const AnalyticsOverview = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
      <motion.div 
        className="bg-white dark:bg-slate-800 rounded-2xl shadow-sm border border-slate-200 dark:border-slate-700 p-6"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
      >
        <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-4">
          Revenue Trends
        </h3>
        <LineChart />
      </motion.div>

      <motion.div 
        className="bg-white dark:bg-slate-800 rounded-2xl shadow-sm border border-slate-200 dark:border-slate-700 p-6"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
      >
        <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-4">
          Sales by Product
        </h3>
        <BarChart />
      </motion.div>

      <motion.div 
        className="bg-white dark:bg-slate-800 rounded-2xl shadow-sm border border-slate-200 dark:border-slate-700 p-6"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
      >
        <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-4">
          Traffic Sources
        </h3>
        <PieChart />
      </motion.div>

      <motion.div 
        className="bg-white dark:bg-slate-800 rounded-2xl shadow-sm border border-slate-200 dark:border-slate-700 p-6"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
      >
        <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-6">
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
                <span className="text-sm font-medium text-slate-600 dark:text-slate-400">
                  {metric.label}
                </span>

                <span className="text-lg font-bold text-slate-900 dark:text-white">
                  {metric.value}
                </span>
              </div>

              <div className="w-full bg-slate-100 dark:bg-slate-700 rounded-full h-2 overflow-hidden">
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
