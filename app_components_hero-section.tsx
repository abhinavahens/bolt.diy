'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { Button } from '@/components/ui/button'

export default function HeroSection() {
  return (
    <section className="bg-gradient-to-r from-blue-500 to-purple-600 text-white py-20 overflow-hidden">
      <div className="container mx-auto px-4 text-center relative">
        <motion.h1
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-4xl md:text-6xl font-bold mb-6"
        >
          Welcome to ABHINAVGOPI
        </motion.h1>
        <motion.p
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-xl md:text-2xl mb-8"
        >
          Your premier destination for quality products and exceptional service.
        </motion.p>
        <motion.div
          initial={{ scale: 0.5, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <Link href="/shop">
            <Button size="lg" variant="secondary">
              Start Shopping
            </Button>
          </Link>
        </motion.div>
        <motion.div
          className="absolute -top-16 -left-16 w-32 h-32 bg-yellow-300 rounded-full mix-blend-multiply filter blur-xl opacity-70"
          animate={{
            scale: [1, 2, 2, 1, 1],
            rotate: [0, 0, 270, 270, 0],
            borderRadius: ["20%", "20%", "50%", "50%", "20%"],
          }}
          transition={{
            duration: 12,
            ease: "easeInOut",
            times: [0, 0.2, 0.5, 0.8, 1],
            repeat: Infinity,
            repeatDelay: 1
          }}
        />
        <motion.div
          className="absolute -bottom-8 -right-8 w-24 h-24 bg-pink-300 rounded-full mix-blend-multiply filter blur-xl opacity-70"
          animate={{
            scale: [1, 1.5, 1.5, 1, 1],
            rotate: [0, 270, 270, 0, 0],
            borderRadius: ["20%", "50%", "50%", "20%", "20%"],
          }}
          transition={{
            duration: 12,
            ease: "easeInOut",
            times: [0, 0.2, 0.5, 0.8, 1],
            repeat: Infinity,
            repeatDelay: 1
          }}
        />
      </div>
    </section>
  )
}

