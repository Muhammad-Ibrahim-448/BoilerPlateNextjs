import { AboutSection } from '@/components/sections/AboutSection'
import { ImageWithText } from '@/components/media/ImageWithText'
import { CTASection } from '@/components/sections/CTASection'

export default function AboutPage() {
  return (
    <>
       <div className="pt-32 pb-16 bg-slate-50 dark:bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white text-center mb-4">
            About Us
          </h1>
          <p className="text-xl text-slate-600 dark:text-slate-400 text-center max-w-2xl mx-auto">
            We're on a mission to help businesses grow with powerful, easy-to-use tools.
          </p>
        </div>
      </div>
      
      <AboutSection />
      
      <section className="py-24 bg-white dark:bg-slate-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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