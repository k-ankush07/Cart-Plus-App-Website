import React, { useState } from 'react'
import Container from '../../components/Container'

const features = [
    {
        id: 1,
        title: 'Add to Unlock',
        description:
            'Unlock exclusive savings automatically as customers add more products to their cart. Increase average order value with dynamic reward milestones and smart cart incentives.',
        defaultOpen: true,
    },
    {
        id: 2,
        title: 'Buy More Save More',
        description:
            'Unlock exclusive savings automatically as customers add more products to their cart. Increase average order value with dynamic reward milestones and smart cart incentives.',
        defaultOpen: false,
    },
    {
        id: 3,
        title: 'One Click Upsell',
        description:
            'Unlock exclusive savings automatically as customers add more products to their cart. Increase average order value with dynamic reward milestones and smart cart incentives.',
        defaultOpen: false,
    },
    {
        id: 4,
        title: 'Frequently Bought Together',
        description:
            'Unlock exclusive savings automatically as customers add more products to their cart. Increase average order value with dynamic reward milestones and smart cart incentives.',
        defaultOpen: false,
    },
    {
        id: 5,
        title: 'Cart Designer',
        description:
            'Unlock exclusive savings automatically as customers add more products to their cart. Increase average order value with dynamic reward milestones and smart cart incentives.',
        defaultOpen: false,
    },
    {
        id: 6,
        title: 'Powerful Analytics',
        description:
            'Unlock exclusive savings automatically as customers add more products to their cart. Increase average order value with dynamic reward milestones and smart cart incentives.',
        defaultOpen: false,
    },
]

export default function HubCartFeatures() {
    const [openId, setOpenId] = useState(1)

    const handleToggle = (id) => {
        setOpenId(openId === id ? null : id)
    }

    return (
        <section>
            <Container>
                <div className='grid grid-cols-2 gap-[80px] items-center'>

                    {/* Left - Accordion */}
                    <div>
                        <h2 className='font-bold text-[55px] leading-[60px] mb-[30px]'>HubCart Features</h2>
                        <div className='flex flex-col'>
                            {features.map((feature) => (
                                <div key={feature.id} className=' py-[15px]'>
                                    <button
                                        onClick={() => handleToggle(feature.id)}
                                        className='w-full flex items-center justify-between text-left cursor-pointer'
                                    >
                                        <span className='text-[24px] leading-[30px] font-semibold'>{feature.title}</span>
                                        <span className='flex items-center justify-center'>
                                            <img
                                                src='https://hubsyntax.com/cart-images/DropDown.png'
                                                alt='toggle'
                                                className={`w-[15px] h-[8px] transition-transform duration-300 ${openId === feature.id ? 'rotate-180' : 'rotate-0'
                                                    }`}
                                            />
                                        </span>
                                    </button>
                                    {openId === feature.id && (
                                        <p className='text-[16px] leading-[26px] text-white/70 pt-[12px]'>
                                            {feature.description}
                                        </p>
                                    )}
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Right - Image */}
                    <div className='flex justify-end items-start'>
                        <img
                            src='https://hubsyntax.com/cart-images/CartFeaturess.png'
                            alt='HubCart Features'
                            className='w-[80%] h-auto ml-auto'
                        />
                    </div>

                </div>
            </Container>
        </section>
    )
}