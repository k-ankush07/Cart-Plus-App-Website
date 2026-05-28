import React from 'react'
import Container from '../../components/Container'

const stats = [
    {
        img: 'https://hubsyntax.com/cart-images/Group%201707480060.svg',
        value: '+18%',
        label: 'Average Order Value',
    },
    {
        img: 'https://hubsyntax.com/cart-images/Group 1707480061.svg',
        value: '+22%',
        label: 'Cart Conversion Rate',
    },
    {
        img: 'https://hubsyntax.com/cart-images/Group 1707480062.svg',
        value: '50k+',
        label: 'Upsells Generated',
    },
    {
        img: 'https://hubsyntax.com/cart-images/Group 1707480063.svg',
        value: '99.9%',
        label: 'Uptime',
    },
]

export default function CartRevenue() {
    return (
        <section className="relative"
        >
            <Container className="py-[40px] max-[540px]:py-[25px] relative z-10">
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-[40px]">
                    {stats.map((stat) => (
                        <div
                            key={stat.label}
                            className="flex items-center gap-4 px-5 py-5 rounded-[12px] bg-[#512B6C]"
                        >
                            <div
                                className="flex-shrink-0 w-[79px] h-[79px] bg-white rounded-full flex items-center justify-center"
                            >
                                <img
                                    src={stat.img}
                                    alt={stat.label}
                                />
                            </div>

                            {/* Text */}
                            <div>
                                <p className="text-white font-bold text-[40px] leading-tight">
                                    {stat.value}
                                </p>
                                <p
                                    className="text-[18px] leading-snug mt-0.5"
                                >
                                    {stat.label}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </Container>
        </section>
    )
}