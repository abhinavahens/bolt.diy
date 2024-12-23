import { Search, ShoppingCart, CreditCard, Package } from 'lucide-react'

export default function HowItWorksSection() {
  const steps = [
    {
      icon: <Search className="h-10 w-10 text-primary" />,
      title: 'Browse Our Catalog',
      description: 'Explore our extensive range of products across various categories.',
    },
    {
      icon: <ShoppingCart className="h-10 w-10 text-primary" />,
      title: 'Add to Cart',
      description: 'Select your desired items and add them to your cart.',
    },
    {
      icon: <CreditCard className="h-10 w-10 text-primary" />,
      title: 'Secure Checkout',
      description: 'Complete your purchase through our secure payment gateway.',
    },
    {
      icon: <Package className="h-10 w-10 text-primary" />,
      title: 'Fast Shipping',
      description: 'Receive your order quickly and safely.',
    },
  ]

  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">How It Works</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="text-center">
              <div className="mb-4 flex justify-center">{step.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
              <p className="text-gray-600">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

