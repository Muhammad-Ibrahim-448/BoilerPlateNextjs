// src/lib/theme.js
'use client'

// Theme configuration object - single source of truth
export const themeConfig = {
  // Theme colors - maps to CSS variables
  colors: {
    light: {
      background: 'hsl(0, 0%, 100%)',
      foreground: 'hsl(222.2, 84%, 4.9%)',
      card: 'hsl(0, 0%, 100%)',
      'card-foreground': 'hsl(222.2, 84%, 4.9%)',
      popover: 'hsl(0, 0%, 100%)',
      'popover-foreground': 'hsl(222.2, 84%, 4.9%)',
      primary: 'hsl(221.2, 83.2%, 53.3%)',
      'primary-foreground': 'hsl(210, 40%, 98%)',
      secondary: 'hsl(210, 40%, 96.1%)',
      'secondary-foreground': 'hsl(222.2, 47.4%, 11.2%)',
      muted: 'hsl(210, 40%, 96.1%)',
      'muted-foreground': 'hsl(215.4, 16.3%, 46.9%)',
      accent: 'hsl(210, 40%, 96.1%)',
      'accent-foreground': 'hsl(222.2, 47.4%, 11.2%)',
      destructive: 'hsl(0, 84.2%, 60.2%)',
      'destructive-foreground': 'hsl(210, 40%, 98%)',
      border: 'hsl(214.3, 31.8%, 91.4%)',
      input: 'hsl(214.3, 31.8%, 91.4%)',
      ring: 'hsl(221.2, 83.2%, 53.3%)',
    },
    dark: {
      background: 'hsl(222.2, 47.4%, 11.2%)',
      foreground: 'hsl(210, 40%, 96.1%)',
      card: 'hsl(222.2, 47.4%, 11.2%)',
      'card-foreground': 'hsl(210, 40%, 96.1%)',
      popover: 'hsl(222.2, 47.4%, 11.2%)',
      'popover-foreground': 'hsl(210, 40%, 96.1%)',
      primary: 'hsl(217.2, 91.2%, 59.8%)',
      'primary-foreground': 'hsl(222.2, 47.4%, 11.2%)',
      secondary: 'hsl(217.2, 32.6%, 17.5%)',
      'secondary-foreground': 'hsl(210, 40%, 96.1%)',
      muted: 'hsl(217.2, 32.6%, 17.5%)',
      'muted-foreground': 'hsl(215, 20.2%, 65.1%)',
      accent: 'hsl(217.2, 32.6%, 17.5%)',
      'accent-foreground': 'hsl(210, 40%, 96.1%)',
      destructive: 'hsl(0, 62.8%, 30.6%)',
      'destructive-foreground': 'hsl(210, 40%, 96.1%)',
      border: 'hsl(217.2, 32.6%, 17.5%)',
      input: 'hsl(217.2, 32.6%, 17.5%)',
      ring: 'hsl(224.3, 76.3%, 48%)',
    }
  },
  
  // Theme-specific utility classes
  utilities: {
    light: {
      'bg-background': 'bg-white',
      'text-foreground': 'text-slate-900',
      'border-default': 'border-slate-200',
      'card-bg': 'bg-white',
      'card-border': 'border-slate-200',
      'hover-bg': 'hover:bg-slate-50',
      'glass': 'bg-white/70 backdrop-blur-xl border-white/20',
    },
    dark: {
      'bg-background': 'bg-slate-950',
      'text-foreground': 'text-slate-100',
      'border-default': 'border-slate-800',
      'card-bg': 'bg-slate-900/50',
      'card-border': 'border-slate-800',
      'hover-bg': 'hover:bg-slate-800/50',
      'glass': 'bg-slate-900/70 backdrop-blur-xl border-slate-800/20',
    }
  },
  
  // Theme-specific gradients
  gradients: {
    light: {
      hero: 'from-slate-50 via-white to-slate-50',
      section: 'from-white to-slate-50',
      card: 'from-slate-50 to-slate-100',
    },
    dark: {
      hero: 'from-slate-950 via-slate-900 to-slate-950',
      section: 'from-slate-950 to-slate-900/50',
      card: 'from-slate-900/50 to-slate-800/50',
    }
  },
  
  // Theme-specific shadows
  shadows: {
    light: {
      sm: 'shadow-sm',
      md: 'shadow-md',
      lg: 'shadow-lg',
      xl: 'shadow-xl',
      '2xl': 'shadow-2xl',
    },
    dark: {
      sm: 'shadow-sm shadow-black/20',
      md: 'shadow-md shadow-black/30',
      lg: 'shadow-lg shadow-black/40',
      xl: 'shadow-xl shadow-black/40',
      '2xl': 'shadow-2xl shadow-black/50',
    }
  }
}

// Theme utility functions
export const themeUtils = {
  // Get color based on theme and color name
  getColor: (theme, colorName) => {
    return themeConfig.colors[theme]?.[colorName] || themeConfig.colors.light[colorName]
  },
  
  // Get utility class based on theme and utility name
  getUtility: (theme, utilityName) => {
    return themeConfig.utilities[theme]?.[utilityName] || themeConfig.utilities.light[utilityName]
  },
  
  // Get gradient based on theme and gradient name
  getGradient: (theme, gradientName) => {
    return themeConfig.gradients[theme]?.[gradientName] || themeConfig.gradients.light[gradientName]
  },
  
  // Get shadow based on theme and shadow size
  getShadow: (theme, shadowSize = 'md') => {
    return themeConfig.shadows[theme]?.[shadowSize] || themeConfig.shadows.light[shadowSize]
  },
  
  // Check if theme is dark
  isDark: (theme) => theme === 'dark',
  
  // Get opposite theme
  getOppositeTheme: (theme) => theme === 'dark' ? 'light' : 'dark',
}

// Create CSS variables string for a theme
export const createThemeCSS = (theme) => {
  const colors = themeConfig.colors[theme]
  return Object.entries(colors)
    .map(([key, value]) => `--${key}: ${value};`)
    .join(' ')
}

// Export theme configuration as default
export default themeConfig