// src/components/sections/HeroSection.jsx
'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'
import Link from 'next/link'
import { Button } from '@/components/common/Button'
import { ArrowRight, Play } from 'lucide-react'
import { useTheme } from '@/context/ThemeContext'
import { useThemeClasses } from '@/lib/theme-helpers'
import { cn } from '@/lib/helpers'

export const HeroSection = () => {
  const containerRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end start'],
  })
  const { theme } = useTheme()
  const themeClasses = useThemeClasses()
  const isDark = theme === 'dark'

  const y = useTransform(scrollYProgress, [0, 1], [0, 150])
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0])

  return (
    <section 
      ref={containerRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden theme-transition"
    >
      {/* Dynamic Background using centralized theme */}
      <div className={cn(
        "absolute inset-0 transition-colors duration-500 bg-gradient-to-b",
        themeClasses.gradient.hero
      )} />
      
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: 'linear',
          }}
          className={cn(
            "absolute -top-1/2 -left-1/2 w-full h-full rounded-full blur-3xl",
            isDark ? "bg-blue-500/10" : "bg-blue-500/5"
          )}
        />
        <motion.div
          animate={{
            scale: [1.2, 1, 1.2],
            rotate: [360, 180, 0],
          }}
          transition={{
            duration: 30,
            repeat: Infinity,
            ease: 'linear',
          }}
          className={cn(
            "absolute -bottom-1/2 -right-1/2 w-full h-full rounded-full blur-3xl",
            isDark ? "bg-purple-500/10" : "bg-purple-500/5"
          )}
        />
        
        {/* Grid Pattern using centralized theme */}
        <div 
          className={cn(
            "absolute inset-0 bg-[size:100px_100px]",
            isDark 
              ? "bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)]" 
              : "bg-[linear-gradient(rgba(0,0,0,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.03)_1px,transparent_1px)]"
          )}
        />
      </div>

      <motion.div 
        style={{ y, opacity }}
        className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 text-center"
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
          className={cn(
            "inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium mb-8",
            isDark 
              ? "bg-white/5 backdrop-blur-sm border border-white/10 text-blue-400" 
              : "bg-slate-100/80 backdrop-blur-sm border border-slate-200 text-blue-600"
          )}
        >
          <span className="flex h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
          Now with AI-powered analytics
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.25, 0.1, 0.25, 1] }}
          className={cn(
            "text-5xl md:text-7xl font-bold mb-6 leading-tight tracking-tight",
            themeClasses.text.primary
          )}
        >
          Scale Your Business with{' '}
          <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
            Intelligent
          </span>{' '}
          Solutions
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.25, 0.1, 0.25, 1] }}
          className={cn(
            "text-xl md:text-2xl mb-10 max-w-3xl mx-auto leading-relaxed",
            themeClasses.text.secondary
          )}
        >
          Powerful AI-driven tools to manage, analyze, and grow your business. 
          Join <span className={cn("font-semibold", themeClasses.text.primary)}>10,000+</span> companies already using our platform.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <Link href="/dashboard">
            <Button size="lg" className="group items-center">
              Get Started Free
              <motion.span
                className="inline-block"
                initial={{ x: 0 }}
                whileHover={{ x: 5 }}
              >
                <ArrowRight className="ml-2 h- w-5 transition-transform group-hover:translate-x-1" />
              </motion.span>
            </Button>
          </Link>
          
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className={cn(
              "flex items-center gap-2 px-6 py-3 rounded-xl font-medium transition-colors",
              isDark 
                ? "bg-white/5 backdrop-blur-sm border border-white/10 text-white hover:bg-white/10" 
                : "bg-slate-100/80 backdrop-blur-sm border border-slate-200 text-slate-700 hover:bg-slate-200/80"
            )}
          >
            <Play className="h-5 w-5 fill-current" />
            Watch Demo
          </motion.button>
        </motion.div>

        {/* Stats using centralized theme */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto"
        >
          {[
            { value: '10k+', label: 'Active Users' },
            { value: '99.9%', label: 'Uptime' },
            { value: '24/7', label: 'Support' },
            { value: '150+', label: 'Countries' },
          ].map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.6 + index * 0.1 }}
              className="text-center"
            >
              <div className={cn(
                "text-3xl md:text-4xl font-bold mb-1",
                themeClasses.text.primary
              )}>
                {stat.value}
              </div>
              <div className={themeClasses.text.muted}>
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>

      {/* Scroll Indicator using centralized theme */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
          className={cn(
            "w-6 h-10 rounded-full flex justify-center pt-2",
            isDark ? "border-2 border-slate-600" : "border-2 border-slate-300"
          )}
        >
          <motion.div className={cn(
            "w-1.5 h-3 rounded-full",
            isDark ? "bg-slate-400" : "bg-slate-500"
          )} />
        </motion.div>
      </motion.div>
    </section>
  )
}