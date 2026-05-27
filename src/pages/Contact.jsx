import React from 'react'
import Container from '../components/Container'
import Button from '../components/Button'

export default function Contact() {
  return (
    <section className="bg-white">
      <Container className="py-20">
        <div className="mx-auto max-w-2xl">
          <div className="text-center">
            <h1 className="font-heading text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
              Get in touch
            </h1>
            <p className="mt-4 text-base text-gray-600">
              Have a question about HubCart? Send us a message.
            </p>
          </div>

          <form className="mt-12 space-y-5">
            <div>
              <label className="block text-sm font-medium text-gray-700">Name</label>
              <input
                type="text"
                className="mt-2 block w-full rounded-lg border border-gray-300 px-4 py-3 text-sm focus:border-gray-900 focus:outline-none"
                placeholder="Your name"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Email</label>
              <input
                type="email"
                className="mt-2 block w-full rounded-lg border border-gray-300 px-4 py-3 text-sm focus:border-gray-900 focus:outline-none"
                placeholder="you@example.com"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Message</label>
              <textarea
                rows={5}
                className="mt-2 block w-full rounded-lg border border-gray-300 px-4 py-3 text-sm focus:border-gray-900 focus:outline-none"
                placeholder="How can we help?"
              />
            </div>
            <Button variant="primary">Send message</Button>
          </form>
        </div>
      </Container>
    </section>
  )
}
