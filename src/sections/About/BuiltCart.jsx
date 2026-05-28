import React from 'react'
import Container from '../../components/Container'
import Button from '../../components/Button'

export default function BuiltCart() {
    return (
        <section className='relative'>
            <Container className='py-[40px] max-[540px]:py-[25px] relative z-10'>
                <div className='grid grid-cols-1 md:grid-cols-2 items-center gap-[20px]'>
                    <div className='flex flex-col relative z-10'>
                        <h1 className='font-semibold text-[50px] lg:text-[65px] max-[540px]:text-[40px] max-[540px]:leading-[45px] leading-[55px] lg:leading-[70px] max-w-none md:max-w-[660px]'>
                            Increase Your Sales with Smart Checkout & Upsell Tools
                        </h1>
                        <p className='text-[18px] max-[540px]:text-[16px] max-w-none md:max-w-[600px] py-[20px] max-[540px]:py-[16px]'>
                            Boost conversions and average order value with a high-converting cart drawer built for modern ecommerce brands.
                        </p>
                        <div>
                            <Button icon="https://hubsyntax.com/cart-images/buttonIcon.png">Try Demo</Button>
                        </div>
                    </div>
                    <div className='w-full'>
                        <img
                            src="https://hubsyntax.com/cart-images/aboutBanner.svg"
                            alt="HubCart"
                            fetchPriority="high"
                            loading="eager"
                            decoding="async"
                            className='w-full relative z-20'
                        />
                    </div>
                </div>
            </Container>
            <div className='absolute right-0 top-0 hidden lg:block'>
                <img src="https://hubsyntax.com/cart-images/Mask group (111).svg" alt="" loading="lazy" decoding="async" />
            </div>
        </section>
    )
}
