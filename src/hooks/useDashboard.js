'use client'

import { useDashboard as useDashboardContext } from '@/context/DashboardContext'

export const useDashboard = () => {
  return useDashboardContext()
}