// src/components/cards/ProductCard.jsx
'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { Badge } from '@/components/common/Badge'
import { formatCurrency } from '@/lib/helpers'
import { useTheme } from '@/context/ThemeContext'
import { useThemeClasses } from '@/lib/theme-helpers'
import { cn } from '@/lib/helpers'

export const ProductCard = ({ product }) => {
  const { theme } = useTheme()
  const themeClasses = useThemeClasses()
  const isDark = theme === 'dark'

  return (
    <motion.div 
      className={cn(
        "group relative rounded-2xl overflow-hidden",
        "border transition-all duration-500",
        isDark 
          ? "bg-slate-900/50 border-slate-800/80 shadow-sm hover:shadow-xl hover:shadow-slate-950/50" 
          : "bg-slate-50/80 border-slate-200/80 shadow-sm hover:shadow-xl hover:shadow-slate-200/50"
      )}
      whileHover={{ y: -8 }}
    >
      {/* Image placeholder with gradient */}
      <div className={cn(
        "aspect-[4/3] relative overflow-hidden",
        isDark 
          ? "bg-gradient-to-br from-slate-700 to-slate-800" 
          : "bg-gradient-to-br from-slate-100 to-slate-200"
      )}>
        <div className="absolute inset-0 flex items-center justify-center">
          <svg className={cn(
            "h-20 w-20 transition-transform duration-500 group-hover:scale-110",
            isDark ? "text-slate-600" : "text-slate-400"
          )} fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} 
              d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
          </svg>
        </div>
        
        {/* Overlay gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent 
          opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        
        {/* Popular tag for specific products */}
        {product.id === 2 && (
          <div className={cn(
            "absolute top-4 right-4 px-3 py-1 rounded-full text-xs font-bold",
            isDark 
              ? "bg-amber-500/20 text-amber-400 border border-amber-500/20"
              : "bg-amber-100 text-amber-700 border border-amber-200"
          )}>
            POPULAR
          </div>
        )}
      </div>
      
      <div className="p-6">
        <div className="flex items-center justify-between mb-3">
          <Badge variant={product.status === 'active' ? 'success' : 'warning'} size="sm">
            {product.status}
          </Badge>
          <span className={cn(
            "text-2xl font-bold",
            themeClasses.text.primary
          )}>
            {formatCurrency(product.price)}
          </span>
        </div>
        
        <h3 className={cn(
          "text-lg font-semibold mb-2 transition-colors",
          isDark 
            ? "text-white group-hover:text-blue-400" 
            : "text-slate-900 group-hover:text-blue-600"
        )}>
          {product.name}
        </h3>
        
        <p className={cn(
          "text-sm mb-4 line-clamp-2",
          themeClasses.text.secondary
        )}>
          {product.description}
        </p>
        
        <div className={cn(
          "flex items-center justify-between pt-4 border-t",
          isDark ? "border-slate-700" : "border-slate-100"
        )}>
          <span className={cn(
            "text-sm",
            themeClasses.text.muted
          )}>
            Stock: <span className={cn(
              "font-medium",
              themeClasses.text.primary
            )}>{product.stock}</span>
          </span>
          <Link 
            href={`/products/${product.id}`}
            className={cn(
              "text-sm font-medium transition-colors flex items-center gap-1 group/link",
              themeClasses.text.accent,
              "hover:underline"
            )}
          >
            View Details
            <motion.span
              className="inline-block"
              initial={{ x: 0 }}
              whileHover={{ x: 4 }}
            >
              →
            </motion.span>
          </Link>
        </div>
      </div>
    </motion.div>
  )
}