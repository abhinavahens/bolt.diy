'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Card, CardContent } from '@/components/ui/card'
import { ChevronLeft, ChevronRight } from 'lucide-react'

export default function TestimonialsSection() {
  const testimonials = [
    {
      name: 'Alice Johnson',
      avatar: '/placeholder.svg?height=40&width=40',
      content: 'I love the quality of products from ABHINAVGOPI. The customer service is exceptional!',
    },
    {
      name: 'Bob Smith',
      avatar: '/placeholder.svg?height=40&width=40',
      content: 'Fast shipping and great prices. I\'ll definitely be a returning customer to ABHINAVGOPI.',
    },
    {
      name: 'Carol Davis',
      avatar: '/placeholder.svg?height=40&width=40',
      content: 'The eco-friendly options at ABHINAVGOPI are fantastic. It feels good to shop responsibly.',
    },
  ]

  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [])

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length)
  }

  return (
    <section className="py-16 bg-gray-100">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-3xl font-bold text-center mb-12"
        >
          What Our Customers Say
        </motion.h2>
        <div className="relative max-w-3xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.5 }}
            >
              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <Avatar className="h-10 w-10 mr-4">
                      <AvatarImage src={testimonials[currentIndex].avatar} alt={testimonials[currentIndex].name} />
                      <AvatarFallback>{testimonials[currentIndex].name.charAt(0)}</AvatarFallback>
                    </Avatar>
                    <div>
                      <p className="font-semibold">{testimonials[currentIndex].name}</p>
                    </div>
                  </div>
                  <p className="text-gray-600">{testimonials[currentIndex].content}</p>
                </CardContent>
              </Card>
            </motion.div>
          </AnimatePresence>
          <button
            onClick={prevTestimonial}
            className="absolute top-1/2 -left-12 transform -translate-y-1/2 bg-white rounded-full p-2 shadow-md"
          >
            <ChevronLeft className="h-6 w-6" />
          </button>
          <button
            onClick={nextTestimonial}
            className="absolute top-1/2 -right-12 transform -translate-y-1/2 bg-white rounded-full p-2 shadow-md"
          >
            <ChevronRight className="h-6 w-6" />
          </button>
        </div>
      </div>
    </section>
  )
}

