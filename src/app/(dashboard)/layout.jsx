import { DashboardLayoutWrapper } from '@/components/layout/DashboardLayoutWrapper'

export const metadata = {
  title: 'Dashboard - SaaS Platform',
  description: 'Admin dashboard for SaaS Platform',
}

export default function DashboardRootLayout({ children }) {
  return <DashboardLayoutWrapper>{children}</DashboardLayoutWrapper>
}