import { UserManagement } from '@/components/dashboard/UserManagement'

export default function UsersPage() {
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white">User Management</h1>
      </div>
      
      <UserManagement />
    </div>
  )
}