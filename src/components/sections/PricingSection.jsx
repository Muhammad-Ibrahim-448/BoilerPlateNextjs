"use client"

import Link from 'next/link'
import { Button } from '@/components/common/Button'
import { motion } from 'framer-motion'
import { Check } from 'lucide-react'

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

export const PricingSection = () => {
  return (
    <section className="py-24 bg-slate-50 dark:bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4">
            Simple, transparent pricing
          </h2>
          <p className="text-xl text-slate-600 dark:text-slate-400">
            Choose the plan that's right for your business
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className={`
                relative rounded-2xl shadow-xl overflow-hidden
                ${plan.popular 
                  ? 'bg-gradient-to-br from-blue-600 to-purple-600 text-white ring-4 ring-blue-500/20 scale-105' 
                  : 'bg-white dark:bg-slate-800 text-slate-900 dark:text-white border border-slate-200 dark:border-slate-700'
                }
              `}
            >
              {plan.popular && (
                <div className="absolute top-0 right-0 bg-amber-400 text-amber-900 text-xs font-bold px-4 py-1.5 rounded-bl-xl">
                  POPULAR
                </div>
              )}
              <div className="p-8">
                <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                <p className={`mb-6 ${plan.popular ? 'text-blue-100' : 'text-slate-600 dark:text-slate-400'}`}>
                  {plan.description}
                </p>
                <div className="mb-6">
                  <span className="text-4xl font-bold">${plan.price}</span>
                  <span className={`${plan.popular ? 'text-blue-200' : 'text-slate-500'}`}>/month</span>
                </div>
                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, index) => (
                    <li key={index} className="flex items-center">
                      <div className={`h-5 w-5 rounded-full flex items-center justify-center mr-3 ${plan.popular ? 'bg-white/20' : 'bg-emerald-100 dark:bg-emerald-500/10'}`}>
                        <Check className={`h-3 w-3 ${plan.popular ? 'text-white' : 'text-emerald-600 dark:text-emerald-400'}`} />
                      </div>
                      <span className={plan.popular ? 'text-blue-50' : 'text-slate-600 dark:text-slate-300'}>
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>
                <Link href="/dashboard">
                  <Button
                    variant={plan.popular ? 'secondary' : 'primary'}
                    className="w-full"
                  >
                    {plan.cta}
                  </Button>
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}