// src/components/sections/AboutSection.jsx
'use client'

import { ImageWithText } from '@/components/media/ImageWithText'
import { useTheme } from '@/context/ThemeContext'
import { useThemeClasses } from '@/lib/theme-helpers'
import { cn } from '@/lib/helpers'

export const AboutSection = () => {
  const { theme } = useTheme()
  const themeClasses = useThemeClasses()
  const isDark = theme === 'dark'

  return (
    <section className={cn(
      "py-24 theme-transition relative overflow-hidden",
      themeClasses.bg.primary
    )}>
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden">
        <div className={cn(
          "absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full blur-3xl opacity-10",
          isDark ? "bg-blue-500/10" : "bg-blue-500/5"
        )} />
        <div className={cn(
          "absolute -top-40 -left-40 w-96 h-96 rounded-full blur-3xl opacity-10",
          isDark ? "bg-purple-500/10" : "bg-purple-500/5"
        )} />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <ImageWithText
          imageSrc="/images/about.jpg"
          imageAlt="Our team"
          title="Built for modern teams"
          subtitle="About Us"
          description="We believe in creating tools that empower businesses to achieve more. Our platform is designed with simplicity and power in mind, ensuring that teams of all sizes can collaborate effectively and drive results."
          features={[
            'Founded in 2020',
            'Over 10,000 active users',
            '99.9% uptime guarantee',
            'Global presence in 20+ countries',
          ]}
          reversed
        />
      </div>
    </section>
  )
}