// src/components/sections/FeaturesSection.jsx
'use client'

import { FeatureCard } from '@/components/cards/FeatureCard'
import { motion } from 'framer-motion'
import { useTheme } from '@/context/ThemeContext'
import { useThemeClasses } from '@/lib/theme-helpers'
import { cn } from '@/lib/helpers'

const features = [
  {
    title: 'Analytics Dashboard',
    description: 'Real-time insights into your business metrics with customizable reports and visualizations.',
    icon: 'M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z',
    gradient: 'from-blue-500 to-cyan-500',
  },
  {
    title: 'Team Collaboration',
    description: 'Work together seamlessly with shared workspaces, comments, and real-time updates.',
    icon: 'M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z',
    gradient: 'from-purple-500 to-pink-500',
  },
  {
    title: 'Secure & Reliable',
    description: 'Enterprise-grade security with 99.9% uptime SLA and automatic backups.',
    icon: 'M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z',
    gradient: 'from-emerald-500 to-teal-500',
  },
  {
    title: 'API Integration',
    description: 'Connect with your favorite tools using our robust REST API and webhooks.',
    icon: 'M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4',
    gradient: 'from-orange-500 to-amber-500',
  },
  {
    title: 'Automated Workflows',
    description: 'Save time with automated tasks, triggers, and smart notifications.',
    icon: 'M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15',
    gradient: 'from-rose-500 to-pink-500',
  },
  {
    title: '24/7 Support',
    description: 'Round-the-clock customer support via chat, email, and phone.',
    icon: 'M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z',
    gradient: 'from-indigo-500 to-purple-500',
  },
]

export const FeaturesSection = () => {
  const { theme } = useTheme()
  const themeClasses = useThemeClasses()
  const isDark = theme === 'dark'

  return (
    <section className={cn(
      "py-24 theme-transition relative overflow-hidden",
      themeClasses.bg.primary
    )}>
      {/* Background decoration - using centralized theme */}
      <div className="absolute inset-0 overflow-hidden">
        <div className={cn(
          "absolute -top-40 -right-40 w-80 h-80 rounded-full blur-3xl opacity-20",
          isDark ? "bg-blue-500/10" : "bg-blue-500/10"
        )} />
        <div className={cn(
          "absolute -bottom-40 -left-40 w-80 h-80 rounded-full blur-3xl opacity-20",
          isDark ? "bg-purple-500/10" : "bg-purple-500/10"
        )} />
        <div className={cn(
          "absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full blur-3xl opacity-10",
          isDark ? "bg-cyan-500/5" : "bg-cyan-500/5"
        )} />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className={cn(
              "inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium mb-4",
              "border transition-colors duration-300",
              isDark 
                ? "bg-blue-500/10 text-blue-400 border-blue-500/20" 
                : "bg-blue-50 text-blue-600 border-blue-200"
            )}
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500" />
            </span>
            Features
          </motion.div>
          
          <h2 className={cn(
            "text-3xl md:text-5xl font-bold mb-4",
            themeClasses.text.primary
          )}>
            Everything you need to{' '}
            <span className={cn(
              "bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent",
              isDark && "from-blue-400 to-purple-400"
            )}>
              succeed
            </span>
          </h2>
          <p className={cn(
            "text-xl max-w-2xl mx-auto",
            themeClasses.text.secondary
          )}>
            Powerful features to help you manage, analyze, and grow your business efficiently.
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <FeatureCard 
                {...feature} 
                delay={index * 0.1}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}