'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Quote } from 'lucide-react'

const testimonials = [
  {
    id: 1,
    content: "This platform has completely transformed how we manage our business. The analytics alone have saved us countless hours.",
    author: "Sarah Johnson",
    role: "CEO at TechCorp",
    avatar: "SJ",
  },
  {
    id: 2,
    content: "The best investment we've made for our team. Collaboration has never been easier and our productivity has skyrocketed.",
    author: "Michael Chen",
    role: "Product Manager",
    avatar: "MC",
  },
  {
    id: 3,
    content: "Incredible support team and powerful features. I recommend this to every business owner I meet.",
    author: "Emily Davis",
    role: "Founder at StartupXYZ",
    avatar: "ED",
  },
]

export const TestimonialsSection = () => {
  const [activeIndex, setActiveIndex] = useState(0)

  return (
    <section className="py-24 bg-white dark:bg-slate-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4">
            Trusted by thousands
          </h2>
          <p className="text-xl text-slate-600 dark:text-slate-400">
            See what our customers have to say about us
          </p>
        </motion.div>

        <div className="relative max-w-4xl mx-auto">
          <div className="overflow-hidden">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeIndex}
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -100 }}
                transition={{ duration: 0.5 }}
                className="bg-slate-50 dark:bg-slate-900 rounded-2xl p-8 md:p-12 text-center border border-slate-200 dark:border-slate-800"
              >
                <Quote className="h-12 w-12 text-blue-500/20 mx-auto mb-6" />
                <blockquote className="text-xl md:text-2xl text-slate-900 dark:text-white mb-8 leading-relaxed">
                  "{testimonials[activeIndex].content}"
                </blockquote>
                <div className="flex items-center justify-center">
                  <div className="h-14 w-14 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center text-white font-bold text-lg shadow-lg">
                    {testimonials[activeIndex].avatar}
                  </div>
                  <div className="ml-4 text-left">
                    <div className="text-lg font-semibold text-slate-900 dark:text-white">
                      {testimonials[activeIndex].author}
                    </div>
                    <div className="text-slate-600 dark:text-slate-400">
                      {testimonials[activeIndex].role}
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          <div className="flex justify-center mt-8 space-x-3">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveIndex(index)}
                className={`h-3 rounded-full transition-all duration-300 ${
                  index === activeIndex ? 'w-8 bg-blue-600' : 'w-3 bg-slate-300 dark:bg-slate-700'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}