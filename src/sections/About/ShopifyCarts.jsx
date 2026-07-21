import React from 'react'
import Container from '../../components/Container'

const cards = [
    {
        icon: "https://cartplus.io/cartplus-img/Group 1707480053.svg",
        title: "Low Cart Conversions",
        description:
            "Even interested shoppers leave without purchasing when the cart experience creates friction.",
    },
    {
        icon: "https://cartplus.io/cartplus-img/Group 1707480054.svg",
        title: "No Upsell Opportunities",
        description:
            "Many stores leave revenue on the table by failing to encourage additional purchases.",
    },
    {
        icon: "https://cartplus.io/cartplus-img/Group 1707480055.svg",
        title: "Slow & Clunky UX",
        description:
            "A slow, outdated cart experience disrupts the buying journey and drives customers away.",
    },
]

export default function ShopifyCarts() {
    return (
        <section className="relative">

            <Container className="py-[40px] max-[540px]:py-[25px] relative z-10">
                {/* Heading */}
                <div className="text-center">
                    <h2 className="font-semibold max-[540px]:text-[35px] text-[45px] lg:text-[55px] max-[540px]:leading-[45px] leading-[60px]">
                        Why Most Merchants Fail to Convert Cart into Sales
                    </h2>
                    <p className="text-[18px] max-[540px]:text-[16px] py-[20px] max-[540px]:py-[16px]">
                        Default cart experiences create friction, reduce upsells, and quietly cost your store revenue every single day.
                    </p>
                </div>

                {/* Cards Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-[40px] lg:gap-[45px] xl:gap-[89px]">
                    {cards.map((card, index) => (
                        <div
                            key={index}
                            className="rounded-[30px] p-[20px] lg:p-[50px] max-[540px]:p-[30px] flex flex-col justify-center text-center relative"
                           
                        >
                            {/* Gradient border */}
                            <div
                                style={{
                                    position: 'absolute',
                                    inset: 0,
                                    borderRadius: '30px',
                                    padding: '2px',
                                    background: 'linear-gradient(58.09deg, rgba(255, 255, 255, 0.2) -15.68%, rgba(149, 0, 255, 0.2) 126.6%)',
                                    WebkitMask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
                                    WebkitMaskComposite: 'xor',
                                    maskComposite: 'exclude',
                                    pointerEvents: 'none',
                                }}
                            />

                            <div className="bg-[#6C4DFF] max-[480px]:h-[100px] h-[120px] max-[480px]:w-[100px] w-[120px] rounded-full flex items-center justify-center p-[20px] mb-[30px] mx-auto">
                                <img src={card.icon} alt={card.title} />
                            </div>

                            <h3 className="text-[24px] font-[700] leading-[30px] mb-[15px]">
                                {card.title}
                            </h3>

                            <p className="text-[16px] leading-[23px]">
                                {card.description}
                            </p>
                        </div>
                    ))}
                </div>
            </Container>
            <div className='absolute z-0 top-[-10%] right-0 hidden xl:block'>
                <img src="https://cartplus.io/cartplus-img/Subtract (6).svg" alt="" loading="lazy" decoding="async" />
            </div>
        </section>
    )
}