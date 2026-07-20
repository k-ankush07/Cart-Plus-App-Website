import React from 'react'
import Container from '../../components/Container'
import Button from '../../components/Button'

const steps = [
    {
        id: 1,
        title: 'Customize Your Cart',
        description:
            'Build a branded cart experience with rewards, progress bars, and checkout features that fit your store.',
    },
    {
        id: 2,
        title: 'Add Smart Upsells to Your Cart',
        description:
            'Show personalized upsells, bundles, and product recommendations right in the cart to help increase order value.',
    },
    {
        id: 3,
        title: 'Increase Revenue Automatically',
        description:
            'Drive more conversions with a faster, optimized checkout experience that helps turn more carts into completed purchases.',
    },
];

export default function CustomizeCart() {
    return (
        <section className='relative'>
            <div className='absolute left-0 top-0 z-0 hidden lg:block'>
                <img src="https://cartplus.io/cartplus-img/Subtract (3).svg" alt="cart plus" className='w-full' />
            </div>
            <Container className='py-[40px] max-[540px]:py-[25px] relative z-10'>
                <div className='grid grid-cols-1 md:grid-cols-2 gap-[20px] md:gap-[80px] items-center px-[0] '>
                    <div className='w-full'>
                        <img
                            src='https://cartplus.io/cartplus-img/Group 1707480348.svg'
                            alt='HubCart'
                            loading='lazy'
                            decoding='async'
                            className='w-full h-auto'
                        />
                    </div>
                    <div>
                        <h2 className='font-bold max-[540px]:text-[35px] text-[45px] lg:text-[50px] leading-[45px] lg:leading-[60px] max-[540px]:mb-[10px] mb-[20px]'>How It Works</h2>
                        {steps.map((step) => (
                            <div key={step.id} className=' max-[540px]:mb-[10px] mb-[20px]'>
                                <p className='text-[24px] leading-[30px] font-bold mb-[15px]'>{step.title}</p>
                                <p className=' max-[540px]:text-[14px] text-[16px] max-[540px]:leading-[20px] leading-[23px]'>{step.description}</p>
                            </div>
                        ))}
                        <div>
                            <Button icon="https://cartplus.io/cartplus-img/buttonIcon.png">Start Free Trial</Button>
                        </div>
                    </div>
                </div>
            </Container>
           
        </section>
    )
}