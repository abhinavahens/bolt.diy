'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import Header from './header'
import Footer from './footer'
import SearchBar from './search-bar'

type LayoutProps = {
  children: React.ReactNode
}

export default function Layout({ children }: LayoutProps) {
  const router = useRouter()
  const [searchQuery, setSearchQuery] = useState('')

  // For demonstration purposes, we'll use a small set of sample products
  // In a real application, you'd fetch this data from an API or database
  const sampleProducts = [
    { id: 1, name: "Smartphone", category: "Electronics" },
    { id: 2, name: "T-shirt", category: "Fashion" },
    { id: 3, name: "Coffee Maker", category: "Home Appliances" },
    { id: 4, name: "Running Shoes", category: "Sports" },
    { id: 5, name: "Laptop", category: "Electronics" },
  ]

  const handleSearch = (query: string) => {
    setSearchQuery(query)
    router.push(`/shop?search=${encodeURIComponent(query)}`)
  }

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <div className="container mx-auto px-4 py-8">
        <SearchBar products={sampleProducts} onSearch={handleSearch} />
      </div>
      <main className="flex-grow container mx-auto px-4 py-8">
        {children}
      </main>
      <Footer />
    </div>
  )
}

