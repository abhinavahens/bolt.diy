import Layout from './components/layout'
import HeroSection from './components/hero-section'
import FeaturesSection from './components/features-section'
import HowItWorksSection from './components/how-it-works-section'
import WhyChooseUsSection from './components/why-choose-us-section'
import TestimonialsSection from './components/testimonials-section'
import NewsletterSection from './components/newsletter-section'

export default function HomePage() {
  return (
    <Layout>
      <HeroSection />
      <FeaturesSection />
      <HowItWorksSection />
      <WhyChooseUsSection />
      <TestimonialsSection />
      <NewsletterSection />
    </Layout>
  )
}

