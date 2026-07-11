'use client'

import { UserManagement } from '@/components/dashboard/UserManagement'
import { useTheme } from '@/context/ThemeContext'
import { cn } from '@/lib/helpers'

export default function UsersPage() {
  const { theme } = useTheme()
  const isDark = theme === 'dark'

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className={cn(
          "text-3xl font-bold",
          isDark ? "text-white" : "text-slate-900"
        )}>
          User Management
        </h1>
      </div>
      
      <UserManagement />
    </div>
  )
}