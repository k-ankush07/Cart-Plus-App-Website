import React from 'react'
import Container from '../../components/Container'

const stats = [
    {
        id: 1,
        image: 'https://cartplus.io/cartplus-img/Vector.svg',
        value: '90,000+',
        label: 'Brands Using HubCart',
    },
    {
        id: 2,
        image: 'https://cartplus.io/cartplus-img/Group 1707480300.svg',
        value: '$1.4B+',
        label: 'Additional Revenue Generated',
    },
    {
        id: 3,
        image: 'https://cartplus.io/cartplus-img/Vector (1).svg',
        value: '4,000+',
        label: '5-Star Reviews',
    },
]

export default function RevenueGrowth() {
    return (
        <section>
            <Container className='py-[40px] max-[540px]:py-[25px] relative'>
                <h2 className='font-bold  max-[540px]:text-[35px] text-[45px] lg:text-[50px] leading-[45px] lg:leading-[60px] max-[540px]:mb-[15px] mb-[20px] text-center'>
                    Scalable Revenue Growth
                </h2>
                <p className='max-[540px]:text-[16px] text-[18px] max-[540px]:leading-[22px] leading-[28px] text-center max-[540px]:max-w-full max-w-[930px] m-auto max-[540px]:mb-[20px] mb-[30px]'>
                    Join thousands of Shopify brands using HubCart to increase conversions, grow average order
                    value, and drive more revenue automatically.
                </p>
                <div className="p-[1px] rounded-[15px] bg-[linear-gradient(264.46deg,rgba(255,255,255,0)_-14.65%,rgba(149,0,255,0.2)_32.08%)]">
                    <div
                        className="p-[40px] md:p-[80px] bg-[#FEFDFF] rounded-[14px] flex flex-col md:flex-row items-center text-center justify-center max-[540px]:gap-[30px] gap-[50px] lg:gap-[150px] shadow-[inset_0px_0px_250px_0px_#9500FF14]"
                    >
                        {stats.map((stat) => (
                            <div key={stat.id} className="flex flex-col items-center">
                                <div className="h-[100px] w-[100px] rounded-full p-[20px] flex items-center justify-center bg-[linear-gradient(180deg,#000000_0%,#9500FF_174.83%)]">
                                    <img
                                        src={stat.image}
                                        alt="CartPlus"
                                        loading="lazy"
                                        decoding="async"
                                    />
                                </div>

                                <p className="max-[540px]:text-[40px] text-[55px] max-[540px]:leading-[45px] leading-[55px] font-[500] my-[15px]">
                                    {stat.value}
                                </p>

                                <p className="text-[16px] leading-[20px]">
                                    {stat.label}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </Container>
        </section>
    )
}