"use client"

import { ProductCard } from '@/components/cards/ProductCard'
import { WebsiteLayout } from '@/components/layout/WebsiteLayout'
import { motion } from 'framer-motion'

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
  return (
    <WebsiteLayout>
      <div className="pt-32 pb-16 bg-slate-50 dark:bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white text-center mb-4">
            Our Products
          </h1>
          <p className="text-xl text-slate-600 dark:text-slate-400 text-center max-w-2xl mx-auto">
            Choose the perfect solution for your business needs
          </p>
        </div>
      </div>
      
      <section className="py-24 bg-white dark:bg-slate-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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
        </div>
      </section>
    </WebsiteLayout>
  )
}