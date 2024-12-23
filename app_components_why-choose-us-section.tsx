import { CheckCircle, Star, Lock, Leaf } from 'lucide-react'

export default function WhyChooseUsSection() {
  const reasons = [
    {
      icon: <CheckCircle className="h-10 w-10 text-primary" />,
      title: 'Quality Assurance',
      description: 'We stand by the quality of our products.',
    },
    {
      icon: <Star className="h-10 w-10 text-primary" />,
      title: 'Exclusive Offers',
      description: 'Get access to exclusive discounts and special offers.',
    },
    {
      icon: <Lock className="h-10 w-10 text-primary" />,
      title: 'Secure Shopping',
      description: 'Your privacy and security are our top priorities.',
    },
    {
      icon: <Leaf className="h-10 w-10 text-primary" />,
      title: 'Eco-Friendly Options',
      description: 'Explore our range of sustainable products.',
    },
  ]

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Why Choose Us</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {reasons.map((reason, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="mb-4 flex justify-center">{reason.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{reason.title}</h3>
              <p className="text-gray-600">{reason.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

