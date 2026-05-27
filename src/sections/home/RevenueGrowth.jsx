import React from 'react'
import Container from '../../components/Container'

const stats = [
    {
        id: 1,
        image: 'https://hubsyntax.com/cart-images/Cartbrand.png',
        value: '90,000+',
        label: 'Brands Using HubCart',
    },
    {
        id: 2,
        image: 'https://hubsyntax.com/cart-images/CartRevenue.png',
        value: '$1.4B+',
        label: 'Additional Revenue Generated',
    },
    {
        id: 3,
        image: 'https://hubsyntax.com/cart-images/CartReview.png',
        value: '4,000+',
        label: '5-Star Reviews',
    },
]

export default function RevenueGrowth() {
    return (
        <section>
            <Container className='py-[80px]'>
                <h2 className='font-bold text-[50px] leading-[60px] mb-[20px] text-center'>
                    Scalable Revenue Growth
                </h2>
                <p className='text-[18px] leading-[28px] text-center max-w-[930px] m-auto mb-[30px]'>
                    Join thousands of Shopify brands using HubCart to increase conversions, grow average order
                    value, and drive more revenue automatically.
                </p>
                <div className='p-[80px] bg-[#512B6C] rounded-[15px] flex items-center justify-center gap-[150px]'>
                    {stats.map((stat) => (
                        <div key={stat.id} className='flex flex-col items-center'>
                            <div className='h-[100px] w-[100px] rounded-[50%] bg-white p-[20px] flex items-center justify-center'>
                                <img src={stat.image} alt='HubCart' />
                            </div>
                            <p className='text-[55px] leading-[55px] font-[500] my-[15px]'>{stat.value}</p>
                            <p className='text-[16px] leading-[16px]'>{stat.label}</p>
                        </div>
                    ))}
                </div>
            </Container>
        </section>
    )
}