// src/components/sections/PricingSection.jsx
'use client'

import Link from 'next/link'
import { Button } from '@/components/common/Button'
import { motion } from 'framer-motion'
import { Check } from 'lucide-react'
import { useTheme } from '@/context/ThemeContext'
import { useThemeClasses } from '@/lib/theme-helpers'
import { themeConfig } from '@/lib/theme'
import { cn } from '@/lib/helpers'

const plans = [
  {
    name: 'Starter',
    price: 29,
    description: 'Perfect for small teams getting started',
    features: [
      'Up to 5 team members',
      '10GB storage',
      'Basic analytics',
      'Email support',
      'API access',
    ],
    cta: 'Start Free Trial',
    popular: false,
  },
  {
    name: 'Professional',
    price: 79,
    description: 'For growing businesses with advanced needs',
    features: [
      'Up to 20 team members',
      '50GB storage',
      'Advanced analytics',
      'Priority support',
      'API access',
      'Custom integrations',
      'Team collaboration tools',
    ],
    cta: 'Start Free Trial',
    popular: true,
  },
  {
    name: 'Enterprise',
    price: 199,
    description: 'For large organizations with custom requirements',
    features: [
      'Unlimited team members',
      'Unlimited storage',
      'Custom analytics',
      '24/7 phone support',
      'Full API access',
      'Custom integrations',
      'Advanced security',
      'Dedicated account manager',
    ],
    cta: 'Contact Sales',
    popular: false,
  },
]

export const PricingSection = ({ variant = 'default' }) => {
  const { theme, mounted } = useTheme()
  const themeClasses = useThemeClasses()
  const isDark = theme === 'dark'

  // Loading skeleton
  if (!mounted) {
    return (
      <section className="py-24 bg-slate-50 dark:bg-slate-900/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="w-64 h-10 bg-slate-200 dark:bg-slate-700 rounded-lg animate-pulse mx-auto mb-4" />
            <div className="w-96 h-6 bg-slate-200 dark:bg-slate-700 rounded-lg animate-pulse mx-auto" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[1, 2, 3].map((i) => (
              <div key={i} className="bg-white dark:bg-slate-900/50 rounded-2xl shadow-xl p-8 border border-slate-200 dark:border-slate-800">
                <div className="w-24 h-8 bg-slate-200 dark:bg-slate-700 rounded-lg animate-pulse mb-4" />
                <div className="w-48 h-4 bg-slate-200 dark:bg-slate-700 rounded-lg animate-pulse mb-6" />
                <div className="w-32 h-10 bg-slate-200 dark:bg-slate-700 rounded-lg animate-pulse mb-6" />
                <div className="space-y-4 mb-8">
                  {[1, 2, 3, 4].map((j) => (
                    <div key={j} className="w-48 h-4 bg-slate-200 dark:bg-slate-700 rounded-lg animate-pulse" />
                  ))}
                </div>
                <div className="w-full h-12 bg-slate-200 dark:bg-slate-700 rounded-xl animate-pulse" />
              </div>
            ))}
          </div>
        </div>
      </section>
    )
  }

  // Section background based on variant and theme
  const getSectionStyles = () => {
    if (variant === 'light') {
      return 'bg-slate-50'
    }
    
    if (variant === 'dark') {
      return 'bg-slate-950'
    }
    
    if (variant === 'glass') {
      return 'bg-transparent'
    }

    // default - dynamic based on theme
    return isDark ? 'bg-slate-900/30' : 'bg-slate-50'
  }

  // Card styles based on variant and theme
  const getCardStyles = (isPopular) => {
    if (isPopular) {
      return cn(
        'bg-gradient-to-br from-blue-600 to-purple-600 text-white ring-4 ring-blue-500/20 scale-105',
        isDark ? 'shadow-2xl shadow-blue-500/20' : 'shadow-2xl shadow-blue-500/30'
      )
    }

    if (variant === 'light') {
      return 'bg-white text-slate-900 border border-slate-200 shadow-xl'
    }
    
    if (variant === 'dark') {
      return 'bg-slate-900/80 text-white border border-slate-800 shadow-xl'
    }
    
    if (variant === 'glass') {
      return cn(
        'glass text-slate-900 dark:text-white border border-white/20 dark:border-slate-800/50 shadow-xl',
        isDark ? 'bg-slate-900/70' : 'bg-white/70'
      )
    }

    // default - dynamic based on theme
    return isDark
      ? 'bg-slate-900/50 text-white border border-slate-800 shadow-xl'
      : 'bg-white text-slate-900 border border-slate-200 shadow-xl'
  }

  // Text colors based on variant and theme
  const getTextColors = () => {
    if (variant === 'light') {
      return {
        title: 'text-slate-900',
        subtitle: 'text-slate-600',
        cardTitle: 'text-slate-900',
        cardDesc: 'text-slate-600',
        cardPrice: 'text-slate-900',
        cardPriceSub: 'text-slate-500',
        featureText: 'text-slate-600',
        popularBadge: 'bg-amber-400 text-amber-900',
        checkIcon: 'bg-emerald-100 text-emerald-600',
        checkIconInner: 'text-emerald-600',
      }
    }
    
    if (variant === 'dark') {
      return {
        title: 'text-white',
        subtitle: 'text-slate-300',
        cardTitle: 'text-white',
        cardDesc: 'text-slate-300',
        cardPrice: 'text-white',
        cardPriceSub: 'text-slate-300',
        featureText: 'text-slate-300',
        popularBadge: 'bg-amber-500 text-amber-950',
        checkIcon: 'bg-emerald-500/20 text-emerald-400',
        checkIconInner: 'text-emerald-400',
      }
    }
    
    if (variant === 'glass') {
      return isDark
        ? {
            title: 'text-white',
            subtitle: 'text-slate-300',
            cardTitle: 'text-white',
            cardDesc: 'text-slate-300',
            cardPrice: 'text-white',
            cardPriceSub: 'text-slate-300',
            featureText: 'text-slate-300',
            popularBadge: 'bg-amber-500 text-amber-950',
            checkIcon: 'bg-emerald-500/20 text-emerald-400',
            checkIconInner: 'text-emerald-400',
          }
        : {
            title: 'text-slate-900',
            subtitle: 'text-slate-600',
            cardTitle: 'text-slate-900',
            cardDesc: 'text-slate-600',
            cardPrice: 'text-slate-900',
            cardPriceSub: 'text-slate-500',
            featureText: 'text-slate-600',
            popularBadge: 'bg-amber-400 text-amber-900',
            checkIcon: 'bg-emerald-100 text-emerald-600',
            checkIconInner: 'text-emerald-600',
          }
    }

    // default - dynamic based on theme
    return isDark
      ? {
          title: 'text-white',
          subtitle: 'text-slate-300',
          cardTitle: 'text-white',
          cardDesc: 'text-slate-300',
          cardPrice: 'text-white',
          cardPriceSub: 'text-slate-300',
          featureText: 'text-slate-300',
          popularBadge: 'bg-amber-500 text-amber-950',
          checkIcon: 'bg-emerald-500/20 text-emerald-400',
          checkIconInner: 'text-emerald-400',
        }
      : {
          title: 'text-slate-900',
          subtitle: 'text-slate-600',
          cardTitle: 'text-slate-900',
          cardDesc: 'text-slate-600',
          cardPrice: 'text-slate-900',
          cardPriceSub: 'text-slate-500',
          featureText: 'text-slate-600',
          popularBadge: 'bg-amber-400 text-amber-900',
          checkIcon: 'bg-emerald-100 text-emerald-600',
          checkIconInner: 'text-emerald-600',
        }
  }

  const colors = getTextColors()

  // Check icon styles for non-popular cards
  const getCheckIconStyles = (isPopular) => {
    if (isPopular) {
      return 'bg-white/20 text-white'
    }
    return colors.checkIcon
  }

  // Get the inner check icon color
  const getCheckIconInnerStyles = (isPopular) => {
    if (isPopular) {
      return 'text-white'
    }
    return colors.checkIconInner
  }

  // Button variant for popular card
  const getPopularButtonVariant = () => {
    if (variant === 'light' || variant === 'glass') {
      return 'secondary'
    }
    return 'secondary'
  }

  // Get button variant for regular cards
  const getRegularButtonVariant = () => {
    if (variant === 'dark') {
      return 'primary'
    }
    if (variant === 'glass') {
      return isDark ? 'primary' : 'primary'
    }
    return 'primary'
  }

  return (
    <motion.section 
      className={cn(
        'py-24 theme-transition transition-colors duration-500 relative overflow-hidden',
        getSectionStyles()
      )}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
    >
      {/* Background decoration for pricing section */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className={cn(
          "absolute -top-40 -right-40 w-80 h-80 rounded-full blur-3xl opacity-20",
          isDark ? "bg-blue-500/10" : "bg-blue-500/5"
        )} />
        <div className={cn(
          "absolute -bottom-40 -left-40 w-80 h-80 rounded-full blur-3xl opacity-20",
          isDark ? "bg-purple-500/10" : "bg-purple-500/5"
        )} />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className={cn(
              "inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium mb-4",
              "border transition-colors duration-300",
              isDark 
                ? "bg-blue-500/10 text-blue-400 border-blue-500/20" 
                : "bg-blue-50 text-blue-600 border-blue-200"
            )}
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500" />
            </span>
            Pricing
          </motion.div>
          
          <h2 className={cn(
            'text-3xl md:text-4xl font-bold mb-4 transition-colors duration-300',
            colors.title
          )}>
            Simple, transparent pricing
          </h2>
          <p className={cn(
            'text-xl transition-colors duration-300 max-w-2xl mx-auto',
            colors.subtitle
          )}>
            Choose the plan that's right for your business
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, index) => {
            const isPopular = plan.popular
            const cardStyles = getCardStyles(isPopular)
            const checkIconStyles = getCheckIconStyles(isPopular)
            const checkIconInnerStyles = getCheckIconInnerStyles(isPopular)
            const buttonVariant = isPopular ? getPopularButtonVariant() : getRegularButtonVariant()

            return (
              <motion.div
                key={plan.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                className={cn(
                  'relative rounded-2xl overflow-hidden transition-all duration-500',
                  'hover:scale-[1.02] hover:shadow-2xl',
                  cardStyles,
                  isPopular && 'shadow-2xl shadow-blue-500/20 dark:shadow-blue-500/10'
                )}
              >
                {isPopular && (
                  <motion.div 
                    className={cn(
                      'absolute top-0 right-0 text-xs font-bold px-4 py-1.5 rounded-bl-xl',
                      colors.popularBadge
                    )}
                    initial={{ x: 50, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: 0.2 }}
                  >
                    POPULAR
                  </motion.div>
                )}
                <div className="p-8">
                  <h3 className={cn(
                    'text-2xl font-bold mb-2 transition-colors duration-300',
                    isPopular ? 'text-white' : colors.cardTitle
                  )}>
                    {plan.name}
                  </h3>
                  <p className={cn(
                    'mb-6 transition-colors duration-300',
                    isPopular ? 'text-blue-100' : colors.cardDesc
                  )}>
                    {plan.description}
                  </p>
                  <div className="mb-6">
                    <span className={cn(
                      'text-4xl font-bold transition-colors duration-300',
                      isPopular ? 'text-white' : colors.cardPrice
                    )}>
                      ${plan.price}
                    </span>
                    <span className={cn(
                      'transition-colors duration-300',
                      isPopular ? 'text-blue-200' : colors.cardPriceSub
                    )}>
                      /month
                    </span>
                  </div>
                  <ul className="space-y-4 mb-8">
                    {plan.features.map((feature, idx) => (
                      <motion.li 
                        key={idx} 
                        className="flex items-start"
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.1 + idx * 0.05 }}
                      >
                        <div className={cn(
                          'h-5 w-5 rounded-full flex items-center justify-center mr-3 mt-0.5 transition-colors duration-300 flex-shrink-0',
                          checkIconStyles
                        )}>
                          <Check className={cn(
                            'h-3 w-3 transition-colors duration-300',
                            checkIconInnerStyles
                          )} />
                        </div>
                        <span className={cn(
                          'transition-colors duration-300',
                          isPopular ? 'text-blue-50' : colors.featureText
                        )}>
                          {feature}
                        </span>
                      </motion.li>
                    ))}
                  </ul>
                  <Link href="/dashboard">
                    <Button
                      variant={buttonVariant}
                      className="w-full"
                      size="lg"
                    >
                      {plan.cta}
                    </Button>
                  </Link>
                </div>
              </motion.div>
            )
          })}
        </div>

        {/* Trust indicator */}
        <motion.div 
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
        >
          <div className={cn(
            "text-sm",
            isDark ? "text-slate-300" : "text-slate-400"
          )}>
            <span className="font-medium text-emerald-500">✓</span> 30-day money-back guarantee
            <span className="mx-3">•</span>
            <span className="font-medium text-emerald-500">✓</span> No hidden fees
            <span className="mx-3">•</span>
            <span className="font-medium text-emerald-500">✓</span> Cancel anytime
          </div>
        </motion.div>
      </div>
    </motion.section>
  )
}