import React from 'react'
import Container from './Container'
import Button from './Button'

export default function BannerSection({ heading, paragraph, buttonText, img }) {
    return (
        <section className='relative'>
            <div className='absolute hidden lg:block'>
                <img src="https://cartplus.io/cartplus-img/Group 1707480310.svg" alt="" loading="lazy" decoding="async" />
            </div>
            <Container className='py-[40px] max-[540px]:py-[25px] relative z-10'>
                <div className='grid grid-cols-1 md:grid-cols-2 items-center gap-[20px]'>
                    <div className='flex flex-col relative z-10'>
                        <h1 className='font-semibold text-[50px] lg:text-[65px] max-[540px]:text-[40px] max-[540px]:leading-[45px] leading-[55px] lg:leading-[70px] max-w-none md:max-w-[660px]'>
                            {heading}
                        </h1>
                        <p className='text-[18px] max-[540px]:text-[16px] max-w-none md:max-w-[600px] py-[20px] max-[540px]:py-[16px]'>
                            {paragraph}
                        </p>
                        <div>
                            <Button icon="https://cartplus.io/cartplus-img/Vector (6).png">{buttonText}</Button>
                        </div>
                    </div>
                    <div className='w-full'>
                        <img
                            src={img}
                            alt="HubCart"
                            fetchPriority="high"
                            loading="eager"
                            decoding="async"
                            className='w-full relative z-20'
                        />
                    </div>
                </div>
            </Container>
        </section>
    )
}
