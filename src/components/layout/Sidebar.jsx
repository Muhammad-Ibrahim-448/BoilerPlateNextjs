'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useDashboard } from '@/hooks/useDashboard'
import { motion, AnimatePresence } from 'framer-motion'
import { cn } from '@/lib/helpers'
import { useTheme } from '@/context/ThemeContext'

// ─── Constants ───────────────────────────────────────────────────────
const MENU_ITEMS = [
  {
    href: '/dashboard',
    label: 'Dashboard',
    icon: 'M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z',
  },
  {
    href: '/analytics',
    label: 'Analytics',
    icon: 'M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z',
  },
  {
    href: '/users',
    label: 'Users',
    icon: 'M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z',
  },
  {
    href: '/dashboard/products',
    label: 'Products',
    icon: 'M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4',
  },
  {
    href: '/settings',
    label: 'Settings',
    icon: 'M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z M15 12a3 3 0 11-6 0 3 3 0 016 0z',
  },
]

const ANIMATION_CONFIG = {
  sidebar: {
    open: { width: 256, transition: { duration: 0.3, ease: 'easeInOut' } },
    collapsed: { width: 80, transition: { duration: 0.3, ease: 'easeInOut' } },
  },
  overlay: {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  },
  navItem: {
    hidden: { opacity: 0, x: -20 },
    visible: (i) => ({
      opacity: 1,
      x: 0,
      transition: { delay: i * 0.05, duration: 0.3 },
    }),
  },
}

// ─── Sub-components ────────────────────────────────────────────────

function MobileOverlay({ isOpen, onClose }) {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          variants={ANIMATION_CONFIG.overlay}
          initial="hidden"
          animate="visible"
          exit="hidden"
          className="fixed inset-0 bg-slate-900/50 backdrop-blur-sm z-20 lg:hidden"
          onClick={onClose}
          aria-hidden="true"
        />
      )}
    </AnimatePresence>
  )
}

function NavIcon({ path, isActive }) {
  return (
    <svg
      className={cn(
        'h-5 w-5 flex-shrink-0 transition-transform duration-200',
        isActive ? 'scale-110' : 'group-hover:scale-110'
      )}
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      aria-hidden="true"
    >
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={path} />
    </svg>
  )
}

function NavLink({ item, index, isActive, isCollapsed, isDark }) {
  return (
    <motion.div
      custom={index}
      variants={ANIMATION_CONFIG.navItem}
      initial="hidden"
      animate="visible"
    >
      <Link
        href={item.href}
        className={cn(
          'flex items-center gap-3 px-3 py-2.5 rounded-lg transition-all duration-200 group outline-none focus-visible:ring-2 focus-visible:ring-blue-500',
          isActive
            ? 'bg-blue-600 text-white shadow-md shadow-blue-500/20'
            : isDark
              ? 'text-slate-300 hover:bg-slate-800 hover:text-white'
              : 'text-slate-500 hover:bg-slate-100 hover:text-slate-900'
        )}
        aria-current={isActive ? 'page' : undefined}
      >
        <NavIcon path={item.icon} isActive={isActive} />
        <span
          className={cn(
            'whitespace-nowrap text-sm font-medium transition-all duration-300',
            isCollapsed ? 'lg:opacity-0 lg:w-0 lg:overflow-hidden' : 'opacity-100'
          )}
        >
          {item.label}
        </span>
      </Link>
    </motion.div>
  )
}

function ToggleButton({ onClick, isDark, isMobile = false }) {
  return (
    <button
      onClick={onClick}
      className={cn(
        'p-2 rounded-lg transition-colors outline-none focus-visible:ring-2 focus-visible:ring-blue-500',
        isMobile ? 'lg:hidden' : 'hidden lg:block',
        isDark
          ? 'hover:bg-slate-800 text-slate-300 hover:text-white'
          : 'hover:bg-slate-100 text-slate-500 hover:text-slate-900'
      )}
      aria-label={isMobile ? 'Close sidebar' : 'Toggle sidebar'}
    >
      <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        {isMobile ? (
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
        ) : (
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
        )}
      </svg>
    </button>
  )
}

function UserSection({ isCollapsed, isDark }) {
  return (
    <div
      className={cn(
        'border-t p-4',
        isDark ? 'border-slate-800' : 'border-slate-200'
      )}
    >
      <button
        className={cn(
          'flex items-center w-full transition-colors group outline-none focus-visible:ring-2 focus-visible:ring-blue-500 rounded-lg',
          isDark ? 'text-slate-300 hover:text-white' : 'text-slate-500 hover:text-slate-900'
        )}
      >
        <div className="h-9 w-9 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center text-white font-medium shadow-md flex-shrink-0">
          A
        </div>
        <div
          className={cn(
            'ml-3 text-left transition-all duration-300 overflow-hidden',
            isCollapsed ? 'lg:opacity-0 lg:w-0' : 'opacity-100'
          )}
        >
          <p className={cn('text-sm font-medium', isDark ? 'text-white' : 'text-slate-900')}>
            Admin User
          </p>
          <p
            className={cn(
              'text-xs transition-colors',
              isDark
                ? 'text-slate-500 group-hover:text-slate-300'
                : 'text-slate-300 group-hover:text-slate-500'
            )}
          >
            View Profile
          </p>
        </div>
      </button>
    </div>
  )
}

// ─── Main Component ──────────────────────────────────────────────────

export const Sidebar = () => {
  const pathname = usePathname()
  const { sidebarCollapsed, toggleSidebar } = useDashboard()
  const { theme } = useTheme()
  const isDark = theme === 'dark'

  return (
    <>
      <MobileOverlay isOpen={!sidebarCollapsed} onClose={toggleSidebar} />

      <motion.aside
        className={cn(
          'fixed inset-y-0 left-0 z-30 h-screen flex flex-col',
          'transition-colors duration-300',
          isDark
            ? 'bg-slate-900 border-r border-slate-800'
            : 'bg-white border-r border-slate-200'
        )}
        initial={false}
        animate={sidebarCollapsed ? 'collapsed' : 'open'}
        variants={ANIMATION_CONFIG.sidebar}
      >
        {/* Header */}
        <div
          className={cn(
            'flex items-center justify-between h-16 px-4 border-b flex-shrink-0',
            isDark ? 'border-slate-800' : 'border-slate-200'
          )}
        >
          <Link
            href="/dashboard"
            className={cn(
              'text-lg font-bold tracking-tight transition-all duration-300 overflow-hidden',
              isDark ? 'text-white' : 'text-slate-900',
              sidebarCollapsed ? 'lg:opacity-0 lg:w-0' : 'opacity-100'
            )}
          >
            Admin
          </Link>

          <div className="flex items-center">
            <ToggleButton onClick={toggleSidebar} isDark={isDark} />
            <ToggleButton onClick={toggleSidebar} isDark={isDark} isMobile />
          </div>
        </div>

        {/* Navigation */}
        <nav className="flex-1 px-3 py-4 space-y-1 overflow-y-auto overflow-x-hidden">
          {MENU_ITEMS.map((item, index) => (
            <NavLink
              key={item.href}
              item={item}
              index={index}
              isActive={pathname === item.href}
              isCollapsed={sidebarCollapsed}
              isDark={isDark}
            />
          ))}
        </nav>

        {/* User Section */}
        <UserSection isCollapsed={sidebarCollapsed} isDark={isDark} />
      </motion.aside>
    </>
  )
}