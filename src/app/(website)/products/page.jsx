// src/app/(website)/products/page.jsx
'use client'

import { ProductCard } from '@/components/cards/ProductCard'
import { motion } from 'framer-motion'
import { useTheme } from '@/context/ThemeContext'
import { useThemeClasses, usePageHeroStyles } from '@/lib/theme-helpers'
import { cn } from '@/lib/helpers'

const products = [
  {
    id: 1,
    name: 'Basic Package',
    description: 'Perfect for small teams just getting started with our platform.',
    price: 29,
    status: 'active',
    stock: 100,
  },
  {
    id: 2,
    name: 'Professional Package',
    description: 'Advanced features for growing businesses with more complex needs.',
    price: 79,
    status: 'active',
    stock: 50,
  },
  {
    id: 3,
    name: 'Enterprise Package',
    description: 'Full-featured solution for large organizations with custom requirements.',
    price: 199,
    status: 'active',
    stock: 25,
  },
  {
    id: 4,
    name: 'Custom Solution',
    description: 'Tailored specifically to your unique business requirements.',
    price: 499,
    status: 'active',
    stock: 10,
  },
]

export default function ProductsPage() {
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
              Our Products
            </span>
          </motion.div>

          <h1 className={cn(
            "text-4xl md:text-5xl font-bold text-center mb-4",
            themeClasses.text.primary
          )}>
            Our Products
          </h1>
          <p className={cn(
            "text-xl text-center max-w-2xl mx-auto",
            themeClasses.text.secondary
          )}>
            Choose the perfect solution for your business needs
          </p>
        </div>
      </div>
      
      {/* Products Grid */}
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
            "absolute -bottom-40 -left-40 w-96 h-96 rounded-full blur-3xl opacity-10",
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
              Choose Your Plan
            </h2>
            <p className={cn(
              "text-lg max-w-2xl mx-auto",
              themeClasses.text.secondary
            )}>
              Flexible pricing options to suit businesses of all sizes
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {products.map((product, index) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <ProductCard product={product} />
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
                <span className="text-sm">30-day money-back guarantee</span>
              </span>
              <span className="w-px h-6 bg-slate-300 dark:bg-slate-700" />
              <span className="flex items-center gap-2">
                <span className={cn(
                  "text-sm font-medium",
                  isDark ? "text-emerald-400" : "text-emerald-600"
                )}>
                  ✓
                </span>
                <span className="text-sm">No hidden fees</span>
              </span>
              <span className="w-px h-6 bg-slate-300 dark:bg-slate-700" />
              <span className="flex items-center gap-2">
                <span className={cn(
                  "text-sm font-medium",
                  isDark ? "text-emerald-400" : "text-emerald-600"
                )}>
                  ✓
                </span>
                <span className="text-sm">Cancel anytime</span>
              </span>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  )
}