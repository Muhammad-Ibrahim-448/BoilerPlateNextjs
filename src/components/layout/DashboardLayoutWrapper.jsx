'use client'

import { AuthProvider } from '@/context/AuthContext'
import { DashboardProvider } from '@/context/DashboardContext'
import { DashboardLayout } from './DashboardLayout'

export const DashboardLayoutWrapper = ({ children }) => {
  return (
    <AuthProvider>
      <DashboardProvider>
        <DashboardLayout>{children}</DashboardLayout>
      </DashboardProvider>
    </AuthProvider>
  )
}