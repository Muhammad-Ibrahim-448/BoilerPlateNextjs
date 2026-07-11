'use client'

import { useState } from 'react'
import { Button } from '@/components/common/Button'
import { Input } from '@/components/common/Input'
import { useTheme } from '@/context/ThemeContext'
import { motion } from 'framer-motion'
import { cn } from '@/lib/helpers'

export default function SettingsPage() {
  const { theme, toggleTheme } = useTheme()
  const isDark = theme === 'dark'
  const [settings, setSettings] = useState({
    companyName: 'My Company',
    email: 'admin@example.com',
    notifications: true,
    newsletter: false,
  })

  const handleSave = (e) => {
    e.preventDefault()
    console.log('Saving settings:', settings)
  }

  return (
    <div>
      <div className="space-y-6">
        <h1 className={cn(
          "text-3xl font-bold",
          isDark ? "text-white" : "text-slate-900"
        )}>
          Settings
        </h1>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2 space-y-6">
            <motion.div 
              className={cn(
                "rounded-2xl shadow-sm border p-6 theme-transition",
                isDark 
                  ? "bg-slate-900/50 border-slate-800/80 shadow-slate-950/50" 
                  : "bg-slate-50/80 border-slate-200/80 shadow-slate-200/50"
              )}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
            >
              <h2 className={cn(
                "text-xl font-semibold mb-6",
                isDark ? "text-white" : "text-slate-900"
              )}>
                General Settings
              </h2>
              <form onSubmit={handleSave} className="space-y-6">
                <Input
                  label="Company Name"
                  value={settings.companyName}
                  onChange={(e) => setSettings({...settings, companyName: e.target.value})}
                />
                <Input
                  label="Admin Email"
                  type="email"
                  value={settings.email}
                  onChange={(e) => setSettings({...settings, email: e.target.value})}
                />
                
                <div className={cn(
                  "flex items-center justify-between py-4 border-t",
                  isDark ? "border-slate-700" : "border-slate-200"
                )}>
                  <div>
                    <h3 className={cn(
                      "text-sm font-medium",
                      isDark ? "text-white" : "text-slate-900"
                    )}>
                      Email Notifications
                    </h3>
                    <p className={cn(
                      "text-sm",
                      isDark ? "text-slate-400" : "text-slate-500"
                    )}>
                      Receive email updates about your account
                    </p>
                  </div>
                  <button
                    type="button"
                    onClick={() => setSettings({...settings, notifications: !settings.notifications})}
                    className={cn(
                      "relative inline-flex h-6 w-11 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none",
                      settings.notifications ? 'bg-blue-600' : isDark ? 'bg-slate-700' : 'bg-slate-200'
                    )}
                  >
                    <span
                      className={cn(
                        "pointer-events-none inline-block h-5 w-5 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out",
                        settings.notifications ? 'translate-x-5' : 'translate-x-0'
                      )}
                    />
                  </button>
                </div>
                
                <div className={cn(
                  "flex items-center justify-between py-4 border-t",
                  isDark ? "border-slate-700" : "border-slate-200"
                )}>
                  <div>
                    <h3 className={cn(
                      "text-sm font-medium",
                      isDark ? "text-white" : "text-slate-900"
                    )}>
                      Newsletter
                    </h3>
                    <p className={cn(
                      "text-sm",
                      isDark ? "text-slate-400" : "text-slate-500"
                    )}>
                      Subscribe to our monthly newsletter
                    </p>
                  </div>
                  <button
                    type="button"
                    onClick={() => setSettings({...settings, newsletter: !settings.newsletter})}
                    className={cn(
                      "relative inline-flex h-6 w-11 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none",
                      settings.newsletter ? 'bg-blue-600' : isDark ? 'bg-slate-700' : 'bg-slate-200'
                    )}
                  >
                    <span
                      className={cn(
                        "pointer-events-none inline-block h-5 w-5 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out",
                        settings.newsletter ? 'translate-x-5' : 'translate-x-0'
                      )}
                    />
                  </button>
                </div>
                
                <div className="pt-4">
                  <Button type="submit">Save Changes</Button>
                </div>
              </form>
            </motion.div>
          </div>
          
          <div className="space-y-6">
            <motion.div 
              className={cn(
                "rounded-2xl shadow-sm border p-6 theme-transition",
                isDark 
                  ? "bg-slate-900/50 border-slate-800/80 shadow-slate-950/50" 
                  : "bg-slate-50/80 border-slate-200/80 shadow-slate-200/50"
              )}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
            >
              <h2 className={cn(
                "text-xl font-semibold mb-6",
                isDark ? "text-white" : "text-slate-900"
              )}>
                Appearance
              </h2>
              <div className="flex items-center justify-between">
                <div>
                  <h3 className={cn(
                    "text-sm font-medium",
                    isDark ? "text-white" : "text-slate-900"
                  )}>
                    Dark Mode
                  </h3>
                  <p className={cn(
                    "text-sm",
                    isDark ? "text-slate-400" : "text-slate-500"
                  )}>
                    Toggle dark mode on/off
                  </p>
                </div>
                <button
                  onClick={toggleTheme}
                  className={cn(
                    "relative inline-flex h-6 w-11 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none",
                    theme === 'dark' ? 'bg-blue-600' : isDark ? 'bg-slate-700' : 'bg-slate-200'
                  )}
                >
                  <span
                    className={cn(
                      "pointer-events-none inline-block h-5 w-5 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out",
                      theme === 'dark' ? 'translate-x-5' : 'translate-x-0'
                    )}
                  />
                </button>
              </div>
            </motion.div>
            
            <motion.div 
              className={cn(
                "rounded-2xl shadow-sm border p-6 theme-transition",
                isDark 
                  ? "bg-slate-900/50 border-slate-800/80 shadow-slate-950/50" 
                  : "bg-slate-50/80 border-slate-200/80 shadow-slate-200/50"
              )}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              <h2 className={cn(
                "text-xl font-semibold mb-4",
                isDark ? "text-white" : "text-slate-900"
              )}>
                Danger Zone
              </h2>
              <p className={cn(
                "text-sm mb-4",
                isDark ? "text-slate-400" : "text-slate-500"
              )}>
                Once you delete your account, there is no going back. Please be certain.
              </p>
              <Button variant="danger" className="w-full">
                Delete Account
              </Button>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  )
}