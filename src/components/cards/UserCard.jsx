import { Badge } from '@/components/common/Badge'
import { cn } from '@/lib/helpers'

export const UserCard = ({ user }) => {
  return (
    <div className="group bg-white dark:bg-slate-800 rounded-2xl p-6 
      border border-slate-200 dark:border-slate-700 
      shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
      <div className="flex items-center space-x-4">
        <div className="h-14 w-14 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 
          flex items-center justify-center text-white font-bold text-xl shadow-lg
          group-hover:scale-110 transition-transform duration-300">
          {user.name.charAt(0)}
        </div>
        <div className="flex-1 min-w-0">
          <h3 className="text-lg font-semibold text-slate-900 dark:text-white truncate">
            {user.name}
          </h3>
          <p className="text-slate-500 dark:text-slate-400 text-sm truncate">
            {user.email}
          </p>
        </div>
        <Badge variant={user.status === 'active' ? 'success' : 'default'} className="flex-shrink-0">
          {user.status}
        </Badge>
      </div>
      
      <div className="mt-6 pt-6 border-t border-slate-100 dark:border-slate-700 space-y-3">
        <div className="flex justify-between items-center text-sm">
          <span className="text-slate-500 dark:text-slate-400">Role</span>
          <span className="font-medium text-slate-900 dark:text-white capitalize">{user.role}</span>
        </div>
        <div className="flex justify-between items-center text-sm">
          <span className="text-slate-500 dark:text-slate-400">Joined</span>
          <span className="font-medium text-slate-900 dark:text-white">{user.joinDate}</span>
        </div>
      </div>
    </div>
  )
}