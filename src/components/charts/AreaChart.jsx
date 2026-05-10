'use client'

import { AreaChart as RechartsAreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts'

const data = [
  { name: 'Mon', users: 4000 },
  { name: 'Tue', users: 3000 },
  { name: 'Wed', users: 2000 },
  { name: 'Thu', users: 2780 },
  { name: 'Fri', users: 1890 },
  { name: 'Sat', users: 2390 },
  { name: 'Sun', users: 3490 },
]

export const AreaChart = ({ data: customData, dataKey = 'users' }) => {
  const chartData = customData || data

  return (
    <ResponsiveContainer width="100%" height={300}>
      <RechartsAreaChart data={chartData}>
        <defs>
          <linearGradient id="colorUsers" x1="0" y1="0" x2="0" y2="1">
            <stop offset="5%" stopColor="#3B82F6" stopOpacity={0.3}/>
            <stop offset="95%" stopColor="#3B82F6" stopOpacity={0}/>
          </linearGradient>
        </defs>
        <CartesianGrid strokeDasharray="3 3" stroke="#E2E8F0" opacity={0.5} className="dark:stroke-slate-700" />
        <XAxis 
          dataKey="name" 
          stroke="#64748B"
          fontSize={12}
          tickLine={false}
          axisLine={false}
          className="dark:stroke-slate-400"
        />
        <YAxis 
          stroke="#64748B"
          fontSize={12}
          tickLine={false}
          axisLine={false}
          tickFormatter={(value) => `${value / 1000}k`}
          className="dark:stroke-slate-400"
        />
        <Tooltip 
          contentStyle={{ 
            backgroundColor: 'rgba(255, 255, 255, 0.95)',
            border: '1px solid #E2E8F0',
            borderRadius: '12px',
            boxShadow: '0 10px 40px -10px rgba(0,0,0,0.1)',
            padding: '12px',
          }}
          itemStyle={{ color: '#1E293B', fontWeight: 500 }}
          labelStyle={{ color: '#64748B', marginBottom: '4px' }}
        />
        <Area
          type="monotone"
          dataKey={dataKey}
          stroke="#3B82F6"
          strokeWidth={3}
          fillOpacity={1}
          fill="url(#colorUsers)"
        />
      </RechartsAreaChart>
    </ResponsiveContainer>
  )
}