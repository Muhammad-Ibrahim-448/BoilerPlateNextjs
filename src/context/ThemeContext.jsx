// src/context/ThemeContext.jsx
'use client'

import { createContext, useContext, useEffect, useState, useCallback } from 'react'
import { themeConfig, themeUtils, createThemeCSS } from '@/lib/theme'

const ThemeContext = createContext(undefined)

export function ThemeProvider({ children }) {
  const [theme, setTheme] = useState('light')
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    const savedTheme = localStorage.getItem('theme')
    const initialTheme = savedTheme || 'light'
    setTheme(initialTheme)
    applyTheme(initialTheme)
  }, [])

  const applyTheme = useCallback((newTheme) => {
    const css = createThemeCSS(newTheme)
    const style = document.createElement('style')
    style.id = 'theme-variables'
    style.textContent = `:root { ${css} }`
    
    // Remove existing theme variables
    const existing = document.getElementById('theme-variables')
    if (existing) {
      existing.remove()
    }
    
    document.head.appendChild(style)
    
    // Apply dark class
    if (newTheme === 'dark') {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
  }, [])

  const toggleTheme = useCallback(() => {
    setTheme((prevTheme) => {
      const newTheme = prevTheme === 'light' ? 'dark' : 'light'
      localStorage.setItem('theme', newTheme)
      applyTheme(newTheme)
      return newTheme
    })
  }, [applyTheme])

  const value = {
    theme,
    toggleTheme,
    mounted,
    isDark: theme === 'dark',
    isLight: theme === 'light',
    // Expose theme utilities directly
    getColor: (colorName) => themeUtils.getColor(theme, colorName),
    getUtility: (utilityName) => themeUtils.getUtility(theme, utilityName),
    getGradient: (gradientName) => themeUtils.getGradient(theme, gradientName),
    getShadow: (shadowSize) => themeUtils.getShadow(theme, shadowSize),
    config: themeConfig,
  }

  return (
    <ThemeContext.Provider value={value}>
      {children}
    </ThemeContext.Provider>
  )
}

export const useTheme = () => {
  const context = useContext(ThemeContext)
  if (!context) {
    throw new Error('useTheme must be used within ThemeProvider')
  }
  return context
}