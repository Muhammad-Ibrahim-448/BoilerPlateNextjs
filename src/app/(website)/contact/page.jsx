import { ContactSection } from '@/components/sections/ContactSection'

export default function ContactPage() {
  return (
    <>
      <div className="pt-32 pb-16 bg-slate-50 dark:bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white text-center mb-4">
            Contact Us
          </h1>
          <p className="text-xl text-slate-600 dark:text-slate-400 text-center max-w-2xl mx-auto">
            We'd love to hear from you. Send us a message and we'll respond as soon as possible.
          </p>
        </div>
      </div>
      <ContactSection />
    </>
  )
}