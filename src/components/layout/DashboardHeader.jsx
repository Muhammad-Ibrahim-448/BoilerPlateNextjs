// src/components/layout/DashboardHeader.jsx
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
import { useTheme } from '@/context/ThemeContext'
import { useThemeClasses, useDashboardHeaderStyles } from '@/lib/theme-helpers'

export const DashboardHeader = () => {
  const { user, logout } = useAuth()
  const { toggleSidebar } = useDashboard()
  const { theme } = useTheme()
  const themeClasses = useThemeClasses()
  const headerStyles = useDashboardHeaderStyles()
  const isDark = theme === 'dark'
  const [searchQuery, setSearchQuery] = useState('')
  const [notificationsOpen, setNotificationsOpen] = useState(false)

  // Get notification count
  const notificationCount = 3

  return (
    <motion.header
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      className={cn(
        "sticky top-0 z-30 theme-transition",
        "backdrop-blur-xl border-b",
        headerStyles.container
      )}
    >
      <div className="flex items-center justify-between h-16 px-4 lg:px-8">
        {/* Left side */}
        <div className="flex items-center flex-1 gap-4">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={toggleSidebar}
            className={cn(
              "lg:hidden p-2 rounded-xl transition-colors",
              headerStyles.iconButton
            )}
          >
            <Menu className="h-6 w-6" />
          </motion.button>
          
          <div className="relative flex-1 max-w-md hidden md:block">
            <Search className={cn(
              "absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5",
              headerStyles.searchIcon
            )} />
            <Input
              type="search"
              placeholder="Search..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className={cn(
                "pl-10",
                headerStyles.searchInput
              )}
            />
          </div>
        </div>

        {/* Right side */}
        <div className="flex items-center gap-3">
          <ThemeToggle />

          {/* Notifications Dropdown */}
          <Dropdown
            trigger={
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={cn(
                  "relative p-2 rounded-xl transition-colors",
                  headerStyles.iconButton
                )}
              >
                <Bell className="h-5 w-5" />
                {notificationCount > 0 && (
                  <span className={cn(
                    "absolute -top-0.5 -right-0.5 h-5 w-5",
                    "flex items-center justify-center",
                    "text-[10px] font-bold text-white",
                    "bg-rose-500 rounded-full",
                    "ring-2 ring-white dark:ring-slate-900",
                    "animate-pulse"
                  )}>
                    {notificationCount}
                  </span>
                )}
              </motion.button>
            }
          >
            <div className={cn(
              "w-80 p-4 rounded-xl shadow-xl",
              headerStyles.dropdownContainer
            )}>
              <div className="flex items-center justify-between mb-3">
                <h3 className={cn(
                  "text-sm font-semibold",
                  headerStyles.dropdownText
                )}>
                  Notifications
                </h3>
                <button className={cn(
                  "text-xs font-medium transition-colors",
                  isDark 
                    ? "text-blue-400 hover:text-blue-300" 
                    : "text-blue-600 hover:text-blue-700"
                )}>
                  Mark all as read
                </button>
              </div>
              <div className="space-y-2 max-h-64 overflow-y-auto">
                <div className={cn(
                  "flex items-start gap-3 p-3 rounded-lg transition-colors",
                  headerStyles.notificationItem
                )}>
                  <div className="h-2 w-2 mt-1.5 bg-blue-500 rounded-full flex-shrink-0" />
                  <div>
                    <p className={cn(
                      "text-sm font-medium",
                      headerStyles.dropdownText
                    )}>
                      New user registered
                    </p>
                    <p className="text-xs text-slate-500 dark:text-slate-400">2 minutes ago</p>
                  </div>
                </div>
                <div className={cn(
                  "flex items-start gap-3 p-3 rounded-lg transition-colors",
                  headerStyles.notificationItem
                )}>
                  <div className="h-2 w-2 mt-1.5 bg-emerald-500 rounded-full flex-shrink-0" />
                  <div>
                    <p className={cn(
                      "text-sm font-medium",
                      headerStyles.dropdownText
                    )}>
                      Payment received
                    </p>
                    <p className="text-xs text-slate-500 dark:text-slate-400">1 hour ago</p>
                  </div>
                </div>
                <div className={cn(
                  "flex items-start gap-3 p-3 rounded-lg transition-colors",
                  headerStyles.notificationItem
                )}>
                  <div className="h-2 w-2 mt-1.5 bg-amber-500 rounded-full flex-shrink-0" />
                  <div>
                    <p className={cn(
                      "text-sm font-medium",
                      headerStyles.dropdownText
                    )}>
                      System update scheduled
                    </p>
                    <p className="text-xs text-slate-500 dark:text-slate-400">3 hours ago</p>
                  </div>
                </div>
              </div>
              <div className={cn(
                "mt-3 pt-3 border-t text-center",
                isDark ? "border-slate-800" : "border-slate-200"
              )}>
                <button className={cn(
                  "text-xs font-medium transition-colors",
                  isDark 
                    ? "text-slate-400 hover:text-slate-300" 
                    : "text-slate-500 hover:text-slate-700"
                )}>
                  View all notifications
                </button>
              </div>
            </div>
          </Dropdown>

          {/* User Dropdown */}
          <Dropdown
            trigger={
              <motion.button
                whileHover={{ scale: 1.02 }}
                className={cn(
                  "flex items-center gap-3 p-1.5 pr-3 rounded-xl transition-colors",
                  headerStyles.userButton
                )}
              >
                <div className={cn(
                  "h-8 w-8 rounded-full flex items-center justify-center text-white font-medium text-sm shadow-lg",
                  "bg-gradient-to-br from-blue-500 to-purple-600",
                  "shadow-blue-500/25 dark:shadow-blue-500/10"
                )}>
                  {user?.name?.charAt(0) || 'A'}
                </div>
                <div className="hidden md:block text-left">
                  <p className={cn(
                    "text-sm font-medium",
                    headerStyles.dropdownText
                  )}>
                    {user?.name || 'Admin'}
                  </p>
                  <p className={cn(
                    "text-xs",
                    headerStyles.dropdownSubtext
                  )}>
                    {user?.role || 'Administrator'}
                  </p>
                </div>
                <ChevronDown className={cn(
                  "h-4 w-4",
                  headerStyles.dropdownSubtext
                )} />
              </motion.button>
            }
          >
            <div className={cn(
              "w-52 py-2 rounded-xl shadow-xl",
              headerStyles.dropdownContainer
            )}>
              <div className="px-4 py-2 border-b border-slate-200 dark:border-slate-800">
                <p className={cn(
                  "text-sm font-medium",
                  headerStyles.dropdownText
                )}>
                  {user?.name || 'Admin'}
                </p>
                <p className={cn(
                  "text-xs",
                  headerStyles.dropdownSubtext
                )}>
                  {user?.email || 'admin@example.com'}
                </p>
              </div>
              <DropdownItem icon={User}>
                Profile
              </DropdownItem>
              <DropdownItem icon={Settings}>
                Settings
              </DropdownItem>
              <div className={cn(
                "border-t my-1 flex w-full",
                isDark ? "border-slate-800" : "border-slate-200"
              )} />
              <DropdownItem 
                onClick={logout} 
                icon={LogOut}
                className={cn(
                  "text-rose-600 dark:text-rose-400",
                  "hover:bg-rose-50 dark:hover:bg-rose-500/10"
                )}
              >
                Logout
              </DropdownItem>
            </div>
          </Dropdown>
        </div>
      </div>
    </motion.header>
  )
}