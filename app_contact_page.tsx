import Layout from '../components/layout'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'

export default function ContactPage() {
  return (
    <Layout>
      <h1 className="text-3xl font-bold mb-4">Contact Us</h1>
      <p className="mb-4">
        We'd love to hear from you! Please fill out the form below and we'll get back to you as soon as possible.
      </p>
      <form className="space-y-4">
        <div>
          <label htmlFor="name" className="block mb-1">Name</label>
          <Input id="name" placeholder="Your name" />
        </div>
        <div>
          <label htmlFor="email" className="block mb-1">Email</label>
          <Input id="email" type="email" placeholder="Your email" />
        </div>
        <div>
          <label htmlFor="message" className="block mb-1">Message</label>
          <Textarea id="message" placeholder="Your message" rows={4} />
        </div>
        <Button type="submit">Send Message</Button>
      </form>
    </Layout>
  )
}

