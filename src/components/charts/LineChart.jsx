'use client'

import { LineChart as RechartsLineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from 'recharts'

const data = [
  { name: 'Jan', sales: 4000, visitors: 2400 },
  { name: 'Feb', sales: 3000, visitors: 1398 },
  { name: 'Mar', sales: 2000, visitors: 9800 },
  { name: 'Apr', sales: 2780, visitors: 3908 },
  { name: 'May', sales: 1890, visitors: 4800 },
  { name: 'Jun', sales: 2390, visitors: 3800 },
  { name: 'Jul', sales: 3490, visitors: 4300 },
]

export const LineChart = ({ data: customData, lines = ['sales', 'visitors'] }) => {
  const chartData = customData || data

  const colors = ['#3B82F6', '#10B981', '#F59E0B', '#EF4444']

  return (
    <ResponsiveContainer width="100%" height={300}>
      <RechartsLineChart data={chartData}>
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
        />
        <Legend 
          wrapperStyle={{ paddingTop: '20px' }}
          iconType="circle"
        />
        {lines.map((line, index) => (
          <Line
            key={line}
            type="monotone"
            dataKey={line}
            stroke={colors[index % colors.length]}
            strokeWidth={3}
            dot={{ fill: colors[index % colors.length], strokeWidth: 2, r: 4 }}
            activeDot={{ r: 6, strokeWidth: 0 }}
          />
        ))}
      </RechartsLineChart>
    </ResponsiveContainer>
  )
}