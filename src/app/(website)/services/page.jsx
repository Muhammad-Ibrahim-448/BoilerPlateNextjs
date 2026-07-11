// src/app/(website)/services/page.jsx
'use client'

import { FeatureCard } from '@/components/cards/FeatureCard'
import { CTASection } from '@/components/sections/CTASection'
import { motion } from 'framer-motion'
import { useTheme } from '@/context/ThemeContext'
import { useThemeClasses, usePageHeroStyles } from '@/lib/theme-helpers'
import { cn } from '@/lib/helpers'

const services = [
  {
    title: 'Consulting',
    description: 'Expert guidance to help you make the most of our platform and optimize your workflows.',
    icon: 'M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z',
  },
  {
    title: 'Implementation',
    description: 'Seamless onboarding and setup to get your team up and running quickly.',
    icon: 'M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z M15 12a3 3 0 11-6 0 3 3 0 016 0z',
  },
  {
    title: 'Training',
    description: 'Comprehensive training programs to ensure your team is proficient and confident.',
    icon: 'M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253',
  },
  {
    title: 'Support',
    description: '24/7 technical support to resolve any issues and keep your business running smoothly.',
    icon: 'M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z',
  },
]

export default function ServicesPage() {
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
              Our Services
            </span>
          </motion.div>

          <h1 className={cn(
            "text-4xl md:text-5xl font-bold text-center mb-4",
            themeClasses.text.primary
          )}>
            Our Services
          </h1>
          <p className={cn(
            "text-xl text-center max-w-2xl mx-auto",
            themeClasses.text.secondary
          )}>
            Comprehensive solutions to help your business succeed
          </p>
        </div>
      </div>
      
      {/* Services Grid */}
      <section className={cn(
        "py-24 theme-transition relative overflow-hidden",
        themeClasses.bg.primary
      )}>
        {/* Background decoration */}
        <div className="absolute inset-0 overflow-hidden">
          <div className={cn(
            "absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full blur-3xl opacity-10",
            isDark ? "bg-purple-500/10" : "bg-purple-500/5"
          )} />
          <div className={cn(
            "absolute -bottom-40 -right-40 w-96 h-96 rounded-full blur-3xl opacity-10",
            isDark ? "bg-cyan-500/10" : "bg-cyan-500/5"
          )} />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          {/* Section Header */}
          <motion.div 
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className={cn(
              "text-3xl md:text-4xl font-bold mb-4",
              themeClasses.text.primary
            )}>
              What We Offer
            </h2>
            <p className={cn(
              "text-lg max-w-2xl mx-auto",
              themeClasses.text.secondary
            )}>
              Expert services designed to help you get the most out of our platform
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <FeatureCard {...service} />
              </motion.div>
            ))}
          </div>

          {/* Trust indicator */}
          <motion.div 
            className="mt-16 text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            <div className={cn(
              "flex flex-wrap justify-center items-center gap-6 md:gap-10",
              isDark ? "text-slate-300" : "text-slate-400"
            )}>
              <span className="flex items-center gap-2">
                <span className={cn(
                  "text-sm font-medium",
                  isDark ? "text-emerald-400" : "text-emerald-600"
                )}>
                  ✓
                </span>
                <span className="text-sm">10,000+ happy clients</span>
              </span>
              <span className="w-px h-6 bg-slate-300 dark:bg-slate-700" />
              <span className="flex items-center gap-2">
                <span className={cn(
                  "text-sm font-medium",
                  isDark ? "text-emerald-400" : "text-emerald-600"
                )}>
                  ✓
                </span>
                <span className="text-sm">4.9/5 average rating</span>
              </span>
              <span className="w-px h-6 bg-slate-300 dark:bg-slate-700" />
              <span className="flex items-center gap-2">
                <span className={cn(
                  "text-sm font-medium",
                  isDark ? "text-emerald-400" : "text-emerald-600"
                )}>
                  ✓
                </span>
                <span className="text-sm">99.9% satisfaction rate</span>
              </span>
            </div>
          </motion.div>
        </div>
      </section>
      
      <CTASection />
    </>
  )
}