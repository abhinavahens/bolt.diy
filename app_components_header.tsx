import Link from 'next/link'
import { Button } from '@/components/ui/button'
import LoginForm from './login-form'

export default function Header() {
  return (
    <header className="bg-white shadow-sm">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold text-primary">
          ABHINAVGOPI
        </Link>
        <nav className="hidden md:flex space-x-4">
          <Link href="/shop" className="text-gray-600 hover:text-primary">
            Shop
          </Link>
          <Link href="/about" className="text-gray-600 hover:text-primary">
            About
          </Link>
          <Link href="/contact" className="text-gray-600 hover:text-primary">
            Contact
          </Link>
        </nav>
        <div className="flex items-center space-x-4">
          <LoginForm />
          <Button>Sign Up</Button>
        </div>
      </div>
    </header>
  )
}

