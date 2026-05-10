'use client'

import { motion, AnimatePresence } from 'framer-motion'

// Enterprise-grade easing curves
export const easings = {
  smooth: [0.25, 0.1, 0.25, 1],
  bounce: [0.68, -0.55, 0.265, 1.55],
  spring: { type: 'spring', stiffness: 300, damping: 30 },
  gentle: [0.4, 0, 0.2, 1],
  snappy: [0.4, 0, 0, 1],
}

export const FadeIn = ({ children, delay = 0, duration = 0.6, className = '', direction = 'up' }) => {
  const directions = {
    up: { y: 40, x: 0 },
    down: { y: -40, x: 0 },
    left: { x: 40, y: 0 },
    right: { x: -40, y: 0 },
    none: { x: 0, y: 0 },
  }

  return (
    <motion.div
      initial={{ opacity: 0, ...directions[direction] }}
      animate={{ opacity: 1, x: 0, y: 0 }}
      exit={{ opacity: 0, ...directions[direction] }}
      transition={{ 
        duration, 
        delay, 
        ease: easings.gentle 
      }}
      className={className}
    >
      {children}
    </motion.div>
  )
}

export const SlideIn = ({ children, direction = 'left', delay = 0, className = '' }) => {
  const directions = {
    left: { x: -100, y: 0 },
    right: { x: 100, y: 0 },
    up: { x: 0, y: 100 },
    down: { x: 0, y: -100 },
  }

  return (
    <motion.div
      initial={{ opacity: 0, ...directions[direction] }}
      animate={{ opacity: 1, x: 0, y: 0 }}
      transition={{ duration: 0.8, delay, ease: easings.smooth }}
      className={className}
    >
      {children}
    </motion.div>
  )
}

export const ScaleIn = ({ children, delay = 0, className = '' }) => (
  <motion.div
    initial={{ opacity: 0, scale: 0.9 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{ duration: 0.5, delay, ease: easings.gentle }}
    className={className}
  >
    {children}
  </motion.div>
)

export const StaggerContainer = ({ children, staggerDelay = 0.1, className = '' }) => (
  <motion.div
    initial="hidden"
    animate="visible"
    variants={{
      hidden: { opacity: 0 },
      visible: {
        opacity: 1,
        transition: {
          staggerChildren: staggerDelay,
          delayChildren: 0.1,
        },
      },
    }}
    className={className}
  >
    {children}
  </motion.div>
)

export const StaggerItem = ({ children, className = '' }) => (
  <motion.div
    variants={{
      hidden: { opacity: 0, y: 30, scale: 0.95 },
      visible: { 
        opacity: 1, 
        y: 0, 
        scale: 1,
        transition: { duration: 0.5, ease: easings.gentle }
      },
    }}
    className={className}
  >
    {children}
  </motion.div>
)

export const PageTransition = ({ children }) => (
  <motion.div
    initial={{ opacity: 0, y: 20, filter: 'blur(10px)' }}
    animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
    exit={{ opacity: 0, y: -20, filter: 'blur(10px)' }}
    transition={{ duration: 0.5, ease: easings.gentle }}
  >
    {children}
  </motion.div>
)

export const HoverScale = ({ children, scale = 1.02, className = '' }) => (
  <motion.div
    whileHover={{ scale, y: -2 }}
    whileTap={{ scale: 0.98 }}
    transition={{ duration: 0.2, ease: easings.smooth }}
    className={className}
  >
    {children}
  </motion.div>
)

export const MagneticButton = ({ children, className = '' }) => {
  return (
    <motion.div
      className={className}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      transition={{ type: 'spring', stiffness: 400, damping: 17 }}
    >
      {children}
    </motion.div>
  )
}

export const AnimatedCounter = ({ value, duration = 2 }) => {
  return (
    <motion.span
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <motion.span
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration }}
      >
        {value}
      </motion.span>
    </motion.span>
  )
}

export const GlassCard = ({ children, className = '', hover = true }) => (
  <motion.div
    className={`
      backdrop-blur-xl bg-white/70 dark:bg-slate-900/70 
      border border-white/20 dark:border-slate-700/50 
      shadow-xl shadow-slate-200/50 dark:shadow-slate-950/50
      ${className}
    `}
    whileHover={hover ? { 
      y: -4, 
      boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.15)',
      transition: { duration: 0.3 }
    } : {}}
  >
    {children}
  </motion.div>
)