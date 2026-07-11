// src/components/layout/WebsiteLayout.jsx
'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { usePathname } from 'next/navigation'
import { Header } from './Header'
import { Footer } from './Footer'
import { cn } from '@/lib/helpers'
import { useTheme } from '@/context/ThemeContext'
import { useThemeClasses } from '@/lib/theme-helpers'

const pageVariants = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -20 },
}

const pageTransition = {
  duration: 0.3,
  ease: [0.25, 0.1, 0.25, 1],
}

const WebsiteLayout = ({ children, className = '' }) => {
  const pathname = usePathname()
  const { theme } = useTheme()
  const isDark = theme === 'dark'
  const themeClasses = useThemeClasses()

  return (
    <div className={cn(
      'min-h-screen flex flex-col theme-transition',
      themeClasses.bg.primary,
      className
    )}>
      {/* Background decoration - centralized theme control */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className={cn(
          "absolute top-0 -left-40 w-96 h-96 rounded-full blur-3xl",
          isDark ? "bg-blue-500/5" : "bg-blue-500/[0.02]"
        )} />
        <div className={cn(
          "absolute bottom-0 -right-40 w-96 h-96 rounded-full blur-3xl",
          isDark ? "bg-purple-500/5" : "bg-purple-500/[0.02]"
        )} />
        <div className={cn(
          "absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full blur-3xl",
          isDark ? "bg-cyan-500/5" : "bg-cyan-500/[0.02]"
        )} />
      </div>
      
      <Header />
      <AnimatePresence mode="wait">
        <motion.main
          key={pathname}
          initial="initial"
          animate="animate"
          exit="exit"
          variants={pageVariants}
          transition={pageTransition}
          className="flex-grow relative z-10"
        >
          {children}
        </motion.main>
      </AnimatePresence>
      <Footer />
    </div>
  )
}

export { WebsiteLayout }