'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { useTheme } from '@/context/ThemeContext'
import { useThemeClasses, useGlassEffect, useFooterStyles } from '@/lib/theme-helpers'
import { cn } from '@/lib/helpers'

const footerLinks = {
  product: [
    { label: 'Features', href: '/services' },
    { label: 'Pricing', href: '/products' },
    { label: 'Documentation', href: '#' },
    { label: 'API', href: '#' },
  ],
  company: [
    { label: 'About', href: '/about' },
    { label: 'Blog', href: '/blog' },
    { label: 'Careers', href: '#' },
    { label: 'Press', href: '#' },
  ],
  resources: [
    { label: 'Community', href: '#' },
    { label: 'Help Center', href: '#' },
    { label: 'Partners', href: '#' },
    { label: 'Status', href: '#' },
  ],
  legal: [
    { label: 'Privacy', href: '#' },
    { label: 'Terms', href: '#' },
    { label: 'Cookie Policy', href: '#' },
  ],
}

export const Footer = ({ variant = 'default' }) => {
  const { theme, mounted } = useTheme()
  const themeClasses = useThemeClasses()
  const glass = useGlassEffect()
  const footerStyles = useFooterStyles()
  const isDark = theme === 'dark'

  if (!mounted) {
    return <FooterSkeleton />
  }

  // Get footer styles based on variant
  const getFooterStyles = () => {
    if (variant === 'light') {
      return 'bg-white border-t border-slate-200'
    }
    
    if (variant === 'dark') {
      return 'bg-slate-950 border-t border-slate-800'
    }
    
    if (variant === 'glass') {
      return cn(
        glass.default,
        'border-t border-white/20 dark:border-slate-800/50'
      )
    }

    // default - dynamic based on theme
    return isDark 
      ? 'bg-slate-900 border-t border-slate-800'
      : 'bg-white border-t border-slate-200'
  }

  // Text colors based on variant and theme
  const getTextColors = () => {
    if (variant === 'light') {
      return {
        heading: 'text-slate-900',
        body: 'text-slate-600',
        link: 'text-slate-500 hover:text-blue-600',
        muted: 'text-slate-500',
        brand: 'from-blue-600 to-purple-600',
        social: 'bg-slate-100 text-slate-600 hover:bg-blue-50 hover:text-blue-600',
      }
    }
    
    if (variant === 'dark') {
      return {
        heading: 'text-white',
        body: 'text-slate-300',
        link: 'text-slate-300 hover:text-blue-400',
        muted: 'text-slate-400',
        brand: 'from-blue-400 to-purple-400',
        social: 'bg-slate-800 text-slate-400 hover:bg-slate-700 hover:text-white',
      }
    }
    
    if (variant === 'glass') {
      return isDark 
        ? {
            heading: 'text-white',
            body: 'text-slate-300',
            link: 'text-slate-400 hover:text-blue-400',
            muted: 'text-slate-400',
            brand: 'from-blue-400 to-purple-400',
            social: 'bg-slate-800/50 text-slate-400 hover:bg-slate-700/50 hover:text-white',
          }
        : {
            heading: 'text-slate-900',
            body: 'text-slate-600',
            link: 'text-slate-500 hover:text-blue-600',
            muted: 'text-slate-500',
            brand: 'from-blue-600 to-purple-600',
            social: 'bg-white/50 text-slate-600 hover:bg-white hover:text-blue-600',
          }
    }

    // default - dynamic based on theme
    return isDark 
      ? {
          heading: 'text-white',
          body: 'text-slate-300',
          link: 'text-slate-300 hover:text-blue-400',
          muted: 'text-slate-300',
          brand: 'from-blue-400 to-purple-400',
          social: 'bg-slate-800 text-slate-200 hover:bg-slate-700 hover:text-white',
        }
      : {
          heading: 'text-slate-900',
          body: 'text-slate-600',
          link: 'text-slate-500 hover:text-blue-600',
          muted: 'text-slate-500',
          brand: 'from-blue-600 to-purple-600',
          social: 'bg-slate-100 text-slate-600 hover:bg-blue-50 hover:text-blue-600',
        }
  }

  const colors = getTextColors()
  const borderColor = isDark ? 'border-slate-500' : 'border-slate-200'

  return (
    <motion.footer
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
      className={cn(
        'transition-colors duration-500',
        getFooterStyles()
      )}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 lg:gap-12">
          {/* Brand Column */}
          <div className="col-span-2">
            <motion.span
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.1 }}
              className={cn(
                'text-2xl font-bold block mb-4 bg-gradient-to-r bg-clip-text text-transparent',
                colors.brand
              )}
            >
              SaaS Platform
            </motion.span>
            <p className={cn(
              'mb-6 max-w-xs leading-relaxed transition-colors duration-300',
              colors.body
            )}>
              Modern solutions for modern businesses. Scale your operations with our powerful platform.
            </p>
            <div className="flex space-x-4">
              {['twitter', 'github', 'linkedin'].map((social, index) => (
                <motion.a
                  key={social}
                  href="#"
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.9 }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 + index * 0.05 }}
                  className={cn(
                    'w-10 h-10 rounded-xl flex items-center justify-center transition-all duration-300',
                    colors.social
                  )}
                >
                  <span className="sr-only">{social}</span>
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                    {social === 'twitter' && (
                      <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                    )}
                    {social === 'github' && (
                      <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                    )}
                    {social === 'linkedin' && (
                      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                    )}
                  </svg>
                </motion.a>
              ))}
            </div>

            {/* Trust Badge */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="mt-6"
            >
              <div className={cn(
                "inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-medium",
                isDark 
                  ? "bg-emerald-500/10 text-emerald-400 border border-emerald-500/20"
                  : "bg-emerald-50 text-emerald-700 border border-emerald-200"
              )}>
                <span className="relative flex h-1.5 w-1.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                  <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-emerald-500" />
                </span>
                100% satisfaction guaranteed
              </div>
            </motion.div>
          </div>
          
          {/* Link Columns */}
          {Object.entries(footerLinks).slice(0, 3).map(([category, links], colIndex) => (
            <motion.div
              key={category}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 + colIndex * 0.1 }}
            >
              <h3 className={cn(
                'text-sm font-semibold uppercase tracking-wider mb-4 transition-colors duration-300',
                colors.heading
              )}>
                {category}
              </h3>
              <ul className="space-y-3">
                {links.map((link, linkIndex) => (
                  <motion.li
                    key={link.label}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.4 + colIndex * 0.1 + linkIndex * 0.05 }}
                  >
                    <Link 
                      href={link.href} 
                      className={cn(
                        'text-sm transition-all duration-200 inline-block relative group',
                        colors.link
                      )}
                    >
                      {link.label}
                      <span className={cn(
                        "absolute bottom-0 left-0 w-0 h-0.5 transition-all duration-300",
                        isDark ? "bg-blue-400" : "bg-blue-600",
                        "group-hover:w-full"
                      )} />
                    </Link>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
        
        {/* Bottom Bar */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className={cn(
            'mt-12 pt-8 border-t flex flex-col md:flex-row justify-between items-center gap-4 transition-colors duration-300',
            borderColor
          )}
        >
          <p className={cn(
            'text-sm transition-colors duration-300',
            colors.muted
          )}>
            © {new Date().getFullYear()} SaaS Platform. All rights reserved.
          </p>
          <div className="flex flex-wrap justify-center gap-4 md:gap-6">
            {footerLinks.legal.map((link) => (
              <Link 
                key={link.label} 
                href={link.href} 
                className={cn(
                  'text-sm transition-colors duration-200 hover:underline underline-offset-2',
                  colors.link
                )}
              >
                {link.label}
              </Link>
            ))}
          </div>
        </motion.div>
      </div>
    </motion.footer>
  )
}

// ═══════════════════════════════════════════════════
// SKELETON COMPONENT
// ═══════════════════════════════════════════════════

function FooterSkeleton() {
  return (
    <footer className="bg-slate-900 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 lg:gap-12">
          <div className="col-span-2">
            <div className="w-32 h-8 bg-slate-700 rounded-lg animate-pulse mb-4" />
            <div className="w-48 h-4 bg-slate-700 rounded-lg animate-pulse mb-6" />
            <div className="flex space-x-4">
              {[1, 2, 3].map((i) => (
                <div key={i} className="w-10 h-10 bg-slate-700 rounded-xl animate-pulse" />
              ))}
            </div>
            <div className="mt-6 w-48 h-6 bg-slate-700 rounded-full animate-pulse" />
          </div>
          {[1, 2, 3].map((col) => (
            <div key={col}>
              <div className="w-16 h-4 bg-slate-700 rounded-lg animate-pulse mb-4" />
              <div className="space-y-3">
                {[1, 2, 3, 4].map((i) => (
                  <div key={i} className="w-24 h-3 bg-slate-700 rounded-lg animate-pulse" />
                ))}
              </div>
            </div>
          ))}
        </div>
        <div className="mt-12 pt-8 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="w-48 h-4 bg-slate-700 rounded-lg animate-pulse" />
          <div className="flex space-x-6">
            {[1, 2, 3].map((i) => (
              <div key={i} className="w-16 h-4 bg-slate-700 rounded-lg animate-pulse" />
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}