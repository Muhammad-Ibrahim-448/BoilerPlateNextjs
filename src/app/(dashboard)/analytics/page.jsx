'use client'
import { AnalyticsOverview } from '@/components/dashboard/AnalyticsOverview'
import { useTheme } from '@/context/ThemeContext'
import { cn } from '@/lib/helpers'

export default function AnalyticsPage() {
  const { theme } = useTheme()
  const isDark = theme === 'dark'

  return (
    <>
      <div className="space-y-6">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
          <h1 className={cn(
            "text-3xl font-bold",
            isDark ? "text-white" : "text-slate-900"
          )}>
            Analytics
          </h1>
          <div className="flex gap-2">
            <select className={cn(
              "px-4 py-2 border rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500/20 transition-colors",
              isDark 
                ? "bg-slate-900/50 border-slate-700 text-slate-100 hover:border-slate-600" 
                : "bg-white border-slate-200 text-slate-900 hover:border-slate-300"
            )}>
              <option>Last 7 days</option>
              <option>Last 30 days</option>
              <option>Last 90 days</option>
              <option>This year</option>
            </select>
            <button className={cn(
              "px-4 py-2 rounded-xl font-medium transition-colors",
              "bg-blue-600 hover:bg-blue-700 text-white",
              "shadow-lg shadow-blue-600/20 hover:shadow-blue-600/30",
              "dark:bg-blue-500 dark:hover:bg-blue-600",
              "dark:shadow-blue-500/20 dark:hover:shadow-blue-500/30"
            )}>
              Export Report
            </button>
          </div>
        </div>
        
        <AnalyticsOverview />
      </div>
    </>
  )
}