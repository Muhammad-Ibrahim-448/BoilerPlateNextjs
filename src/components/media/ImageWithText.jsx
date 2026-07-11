// src/components/media/ImageWithText.jsx
'use client'

import { motion } from 'framer-motion'
import { cn } from '@/lib/helpers'
import { useTheme } from '@/context/ThemeContext'
import { useThemeClasses } from '@/lib/theme-helpers'

export const ImageWithText = ({
  imageSrc,
  imageAlt,
  title,
  subtitle,
  description,
  features,
  reversed = false,
  className = '',
}) => {
  const { theme } = useTheme()
  const themeClasses = useThemeClasses()
  const isDark = theme === 'dark'

  return (
    <div className={cn(
      'flex flex-col gap-12',
      reversed ? 'lg:flex-row-reverse' : 'lg:flex-row',
      className
    )}>
      {/* Image Column */}
      <div className="w-full lg:w-1/2">
        <div className={cn(
          "aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl transition-all duration-500",
          "hover:shadow-3xl hover:scale-[1.02]",
          isDark 
            ? "bg-gradient-to-br from-slate-800 to-slate-700" 
            : "bg-gradient-to-br from-slate-100 to-slate-200"
        )}>
          <div className="flex items-center justify-center h-full">
            <svg className={cn(
              "h-32 w-32 transition-transform duration-500 hover:scale-110",
              isDark ? "text-slate-600" : "text-slate-400"
            )} fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
          </div>
        </div>
      </div>

      {/* Text Column */}
      <div className="w-full lg:w-1/2 flex flex-col justify-center">
        {subtitle && (
          <span className={cn(
            "font-semibold uppercase tracking-wider text-sm mb-2",
            themeClasses.text.accent
          )}>
            {subtitle}
          </span>
        )}
        <h2 className={cn(
          "text-3xl md:text-4xl font-bold mb-4",
          themeClasses.text.primary
        )}>
          {title}
        </h2>
        <p className={cn(
          "text-lg mb-8 leading-relaxed",
          themeClasses.text.secondary
        )}>
          {description}
        </p>
        {features && (
          <ul className="space-y-4">
            {features.map((feature, index) => (
              <motion.li 
                key={index} 
                className={cn(
                  "flex items-center transition-colors",
                  themeClasses.text.secondary
                )}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <div className={cn(
                  "h-6 w-6 rounded-full flex items-center justify-center mr-4 flex-shrink-0",
                  isDark ? "bg-emerald-500/10" : "bg-emerald-100"
                )}>
                  <svg className={cn(
                    "h-4 w-4",
                    isDark ? "text-emerald-400" : "text-emerald-600"
                  )} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                {feature}
              </motion.li>
            ))}
          </ul>
        )}
      </div>
    </div>
  )
}