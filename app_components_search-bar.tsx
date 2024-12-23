'use client'

import { useState, useEffect } from 'react'
import { Search, Mic } from 'lucide-react'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { 
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from '@/components/ui/command'

type Product = {
  id: number
  name: string
  category: string
}

type SearchBarProps = {
  products: Product[]
  onSearch: (query: string) => void
}

export default function SearchBar({ products, onSearch }: SearchBarProps) {
  const [query, setQuery] = useState('')
  const [suggestions, setSuggestions] = useState<Product[]>([])
  const [isListening, setIsListening] = useState(false)

  useEffect(() => {
    if (query) {
      const filtered = products.filter(product => 
        product.name.toLowerCase().includes(query.toLowerCase()) ||
        product.category.toLowerCase().includes(query.toLowerCase())
      ).slice(0, 5)
      setSuggestions(filtered)
    } else {
      setSuggestions([])
    }
  }, [query, products])

  const handleSearch = () => {
    onSearch(query)
  }

  const handleVoiceSearch = () => {
    if ('webkitSpeechRecognition' in window) {
      const recognition = new (window as any).webkitSpeechRecognition()
      recognition.onstart = () => setIsListening(true)
      recognition.onend = () => setIsListening(false)
      recognition.onresult = (event: any) => {
        const transcript = event.results[0][0].transcript
        setQuery(transcript)
        onSearch(transcript)
      }
      recognition.start()
    } else {
      alert('Voice search is not supported in your browser.')
    }
  }

  return (
    <div className="w-full max-w-3xl mx-auto">
      <h2 className="text-2xl font-bold mb-4 text-center">Discover Your Next Favorite Find</h2>
      <p className="text-center mb-4">Dive into our curated selection! What are you looking for today?</p>
      <div className="flex items-stretch">
        <Command className="rounded-l-lg border shadow-md flex-grow">
          <CommandInput 
            placeholder="🔍 Type here to uncover the magic..." 
            value={query}
            onValueChange={setQuery}
          />
          <CommandList>
            <CommandEmpty>No results found.</CommandEmpty>
            <CommandGroup heading="Suggestions">
              {suggestions.map((product) => (
                <CommandItem 
                  key={product.id}
                  onSelect={() => {
                    setQuery(product.name)
                    onSearch(product.name)
                  }}
                >
                  {product.name} - {product.category}
                </CommandItem>
              ))}
            </CommandGroup>
          </CommandList>
        </Command>
        <Button 
          onClick={handleSearch}
          className="rounded-none border-y border-r"
          size="icon"
        >
          <Search className="h-5 w-5" />
          <span className="sr-only">Search</span>
        </Button>
        <Button 
          onClick={handleVoiceSearch} 
          variant="outline"
          className="rounded-r-lg"
          size="icon"
        >
          <Mic className={`h-5 w-5 ${isListening ? 'text-red-500' : ''}`} />
          <span className="sr-only">Voice search</span>
        </Button>
      </div>
    </div>
  )
}

