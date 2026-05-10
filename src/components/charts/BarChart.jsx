'use client'

import { BarChart as RechartsBarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from 'recharts'

const data = [
  { name: 'Product A', sales: 4000, revenue: 2400 },
  { name: 'Product B', sales: 3000, revenue: 1398 },
  { name: 'Product C', sales: 2000, revenue: 9800 },
  { name: 'Product D', sales: 2780, revenue: 3908 },
  { name: 'Product E', sales: 1890, revenue: 4800 },
]

export const BarChart = ({ data: customData, bars = ['sales', 'revenue'] }) => {
  const chartData = customData || data

  const colors = ['#3B82F6', '#10B981', '#F59E0B']

  return (
    <ResponsiveContainer width="100%" height={300}>
      <RechartsBarChart data={chartData}>
        <CartesianGrid strokeDasharray="3 3" stroke="#E2E8F0" opacity={0.5} className="dark:stroke-slate-700" />
        <XAxis 
          dataKey="name" 
          stroke="#64748B"
          fontSize={12}
          tickLine={false}
          axisLine={false}
        />
        <YAxis 
          stroke="#64748B"
          fontSize={12}
          tickLine={false}
          axisLine={false}
        />
        <Tooltip 
          contentStyle={{ 
            backgroundColor: 'rgba(255, 255, 255, 0.95)',
            border: '1px solid #E2E8F0',
            borderRadius: '12px',
            boxShadow: '0 10px 40px -10px rgba(0,0,0,0.1)',
          }}
          cursor={{ fill: 'rgba(59, 130, 246, 0.05)' }}
        />
        <Legend 
          wrapperStyle={{ paddingTop: '20px' }}
          iconType="circle"
        />
        {bars.map((bar, index) => (
          <Bar
            key={bar}
            dataKey={bar}
            fill={colors[index % colors.length]}
            radius={[6, 6, 0, 0]}
            maxBarSize={50}
          />
        ))}
      </RechartsBarChart>
    </ResponsiveContainer>
  )
}