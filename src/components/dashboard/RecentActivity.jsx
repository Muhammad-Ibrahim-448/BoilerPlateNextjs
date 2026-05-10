'use client'

import { formatDate } from '@/lib/helpers'
import { motion } from 'framer-motion'

const activities = [
  {
    id: 1,
    user: 'John Doe',
    action: 'created a new project',
    target: 'Website Redesign',
    time: new Date(Date.now() - 1000 * 60 * 5),
    type: 'create',
  },
  {
    id: 2,
    user: 'Jane Smith',
    action: 'updated',
    target: 'User Settings',
    time: new Date(Date.now() - 1000 * 60 * 30),
    type: 'update',
  },
  {
    id: 3,
    user: 'Mike Johnson',
    action: 'deleted',
    target: 'Old Campaign',
    time: new Date(Date.now() - 1000 * 60 * 60 * 2),
    type: 'delete',
  },
  {
    id: 4,
    user: 'Sarah Williams',
    action: 'completed',
    target: 'Q4 Report',
    time: new Date(Date.now() - 1000 * 60 * 60 * 5),
    type: 'complete',
  },
]

const getActivityIcon = (type) => {
  const icons = {
    create: 'M12 6v6m0 0v6m0-6h6m-6 0H6',
    update: 'M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z',
    delete: 'M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16',
    complete: 'M5 13l4 4L19 7',
  }
  return icons[type] || icons.create
}

const getActivityColor = (type) => {
  const colors = {
    create: 'bg-emerald-100 text-emerald-600 dark:bg-emerald-500/10 dark:text-emerald-400',
    update: 'bg-blue-100 text-blue-600 dark:bg-blue-500/10 dark:text-blue-400',
    delete: 'bg-rose-100 text-rose-600 dark:bg-rose-500/10 dark:text-rose-400',
    complete: 'bg-purple-100 text-purple-600 dark:bg-purple-500/10 dark:text-purple-400',
  }
  return colors[type] || colors.create
}

export const RecentActivity = () => {
  return (
    <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-sm border border-slate-200 dark:border-slate-700 overflow-hidden">
      <div className="p-6 border-b border-slate-200 dark:border-slate-700">
        <h3 className="text-lg font-semibold text-slate-900 dark:text-white">
          Recent Activity
        </h3>
      </div>
      <div className="p-6">
        <div className="flow-root">
          <ul className="-mb-8">
            {activities.map((activity, index) => (
              <motion.li 
                key={activity.id}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <div className="relative pb-8">
                  {index !== activities.length - 1 && (
                    <span className="absolute top-4 left-4 -ml-px h-full w-0.5 bg-slate-200 dark:bg-slate-700" aria-hidden="true" />
                  )}
                  <div className="relative flex space-x-3">
                    <div className={`
                      h-8 w-8 rounded-full flex items-center justify-center ring-8 ring-white dark:ring-slate-800
                      ${getActivityColor(activity.type)}
                    `}>
                      <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={getActivityIcon(activity.type)} />
                      </svg>
                    </div>
                    <div className="min-w-0 flex-1 pt-1.5 flex justify-between space-x-4">
                      <div>
                        <p className="text-sm text-slate-900 dark:text-slate-100">
                          <span className="font-medium">{activity.user}</span>{' '}
                          {activity.action}{' '}
                          <span className="font-medium text-blue-600 dark:text-blue-400">{activity.target}</span>
                        </p>
                      </div>
                      <div className="text-right text-sm whitespace-nowrap text-slate-500 dark:text-slate-400">
                        {formatDate(activity.time, { hour: '2-digit', minute: '2-digit' })}
                      </div>
                    </div>
                  </div>
                </div>
              </motion.li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  )
}