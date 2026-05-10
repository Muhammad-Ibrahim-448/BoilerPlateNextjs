'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useAuth } from '@/hooks/useAuth'
import { useDashboard } from '@/hooks/useDashboard'
import { ThemeToggle } from '@/components/common/ThemeToggle'
import { Dropdown, DropdownItem } from '@/components/common/Dropdown'
import { Input } from '@/components/common/Input'
import { Search, Bell, Menu, ChevronDown, LogOut, User, Settings } from 'lucide-react'
import { cn } from '@/lib/helpers'

export const DashboardHeader = () => {
  const { user, logout } = useAuth()
  const { toggleSidebar } = useDashboard()
  const [searchQuery, setSearchQuery] = useState('')
  const [notificationsOpen, setNotificationsOpen] = useState(false)

  return (
    <motion.header
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      className="bg-white/80 dark:bg-slate-900/80 backdrop-blur-xl border-b border-slate-200 dark:border-slate-800 sticky top-0 z-30"
    >
      <div className="flex items-center justify-between h-16 px-4 lg:px-8">
        {/* Left side */}
        <div className="flex items-center flex-1 gap-4">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={toggleSidebar}
            className="lg:hidden p-2 rounded-xl text-slate-500 hover:text-slate-700 dark:text-slate-400 dark:hover:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
          >
            <Menu className="h-6 w-6" />
          </motion.button>
          
          <div className="relative flex-1 max-w-md hidden md:block">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-slate-400" />
            <Input
              type="search"
              placeholder="Search..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10 bg-slate-50 dark:bg-slate-800/50 border-slate-200 dark:border-slate-700"
            />
          </div>
        </div>

        {/* Right side */}
        <div className="flex items-center gap-3">
          <ThemeToggle />

          <Dropdown
            trigger={
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="relative p-2 rounded-xl text-slate-500 hover:text-slate-700 dark:text-slate-400 dark:hover:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
              >
                <Bell className="h-5 w-5" />
                <span className="absolute top-1.5 right-1.5 h-2.5 w-2.5 bg-rose-500 rounded-full ring-2 ring-white dark:ring-slate-900" />
              </motion.button>
            }
          >
            <div className="w-80 p-4">
              <h3 className="text-sm font-semibold text-slate-900 dark:text-white mb-3">Notifications</h3>
              <div className="space-y-3">
                <div className="flex items-start gap-3 p-2 rounded-lg hover:bg-slate-50 dark:hover:bg-slate-700/50 transition-colors">
                  <div className="h-2 w-2 mt-2 bg-blue-500 rounded-full" />
                  <div>
                    <p className="text-sm text-slate-900 dark:text-white">New user registered</p>
                    <p className="text-xs text-slate-500">2 minutes ago</p>
                  </div>
                </div>
                <div className="flex items-start gap-3 p-2 rounded-lg hover:bg-slate-50 dark:hover:bg-slate-700/50 transition-colors">
                  <div className="h-2 w-2 mt-2 bg-emerald-500 rounded-full" />
                  <div>
                    <p className="text-sm text-slate-900 dark:text-white">Payment received</p>
                    <p className="text-xs text-slate-500">1 hour ago</p>
                  </div>
                </div>
              </div>
            </div>
          </Dropdown>

          <Dropdown
            trigger={
              <motion.button
                whileHover={{ scale: 1.02 }}
                className="flex items-center gap-3 p-1.5 pr-3 rounded-xl hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
              >
                <div className="h-8 w-8 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center text-white font-medium text-sm shadow-lg">
                  {user?.name?.charAt(0) || 'A'}
                </div>
                <div className="hidden md:block text-left">
                  <p className="text-sm font-medium text-slate-900 dark:text-white">{user?.name || 'Admin'}</p>
                  <p className="text-xs text-slate-500">{user?.role || 'Administrator'}</p>
                </div>
                <ChevronDown className="h-4 w-4 text-slate-400" />
              </motion.button>
            }
          >
            <div className="w-48 py-2">
              <DropdownItem icon={User}>
                Profile
              </DropdownItem>
              <DropdownItem icon={Settings}>
                Settings
              </DropdownItem>
              <div className="border-t border-slate-200 dark:border-slate-700 my-1" />
              <DropdownItem onClick={logout} className="text-rose-600 dark:text-rose-400">
                <LogOut className="mr-3 h-4 w-4" />
                Logout
              </DropdownItem>
            </div>
          </Dropdown>
        </div>
      </div>
    </motion.header>
  )
}