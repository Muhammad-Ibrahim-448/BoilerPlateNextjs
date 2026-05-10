'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useDashboard } from '@/hooks/useDashboard'
import { motion, AnimatePresence } from 'framer-motion'
import { cn } from '@/lib/helpers'

const menuItems = [
  { href: '/dashboard', label: 'Dashboard', icon: 'M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z' },
  { href: '/analytics', label: 'Analytics', icon: 'M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z' },
  { href: '/users', label: 'Users', icon: 'M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z' },
  { href: '/dashboard/products', label: 'Products', icon: 'M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4' },
  { href: '/settings', label: 'Settings', icon: 'M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z M15 12a3 3 0 11-6 0 3 3 0 016 0z' },
]

export const Sidebar = () => {
  const pathname = usePathname()
  const { sidebarCollapsed, toggleSidebar } = useDashboard()

  return (
    <>
      {/* Mobile overlay */}
      <AnimatePresence>
        {!sidebarCollapsed && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-slate-900/50 backdrop-blur-sm z-20 lg:hidden"
            onClick={toggleSidebar}
          />
        )}
      </AnimatePresence>

      <motion.aside 
        className={cn(
          'fixed lg:static inset-y-0 left-0 z-30',
          'bg-slate-900 text-white',
          'transition-all duration-300 ease-in-out',
          sidebarCollapsed ? '-translate-x-full lg:translate-x-0 lg:w-20' : 'translate-x-0 w-64'
        )}
      >
        <div className="flex flex-col h-full">
          {/* Logo */}
          <div className="flex items-center justify-between h-16 px-4 border-b border-slate-800">
            <Link href="/dashboard" className={cn(
              'text-xl font-bold text-white overflow-hidden transition-all duration-300',
              sidebarCollapsed ? 'lg:w-0 lg:opacity-0' : 'w-auto opacity-100'
            )}>
              Admin
            </Link>
            <button
              onClick={toggleSidebar}
              className="lg:block hidden p-2 rounded-xl hover:bg-slate-800 transition-colors"
            >
              <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
            <button
              onClick={toggleSidebar}
              className="lg:hidden p-2 rounded-xl hover:bg-slate-800 transition-colors"
            >
              <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          {/* Navigation */}
          <nav className="flex-1 px-3 py-4 space-y-1 overflow-y-auto">
            {menuItems.map((item, index) => {
              const isActive = pathname === item.href
              return (
                <motion.div
                  key={item.href}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.05 }}
                >
                  <Link
                    href={item.href}
                    className={cn(
                      'flex items-center px-3 py-3 rounded-xl transition-all duration-200 group',
                      isActive 
                        ? 'bg-blue-600 text-white shadow-lg shadow-blue-500/25' 
                        : 'text-slate-400 hover:bg-slate-800 hover:text-white'
                    )}
                  >
                    <svg 
                      className={cn(
                        'h-6 w-6 flex-shrink-0 transition-transform duration-200',
                        isActive ? 'scale-110' : 'group-hover:scale-110'
                      )} 
                      fill="none" 
                      viewBox="0 0 24 24" 
                      stroke="currentColor"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={item.icon} />
                    </svg>
                    <span className={cn(
                      'ml-3 whitespace-nowrap font-medium transition-all duration-300',
                      sidebarCollapsed ? 'lg:hidden' : 'block'
                    )}>
                      {item.label}
                    </span>
                  </Link>
                </motion.div>
              )
            })}
          </nav>

          {/* User section */}
          <div className="border-t border-slate-800 p-4">
            <button className="flex items-center w-full text-slate-400 hover:text-white transition-colors group">
              <div className="h-9 w-9 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center text-white font-medium shadow-lg">
                A
              </div>
              <div className={cn(
                'ml-3 text-left transition-all duration-300',
                sidebarCollapsed ? 'lg:hidden' : 'block'
              )}>
                <p className="text-sm font-medium text-white">Admin User</p>
                <p className="text-xs text-slate-500 group-hover:text-slate-400">View Profile</p>
              </div>
            </button>
          </div>
        </div>
      </motion.aside>
    </>
  )
}