import { AnalyticsOverview } from '@/components/dashboard/AnalyticsOverview'
import { DashboardLayoutWrapper } from '@/components/layout/DashboardLayoutWrapper'

export default function AnalyticsPage() {
  return (
    <DashboardLayoutWrapper>
      <div className="space-y-6">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
          <h1 className="text-3xl font-bold text-slate-900 dark:text-white">Analytics</h1>
          <div className="flex gap-2">
            <select className="px-4 py-2 border border-slate-200 dark:border-slate-700 rounded-xl bg-white dark:bg-slate-800 text-slate-900 dark:text-slate-100 focus:outline-none focus:ring-2 focus:ring-blue-500/20">
              <option>Last 7 days</option>
              <option>Last 30 days</option>
              <option>Last 90 days</option>
              <option>This year</option>
            </select>
            <button className="px-4 py-2 bg-blue-600 text-white rounded-xl hover:bg-blue-700 transition-colors font-medium">
              Export Report
            </button>
          </div>
        </div>
        
        <AnalyticsOverview />
      </div>
    </DashboardLayoutWrapper>
  )
}