import { AuthProvider } from '@/context/AuthContext'
import { WebsiteLayout } from '@/components/layout/WebsiteLayout'

export const metadata = {
  title: 'SaaS Platform',
  description: 'Modern SaaS platform with admin dashboard',
}

export default function WebsiteRootLayout({ children }) {
  return (
    <AuthProvider>
      <WebsiteLayout>{children}</WebsiteLayout>
    </AuthProvider>
  )
}