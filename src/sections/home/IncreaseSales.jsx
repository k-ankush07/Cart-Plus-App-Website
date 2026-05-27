import React from 'react'
import Container from '../../components/Container'
import Button from '../../components/Button'

export default function IncreaseSales() {
  return (
    <section className='relative'>
      <Container className='py-[40px] relative z-10'>
        <div className='grid grid-cols-2 items-center'>
          <div className='flex flex-col relative z-10'>
            <h1 className='font-semibold text-[65px] leading-[70px] max-w-[660px]'>
              Increase Your Sales with Smart Checkout & Upsell Tools
            </h1>
            <p className='text-[18px] max-w-[600px] py-[20px]'>
              Boost conversions and average order value with a high-converting cart drawer built for modern ecommerce brands.
            </p>
            <div>
              <Button icon="https://hubsyntax.com/cart-images/buttonIcon.png">Try Demo</Button>
            </div>
          </div>
          <div className='w-full '>
            <img
              src="https://hubsyntax.com/cart-images/your-cart-home.png"
              alt="HubCart"
              className='w-full relative z-20'
            />
          </div>
        </div>
      </Container>
      <div className='absolute right-0 top-0'>
        <img src="https://hubsyntax.com/cart-images/Mask group (111).svg" alt="" />
      </div>
    </section>
  );
} 