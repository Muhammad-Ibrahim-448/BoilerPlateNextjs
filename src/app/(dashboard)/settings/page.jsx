'use client'

import { useState } from 'react'
import { Button } from '@/components/common/Button'
import { Input } from '@/components/common/Input'
import { useTheme } from '@/context/ThemeContext'
import { motion } from 'framer-motion'

export default function SettingsPage() {
  const { theme, toggleTheme } = useTheme()
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
        <h1 className="text-3xl font-bold text-slate-900 dark:text-white">Settings</h1>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2 space-y-6">
            <motion.div 
              className="bg-white dark:bg-slate-800 rounded-2xl shadow-sm border border-slate-200 dark:border-slate-700 p-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
            >
              <h2 className="text-xl font-semibold text-slate-900 dark:text-white mb-6">
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
                
                <div className="flex items-center justify-between py-4 border-t border-slate-200 dark:border-slate-700">
                  <div>
                    <h3 className="text-sm font-medium text-slate-900 dark:text-white">Email Notifications</h3>
                    <p className="text-sm text-slate-500 dark:text-slate-400">Receive email updates about your account</p>
                  </div>
                  <button
                    type="button"
                    onClick={() => setSettings({...settings, notifications: !settings.notifications})}
                    className={`relative inline-flex h-6 w-11 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none ${
                      settings.notifications ? 'bg-blue-600' : 'bg-slate-200 dark:bg-slate-700'
                    }`}
                  >
                    <span
                      className={`pointer-events-none inline-block h-5 w-5 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out ${
                        settings.notifications ? 'translate-x-5' : 'translate-x-0'
                      }`}
                    />
                  </button>
                </div>
                
                <div className="flex items-center justify-between py-4 border-t border-slate-200 dark:border-slate-700">
                  <div>
                    <h3 className="text-sm font-medium text-slate-900 dark:text-white">Newsletter</h3>
                    <p className="text-sm text-slate-500 dark:text-slate-400">Subscribe to our monthly newsletter</p>
                  </div>
                  <button
                    type="button"
                    onClick={() => setSettings({...settings, newsletter: !settings.newsletter})}
                    className={`relative inline-flex h-6 w-11 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none ${
                      settings.newsletter ? 'bg-blue-600' : 'bg-slate-200 dark:bg-slate-700'
                    }`}
                  >
                    <span
                      className={`pointer-events-none inline-block h-5 w-5 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out ${
                        settings.newsletter ? 'translate-x-5' : 'translate-x-0'
                      }`}
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
              className="bg-white dark:bg-slate-800 rounded-2xl shadow-sm border border-slate-200 dark:border-slate-700 p-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
            >
              <h2 className="text-xl font-semibold text-slate-900 dark:text-white mb-6">
                Appearance
              </h2>
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-sm font-medium text-slate-900 dark:text-white">Dark Mode</h3>
                  <p className="text-sm text-slate-500 dark:text-slate-400">Toggle dark mode on/off</p>
                </div>
                <button
                  onClick={toggleTheme}
                  className={`relative inline-flex h-6 w-11 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none ${
                    theme === 'dark' ? 'bg-blue-600' : 'bg-slate-200'
                  }`}
                >
                  <span
                    className={`pointer-events-none inline-block h-5 w-5 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out ${
                      theme === 'dark' ? 'translate-x-5' : 'translate-x-0'
                    }`}
                  />
                </button>
              </div>
            </motion.div>
            
            <motion.div 
              className="bg-white dark:bg-slate-800 rounded-2xl shadow-sm border border-slate-200 dark:border-slate-700 p-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              <h2 className="text-xl font-semibold text-slate-900 dark:text-white mb-6">
                Danger Zone
              </h2>
              <p className="text-sm text-slate-500 dark:text-slate-400 mb-4">
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