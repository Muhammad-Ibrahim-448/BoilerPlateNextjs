'use client'

import { createContext, useContext, useState } from 'react'

const DashboardContext = createContext()

export function DashboardProvider({ children }) {
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false)
  const [notifications, setNotifications] = useState([])
  const [currentPage, setCurrentPage] = useState('')

  const toggleSidebar = () => setSidebarCollapsed(!sidebarCollapsed)

  const addNotification = (notification) => {
    const id = Date.now()
    setNotifications(prev => [...prev, { ...notification, id }])
    setTimeout(() => {
      removeNotification(id)
    }, 5000)
  }

  const removeNotification = (id) => {
    setNotifications(prev => prev.filter(n => n.id !== id))
  }

  return (
    <DashboardContext.Provider value={{
      sidebarCollapsed,
      toggleSidebar,
      notifications,
      addNotification,
      removeNotification,
      currentPage,
      setCurrentPage
    }}>
      {children}
    </DashboardContext.Provider>
  )
}

export const useDashboard = () => {
  const context = useContext(DashboardContext)
  if (!context) throw new Error('useDashboard must be used within DashboardProvider')
  return context
}