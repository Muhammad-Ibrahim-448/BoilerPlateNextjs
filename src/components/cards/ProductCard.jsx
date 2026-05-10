'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { Badge } from '@/components/common/Badge'
import { formatCurrency } from '@/lib/helpers'

export const ProductCard = ({ product }) => {
  return (
    <motion.div 
      className="group relative bg-white dark:bg-slate-800 rounded-2xl overflow-hidden
        border border-slate-200 dark:border-slate-700
        shadow-sm hover:shadow-xl transition-all duration-500"
      whileHover={{ y: -8 }}
    >
      {/* Image placeholder with gradient */}
      <div className="aspect-[4/3] relative overflow-hidden bg-gradient-to-br from-slate-100 to-slate-200 
        dark:from-slate-700 dark:to-slate-800">
        <div className="absolute inset-0 flex items-center justify-center">
          <svg className="h-20 w-20 text-slate-400 dark:text-slate-500 transition-transform duration-500 
            group-hover:scale-110" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} 
              d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
          </svg>
        </div>
        
        {/* Overlay gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent 
          opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      </div>
      
      <div className="p-6">
        <div className="flex items-center justify-between mb-3">
          <Badge variant={product.status === 'active' ? 'success' : 'warning'} className="text-xs">
            {product.status}
          </Badge>
          <span className="text-2xl font-bold text-slate-900 dark:text-white">
            {formatCurrency(product.price)}
          </span>
        </div>
        
        <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-2 
          group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
          {product.name}
        </h3>
        
        <p className="text-slate-600 dark:text-slate-400 text-sm mb-4 line-clamp-2">
          {product.description}
        </p>
        
        <div className="flex items-center justify-between pt-4 border-t border-slate-100 dark:border-slate-700">
          <span className="text-sm text-slate-500 dark:text-slate-400">
            Stock: <span className="font-medium text-slate-900 dark:text-white">{product.stock}</span>
          </span>
          <Link 
            href={`/products/${product.id}`}
            className="text-sm font-medium text-blue-600 dark:text-blue-400 
              hover:text-blue-700 dark:hover:text-blue-300 transition-colors
              flex items-center gap-1 group/link"
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