// src/components/sections/CTASection.jsx
'use client'

import Link from 'next/link'
import { Button } from '@/components/common/Button'
import { motion } from 'framer-motion'
import { useTheme } from '@/context/ThemeContext'
import { useThemeClasses } from '@/lib/theme-helpers'
import { cn } from '@/lib/helpers'
import { Zap, Calendar, Server, Puzzle, Shield } from 'lucide-react'

// Animation variants
const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      delay,
      ease: [0.4, 0, 0.2, 1],
    },
  }),
}

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
}

const stats = [
  { value: '99.9%', label: 'Uptime SLA', icon: Server },
  { value: '500+', label: 'Integrations', icon: Puzzle },
  { value: 'SOC 2', label: 'Compliant', icon: Shield },
]

const trustLogos = ['Stripe', 'Notion', 'Figma', 'Linear', 'Vercel']

export const CTASection = () => {
  const { theme, mounted } = useTheme()
  const themeClasses = useThemeClasses()
  const isDark = theme === 'dark'

  if (!mounted) {
    return <CTASkeleton />
  }

  return (
    <section
      className={cn(
        'relative py-24 md:py-32 overflow-hidden transition-all duration-700',
        isDark 
          ? "bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950" 
          : "bg-gradient-to-b from-slate-50 via-white to-slate-50"
      )}
    >
      <div className={cn(
        'relative py-24 md:py-32 max-w-7xl mx-auto rounded-4xl overflow-hidden transition-all duration-700',
        isDark 
          ? "bg-gradient-to-br from-blue-500/5 to-purple-500/5"
          : "bg-gradient-to-br from-blue-500/10 to-purple-500/10" 
      )}>

      {/* ═══════════════════════════════════════════
          BACKGROUND EFFECTS - Using centralized theme
         ═══════════════════════════════════════════ */}

      {/* Animated orb glows */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className={cn(
            'absolute -top-40 -left-20 w-[500px] h-[500px] rounded-full blur-3xl',
            isDark ? 'bg-blue-500/10' : 'bg-blue-500/5'
          )}
          animate={{
            x: [0, 30, -20, 0],
            y: [0, -30, 20, 0],
            scale: [1, 1.05, 0.95, 1],
          }}
          transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
        />
        <motion.div
          className={cn(
            'absolute -bottom-32 -right-20 w-[400px] h-[400px] rounded-full blur-3xl',
            isDark ? 'bg-purple-500/10' : 'bg-purple-500/5'
          )}
          animate={{
            x: [0, -20, 30, 0],
            y: [0, 20, -30, 0],
            scale: [1, 0.95, 1.05, 1],
          }}
          transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
        />
      </div>

      {/* Grid pattern overlay - Using centralized theme */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: isDark
            ? `linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px),
               linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)`
            : `linear-gradient(rgba(0,0,0,0.03) 1px, transparent 1px),
               linear-gradient(90deg, rgba(0,0,0,0.03) 1px, transparent 1px)`,
          backgroundSize: '60px 60px',
          maskImage: 'radial-gradient(ellipse at center, black 40%, transparent 80%)',
          WebkitMaskImage: 'radial-gradient(ellipse at center, black 40%, transparent 80%)',
        }}
      />

      {/* Floating particles */}
      <Particles isDark={isDark} />

      {/* ═══════════════════════════════════════════
          CONTENT - Using centralized theme
         ═══════════════════════════════════════════ */}
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Enterprise Badge - Using centralized theme */}
        <motion.div
          className={cn(
            'inline-flex items-center gap-2.5 px-4 py-2 rounded-full text-sm font-medium mb-8',
            'backdrop-blur-md border transition-all duration-300',
            isDark
              ? 'bg-slate-900/70 border-slate-800/50 text-blue-400'
              : 'bg-white/70 border-slate-200/50 text-blue-600'
          )}
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          whileHover={{ y: -2 }}
        >
          <span
            className={cn(
              'w-2 h-2 rounded-full animate-pulse',
              isDark ? 'bg-blue-400' : 'bg-blue-600'
            )}
          />
          Trusted by 10,000+ Enterprise Teams
        </motion.div>

        {/* Heading - Using centralized theme */}
        <motion.h2
          className={cn(
            'text-3xl md:text-5xl lg:text-6xl font-extrabold mb-6 tracking-tight leading-[1.1]',
            themeClasses.text.primary
          )}
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          custom={0.1}
        >
          Ready to Scale Your{' '}
          <span className="bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400 bg-clip-text text-transparent">
            Business Operations?
          </span>
        </motion.h2>

        {/* Subtitle - Using centralized theme */}
        <motion.p
          className={cn(
            'text-lg md:text-xl max-w-2xl mx-auto mb-12 leading-relaxed',
            themeClasses.text.secondary
          )}
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          custom={0.2}
        >
          Join industry leaders who rely on our enterprise platform to drive growth,
          streamline workflows, and deliver exceptional results at scale.
        </motion.p>

        {/* Stats Row - Using centralized theme */}
        <motion.div
          className="flex flex-wrap justify-center gap-8 md:gap-14 mb-14"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {stats.map((stat) => (
            <motion.div
              key={stat.label}
              className="text-center group cursor-default"
              variants={fadeInUp}
              whileHover={{ scale: 1.05 }}
              transition={{ type: 'spring', stiffness: 400, damping: 17 }}
            >
              <div className={cn(
                'text-2xl md:text-3xl font-extrabold tracking-tight',
                themeClasses.text.primary
              )}>
                {stat.value}
              </div>
              <div className={cn(
                'text-xs uppercase tracking-widest font-semibold mt-1.5',
                themeClasses.text.muted
              )}>
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>


        {/* CTA Buttons - Using centralized theme */}
        <motion.div
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          custom={0.4}
        >
          <Link href="/dashboard" className="w-full sm:w-auto">
            <Button
              variant="primary"
              size="lg"
              icon={Zap}
              className={cn(
                'w-full sm:w-auto px-8 py-6 text-base font-semibold rounded-xl',
                isDark
                  ? 'bg-blue-600 text-white hover:bg-blue-700 shadow-lg shadow-blue-500/20 hover:shadow-blue-500/30'
                  : 'bg-blue-600 text-white hover:bg-blue-700 shadow-lg shadow-blue-500/20 hover:shadow-blue-500/30'
              )}
            >
              Start Free Trial
            </Button>
          </Link>

          <Link href="/contact" className="w-full sm:w-auto">
            <Button
              variant="outline"
              size="lg"
              icon={Calendar}
              className={cn(
                'w-full sm:w-auto px-8 py-6 font-semibold rounded-xl',
                'backdrop-blur-md transition-all duration-300',
                isDark
                  ? 'border-slate-700 text-slate-300 hover:bg-slate-800/50 hover:border-blue-500/50'
                  : 'border-slate-200 text-slate-700 hover:bg-slate-50 hover:border-blue-500/50'
              )}
            >
              Schedule Demo
            </Button>
          </Link>
        </motion.div>

        {/* Trust indicator */}
        <motion.div
          className="mt-12"
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          custom={0.5}
        >
          <div className={cn(
            "flex items-center justify-center gap-2 text-sm",
            isDark ? "text-slate-300" : "text-slate-400"
          )}>
            <span className="flex items-center gap-1">
              <span className="text-emerald-500">✓</span>
              No credit card required
            </span>
            <span className="w-px h-4 bg-slate-300 dark:bg-slate-700" />
            <span className="flex items-center gap-1">
              <span className="text-emerald-500">✓</span>
              Free 30-day trial
            </span>
            <span className="w-px h-4 bg-slate-300 dark:bg-slate-700" />
            <span className="flex items-center gap-1">
              <span className="text-emerald-500">✓</span>
              Cancel anytime
            </span>
          </div>
        </motion.div>
      </div>
      </div>
    </section>
  )
}

// ═══════════════════════════════════════════════════
// SUB-COMPONENTS
// ═══════════════════════════════════════════════════

/**
 * Floating particles background effect
 */
function Particles({ isDark }) {
  const particleCount = 200

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {Array.from({ length: particleCount }).map((_, i) => {
        const left = `${(i / particleCount) * 100 + Math.random() * 5}%`
        const duration = `${Math.random() * 10 + 10}s`
        const delay = `${Math.random() * 10}s`
        const size = `${Math.random() * 4 + 2}px`

        return (
          <motion.div
            key={i}
            className="absolute rounded-full"
            style={{
              left,
              width: size,
              height: size,
              bottom: '-10px',
              backgroundColor: isDark ? 'rgba(59, 131, 246, 0.5)' : 'rgba(12, 12, 12, 0.62)',
            }}
            animate={{
              y: [0, -800],
              opacity: [0, 0.4, 0.4, 0],
              rotate: [0, 720],
            }}
            transition={{
              duration: parseFloat(duration),
              delay: parseFloat(delay),
              repeat: Infinity,
              ease: 'linear',
            }}
          />
        )
      })}
    </div>
  )
}

/**
 * Skeleton loader for SSR hydration
 */
function CTASkeleton() {
  return (
    <section className="relative py-24 md:py-32 bg-gradient-to-br from-slate-50 via-white to-slate-50 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950 overflow-hidden">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
        <div className="w-72 h-9 bg-slate-200 dark:bg-slate-700 rounded-full mx-auto animate-pulse" />
        <div className="w-full max-w-lg h-14 md:h-20 bg-slate-200 dark:bg-slate-700 rounded-xl mx-auto animate-pulse" />
        <div className="w-full max-w-md h-6 bg-slate-200 dark:bg-slate-700 rounded-lg mx-auto animate-pulse" />
        <div className="flex justify-center gap-4 mt-8">
          <div className="w-44 h-12 bg-slate-200 dark:bg-slate-700 rounded-xl animate-pulse" />
          <div className="w-44 h-12 bg-slate-200 dark:bg-slate-700 rounded-xl animate-pulse" />
        </div>
      </div>
    </section>
  )
}