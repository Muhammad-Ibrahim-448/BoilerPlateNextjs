'use client'

import { DashboardStats } from '@/components/dashboard/DashboardStats'
import { RecentActivity } from '@/components/dashboard/RecentActivity'
import { LineChart } from '@/components/charts/LineChart'
import { BarChart } from '@/components/charts/BarChart'
import { useTheme } from '@/context/ThemeContext'
import { cn } from '@/lib/helpers'

export default function DashboardPage() {
  const { theme } = useTheme()
  const isDark = theme === 'dark'

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className={cn(
          "text-3xl font-bold",
          isDark ? "text-white" : "text-slate-900"
        )}>
          Dashboard Overview
        </h1>
        <span className={cn(
          "text-sm",
          isDark ? "text-slate-400" : "text-slate-500"
        )}>
          Last updated: {new Date().toLocaleString()}
        </span>
      </div>
      
      <DashboardStats />
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 space-y-6">
          <div className={cn(
            "rounded-xl shadow-sm border p-6 theme-transition",
            isDark 
              ? "bg-slate-900/50 border-slate-800/80 shadow-slate-950/50" 
              : "bg-slate-50/80 border-slate-200/80 shadow-slate-200/50"
          )}>
            <h3 className={cn(
              "text-lg font-semibold mb-4",
              isDark ? "text-white" : "text-slate-900"
            )}>
              Revenue Overview
            </h3>
            <LineChart />
          </div>
          
          <div className={cn(
            "rounded-xl shadow-sm border p-6 theme-transition",
            isDark 
              ? "bg-slate-900/50 border-slate-800/80 shadow-slate-950/50" 
              : "bg-slate-50/80 border-slate-200/80 shadow-slate-200/50"
          )}>
            <h3 className={cn(
              "text-lg font-semibold mb-4",
              isDark ? "text-white" : "text-slate-900"
            )}>
              Sales by Category
            </h3>
            <BarChart />
          </div>
        </div>
        
        <div className="space-y-6">
          <RecentActivity />
          
          <div className={cn(
            "rounded-xl shadow-sm border p-6 theme-transition",
            isDark 
              ? "bg-slate-900/50 border-slate-800/80 shadow-slate-950/50" 
              : "bg-slate-50/80 border-slate-200/80 shadow-slate-200/50"
          )}>
            <h3 className={cn(
              "text-lg font-semibold mb-4",
              isDark ? "text-white" : "text-slate-900"
            )}>
              Quick Actions
            </h3>
            <div className="space-y-3">
              <button className={cn(
                "w-full text-left px-4 py-3 rounded-lg transition-colors",
                isDark 
                  ? "bg-slate-800/50 hover:bg-slate-700/50 text-white" 
                  : "bg-slate-100/50 hover:bg-slate-200/50 text-slate-900"
              )}>
                <div className={cn(
                  "font-medium",
                  isDark ? "text-white" : "text-slate-900"
                )}>
                  Create New Project
                </div>
                <div className={cn(
                  "text-sm",
                  isDark ? "text-slate-400" : "text-slate-500"
                )}>
                  Start a new project from scratch
                </div>
              </button>
              <button className={cn(
                "w-full text-left px-4 py-3 rounded-lg transition-colors",
                isDark 
                  ? "bg-slate-800/50 hover:bg-slate-700/50 text-white" 
                  : "bg-slate-100/50 hover:bg-slate-200/50 text-slate-900"
              )}>
                <div className={cn(
                  "font-medium",
                  isDark ? "text-white" : "text-slate-900"
                )}>
                  Invite Team Member
                </div>
                <div className={cn(
                  "text-sm",
                  isDark ? "text-slate-400" : "text-slate-500"
                )}>
                  Add someone to your team
                </div>
              </button>
              <button className={cn(
                "w-full text-left px-4 py-3 rounded-lg transition-colors",
                isDark 
                  ? "bg-slate-800/50 hover:bg-slate-700/50 text-white" 
                  : "bg-slate-100/50 hover:bg-slate-200/50 text-slate-900"
              )}>
                <div className={cn(
                  "font-medium",
                  isDark ? "text-white" : "text-slate-900"
                )}>
                  Generate Report
                </div>
                <div className={cn(
                  "text-sm",
                  isDark ? "text-slate-400" : "text-slate-500"
                )}>
                  Download latest analytics
                </div>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}