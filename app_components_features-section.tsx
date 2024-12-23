'use client'

import { motion } from 'framer-motion'
import { ShoppingBag, Truck, Headphones, Shield } from 'lucide-react'

export default function FeaturesSection() {
  const features = [
    {
      icon: <ShoppingBag className="h-10 w-10 text-primary" />,
      title: 'Curated Selection',
      description: 'Handpicked products for quality and style.',
    },
    {
      icon: <Truck className="h-10 w-10 text-primary" />,
      title: 'Fast Shipping',
      description: 'Quick and reliable delivery options.',
    },
    {
      icon: <Headphones className="h-10 w-10 text-primary" />,
      title: 'Customer Support',
      description: 'Dedicated team ready to assist you.',
    },
    {
      icon: <Shield className="h-10 w-10 text-primary" />,
      title: 'Secure Shopping',
      description: 'Your privacy and security are our priorities.',
    },
  ]

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-3xl font-bold text-center mb-12"
        >
          What We Offer
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white p-6 rounded-lg shadow-md text-center"
            >
              <motion.div
                className="mb-4 flex justify-center"
                whileHover={{ scale: 1.1 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                {feature.icon}
              </motion.div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

