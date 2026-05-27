import React from 'react'
import Container from '../../components/Container'
import Button from '../../components/Button'

export default function CTA() {
  return (
    <section className='relative z-20'>
      <Container className='py-[40px] max-[540px]:py-[25px]'>
        <div
          className="relative overflow-hidden rounded-[15px] max-[390px]:px-4 px-8 max-[390px]:py-4 py-[30px] md:py-[80px] text-center text-white"
          style={{
            background: '#512B6C'
          }}
        >
          <h2 className='font-bold font-bold max-[540px]:text-[35px] text-[45px] lg:text-[55px] leading-[45px] lg:leading-[60px] mb-[20px] text-center'>
            Turn More Carts Into More Revenue
          </h2>
          <p className="mx-auto max-[540px]:text-[16px] text-[18px] max-[540px]:leading-[22px] leading-[28px] max-w-[890px]">
            Boost conversions, increase average order value, and create seamless
            shopping experiences with smart cart upsells, rewards, and checkout
            optimization built for modern Shopify brands.
          </p>
          <div className="mt-[20px] max-[430px]:block  flex items-center justify-center gap-4">
            <Button className='max-[430px]:mb-[20px]' icon="https://hubsyntax.com/cart-images/buttonIcon.png">Start Free Trial</Button>
            <Button icon="https://hubsyntax.com/cart-images/aarowCart.png" variant="ghost" className="text-white hover:bg-white/10">
              Book a Demo
            </Button>
          </div>
        </div>
      </Container>
    </section>
  )
}
