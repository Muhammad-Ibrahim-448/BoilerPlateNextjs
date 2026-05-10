import { ImageWithText } from '@/components/media/ImageWithText'

export const AboutSection = () => {
  return (
    <section className="py-24 bg-slate-50 dark:bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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