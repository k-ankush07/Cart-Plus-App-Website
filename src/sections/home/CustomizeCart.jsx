import React from 'react'
import Container from '../../components/Container'
import Button from '../../components/Button'

const steps = [
    {
        id: 1,
        title: 'Customize Your Cart Drawer',
        description:
            'Design a branded cart experience with rewards, progress bars, and smart checkout features.',
    },
    {
        id: 2,
        title: 'Add Smart Upsells',
        description:
            'Show personalized upsells, bundles, and product recommendations directly inside the cart drawer.',
    },
    {
        id: 3,
        title: 'Increase Revenue Automatically',
        description:
            'Boost conversions and average order value with a faster, optimized checkout experience.',
    },
]

export default function CustomizeCart() {
    return (
        <section className='relative'>
            <Container className='py-[40px] max-[540px]:py-[25px] relative z-10'>
                <div className='grid grid-cols-1 md:grid-cols-2 gap-[20px] md:gap-[60px] items-center px-[0] md:px-[20px] lg:px-[90px]'>
                    <div className='w-full max-[390px]:max-w-[100%] max-[430px]:max-w-[90%] max-[540px]:max-w-[80%] max-w-[60%] mx-auto md:max-w-[80%]'>
                        <img
                            src='https://hubsyntax.com/cart-images/custmiseCart.png'
                            alt='HubCart'
                            loading='lazy'
                            decoding='async'
                            className='w-full h-auto'
                        />
                    </div>
                    <div>
                        <h2 className='font-bold max-[540px]:text-[35px] text-[45px] lg:text-[50px] leading-[45px] lg:leading-[60px] max-[540px]:mb-[10px] mb-[30px]'>How It Works</h2>
                        {steps.map((step) => (
                            <div key={step.id} className=' max-[540px]:mb-[10px] mb-[20px]'>
                                <p className='text-[24px] leading-[30px] font-bold mb-[15px]'>{step.title}</p>
                                <p className=' max-[540px]:text-[14px] text-[16px] max-[540px]:leading-[20px] leading-[23px]'>{step.description}</p>
                            </div>
                        ))}
                        <div>
                            <Button icon="https://hubsyntax.com/cart-images/buttonIcon.png">Start Free Trial</Button>
                        </div>
                    </div>
                </div>
            </Container>
            <div className='absolute right-0 top-70 z-0 hidden lg:block'>
                <img src="https://hubsyntax.com/cart-images/Mask group (12).svg" alt="" loading="lazy" decoding="async" />
            </div>
        </section>
    )
}