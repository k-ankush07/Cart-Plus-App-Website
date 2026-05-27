import React from 'react'
import Container from '../../components/Container'
import Button from '../../components/Button'

const cards = [
    {
        id: 1,
        image: 'https://hubsyntax.com/cart-images/CartCheckout.png',
        title: 'Customize Your Cart Drawer',
        description:
            'Boost conversions with reward-driven carts, urgency timers, and frictionless checkout flows.',
    },
    {
        id: 2,
        image: 'https://hubsyntax.com/cart-images/CartUpsell.png',
        title: 'Personalized Upsell Offers',
        description:
            'Increase AOV with smart upsells, bundles, and timely product recommendations.',
    },
    {
        id: 3,
        image: 'https://hubsyntax.com/cart-images/CartDrawer.png',
        title: 'One Powerful Dashboard',
        description:
            'Manage cart customization, offers, discounts, and performance insights from one simple platform.',
    },
]

export default function PowerfulCart() {
    return (
        <section>
            <Container>
                <h2 className='font-bold text-[50px] leading-[60px] mb-[30px] text-center'>
                    Different Journeys. One Powerful Cart Platform.
                </h2>
                <div className='grid grid-cols-3 gap-[40px] text-[#1D1E20] text-center'>
                    {cards.map((card) => (
                        <div key={card.id} className='bg-[#FFFFFF] rounded-[15px] py-[30px] px-[35px]'>
                            <div className='py-[15px] w-[100px] m-auto mb-[20px]'>
                                <img src={card.image} alt='HubCart' />
                            </div>
                            <h3 className='text-[24px] leading-[30px] font-bold mb-[15px]'>{card.title}</h3>
                            <p className='text-[16px] leading-[23px]'>{card.description}</p>
                        </div>
                    ))}
                </div>
            </Container>
        </section>
    )
}