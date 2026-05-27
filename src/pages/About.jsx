import React from 'react'
import Container from '../components/Container'
import CTA from '../sections/home/CTA'

export default function About() {
  return (
    <div>
      <section className="bg-white">
        <Container className="py-20">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="font-heading text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
              About HubCart
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              We help modern Shopify brands turn more carts into more revenue
              with smart upsells, rewards, and a checkout experience built to
              convert.
            </p>
          </div>
        </Container>
      </section>
      <CTA />
    </div>
  )
}
