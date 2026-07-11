// src/app/(website)/contact/page.jsx
'use client'

import { ContactSection } from '@/components/sections/ContactSection'
import { motion } from 'framer-motion'
import { useTheme } from '@/context/ThemeContext'
import { useThemeClasses, usePageHeroStyles } from '@/lib/theme-helpers'
import { cn } from '@/lib/helpers'

export default function ContactPage() {
  const { theme } = useTheme()
  const themeClasses = useThemeClasses()
  const pageHero = usePageHeroStyles()
  const isDark = theme === 'dark'

  return (
    <>
      {/* Hero Section */}
      <div className={cn(
        pageHero.container,
        themeClasses.bg.primary
      )}>
        {/* Background decoration */}
        <div className="absolute inset-0 overflow-hidden">
          <div className={cn(
            "absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full blur-3xl opacity-10",
            isDark ? "bg-blue-500/10" : "bg-blue-500/5"
          )} />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="flex justify-center mb-4"
          >
            <span className={cn(
              "inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium",
              "border transition-colors duration-300",
              isDark 
                ? "bg-blue-500/10 text-blue-400 border-blue-500/20" 
                : "bg-blue-50 text-blue-600 border-blue-200"
            )}>
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500" />
              </span>
              Get in Touch
            </span>
          </motion.div>

          <h1 className={cn(
            "text-4xl md:text-5xl font-bold text-center mb-4",
            themeClasses.text.primary
          )}>
            Contact Us
          </h1>
          <p className={cn(
            "text-xl text-center max-w-2xl mx-auto",
            themeClasses.text.secondary
          )}>
            We'd love to hear from you. Send us a message and we'll respond as soon as possible.
          </p>
        </div>
      </div>
      
      <ContactSection />
    </>
  )
}