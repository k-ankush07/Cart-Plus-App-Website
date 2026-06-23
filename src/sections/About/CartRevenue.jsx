import React from 'react'
import Container from '../../components/Container'

const stats = [
    {
        img: 'https://cartplus.io/cartplus-img/Group 1707480060.svg',
        value: '+18%',
        label: 'Average Order Value',
    },
    {
        img: 'https://cartplus.io/cartplus-img/Group 1707480061.svg',
        value: '+22%',
        label: 'Cart Conversion Rate',
    },
    {
        img: 'https://cartplus.io/cartplus-img/Group 1707480062.svg',
        value: '50k+',
        label: 'Upsells Generated',
    },
    {
        img: 'https://cartplus.io/cartplus-img/Group 1707480063.svg',
        value: '99.9%',
        label: 'Uptime',
    },
]

export default function CartRevenue() {
    return (
        <section className="relative"
        >
            <Container className="py-[40px] max-[540px]:py-[25px] relative z-10">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-[20px] sm:gap-[40px]">
                    {stats.map((stat) => (
                        <div
                            key={stat.label}
                            className="flex items-center gap-4 px-5 py-5 rounded-[12px] bg-[#F9F1FF]"
                        >
                            <div
                                className="flex-shrink-0 w-[79px] h-[79px]  rounded-full flex items-center justify-center"
                                style={{
                                    background: 'linear-gradient(180deg, #000000 0%, #9500FF 174.83%)',
                                }}
                            >
                                <img
                                    src={stat.img}
                                    alt={stat.label}
                                />
                            </div>

                            {/* Text */}
                            <div>
                                <p className=" font-[500] text-[30px] sm:text-[40px] leading-tight">
                                    {stat.value}
                                </p>
                                <p
                                    className="text-[16px] sm:text-[18px] leading-snug mt-0.5"
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