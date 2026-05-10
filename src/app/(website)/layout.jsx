import { WebsiteLayout } from '@/components/layout/WebsiteLayout'
import { AuthProvider } from '@/context/AuthContext'

export default function WebsiteRootLayout({ children }) {
  return (
    <AuthProvider>
      <WebsiteLayout>{children}</WebsiteLayout>
    </AuthProvider>
  )
}