// src/app/(website)/about/page.jsx
'use client'

import { AboutSection } from '@/components/sections/AboutSection'
import { ImageWithText } from '@/components/media/ImageWithText'
import { CTASection } from '@/components/sections/CTASection'
import { useTheme } from '@/context/ThemeContext'
import { useThemeClasses } from '@/lib/theme-helpers'
import { cn } from '@/lib/helpers'

export default function AboutPage() {
  const { theme } = useTheme()
  const themeClasses = useThemeClasses()
  const isDark = theme === 'dark'

  return (
    <>
      {/* Hero Section */}
      <div className={cn(
        "pt-32 pb-16 theme-transition relative overflow-hidden",
        themeClasses.bg.primary
      )}>
        {/* Background decoration */}
        <div className="absolute inset-0 overflow-hidden">
          <div className={cn(
            "absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full blur-3xl opacity-10",
            isDark ? "bg-blue-500/10" : "bg-blue-500/5"
          )} />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <h1 className={cn(
            "text-4xl md:text-5xl font-bold text-center mb-4",
            themeClasses.text.primary
          )}>
            About Us
          </h1>
          <p className={cn(
            "text-xl text-center max-w-2xl mx-auto",
            themeClasses.text.secondary
          )}>
            We're on a mission to help businesses grow with powerful, easy-to-use tools.
          </p>
        </div>
      </div>
      
      <AboutSection />
      
      {/* Values Section */}
      <section className={cn(
        "py-24 theme-transition relative overflow-hidden",
        themeClasses.bg.primary
      )}>
        {/* Background decoration */}
        <div className="absolute inset-0 overflow-hidden">
          <div className={cn(
            "absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full blur-3xl opacity-10",
            isDark ? "bg-purple-500/10" : "bg-purple-500/5"
          )} />
          <div className={cn(
            "absolute -bottom-40 -right-40 w-96 h-96 rounded-full blur-3xl opacity-10",
            isDark ? "bg-cyan-500/10" : "bg-cyan-500/5"
          )} />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <ImageWithText
            imageSrc="/images/team.jpg"
            imageAlt="Our values"
            title="Our Values"
            subtitle="What drives us"
            description="We believe in transparency, innovation, and putting our customers first. Every feature we build is designed to solve real problems and make your work easier."
            features={[
              'Customer obsession',
              'Continuous innovation',
              'Radical transparency',
              'Sustainable growth',
            ]}
          />
        </div>
      </section>
      
      <CTASection />
    </>
  )
}