// src/components/sections/TestimonialsSection.jsx
'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Quote, Star, ChevronLeft, ChevronRight } from 'lucide-react'
import { useTheme } from '@/context/ThemeContext'
import { useThemeClasses } from '@/lib/theme-helpers'
import { cn } from '@/lib/helpers'

const testimonials = [
  {
    id: 1,
    content: "This platform has completely transformed how we manage our business. The analytics alone have saved us countless hours.",
    author: "Sarah Johnson",
    role: "CEO at TechCorp",
    avatar: "SJ",
    rating: 5,
    company: "TechCorp",
    logo: "TC"
  },
  {
    id: 2,
    content: "The best investment we've made for our team. Collaboration has never been easier and our productivity has skyrocketed.",
    author: "Michael Chen",
    role: "Product Manager",
    avatar: "MC",
    rating: 5,
    company: "InnovateLabs",
    logo: "IL"
  },
  {
    id: 3,
    content: "Incredible support team and powerful features. I recommend this to every business owner I meet.",
    author: "Emily Davis",
    role: "Founder at StartupXYZ",
    avatar: "ED",
    rating: 5,
    company: "StartupXYZ",
    logo: "SX"
  },
]

export const TestimonialsSection = () => {
  const { theme } = useTheme()
  const themeClasses = useThemeClasses()
  const isDark = theme === 'dark'
  const [activeIndex, setActiveIndex] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)

  // Auto-play testimonials
  useEffect(() => {
    if (!isAutoPlaying) return
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % testimonials.length)
    }, 5000)
    return () => clearInterval(interval)
  }, [isAutoPlaying])

  const handlePrevious = () => {
    setIsAutoPlaying(false)
    setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  const handleNext = () => {
    setIsAutoPlaying(false)
    setActiveIndex((prev) => (prev + 1) % testimonials.length)
  }

  const handleDotClick = (index) => {
    setIsAutoPlaying(false)
    setActiveIndex(index)
  }

  return (
    <section className={cn(
      "py-24 theme-transition relative overflow-hidden",
      themeClasses.bg.primary
    )}>
      {/* Background decoration - using centralized theme */}
      <div className="absolute inset-0 overflow-hidden">
        <div className={cn(
          "absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full blur-3xl opacity-10",
          isDark ? "bg-blue-500/10" : "bg-blue-500/5"
        )} />
        <div className={cn(
          "absolute -top-40 -right-40 w-96 h-96 rounded-full blur-3xl opacity-10",
          isDark ? "bg-purple-500/10" : "bg-purple-500/5"
        )} />
        <div className={cn(
          "absolute -bottom-40 -left-40 w-96 h-96 rounded-full blur-3xl opacity-10",
          isDark ? "bg-cyan-500/10" : "bg-cyan-500/5"
        )} />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Header - Using centralized theme */}
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
            Testimonials
          </motion.div>
          
          <h2 className={cn(
            "text-3xl md:text-5xl font-bold mb-4",
            themeClasses.text.primary
          )}>
            Trusted by{' '}
            <span className={cn(
              "bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent",
              isDark && "from-blue-400 to-purple-400"
            )}>
              thousands
            </span>
          </h2>
          <p className={cn(
            "text-xl max-w-2xl mx-auto",
            themeClasses.text.secondary
          )}>
            See what our customers have to say about us
          </p>
        </motion.div>

        {/* Testimonials Carousel */}
        <div className="relative max-w-4xl mx-auto">
          <div className="overflow-hidden rounded-2xl">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeIndex}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
                className={cn(
                  "p-8 md:p-12 text-center",
                  isDark 
                    ? "bg-slate-900/50 border border-slate-800/80" 
                    : "bg-slate-50/80 border border-slate-200/80"
                )}
              >
                {/* Quote icon - Using centralized theme */}
                <div className="mb-6">
                  <Quote className={cn(
                    "h-12 w-12 mx-auto",
                    isDark ? "text-blue-500/30" : "text-blue-500/20"
                  )} />
                </div>

                {/* Rating stars */}
                <div className="flex justify-center gap-1 mb-6">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className={cn(
                      "w-5 h-5 fill-current",
                      i < testimonials[activeIndex].rating 
                        ? isDark ? "text-yellow-400" : "text-yellow-500" 
                        : isDark ? "text-slate-700" : "text-slate-300"
                    )} />
                  ))}
                </div>

                {/* Testimonial content - Using centralized theme */}
                <blockquote className={cn(
                  "text-xl md:text-2xl mb-8 leading-relaxed",
                  themeClasses.text.primary
                )}>
                  "{testimonials[activeIndex].content}"
                </blockquote>

                {/* Author info */}
                <div className="flex items-center justify-center gap-4">
                  <div className={cn(
                    "h-14 w-14 rounded-full flex items-center justify-center text-white font-bold text-lg",
                    "bg-gradient-to-br from-blue-500 to-purple-600 shadow-lg",
                    isDark ? "shadow-blue-500/30" : "shadow-blue-500/20"
                  )}>
                    {testimonials[activeIndex].avatar}
                  </div>
                  <div className="text-left">
                    <div className={cn(
                      "text-lg font-semibold",
                      themeClasses.text.primary
                    )}>
                      {testimonials[activeIndex].author}
                    </div>
                    <div className={cn(
                      "text-sm",
                      themeClasses.text.secondary
                    )}>
                      {testimonials[activeIndex].role}
                    </div>
                    <div className={cn(
                      "text-xs font-medium mt-1",
                      isDark ? "text-blue-400" : "text-blue-600"
                    )}>
                      {testimonials[activeIndex].company}
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Navigation Controls */}
          <div className="flex items-center justify-between mt-8">
            {/* Left/Right arrows - Using centralized theme */}
            <div className="flex gap-2">
              <motion.button
                onClick={handlePrevious}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={cn(
                  "p-2 rounded-xl transition-colors",
                  isDark 
                    ? "bg-slate-400 text-slate-400 hover:bg-slate-700 hover:text-white" 
                    : "bg-slate-100 text-slate-600 hover:bg-slate-200 hover:text-slate-900"
                )}
                aria-label="Previous testimonial"
              >
                <ChevronLeft className="w-5 h-5" />
              </motion.button>
              <motion.button
                onClick={handleNext}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={cn(
                  "p-2 rounded-xl transition-colors",
                  isDark 
                    ? "bg-slate-400 text-slate-400 hover:bg-slate-700 hover:text-white" 
                    : "bg-slate-100 text-slate-600 hover:bg-slate-200 hover:text-slate-900"
                )}
                aria-label="Next testimonial"
              >
                <ChevronRight className="w-5 h-5" />
              </motion.button>
            </div>

            {/* Dots - Using centralized theme */}
            <div className="flex gap-2">
              {testimonials.map((_, index) => (
                <motion.button
                  key={index}
                  onClick={() => handleDotClick(index)}
                  whileHover={{ scale: 1.2 }}
                  whileTap={{ scale: 0.9 }}
                  className={cn(
                    "rounded-full transition-all duration-300",
                    index === activeIndex 
                      ? cn(
                          "w-8 h-2",
                          isDark ? "bg-blue-500" : "bg-blue-600"
                        )
                      : cn(
                          "w-2 h-2",
                          isDark ? "bg-slate-700 hover:bg-slate-600" : "bg-slate-300 hover:bg-slate-400"
                        )
                  )}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>

            {/* Counter - Using centralized theme */}
            <div className={cn(
              "text-sm font-medium",
              isDark ? "text-slate-300" : "text-slate-400"
            )}>
              {String(activeIndex + 1).padStart(2, '0')} / {String(testimonials.length).padStart(2, '0')}
            </div>
          </div>
        </div>

      </div>
    </section>
  )
}