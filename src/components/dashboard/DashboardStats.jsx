'use client'

import { StatsCard } from '@/components/cards/StatsCard'
import {
  DollarSign,
  Users,
  ShoppingCart,
  Activity,
} from 'lucide-react'
import { motion } from 'framer-motion'

const stats = [
  {
    title: 'Total Revenue',
    value: 45231,
    change: '20.1%',
    changeType: 'positive',
    icon: DollarSign,
    prefix: '$',
  },
  {
    title: 'Active Users',
    value: 2350,
    change: '15.3%',
    changeType: 'positive',
    icon: Users,
  },
  {
    title: 'Sales',
    value: 12234,
    change: '8.2%',
    changeType: 'positive',
    icon: ShoppingCart,
  },
  {
    title: 'Active Sessions',
    value: 573,
    change: '3.1%',
    changeType: 'negative',
    icon: Activity,
  },
]

export const DashboardStats = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {stats.map((stat, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.1 }}
        >
          <StatsCard {...stat} />
        </motion.div>
      ))}
    </div>
  )
}