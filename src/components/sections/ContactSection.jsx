// src/components/sections/ContactSection.jsx
'use client'

import { useState } from 'react'
import { Button } from '@/components/common/Button'
import { Input } from '@/components/common/Input'
import { motion } from 'framer-motion'
import { useTheme } from '@/context/ThemeContext'
import { useThemeClasses, useContactFormStyles, useContactInfoStyles } from '@/lib/theme-helpers'
import { cn } from '@/lib/helpers'

export const ContactSection = () => {
  const { theme } = useTheme()
  const themeClasses = useThemeClasses()
  const formStyles = useContactFormStyles()
  const infoStyles = useContactInfoStyles()
  const isDark = theme === 'dark'
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  })

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('Form submitted:', formData)
  }

  const contactInfo = [
    { 
      icon: 'M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z', 
      title: 'Email', 
      value: 'support@example.com' 
    },
    { 
      icon: 'M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z', 
      title: 'Phone', 
      value: '+1 (555) 123-4567' 
    },
    { 
      icon: 'M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z M15 11a3 3 0 11-6 0 3 3 0 016 0z', 
      title: 'Office', 
      value: '123 Business St, Suite 100\nSan Francisco, CA 94102' 
    },
  ]

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
          "absolute -top-40 -right-40 w-96 h-96 rounded-full blur-3xl opacity-10",
          isDark ? "bg-purple-500/10" : "bg-purple-500/5"
        )} />
        <div className={cn(
          "absolute -bottom-40 -left-40 w-96 h-96 rounded-full blur-3xl opacity-10",
          isDark ? "bg-cyan-500/10" : "bg-cyan-500/5"
        )} />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Left Column - Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            {/* Section Header */}
            <div className="mb-8">
              <span className={cn(
                "inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium",
                "border transition-colors duration-300",
                isDark 
                  ? "bg-blue-500/10 text-blue-400 border-blue-500/20" 
                  : "bg-blue-50 text-blue-600 border-blue-200"
              )}>
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500" />
                </span>
                Contact Information
              </span>
            </div>

            <h2 className={cn(
              "text-3xl md:text-4xl font-bold mb-4",
              themeClasses.text.primary
            )}>
              Get in touch
            </h2>
            <p className={cn(
              "text-lg mb-12 max-w-md",
              themeClasses.text.secondary
            )}>
              Have questions? We'd love to hear from you. Send us a message and we'll respond as soon as possible.
            </p>
            
            <div className="space-y-8">
              {contactInfo.map((item, index) => (
                <motion.div 
                  key={item.title}
                  className="flex items-start group"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <div className="flex-shrink-0">
                    <div className={cn(
                      "flex items-center justify-center h-12 w-12 rounded-xl transition-all duration-300",
                      "group-hover:scale-110",
                      isDark 
                        ? "bg-blue-500/10 text-blue-400 group-hover:bg-blue-500/20" 
                        : "bg-blue-100 text-blue-600 group-hover:bg-blue-200"
                    )}>
                      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={item.icon} />
                      </svg>
                    </div>
                  </div>
                  <div className="ml-4">
                    <h3 className={cn(
                      "text-lg font-semibold transition-colors duration-300",
                      themeClasses.text.primary
                    )}>
                      {item.title}
                    </h3>
                    <p className={cn(
                      "mt-1 whitespace-pre-line transition-colors duration-300",
                      themeClasses.text.secondary
                    )}>
                      {item.value}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Social Links */}
            <motion.div 
              className="mt-12 pt-8 border-t border-slate-200 dark:border-slate-800"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
            >
              <h4 className={cn(
                "text-sm font-medium mb-4",
                themeClasses.text.secondary
              )}>
                Follow us on social media
              </h4>
              <div className="flex gap-4">
                {['Twitter', 'LinkedIn', 'GitHub'].map((social) => (
                  <a
                    key={social}
                    href="#"
                    className={cn(
                      "p-2 rounded-xl transition-all duration-300",
                      "hover:scale-110",
                      isDark 
                        ? "bg-slate-800 text-slate-300 hover:bg-slate-700 hover:text-white"
                        : "bg-slate-100 text-slate-600 hover:bg-slate-200 hover:text-slate-900"
                    )}
                  >
                    <span className="sr-only">{social}</span>
                    <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                      {social === 'Twitter' && (
                        <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                      )}
                      {social === 'LinkedIn' && (
                        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                      )}
                      {social === 'GitHub' && (
                        <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                      )}
                    </svg>
                  </a>
                ))}
              </div>
            </motion.div>
          </motion.div>

          {/* Right Column - Contact Form */}
          <motion.div 
            className={cn(
              "rounded-2xl shadow-xl p-8 border transition-all duration-300",
              "hover:shadow-2xl",
              isDark 
                ? "bg-slate-900/50 border-slate-800/80 shadow-slate-950/50 hover:shadow-slate-950/70" 
                : "bg-slate-50/80 border-slate-200/80 shadow-slate-200/50 hover:shadow-slate-200/70"
            )}
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="mb-6">
              <h3 className={cn(
                "text-2xl font-bold mb-2",
                themeClasses.text.primary
              )}>
                Send us a message
              </h3>
              <p className={cn(
                "text-sm",
                themeClasses.text.secondary
              )}>
                We'll get back to you within 24 hours
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <Input
                label="Name"
                type="text"
                required
                placeholder="John Doe"
                value={formData.name}
                onChange={(e) => setFormData({...formData, name: e.target.value})}
                containerClassName="w-full"
              />
              <Input
                label="Email"
                type="email"
                required
                placeholder="john@example.com"
                value={formData.email}
                onChange={(e) => setFormData({...formData, email: e.target.value})}
                containerClassName="w-full"
              />
              <div>
                <label className={cn(
                  "block text-sm font-medium mb-2 transition-colors duration-300",
                  isDark ? "text-slate-300" : "text-slate-700"
                )}>
                  Message <span className="text-rose-500 ml-1">*</span>
                </label>
                <textarea
                  rows={4}
                  required
                  placeholder="Your message here..."
                  value={formData.message}
                  onChange={(e) => setFormData({...formData, message: e.target.value})}
                  className={cn(
                    "w-full px-4 py-3 rounded-xl",
                    "border-2",
                    "transition-all duration-300",
                    "focus:outline-none",
                    "resize-none",
                    isDark 
                      ? "bg-slate-800 border-slate-700 text-slate-100 placeholder-slate-500 hover:border-slate-600 focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10" 
                      : "bg-white border-slate-200 text-slate-900 placeholder-slate-400 hover:border-slate-300 focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10"
                  )}
                />
                <p className={cn(
                  "text-xs mt-1.5",
                  themeClasses.text.muted
                )}>
                  We'll never share your personal information
                </p>
              </div>
              <Button 
                type="submit" 
                className="w-full group"
                variant="primary"
                size="lg"
              >
                Send Message
                <span className="inline-block transition-transform group-hover:translate-x-1 ml-2">
                  →
                </span>
              </Button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  )
}