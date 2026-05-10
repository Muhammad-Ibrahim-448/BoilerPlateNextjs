'use client'

import { useState } from 'react'
import { ProductCard } from '@/components/cards/ProductCard'
import { DataTable } from '@/components/tables/DataTable'
import { Button } from '@/components/common/Button'
import { motion } from 'framer-motion'

const products = [
  { id: 1, name: 'Basic Package', price: 29, stock: 100, status: 'active', sales: 450 },
  { id: 2, name: 'Professional Package', price: 79, stock: 50, status: 'active', sales: 320 },
  { id: 3, name: 'Enterprise Package', price: 199, stock: 25, status: 'active', sales: 180 },
  { id: 4, name: 'Custom Solution', price: 499, stock: 10, status: 'active', sales: 45 },
]

const columns = [
  { key: 'name', label: 'Product Name', sortable: true },
  { key: 'price', label: 'Price', sortable: true, render: (value) => `$${value}` },
  { key: 'stock', label: 'Stock', sortable: true },
  { key: 'sales', label: 'Total Sales', sortable: true },
  { 
    key: 'status', 
    label: 'Status', 
    sortable: true,
    render: (value) => (
      <span className={`px-2 py-1 rounded-full text-xs font-medium ${
        value === 'active' ? 'bg-green-100 text-green-800' : 'bg-gray-100 text-gray-800'
      }`}>
        {value}
      </span>
    )
  },
]

export default function ProductsPage() {
  const [viewMode, setViewMode] = useState('grid')

  return (
    <div className="space-y-6">
      <div className="space-y-6">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
          <h1 className="text-3xl font-bold text-slate-900 dark:text-white">Products</h1>
          <div className="flex gap-2">
            <Button
              variant={viewMode === 'grid' ? 'primary' : 'secondary'}
              size="sm"
              onClick={() => setViewMode('grid')}
            >
              Grid
            </Button>
            <Button
              variant={viewMode === 'list' ? 'primary' : 'secondary'}
              size="sm"
              onClick={() => setViewMode('list')}
            >
              List
            </Button>
            <Button size="sm">Add Product</Button>
          </div>
        </div>
        
        {viewMode === 'grid' ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {products.map((product, index) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <ProductCard product={product} />
              </motion.div>
            ))}
          </div>
        ) : (
          <DataTable
            columns={columns}
            data={products}
            searchable
            pagination
          />
        )}
      </div>
    </div>
  )
}