import React from 'react'
import Container from '../../components/Container'

export default function ContactHeading() {
    return (
        <section >
            <Container className='relative z-10 py-[40px] max-[540px]:py-[25px]'>
                <div className='text-center max-[540px]:mb-[10px] mb-[20px]'>
                    <h2 className='font-bold max-[540px]:text-[35px] text-[45px] lg:text-[50px] leading-[45px] lg:leading-[60px] mb-[10px]'>
                        We’d Love to Hear From You
                    </h2>
                    <p className='max-[540px]:text-[16px] text-[18px] max-[540px]:leading-[22px] leading-[28px] mx-auto max-w-[950px]'>
                        Have questions about HubCart or need help optimizing your Shopify cart experience? Our team is here to help you increase conversions, boost average order value, and create a smoother checkout journey for your customers.
                        Tell us a little about your store and goals, and we’ll get back to you as soon as possible.
                    </p>
                </div>
            </Container>
            <div className='absolute z-0 top-0 right-0 hidden xl:block'>
                <img src="https://hubsyntax.com/cart-images/contactbg.svg" alt="" loading="lazy" decoding="async" />
            </div>
        </section>
    )
}
