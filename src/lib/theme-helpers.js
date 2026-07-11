// src/lib/theme-helpers.js
'use client'

import { useTheme } from '@/context/ThemeContext'
import { themeUtils } from '@/lib/theme'
import { cn } from '@/lib/helpers'

// Hook to get theme-aware classes
export const useThemeClasses = () => {
  const { theme, isDark } = useTheme()
  
  return {
    // Background classes
    bg: {
      primary: isDark ? 'bg-slate-950' : 'bg-white',
      secondary: isDark ? 'bg-slate-900/50' : 'bg-slate-50',
      muted: isDark ? 'bg-slate-800/50' : 'bg-slate-100',
      card: isDark ? 'bg-slate-900/50' : 'bg-white',
      glass: isDark ? 'bg-slate-900/70' : 'bg-white/70',
      dark: isDark ? 'bg-slate-950' : 'bg-slate-900',
      light: isDark ? 'bg-slate-900/30' : 'bg-slate-50',
      gradient: isDark ? 'bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950' : 'bg-gradient-to-br from-slate-50 via-white to-slate-50',
    },
    
    // Text classes
    text: {
      primary: isDark ? 'text-white' : 'text-slate-900',
      secondary: isDark ? 'text-slate-300' : 'text-slate-600',
      muted: isDark ? 'text-slate-300' : 'text-slate-500',
      accent: isDark ? 'text-blue-400' : 'text-blue-600',
      success: isDark ? 'text-emerald-400' : 'text-emerald-600',
      warning: isDark ? 'text-amber-400' : 'text-amber-600',
      danger: isDark ? 'text-rose-400' : 'text-rose-600',
      inverse: isDark ? 'text-slate-900' : 'text-white',
    },
    
    // Border classes
    border: {
      default: isDark ? 'border-slate-800' : 'border-slate-200',
      light: isDark ? 'border-slate-700' : 'border-slate-100',
      accent: isDark ? 'border-blue-400/20' : 'border-blue-200',
      success: isDark ? 'border-emerald-400/20' : 'border-emerald-200',
      warning: isDark ? 'border-amber-400/20' : 'border-amber-200',
      danger: isDark ? 'border-rose-400/20' : 'border-rose-200',
    },
    
    // Utility classes
    utility: {
      glass: isDark ? 'bg-slate-900/70 backdrop-blur-xl border border-slate-800/50' : 'bg-white/70 backdrop-blur-xl border border-white/20',
      card: isDark ? 'bg-slate-900/50 border border-slate-800 rounded-xl shadow-sm' : 'bg-white border border-slate-200 rounded-xl shadow-sm',
      cardHover: `transition-all duration-300 hover:scale-[1.02] ${isDark ? 'hover:shadow-lg hover:shadow-black/30' : 'hover:shadow-lg'}`,
      cardInteractive: `transition-all duration-300 hover:scale-[1.02] hover:shadow-xl cursor-pointer ${isDark ? 'hover:shadow-black/40' : 'hover:shadow-xl'}`,
    },
    
    // Gradients
    gradient: {
      hero: isDark ? 'from-slate-950 via-slate-900 to-slate-950' : 'from-slate-50 via-white to-slate-50',
      section: isDark ? 'from-slate-950 to-slate-900/50' : 'from-white to-slate-50',
      card: isDark ? 'from-slate-900/50 to-slate-800/50' : 'from-slate-50 to-slate-100',
      primary: isDark ? 'from-blue-600 to-purple-600' : 'from-blue-500 to-purple-600',
      success: isDark ? 'from-emerald-600 to-teal-600' : 'from-emerald-500 to-teal-600',
      warning: isDark ? 'from-amber-500 to-orange-500' : 'from-amber-400 to-orange-500',
      danger: isDark ? 'from-rose-600 to-pink-600' : 'from-rose-500 to-pink-600',
    },
    
    // Shadow
    shadow: {
      sm: isDark ? 'shadow-sm shadow-black/20' : 'shadow-sm',
      md: isDark ? 'shadow-md shadow-black/30' : 'shadow-md',
      lg: isDark ? 'shadow-lg shadow-black/40' : 'shadow-lg',
      xl: isDark ? 'shadow-xl shadow-black/50' : 'shadow-xl',
      '2xl': isDark ? 'shadow-2xl shadow-black/60' : 'shadow-2xl',
      glow: isDark ? 'shadow-lg shadow-blue-500/20' : 'shadow-lg shadow-blue-500/30',
    },
    
    // Badge styles
    badge: {
      primary: isDark ? 'bg-blue-500/20 text-blue-400' : 'bg-blue-100 text-blue-700',
      success: isDark ? 'bg-emerald-500/20 text-emerald-400' : 'bg-emerald-100 text-emerald-700',
      warning: isDark ? 'bg-amber-500/20 text-amber-400' : 'bg-amber-100 text-amber-700',
      danger: isDark ? 'bg-rose-500/20 text-rose-400' : 'bg-rose-100 text-rose-700',
      neutral: isDark ? 'bg-slate-700/50 text-slate-300' : 'bg-slate-100 text-slate-700',
    },
    
    // Input styles
    input: {
      default: isDark 
        ? 'bg-slate-900/50 border-slate-700 text-slate-100 placeholder-slate-300 focus:border-blue-400 focus:ring-4 focus:ring-blue-400/20' 
        : 'bg-white border-slate-200 text-slate-900 placeholder-slate-300 focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10',
      error: isDark
        ? 'bg-slate-900/50 border-rose-500/50 text-slate-100 placeholder-slate-300 focus:border-rose-400 focus:ring-4 focus:ring-rose-400/20'
        : 'bg-white border-rose-500/50 text-slate-900 placeholder-slate-300 focus:border-rose-500 focus:ring-4 focus:ring-rose-500/10',
    },
    
    // Animation presets
    animation: {
      fadeIn: 'animate-fadeIn',
      slideUp: 'animate-slideUp',
      slideDown: 'animate-slideDown',
      scaleIn: 'animate-scaleIn',
      pulse: 'animate-pulse',
      spin: 'animate-spin',
      bounce: 'animate-bounce',
    },
    
    // Layout utilities
    layout: {
      container: 'max-w-7xl mx-auto px-4 sm:px-6 lg:px-8',
      section: 'py-16 md:py-24',
      sectionSm: 'py-12 md:py-16',
      sectionLg: 'py-24 md:py-32',
      grid: 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8',
      grid2: 'grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8',
      grid4: 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8',
    },
    
    // Get shadow with optional custom size
    getShadow: (size = 'md') => themeUtils.getShadow(theme, size),
  }
}

// Helper function to get theme-aware className
export const getThemeClass = (theme, classMap) => {
  const isDark = theme === 'dark'
  return classMap[isDark ? 'dark' : 'light'] || classMap.light || ''
}

// Higher-order function to create theme-aware components
export const withTheme = (Component) => {
  return function WithThemeComponent(props) {
    const { theme } = useTheme()
    return <Component {...props} theme={theme} />
  }
}

// Helper to get variant-based styles
export const getVariantStyles = (theme, variantMap) => {
  const isDark = theme === 'dark'
  return variantMap[isDark ? 'dark' : 'light'] || variantMap.light || ''
}

// Helper to get conditional styles based on multiple conditions
export const getConditionalStyles = (conditions, styles) => {
  return Object.keys(conditions)
    .filter(key => conditions[key])
    .map(key => styles[key])
    .filter(Boolean)
    .join(' ')
}

// Helper to merge theme classes with custom classes
export const mergeThemeClasses = (themeClasses, customClasses = '') => {
  return cn(themeClasses, customClasses)
}

// ============================================
// NEW HELPERS FOR GLASS EFFECTS
// ============================================

// Helper for glass effects
export const useGlassEffect = () => {
  const { isDark } = useTheme()
  
  return {
    light: `backdrop-blur-md border ${isDark ? 'bg-slate-900/70 border-slate-800/50' : 'bg-white/70 border-slate-200/50'}`,
    dark: `backdrop-blur-md border ${isDark ? 'bg-slate-900/90 border-slate-700/50' : 'bg-slate-900/10 border-slate-200/30'}`,
    primary: `backdrop-blur-md border ${isDark ? 'bg-blue-500/10 border-blue-500/20' : 'bg-blue-500/10 border-blue-500/20'}`,
    default: isDark 
      ? 'bg-slate-900/70 backdrop-blur-xl border border-slate-800/50'
      : 'bg-white/70 backdrop-blur-xl border border-white/20',
    none: '',
  }
}

// ============================================
// NEW HELPERS FOR FOOTER
// ============================================

// Helper for footer styles
export const useFooterStyles = () => {
  const { isDark } = useTheme()
  
  return {
    light: 'bg-white border-t border-slate-200',
    dark: 'bg-slate-950 border-t border-slate-800',
    glass: isDark 
      ? 'bg-slate-900/70 backdrop-blur-xl border-t border-slate-800/50'
      : 'bg-white/70 backdrop-blur-xl border-t border-white/20',
    default: isDark 
      ? 'bg-slate-900 border-t border-slate-800'
      : 'bg-white border-t border-slate-200',
    
    // Text colors
    text: {
      heading: isDark ? 'text-white' : 'text-slate-900',
      body: isDark ? 'text-slate-300' : 'text-slate-600',
      link: isDark ? 'text-slate-300 hover:text-blue-400' : 'text-slate-500 hover:text-blue-600',
      muted: isDark ? 'text-slate-500' : 'text-slate-300',
    },
    
    // Social icons
    social: {
      light: 'bg-slate-100 text-slate-600 hover:bg-blue-50 hover:text-blue-600',
      dark: 'bg-slate-800 text-slate-300 hover:bg-slate-700 hover:text-white',
      glass: isDark 
        ? 'bg-slate-800/50 text-slate-300 hover:bg-slate-700/50 hover:text-white'
        : 'bg-white/50 text-slate-600 hover:bg-white hover:text-blue-600',
      default: isDark 
        ? 'bg-slate-800 text-slate-300 hover:bg-slate-700 hover:text-white'
        : 'bg-slate-100 text-slate-600 hover:bg-blue-50 hover:text-blue-600',
    },
    
    // Brand gradient
    brand: {
      light: 'from-blue-600 to-purple-600',
      dark: 'from-blue-400 to-purple-400',
      default: isDark ? 'from-blue-400 to-purple-400' : 'from-blue-600 to-purple-600',
    }
  }
}

// ============================================
// NEW HELPERS FOR LINK STYLES
// ============================================

// Helper for link underline animation
export const useLinkStyles = () => {
  const { isDark } = useTheme()
  
  return {
    base: 'relative inline-block transition-all duration-200',
    underline: `after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:transition-all after:duration-300 hover:after:w-full ${
      isDark ? 'after:bg-blue-400' : 'after:bg-blue-600'
    }`,
    noUnderline: '',
  }
}

// ============================================
// NEW HELPERS FOR TRUST BADGES
// ============================================

// Helper for trust badges
export const useTrustBadgeStyles = () => {
  const { isDark } = useTheme()
  
  return {
    success: isDark 
      ? 'bg-emerald-500/10 text-emerald-400 border border-emerald-500/20'
      : 'bg-emerald-50 text-emerald-700 border border-emerald-200',
    warning: isDark
      ? 'bg-amber-500/10 text-amber-400 border border-amber-500/20'
      : 'bg-amber-50 text-amber-700 border border-amber-200',
    info: isDark
      ? 'bg-blue-500/10 text-blue-400 border border-blue-500/20'
      : 'bg-blue-50 text-blue-700 border border-blue-200',
  }
}

// ============================================
// NEW HELPERS FOR GRADIENT TEXT
// ============================================

// Helper for gradient text
export const useGradientText = () => {
  const { isDark } = useTheme()
  
  return {
    primary: `bg-gradient-to-r from-blue-600 to-purple-600 ${isDark ? 'from-blue-400 to-purple-400' : ''} bg-clip-text text-transparent`,
    success: `bg-gradient-to-r from-emerald-500 to-teal-500 ${isDark ? 'from-emerald-400 to-teal-400' : ''} bg-clip-text text-transparent`,
    warning: `bg-gradient-to-r from-amber-500 to-orange-500 ${isDark ? 'from-amber-400 to-orange-400' : ''} bg-clip-text text-transparent`,
    danger: `bg-gradient-to-r from-rose-500 to-pink-500 ${isDark ? 'from-rose-400 to-pink-400' : ''} bg-clip-text text-transparent`,
    rainbow: 'bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent',
  }
}

// ============================================
// NEW HELPERS FOR BUTTON VARIANTS
// ============================================

// Helper for button variants with theme
export const useButtonVariants = () => {
  const { isDark } = useTheme()
  
  return {
    primary: {
      base: `px-6 py-3 rounded-xl font-semibold transition-all duration-300`,
      default: isDark 
        ? 'bg-blue-600 text-white hover:bg-blue-700 shadow-lg shadow-blue-500/20 hover:shadow-blue-500/30'
        : 'bg-blue-600 text-white hover:bg-blue-700 shadow-lg shadow-blue-500/20 hover:shadow-blue-500/30',
      outline: isDark
        ? 'border border-slate-700 text-slate-300 hover:bg-slate-800/50 hover:border-blue-500/50'
        : 'border border-slate-200 text-slate-700 hover:bg-slate-50 hover:border-blue-500/50',
      ghost: isDark
        ? 'text-slate-300 hover:bg-slate-800/50'
        : 'text-slate-700 hover:bg-slate-100',
    },
    secondary: {
      base: `px-6 py-3 rounded-xl font-semibold transition-all duration-300`,
      default: isDark
        ? 'bg-slate-800 text-white hover:bg-slate-700 shadow-lg shadow-slate-800/20'
        : 'bg-slate-100 text-slate-900 hover:bg-slate-200 shadow-sm',
      outline: isDark
        ? 'border border-slate-700 text-slate-300 hover:bg-slate-800/50'
        : 'border border-slate-200 text-slate-700 hover:bg-slate-50',
      ghost: isDark
        ? 'text-slate-300 hover:bg-slate-800/50'
        : 'text-slate-700 hover:bg-slate-100',
    },
    gradient: {
      base: `px-6 py-3 rounded-xl font-semibold transition-all duration-300 text-white`,
      default: 'bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 shadow-lg shadow-purple-500/20 hover:shadow-purple-500/30',
      outline: isDark
        ? 'border border-slate-700 text-slate-300 hover:bg-slate-800/50'
        : 'border border-slate-200 text-slate-700 hover:bg-slate-50',
    }
  }
}

export const useNavbarStyles = () => {
  const { isDark } = useTheme()
  
  return {
    light: {
      default: 'bg-white/80 backdrop-blur-sm border-b border-slate-200/50',
      scrolled: 'bg-white/95 backdrop-blur-xl shadow-lg shadow-slate-200/50 border-b border-slate-200',
    },
    dark: {
      default: 'bg-slate-950/80 backdrop-blur-sm',
      scrolled: 'bg-slate-950/95 backdrop-blur-xl shadow-lg shadow-slate-950/50 border-b border-slate-800',
    },
    glass: {
      default: 'bg-transparent',
      scrolled: isDark 
        ? 'glass shadow-lg shadow-slate-950/50 border-b border-slate-800/50'
        : 'glass shadow-lg shadow-slate-200/50 border-b border-white/20',
    },
    default: {
      default: isDark ? 'bg-transparent' : 'bg-transparent',
      scrolled: isDark 
        ? 'bg-slate-900/95 backdrop-blur-xl shadow-lg shadow-slate-950/50 border-b border-slate-800'
        : 'bg-white/95 backdrop-blur-xl shadow-lg shadow-slate-200/50 border-b border-slate-200',
    }
  }
}

// Helper for nav link styles
export const useNavLinkStyles = () => {
  const { isDark } = useTheme()
  
  return {
    base: 'relative px-4 py-2 text-sm font-medium rounded-xl transition-all duration-200 flex items-center gap-1',
    active: isDark 
      ? 'bg-blue-500/20 text-blue-400 backdrop-blur-sm'
      : 'bg-blue-500/10 text-blue-600 backdrop-blur-sm',
    inactive: isDark ? 'text-slate-300' : 'text-slate-700',
    hover: isDark ? 'hover:bg-slate-800' : 'hover:bg-slate-100',
    mobile: {
      active: isDark ? 'bg-blue-500/10 text-blue-400' : 'bg-blue-50 text-blue-600',
      inactive: isDark ? 'text-slate-300 hover:bg-slate-800' : 'text-slate-700 hover:bg-slate-50',
    }
  }
}

// Helper for dropdown styles
export const useDropdownStyles = () => {
  const { isDark } = useTheme()
  
  return {
    container: 'absolute top-full left-0 mt-2 w-48 rounded-xl shadow-xl border overflow-hidden',
    light: 'bg-white border-slate-200 shadow-slate-200/50',
    dark: 'bg-slate-800 border-slate-700 shadow-slate-950/50',
    default: isDark 
      ? 'bg-slate-800 border-slate-700 shadow-slate-950/50'
      : 'bg-white border-slate-200 shadow-slate-200/50',
    item: {
      light: 'text-slate-700 hover:bg-slate-50 hover:text-blue-600',
      dark: 'text-slate-300 hover:bg-slate-700/50 hover:text-blue-400',
      default: isDark 
        ? 'text-slate-300 hover:bg-slate-700/50 hover:text-blue-400'
        : 'text-slate-700 hover:bg-slate-50 hover:text-blue-600',
    }
  }
}

// Helper for mobile menu styles
export const useMobileMenuStyles = () => {
  const { isDark } = useTheme()
  
  return {
    container: 'md:hidden overflow-hidden shadow-lg',
    light: 'bg-white border-t border-slate-200',
    dark: 'bg-slate-950 border-t border-slate-800',
    default: isDark 
      ? 'bg-slate-900 border-t border-slate-800'
      : 'bg-white border-t border-slate-200',
    link: {
      active: isDark ? 'bg-blue-500/10 text-blue-400' : 'bg-blue-50 text-blue-600',
      inactive: isDark ? 'text-slate-300 hover:bg-slate-800' : 'text-slate-700 hover:bg-slate-50',
    }
  }
}

export const useImageWithTextStyles = () => {
  const { isDark } = useTheme()
  
  return {
    container: {
      base: 'flex flex-col gap-12',
      reversed: 'lg:flex-row-reverse',
      default: 'lg:flex-row',
    },
    image: {
      base: 'aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl transition-all duration-500 hover:shadow-3xl hover:scale-[1.02]',
      dark: 'bg-gradient-to-br from-slate-800 to-slate-700',
      light: 'bg-gradient-to-br from-slate-100 to-slate-200',
      default: isDark 
        ? 'bg-gradient-to-br from-slate-800 to-slate-700'
        : 'bg-gradient-to-br from-slate-100 to-slate-200',
    },
    text: {
      subtitle: isDark ? 'text-blue-400' : 'text-blue-600',
      title: isDark ? 'text-white' : 'text-slate-900',
      description: isDark ? 'text-slate-300' : 'text-slate-600',
      feature: isDark ? 'text-slate-300' : 'text-slate-700',
    },
    checkmark: {
      container: isDark ? 'bg-emerald-500/10' : 'bg-emerald-100',
      icon: isDark ? 'text-emerald-400' : 'text-emerald-600',
    }
  }
}

// Helper for section header styles
export const useSectionHeaderStyles = () => {
  const { isDark } = useTheme()
  
  return {
    container: 'text-center mb-12 lg:mb-16',
    badge: `inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium mb-4 border transition-colors duration-300 ${
      isDark 
        ? 'bg-blue-500/10 text-blue-400 border-blue-500/20'
        : 'bg-blue-50 text-blue-600 border-blue-200'
    }`,
    title: isDark ? 'text-white' : 'text-slate-900',
    subtitle: isDark ? 'text-slate-300' : 'text-slate-600',
  }
}

// Helper for page hero styles
export const usePageHeroStyles = () => {
  const { isDark } = useTheme()
  
  return {
    container: 'pt-32 pb-16 theme-transition relative overflow-hidden',
    background: `absolute inset-0 overflow-hidden ${
      isDark ? 'bg-slate-950' : 'bg-white'
    }`,
    orb: `absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full blur-3xl opacity-10 ${
      isDark ? 'bg-blue-500/10' : 'bg-blue-500/5'
    }`,
    title: isDark ? 'text-white' : 'text-slate-900',
    description: isDark ? 'text-slate-300' : 'text-slate-600',
  }
}


// Helper for services grid styles
export const useServicesGridStyles = () => {
  const { isDark } = useTheme()
  
  return {
    container: 'grid grid-cols-1 md:grid-cols-2 gap-8',
    item: 'transition-all duration-300 hover:scale-[1.02]',
    header: {
      title: isDark ? 'text-white' : 'text-slate-900',
      description: isDark ? 'text-slate-300' : 'text-slate-600',
    },
    badge: `inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium mb-4 border transition-colors duration-300 ${
      isDark 
        ? 'bg-blue-500/10 text-blue-400 border-blue-500/20'
        : 'bg-blue-50 text-blue-600 border-blue-200'
    }`,
  }
}

// Helper for trust indicators
export const useTrustIndicatorStyles = () => {
  const { isDark } = useTheme()
  
  return {
    container: 'flex flex-wrap justify-center items-center gap-6 md:gap-10',
    text: isDark ? 'text-slate-500' : 'text-slate-300',
    checkmark: isDark ? 'text-emerald-400' : 'text-emerald-600',
    divider: 'w-px h-6 bg-slate-300 dark:bg-slate-700',
  }
}

// Helper for page section styles
export const usePageSectionStyles = () => {
  const { isDark } = useTheme()
  
  return {
    hero: 'pt-32 pb-16 theme-transition relative overflow-hidden',
    section: 'py-24 theme-transition relative overflow-hidden',
    background: {
      orb: `absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full blur-3xl opacity-10`,
      orbSmall: `absolute -bottom-40 -right-40 w-96 h-96 rounded-full blur-3xl opacity-10`,
      orbTop: `absolute -top-40 -left-40 w-96 h-96 rounded-full blur-3xl opacity-10`,
    },
  }
}

// Helper for section headers
export const useSectionHeader = () => {
  const { isDark } = useTheme()
  
  return {
    container: 'text-center mb-12',
    title: isDark ? 'text-white' : 'text-slate-900',
    subtitle: isDark ? 'text-slate-300' : 'text-slate-600',
    badge: `inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium border transition-colors duration-300 ${
      isDark 
        ? 'bg-blue-500/10 text-blue-400 border-blue-500/20'
        : 'bg-blue-50 text-blue-600 border-blue-200'
    }`,
  }
}



// Helper for product card styles
export const useProductCardStyles = () => {
  const { isDark } = useTheme()
  
  return {
    container: cn(
      "group relative rounded-2xl overflow-hidden",
      "border transition-all duration-500",
      isDark 
        ? "bg-slate-900/50 border-slate-800/80 shadow-sm hover:shadow-xl hover:shadow-slate-950/50" 
        : "bg-slate-50/80 border-slate-200/80 shadow-sm hover:shadow-xl hover:shadow-slate-200/50"
    ),
    image: {
      container: cn(
        "aspect-[4/3] relative overflow-hidden",
        isDark 
          ? "bg-gradient-to-br from-slate-700 to-slate-800" 
          : "bg-gradient-to-br from-slate-100 to-slate-200"
      ),
      icon: cn(
        "h-20 w-20 transition-transform duration-500 group-hover:scale-110",
        isDark ? "text-slate-600" : "text-slate-300"
      ),
      overlay: "absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500",
    },
    popular: cn(
      "absolute top-4 right-4 px-3 py-1 rounded-full text-xs font-bold",
      isDark 
        ? "bg-amber-500/20 text-amber-400 border border-amber-500/20"
        : "bg-amber-100 text-amber-700 border border-amber-200"
    ),
    price: isDark ? "text-white" : "text-slate-900",
    title: cn(
      "text-lg font-semibold mb-2 transition-colors",
      isDark 
        ? "text-white group-hover:text-blue-400" 
        : "text-slate-900 group-hover:text-blue-600"
    ),
    description: isDark ? "text-slate-300" : "text-slate-600",
    divider: isDark ? "border-slate-700" : "border-slate-100",
    stock: {
      label: isDark ? "text-slate-300" : "text-slate-500",
      value: isDark ? "text-white" : "text-slate-900",
    },
    link: cn(
      "text-sm font-medium transition-colors flex items-center gap-1 group/link",
      isDark ? "text-blue-400 hover:text-blue-300" : "text-blue-600 hover:text-blue-700"
    ),
  }
}

// Helper for product grid styles
export const useProductGridStyles = () => {
  const { isDark } = useTheme()
  
  return {
    container: 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8',
    header: {
      title: isDark ? 'text-white' : 'text-slate-900',
      subtitle: isDark ? 'text-slate-300' : 'text-slate-600',
    },
  }
}

// Helper for trust indicators (reusable)
export const useTrustIndicators = () => {
  const { isDark } = useTheme()
  
  return {
    container: 'flex flex-wrap justify-center items-center gap-6 md:gap-10',
    text: isDark ? 'text-slate-500' : 'text-slate-300',
    checkmark: isDark ? 'text-emerald-400' : 'text-emerald-600',
    divider: 'w-px h-6 bg-slate-300 dark:bg-slate-700',
    item: 'flex items-center gap-2',
  }
}

// Helper for page headers (reusable)
export const usePageHeader = () => {
  const { isDark } = useTheme()
  
  return {
    container: 'text-center mb-12',
    badge: cn(
      "inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium",
      "border transition-colors duration-300",
      isDark 
        ? "bg-blue-500/10 text-blue-400 border-blue-500/20" 
        : "bg-blue-50 text-blue-600 border-blue-200"
    ),
    title: isDark ? 'text-white' : 'text-slate-900',
    subtitle: isDark ? 'text-slate-300' : 'text-slate-600',
  }
}


export const useBlogStyles = () => {
  const { isDark } = useTheme()
  
  return {
    card: cn(
      "group rounded-2xl overflow-hidden border transition-all duration-300 hover:-translate-y-1",
      isDark 
        ? "bg-slate-900/50 border-slate-800/80 hover:shadow-xl hover:shadow-slate-950/50" 
        : "bg-slate-50/80 border-slate-200/80 hover:shadow-xl hover:shadow-slate-200/50"
    ),
    text: {
      title: cn(
        "text-2xl font-bold mb-3 transition-colors",
        isDark 
          ? "text-white group-hover:text-blue-400" 
          : "text-slate-900 group-hover:text-blue-600"
      ),
      description: isDark ? "text-slate-300" : "text-slate-600",
      muted: isDark ? "text-slate-300" : "text-slate-500",
      link: cn(
        "font-medium flex items-center gap-1 transition-colors group/link",
        isDark ? "text-blue-400 hover:text-blue-300" : "text-blue-600 hover:text-blue-700"
      ),
    },
    meta: {
      container: "flex items-center justify-between mb-4",
      date: isDark ? "text-slate-300" : "text-slate-500",
      readTime: isDark ? "text-slate-300" : "text-slate-500",
    },
  }
}

// Helper for badge styles
export const useBadgeStyles = () => {
  const { isDark } = useTheme()
  
  return {
    base: 'inline-flex items-center gap-1.5 font-medium rounded-full border',
    variants: {
      primary: isDark 
        ? 'bg-blue-500/20 text-blue-400 border-blue-500/20'
        : 'bg-blue-100 text-blue-800 border-blue-200',
      success: isDark
        ? 'bg-emerald-500/20 text-emerald-400 border-emerald-500/20'
        : 'bg-emerald-100 text-emerald-800 border-emerald-200',
      warning: isDark
        ? 'bg-amber-500/20 text-amber-400 border-amber-500/20'
        : 'bg-amber-100 text-amber-800 border-amber-200',
      danger: isDark
        ? 'bg-rose-500/20 text-rose-400 border-rose-500/20'
        : 'bg-rose-100 text-rose-800 border-rose-200',
      info: isDark
        ? 'bg-cyan-500/20 text-cyan-400 border-cyan-500/20'
        : 'bg-cyan-100 text-cyan-800 border-cyan-200',
      neutral: isDark
        ? 'bg-slate-800 text-slate-300 border-slate-700'
        : 'bg-slate-100 text-slate-800 border-slate-200',
      premium: 'bg-gradient-to-r from-purple-500 to-pink-500 text-white border-transparent shadow-lg shadow-purple-500/25',
      outline: isDark
        ? 'bg-transparent border-2 border-current text-slate-300'
        : 'bg-transparent border-2 border-current text-slate-700',
    },
    sizes: {
      xs: 'px-2 py-0.5 text-[10px] leading-4',
      sm: 'px-2.5 py-0.5 text-xs',
      md: 'px-3 py-1 text-sm',
      lg: 'px-4 py-1.5 text-base',
    },
  }
}

// Helper for blog post metadata
export const useBlogMeta = () => {
  const { isDark } = useTheme()
  
  return {
    container: "flex items-center justify-between mb-4",
    badge: "mb-4",
    date: isDark ? "text-slate-300" : "text-slate-500",
    readTime: isDark ? "text-slate-300" : "text-slate-500",
    author: isDark ? "text-slate-300" : "text-slate-700",
  }
}

// Helper for blog grid
export const useBlogGrid = () => {
  const { isDark } = useTheme()
  
  return {
    container: 'grid grid-cols-1 md:grid-cols-2 gap-8',
    item: cn(
      "group rounded-2xl overflow-hidden border transition-all duration-300 hover:-translate-y-1",
      isDark 
        ? "bg-slate-900/50 border-slate-800/80 hover:shadow-xl hover:shadow-slate-950/50" 
        : "bg-slate-50/80 border-slate-200/80 hover:shadow-xl hover:shadow-slate-200/50"
    ),
    content: "p-8",
  }
}

// Helper for view all button
export const useViewAllButton = () => {
  const { isDark } = useTheme()
  
  return {
    container: "mt-16 text-center",
    button: cn(
      "inline-flex items-center gap-2 px-6 py-3 rounded-xl font-medium transition-all duration-300",
      "hover:scale-[1.02]",
      isDark 
        ? "bg-slate-800 text-slate-300 hover:bg-slate-700 hover:text-white border border-slate-700"
        : "bg-slate-100 text-slate-700 hover:bg-slate-200 border border-slate-200"
    ),
    icon: "inline-block transition-transform group-hover:translate-x-1",
  }
}


// Helper for contact page hero styles (reuses pageHeroStyles)
export const useContactHeroStyles = () => {
  const { isDark } = useTheme()
  
  return {
    container: 'pt-32 pb-16 theme-transition relative overflow-hidden',
    background: {
      primary: isDark ? 'bg-slate-950' : 'bg-white',
      orb: `absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full blur-3xl opacity-10 ${
        isDark ? 'bg-blue-500/10' : 'bg-blue-500/5'
      }`,
    },
    badge: `inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium border transition-colors duration-300 ${
      isDark 
        ? 'bg-blue-500/10 text-blue-400 border-blue-500/20' 
        : 'bg-blue-50 text-blue-600 border-blue-200'
    }`,
    title: isDark ? 'text-white' : 'text-slate-900',
    subtitle: isDark ? 'text-slate-300' : 'text-slate-600',
  }
}

// Helper for contact form styles
export const useContactFormStyles = () => {
  const { isDark } = useTheme()
  
  return {
    container: 'max-w-2xl mx-auto',
    form: 'space-y-6',
    label: cn(
      'block text-sm font-medium mb-1.5 transition-colors duration-300',
      isDark ? 'text-slate-300' : 'text-slate-700'
    ),
    input: cn(
      'w-full rounded-xl border px-4 py-3 transition-all duration-300',
      'focus:outline-none focus:ring-2 focus:ring-offset-2',
      isDark 
        ? 'bg-slate-900/50 border-slate-700 text-slate-100 placeholder-slate-300 focus:border-blue-400 focus:ring-4 focus:ring-blue-400/20' 
        : 'bg-white border-slate-200 text-slate-900 placeholder-slate-300 focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10'
    ),
    textarea: cn(
      'w-full rounded-xl border px-4 py-3 transition-all duration-300 resize-y min-h-[120px]',
      'focus:outline-none focus:ring-2 focus:ring-offset-2',
      isDark 
        ? 'bg-slate-900/50 border-slate-700 text-slate-100 placeholder-slate-300 focus:border-blue-400 focus:ring-4 focus:ring-blue-400/20' 
        : 'bg-white border-slate-200 text-slate-900 placeholder-slate-300 focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10'
    ),
    error: isDark
      ? 'text-rose-400 text-sm mt-1.5'
      : 'text-rose-600 text-sm mt-1.5',
    success: isDark
      ? 'text-emerald-400 text-sm mt-1.5'
      : 'text-emerald-600 text-sm mt-1.5',
  }
}

// Helper for contact info styles
export const useContactInfoStyles = () => {
  const { isDark } = useTheme()
  
  return {
    container: 'grid grid-cols-1 md:grid-cols-3 gap-8 mt-16',
    item: cn(
      'text-center p-6 rounded-2xl transition-all duration-300',
      isDark 
        ? 'bg-slate-900/50 border border-slate-800/80 hover:bg-slate-800/50'
        : 'bg-slate-50/80 border border-slate-200/80 hover:bg-slate-100/80'
    ),
    icon: cn(
      'w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4',
      isDark 
        ? 'bg-blue-500/10 text-blue-400'
        : 'bg-blue-50 text-blue-600'
    ),
    label: isDark ? 'text-slate-300' : 'text-slate-500',
    value: isDark ? 'text-white' : 'text-slate-900',
  }
}


// Helper for input styles
export const useInputStyles = () => {
  const { isDark } = useTheme()
  
  return {
    // Base input styles
    base: cn(
      'w-full px-4 py-3.5 rounded-xl',
      'transition-all duration-200',
      'focus:outline-none',
      'disabled:opacity-50 disabled:cursor-not-allowed',
      'shadow-sm hover:shadow',
      isDark 
        ? 'bg-slate-900/50 text-slate-100 placeholder-slate-300' 
        : 'bg-white text-slate-900 placeholder-slate-300'
    ),
    
    // Default state
    default: cn(
      'border',
      isDark 
        ? 'text-slate-300 border-slate-700 hover:border-slate-600' 
        : 'border-slate-200 hover:border-slate-300'
    ),
    
    // Focused state
    focused: cn(
      ' border-blue-500 dark:border-blue-400',
      'ring-4 ring-blue-500/10 dark:ring-blue-400/20',
      isDark
      ? "text-slate-300":"text-slate-900"
    ),
    
    // Error state
    error: cn(
      'border-rose-400 dark:border-rose-500',
      'ring-1 ring-rose-500/20 dark:ring-rose-500/30'
    ),
    
    // Success state
    success: cn(
      'border-emerald-400 dark:border-emerald-500',
      'ring-1 ring-emerald-500/20 dark:ring-emerald-500/30'
    ),
    
    // Password toggle button
    passwordToggle: cn(
      'absolute right-4 top-1/2 -translate-y-1/2 transition-colors duration-200',
      'focus:outline-none focus:ring-2 focus:ring-blue-500/50 rounded-lg p-1',
      isDark 
        ? 'text-slate-500 hover:text-slate-300' 
        : 'text-slate-300 hover:text-slate-600'
    ),
    
    // Label styles
    label: {
      base: 'block text-sm font-semibold mb-2 transition-colors duration-200',
      default: isDark ? 'text-slate-300' : 'text-slate-700',
      focused: 'text-blue-600 dark:text-blue-400',
      error: 'text-rose-600 dark:text-rose-400',
      required: 'text-rose-500 ml-1',
    },
    
    // Icon styles
    icon: {
      base: 'absolute top-1/2 -translate-y-1/2 transition-colors duration-200',
      left: 'left-4',
      right: 'right-4',
      default: isDark ? 'text-slate-500' : 'text-slate-300',
      focused: 'text-blue-500',
      error: 'text-rose-500',
    },
    
    // Helper text styles
    helperText: {
      base: 'mt-2 text-sm',
      default: isDark ? 'text-slate-300' : 'text-slate-500',
      error: 'text-rose-600 dark:text-rose-400',
      success: 'text-emerald-600 dark:text-emerald-400',
    },
    
    // Error icon
    errorIcon: 'h-4 w-4 flex-shrink-0',
  }
}

// Helper for input variant styles
export const useInputVariantStyles = () => {
  const { isDark } = useTheme()
  
  return {
    // Filled variant
    filled: cn(
      'border-0',
      isDark 
        ? 'bg-slate-800 hover:bg-slate-700 focus:bg-slate-700' 
        : 'bg-slate-100 hover:bg-slate-200 focus:bg-slate-200'
    ),
    
    // Outline variant (default)
    outline: cn(
      'border',
      isDark 
        ? 'border-slate-700 hover:border-slate-600' 
        : 'border-slate-200 hover:border-slate-300'
    ),
    
    // Underline variant
    underline: cn(
      'border-x-0 border-t-0 rounded-none',
      'border-b-2',
      isDark 
        ? 'border-slate-700 hover:border-slate-600' 
        : 'border-slate-200 hover:border-slate-300',
      'shadow-none hover:shadow-none',
      'focus:border-blue-500 dark:focus:border-blue-400',
      'focus:ring-0'
    ),
    
    // Ghost variant
    ghost: cn(
      'border-0 bg-transparent shadow-none hover:shadow-none',
      isDark 
        ? 'hover:bg-slate-800/50' 
        : 'hover:bg-slate-100/50'
    ),
  }
}

// Helper for input sizes
export const useInputSizes = () => {
  return {
    xs: 'px-2 py-1 text-xs rounded-lg',
    sm: 'px-3 py-2 text-sm rounded-lg',
    md: 'px-4 py-3 text-base rounded-xl',
    lg: 'px-5 py-4 text-lg rounded-xl',
    xl: 'px-6 py-5 text-xl rounded-2xl',
  }
}

// Helper for input groups
export const useInputGroupStyles = () => {
  const { isDark } = useTheme()
  
  return {
    container: 'flex items-center gap-2',
    addon: cn(
      'flex items-center px-4 rounded-xl border',
      'text-sm font-medium',
      isDark 
        ? 'bg-slate-800 border-slate-700 text-slate-300' 
        : 'bg-slate-100 border-slate-200 text-slate-700'
    ),
    addonPosition: {
      left: 'rounded-r-none border-r-0',
      right: 'rounded-l-none border-l-0',
    },
  }
}


// Helper for dashboard header styles
export const useDashboardHeaderStyles = () => {
  const { isDark } = useTheme()
  
  return {
    // Container
    container: cn(
      "sticky top-0 z-30 theme-transition",
      "backdrop-blur-xl border-b",
      isDark 
        ? "bg-slate-900/80 border-slate-800" 
        : "bg-white/80 border-slate-200"
    ),
    
    // Icon buttons (Menu, Bell, etc.)
    iconButton: cn(
      "transition-colors",
      isDark 
        ? "text-slate-300 hover:text-slate-200 hover:bg-slate-800" 
        : "text-slate-500 hover:text-slate-700 hover:bg-slate-100"
    ),
    
    // Search input
    searchInput: cn(
      isDark 
        ? "bg-slate-800/50 border-slate-700 placeholder-slate-500" 
        : "bg-slate-50 border-slate-200 placeholder-slate-400"
    ),
    
    // Search icon
    searchIcon: isDark ? "text-slate-500" : "text-slate-300",
    
    // User button
    userButton: cn(
      "transition-colors",
      isDark ? "hover:bg-slate-800" : "hover:bg-slate-100"
    ),
    
    // Dropdown container
    dropdownContainer: cn(
      isDark ? "bg-slate-900 border border-slate-800" : "bg-white border border-slate-200"
    ),
    
    // Dropdown text
    dropdownText: isDark ? "text-white" : "text-slate-900",
    
    // Dropdown subtext
    dropdownSubtext: isDark ? "text-slate-300" : "text-slate-500",
    
    // Notification item
    notificationItem: cn(
      "transition-colors",
      isDark ? "hover:bg-slate-800/50" : "hover:bg-slate-50"
    ),
    
    // Notification badge
    notificationBadge: cn(
      "absolute -top-0.5 -right-0.5 h-5 w-5",
      "flex items-center justify-center",
      "text-[10px] font-bold text-white",
      "bg-rose-500 rounded-full",
      "ring-2 ring-white dark:ring-slate-900",
      "animate-pulse"
    ),
  }
}

// Helper for dashboard sidebar styles
export const useDashboardSidebarStyles = () => {
  const { isDark } = useTheme()
  
  return {
    container: cn(
      "fixed left-0 top-0 bottom-0 z-40",
      "w-64 transition-transform duration-300",
      "border-r",
      isDark 
        ? "bg-slate-900 border-slate-800" 
        : "bg-white border-slate-200"
    ),
    collapsed: "-translate-x-full",
    expanded: "translate-x-0",
    
    // Sidebar items
    item: {
      base: cn(
        "flex items-center gap-3 px-4 py-2.5 rounded-xl",
        "transition-all duration-200",
        "text-sm font-medium",
        isDark 
          ? "text-slate-300 hover:text-white hover:bg-slate-800" 
          : "text-slate-600 hover:text-slate-900 hover:bg-slate-100"
      ),
      active: isDark 
        ? "bg-blue-500/20 text-blue-400" 
        : "bg-blue-50 text-blue-600",
      icon: "h-5 w-5 flex-shrink-0",
    },
    
    // Divider
    divider: cn(
      "my-2 border-t",
      isDark ? "border-slate-800" : "border-slate-200"
    ),
    
    // Logo
    logo: {
      container: "flex items-center gap-3 px-4 py-4",
      text: cn(
        "text-xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent",
        isDark && "from-blue-400 to-purple-400"
      ),
    },
  }
}

// Helper for dashboard stats styles
export const useDashboardStatsStyles = () => {
  const { isDark } = useTheme()
  
  return {
    container: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6",
    card: cn(
      "rounded-2xl p-6 transition-all duration-300",
      "border",
      isDark 
        ? "bg-slate-900/50 border-slate-800 hover:bg-slate-900/70" 
        : "bg-white border-slate-200 hover:shadow-lg"
    ),
    icon: cn(
      "h-12 w-12 rounded-xl flex items-center justify-center",
      isDark ? "bg-blue-500/10 text-blue-400" : "bg-blue-50 text-blue-600"
    ),
    label: isDark ? "text-slate-300" : "text-slate-500",
    value: isDark ? "text-white" : "text-slate-900",
    change: {
      positive: "text-emerald-500",
      negative: "text-rose-500",
    },
  }
}

// Helper for dashboard table styles
export const useDashboardTableStyles = () => {
  const { isDark } = useTheme()
  
  return {
    container: cn(
      "rounded-2xl overflow-hidden",
      "border",
      isDark 
        ? "bg-slate-900/50 border-slate-800" 
        : "bg-white border-slate-200"
    ),
    header: {
      container: cn(
        "flex items-center justify-between p-4 border-b",
        isDark ? "border-slate-800" : "border-slate-200"
      ),
      title: isDark ? "text-white" : "text-slate-900",
    },
    table: "w-full",
    thead: cn(
      isDark ? "bg-slate-800/50" : "bg-slate-50"
    ),
    th: cn(
      "px-4 py-3 text-left text-xs font-medium uppercase tracking-wider",
      isDark ? "text-slate-300" : "text-slate-500"
    ),
    td: cn(
      "px-4 py-3 text-sm border-t",
      isDark ? "text-slate-300 border-slate-800" : "text-slate-600 border-slate-100"
    ),
    row: cn(
      "transition-colors",
      isDark ? "hover:bg-slate-800/50" : "hover:bg-slate-50"
    ),
  }
}