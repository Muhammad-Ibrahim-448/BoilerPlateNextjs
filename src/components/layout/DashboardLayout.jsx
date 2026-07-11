'use client'

import { motion } from 'framer-motion'
import { Sidebar } from './Sidebar'
import { DashboardHeader } from './DashboardHeader'
import { useDashboard } from '@/hooks/useDashboard'
import { useTheme } from '@/context/ThemeContext'
import { cn } from '@/lib/helpers'

// ─── Constants ───────────────────────────────────────────────────────
const SIDEBAR_WIDTHS = {
  open: 256,      // w-64
  collapsed: 80,  // w-20
}

const ANIMATION_CONFIG = {
  main: {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.3 },
  },
}

// ─── Sub-components ────────────────────────────────────────────────────

function BackgroundDecoration({ isDark }) {
  const colorIntensity = isDark ? '5' : '[0.02]'

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none">
      <div className={cn(
        "absolute top-0 -left-40 w-96 h-96 rounded-full blur-3xl",
        `bg-blue-500/${colorIntensity}`
      )} />
      <div className={cn(
        "absolute bottom-0 -right-40 w-96 h-96 rounded-full blur-3xl",
        `bg-purple-500/${colorIntensity}`
      )} />
      <div className={cn(
        "absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full blur-3xl",
        `bg-cyan-500/${colorIntensity}`
      )} />
    </div>
  )
}

// ─── Main Component ────────────────────────────────────────────────────

const DashboardLayout = ({ children }) => {
  const { sidebarCollapsed } = useDashboard()
  const { theme } = useTheme()
  const isDark = theme === 'dark'

  const sidebarWidth = sidebarCollapsed
    ? SIDEBAR_WIDTHS.collapsed
    : SIDEBAR_WIDTHS.open

  return (
    <div className={cn(
      "min-h-screen flex",
      isDark ? "bg-slate-950" : "bg-slate-50"
    )}>
      {/* Background decoration */}
      <BackgroundDecoration isDark={isDark} />

      {/* Sidebar */}
      <Sidebar />

      {/* Main content area — shifts with sidebar */}
      <motion.div
        className="flex-1 flex flex-col min-w-0 h-screen overflow-hidden relative z-10"
        initial={false}
        animate={{
          marginLeft: sidebarWidth,
        }}
        transition={{
          duration: 0.3,
          ease: 'easeInOut',
        }}
      >
        <DashboardHeader />

        <motion.main
          {...ANIMATION_CONFIG.main}
          className={cn(
            "flex-1 overflow-y-auto p-4 lg:p-8",
            isDark ? "bg-slate-950" : "bg-slate-50"
          )}
        >
          <div className="mx-auto">
            {children}
          </div>
        </motion.main>
      </motion.div>
    </div>
  )
}

export { DashboardLayout }