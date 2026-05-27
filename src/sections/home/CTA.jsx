import React from 'react'
import Container from '../../components/Container'
import Button from '../../components/Button'

export default function CTA() {
  return (
    <section>
      <Container className="py-20">
        <div
          className="relative overflow-hidden rounded-[15px] px-8 py-[80px] text-center text-white"
          style={{
            background: '#512B6C'
          }}
        >
          <h2 className='font-bold text-[55px] leading-[60px] mb-[20px] text-center'>
            Turn More Carts Into More Revenue
          </h2>
          <p className="mx-auto text-[18px] leading-[28px] max-w-[890px]">
            Boost conversions, increase average order value, and create seamless
            shopping experiences with smart cart upsells, rewards, and checkout
            optimization built for modern Shopify brands.
          </p>
          <div className="mt-[20px] flex items-center justify-center gap-4">
            <Button icon="https://hubsyntax.com/cart-images/buttonIcon.png">Start Free Trial</Button>
            <Button icon="https://hubsyntax.com/cart-images/aarowCart.png" variant="ghost" className="text-white hover:bg-white/10">
              Book a Demo
            </Button>
          </div>
        </div>
      </Container>
    </section>
  )
}
