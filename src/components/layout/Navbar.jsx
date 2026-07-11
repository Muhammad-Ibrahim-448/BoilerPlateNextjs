// src/components/layout/Navbar.jsx
'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from 'framer-motion'
import { Menu, X, ChevronDown } from 'lucide-react'
import { useTheme } from '@/context/ThemeContext'
import { useThemeClasses, useNavbarStyles, useLinkStyles } from '@/lib/theme-helpers'
import { Button } from '@/components/common/Button'
import { ThemeToggle } from '@/components/common/ThemeToggle'
import { cn } from '@/lib/helpers'

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { 
    href: '/services', 
    label: 'Services',
    dropdown: [
      { href: '/services/consulting', label: 'Consulting' },
      { href: '/services/implementation', label: 'Implementation' },
      { href: '/services/training', label: 'Training' },
    ]
  },
  { href: '/products', label: 'Products' },
  { href: '/blog', label: 'Blog' },
  { href: '/contact', label: 'Contact' },
]

export const Navbar = ({ variant = 'default' }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState(null)
  const pathname = usePathname()
  const { theme, mounted } = useTheme()
  const themeClasses = useThemeClasses()
  const navbarStyles = useNavbarStyles()
  const linkStyles = useLinkStyles()
  const isDark = theme === 'dark'
  const { scrollY } = useScroll()

  useMotionValueEvent(scrollY, "change", (latest) => {
    setScrolled(latest > 20)
  })

  if (!mounted) {
    return <NavbarSkeleton />
  }

  // Get navbar styles based on variant, scroll, and theme
  const getNavbarStyles = () => {
    if (variant === 'light') {
      return cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-500',
        scrolled 
          ? 'bg-white/95 backdrop-blur-xl shadow-lg shadow-slate-200/50 border-b border-slate-200' 
          : 'bg-white/80 backdrop-blur-sm border-b border-slate-200/50'
      )
    }
    
    if (variant === 'dark') {
      return cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-500',
        scrolled 
          ? 'bg-slate-950/95 backdrop-blur-xl shadow-lg shadow-slate-950/50 border-b border-slate-800' 
          : 'bg-slate-950/80 backdrop-blur-sm'
      )
    }
    
    if (variant === 'glass') {
      return cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-500',
        scrolled 
          ? navbarStyles.glass.scrolled
          : navbarStyles.glass.default
      )
    }

    // default - dynamic based on theme
    return cn(
      'fixed top-0 left-0 right-0 z-50 transition-all duration-500',
      scrolled 
        ? isDark 
          ? 'bg-slate-900/95 backdrop-blur-xl shadow-lg shadow-slate-950/50 border-b border-slate-800' 
          : 'bg-white/95 backdrop-blur-xl shadow-lg shadow-slate-200/50 border-b border-slate-200'
        : isDark 
          ? 'bg-transparent'
          : 'bg-transparent'
    )
  }

  // Logo text color based on theme and scroll state
  const getLogoTextColor = () => {
    if (variant === 'light') {
      return 'bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent'
    }
    if (variant === 'dark') {
      return 'bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent'
    }
    if (variant === 'glass') {
      return scrolled 
        ? 'bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400 bg-clip-text text-transparent'
        : 'text-white'
    }
    // default
    if (scrolled) {
      return isDark 
        ? 'bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent'
        : 'bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent'
    }
    return isDark ? 'text-white' : 'text-slate-900'
  }

  // Navigation link text color
  const getLinkTextColor = () => {
    if (variant === 'light') {
      return scrolled ? 'text-slate-700' : 'text-slate-700'
    }
    if (variant === 'dark') {
      return scrolled ? 'text-slate-300' : 'text-slate-300'
    }
    if (variant === 'glass') {
      return scrolled 
        ? (isDark ? 'text-slate-300' : 'text-slate-700')
        : 'text-white'
    }
    // default
    if (scrolled) {
      return isDark ? 'text-slate-300' : 'text-slate-700'
    }
    return isDark ? 'text-white' : 'text-slate-900'
  }

  // Navigation link hover background
  const getLinkHoverBg = () => {
    if (variant === 'light') {
      return 'hover:bg-slate-100'
    }
    if (variant === 'dark') {
      return 'hover:bg-slate-800'
    }
    if (variant === 'glass') {
      return scrolled 
        ? (isDark ? 'hover:bg-slate-800' : 'hover:bg-slate-100')
        : 'hover:bg-white/10'
    }
    // default
    if (scrolled) {
      return isDark ? 'hover:bg-slate-800' : 'hover:bg-slate-100'
    }
    return isDark ? 'hover:bg-white/10' : 'hover:bg-black/5'
  }

  // Active link styles
  const getActiveLinkStyles = () => {
    if (variant === 'light') {
      return 'bg-blue-500/10 text-blue-600 backdrop-blur-sm'
    }
    if (variant === 'dark') {
      return 'bg-blue-500/20 text-blue-400 backdrop-blur-sm'
    }
    if (variant === 'glass') {
      return scrolled
        ? (isDark ? 'bg-blue-500/20 text-blue-400' : 'bg-blue-500/10 text-blue-600')
        : 'bg-white/20 text-white backdrop-blur-sm'
    }
    // default
    if (scrolled) {
      return isDark 
        ? 'bg-blue-500/20 text-blue-400 backdrop-blur-sm'
        : 'bg-blue-500/10 text-blue-600 backdrop-blur-sm'
    }
    return isDark 
      ? 'bg-white/10 text-white backdrop-blur-sm'
      : 'bg-black/5 text-slate-900 backdrop-blur-sm'
  }

  // Mobile menu button styles
  const getMobileButtonStyles = () => {
    if (variant === 'light') {
      return 'text-slate-700 hover:bg-slate-100'
    }
    if (variant === 'dark') {
      return 'text-slate-300 hover:bg-slate-800'
    }
    if (variant === 'glass') {
      return scrolled
        ? (isDark ? 'text-slate-300 hover:bg-slate-800' : 'text-slate-700 hover:bg-slate-100')
        : 'text-white hover:bg-white/10'
    }
    // default
    if (scrolled) {
      return isDark 
        ? 'text-slate-300 hover:bg-slate-800'
        : 'text-slate-700 hover:bg-slate-100'
    }
    return isDark ? 'text-white hover:bg-white/10' : 'text-slate-900 hover:bg-black/5'
  }

  // Mobile menu background
  const getMobileMenuBg = () => {
    if (variant === 'light') {
      return 'bg-white border-t border-slate-200'
    }
    if (variant === 'dark') {
      return 'bg-slate-950 border-t border-slate-800'
    }
    // default
    return isDark 
      ? 'bg-slate-900 border-t border-slate-800'
      : 'bg-white border-t border-slate-200'
  }

  // Mobile link styles
  const getMobileLinkStyles = (isActive) => {
    if (variant === 'light') {
      return isActive
        ? 'bg-blue-50 text-blue-600'
        : 'text-slate-700 hover:bg-slate-50'
    }
    if (variant === 'dark') {
      return isActive
        ? 'bg-blue-500/10 text-blue-400'
        : 'text-slate-300 hover:bg-slate-800'
    }
    // default
    if (isActive) {
      return isDark 
        ? 'bg-blue-500/10 text-blue-400'
        : 'bg-blue-50 text-blue-600'
    }
    return isDark 
      ? 'text-slate-300 hover:bg-slate-800'
      : 'text-slate-700 hover:bg-slate-50'
  }

  // Dropdown styles
  const getDropdownStyles = () => {
    if (variant === 'light') {
      return 'bg-white border-slate-200 shadow-slate-200/50'
    }
    if (variant === 'dark') {
      return 'bg-slate-800 border-slate-700 shadow-slate-950/50'
    }
    // default
    return isDark 
      ? 'bg-slate-800 border-slate-700 shadow-slate-950/50'
      : 'bg-white border-slate-200 shadow-slate-200/50'
  }

  const getDropdownItemStyles = () => {
    if (variant === 'light') {
      return 'text-slate-700 hover:bg-slate-50 hover:text-blue-600'
    }
    if (variant === 'dark') {
      return 'text-slate-300 hover:bg-slate-700/50 hover:text-blue-400'
    }
    // default
    return isDark 
      ? 'text-slate-300 hover:bg-slate-700/50 hover:text-blue-400'
      : 'text-slate-700 hover:bg-slate-50 hover:text-blue-600'
  }

  const textColor = getLinkTextColor()
  const hoverBg = getLinkHoverBg()
  const activeLinkStyles = getActiveLinkStyles()

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
      className={getNavbarStyles()}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
            <Link href="/" className="flex items-center gap-3">
              <motion.div 
                className={cn(
                  "w-10 h-10 rounded-xl flex items-center justify-center shadow-lg",
                  isDark 
                    ? "bg-gradient-to-br from-blue-500 to-purple-500 shadow-blue-500/30"
                    : "bg-gradient-to-br from-blue-600 to-purple-600 shadow-blue-500/30"
                )}
                whileHover={{ rotate: 5 }}
              >
                <span className="text-white font-bold text-xl">S</span>
              </motion.div>
              <span className={cn(
                'text-2xl font-bold transition-colors duration-300',
                getLogoTextColor()
              )}>
                SaaS Platform
              </span>
            </Link>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link, index) => (
              <div 
                key={link.href}
                className="relative"
                onMouseEnter={() => link.dropdown && setActiveDropdown(index)}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <Link href={link.href}>
                  <motion.span
                    className={cn(
                      'relative px-4 py-2 text-sm font-medium rounded-xl transition-all duration-200 flex items-center gap-1',
                      pathname === link.href 
                        ? activeLinkStyles
                        : textColor,
                      hoverBg
                    )}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    {link.label}
                    {link.dropdown && (
                      <motion.div
                        animate={{ rotate: activeDropdown === index ? 180 : 0 }}
                        transition={{ duration: 0.2 }}
                      >
                        <ChevronDown className="h-4 w-4" />
                      </motion.div>
                    )}
                  </motion.span>
                </Link>

                <AnimatePresence>
                  {link.dropdown && activeDropdown === index && (
                    <motion.div
                      initial={{ opacity: 0, y: 10, scale: 0.95 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: 10, scale: 0.95 }}
                      transition={{ duration: 0.2 }}
                      className={cn(
                        'absolute top-full left-0 mt-2 w-48 rounded-xl shadow-xl border overflow-hidden',
                        getDropdownStyles()
                      )}
                    >
                      {link.dropdown.map((item, i) => (
                        <motion.div
                          key={item.href}
                          initial={{ opacity: 0, x: -10 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: i * 0.05 }}
                        >
                          <Link
                            href={item.href}
                            className={cn(
                              'block px-4 py-3 text-sm transition-colors',
                              getDropdownItemStyles()
                            )}
                          >
                            {item.label}
                          </Link>
                        </motion.div>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>

          {/* Right side */}
          <div className="hidden md:flex items-center gap-3">
            <ThemeToggle variant={variant === 'dark' ? 'minimal' : 'default'} />
            <Link href="/dashboard">
              <Button 
                variant={isDark || variant === 'dark' ? 'primary' : 'primary'} 
                size="sm"
              >
                Dashboard
              </Button>
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="flex md:hidden items-center gap-2">
            <ThemeToggle variant={variant === 'dark' ? 'minimal' : 'default'} />
            <motion.button
              whileTap={{ scale: 0.9 }}
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className={cn(
                'p-2 rounded-xl transition-colors',
                getMobileButtonStyles()
              )}
            >
              <AnimatePresence mode="wait">
                {mobileMenuOpen ? (
                  <motion.div
                    key="close"
                    initial={{ rotate: -90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: 90, opacity: 0 }}
                  >
                    <X className="h-6 w-6" />
                  </motion.div>
                ) : (
                  <motion.div
                    key="menu"
                    initial={{ rotate: 90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: -90, opacity: 0 }}
                  >
                    <Menu className="h-6 w-6" />
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className={cn(
              'md:hidden overflow-hidden shadow-lg',
              getMobileMenuBg()
            )}
          >
            <div className="px-4 py-6 space-y-2">
              {navLinks.map((link, index) => (
                <motion.div
                  key={link.href}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.05 }}
                >
                  <Link
                    href={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className={cn(
                      'block px-4 py-3 rounded-xl text-base font-medium transition-colors',
                      getMobileLinkStyles(pathname === link.href)
                    )}
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="pt-4 border-t border-slate-200 dark:border-slate-800"
              >
                <Link href="/dashboard" onClick={() => setMobileMenuOpen(false)}>
                  <Button className="w-full">Dashboard</Button>
                </Link>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  )
}

// ═══════════════════════════════════════════════════
// SKELETON COMPONENT
// ═══════════════════════════════════════════════════

function NavbarSkeleton() {
  return (
    <nav className="h-20 bg-white/80 dark:bg-slate-900/80 backdrop-blur-xl border-b border-slate-200 dark:border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-purple-600 rounded-xl" />
          <div className="w-32 h-6 bg-slate-200 dark:bg-slate-700 rounded-lg animate-pulse" />
        </div>
        <div className="flex items-center gap-4">
          <div className="hidden md:flex items-center gap-1">
            {[1, 2, 3, 4, 5].map((i) => (
              <div key={i} className="w-20 h-8 bg-slate-200 dark:bg-slate-700 rounded-xl animate-pulse" />
            ))}
          </div>
          <div className="w-10 h-10 bg-slate-200 dark:bg-slate-700 rounded-xl animate-pulse" />
          <div className="w-24 h-10 bg-slate-200 dark:bg-slate-700 rounded-xl animate-pulse" />
          <div className="md:hidden w-10 h-10 bg-slate-200 dark:bg-slate-700 rounded-xl animate-pulse" />
        </div>
      </div>
    </nav>
  )
}

export default Navbar