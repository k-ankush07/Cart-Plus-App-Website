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
            <Container className='py-[80px]'>
                <div className='grid grid-cols-2 gap-[60px] items-center px-[90px]'>
                    <div className='max-w-[80%]'>
                        <img
                            src='https://hubsyntax.com/cart-images/custmiseCart.png'
                            alt='HubCart'
                            className='w-full h-auto'
                        />
                    </div>
                    <div>
                        <h2 className='font-bold text-[50px] leading-[60px] mb-[30px]'>How It Works</h2>
                        {steps.map((step) => (
                            <div key={step.id} className='mb-[20px]'>
                                <p className='text-[24px] leading-[30px] font-bold mb-[15px]'>{step.title}</p>
                                <p className='text-[16px] leading-[23px]'>{step.description}</p>
                            </div>
                        ))}
                        <div>
                            <Button icon="https://hubsyntax.com/cart-images/buttonIcon.png">Start Free Trial</Button>
                        </div>
                    </div>
                </div>
            </Container>
            <div className='absolute right-0 top-70 z-0'>
                <img src="https://hubsyntax.com/cart-images/Mask group (12).svg" alt="" />
            </div>
        </section>
    )
}