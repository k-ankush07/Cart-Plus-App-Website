import React from 'react'
import Container from '../../components/Container'

const cards = [
    {
        icon: "https://hubsyntax.com/cart-images/cartCon.svg",
        title: "Low cart conversions",
        description:
            "Design a branded cart experience with rewards, progress bars, and smart checkout features.",
    },
    {
        icon: "https://hubsyntax.com/cart-images/upsellOpp.svg",
        title: "No upsell opportunities",
        description:
            "Most stores miss easy revenue because their cart experience doesn't encourage additional purchases.",
    },
    {
        icon: "https://hubsyntax.com/cart-images/cluxUx.svg",
        title: "Slow & clunky UX",
        description:
            "Traditional cart pages interrupt the buying journey and reduce purchase momentum.",
    },
]

export default function ShopifyCarts() {
    return (
        <section className="relative">
            <Container className="py-[40px] max-[540px]:py-[25px] relative z-10">
                {/* Heading */}
                <div className="text-center">
                    <h2 className="font-semibold max-[540px]:text-[35px] text-[45px] lg:text-[55px] max-[540px]:leading-[45px] leading-[60px]">
                        Why Most Shopify Carts Fail to Convert
                    </h2>
                    <p className="text-[18px] max-[540px]:text-[16px] py-[20px] max-[540px]:py-[16px]">
                        Default cart experiences create friction, reduce upsells, and quietly cost your store revenue every single day.
                    </p>
                </div>

                {/* Cards Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-[89px]">
                    {cards.map((card, index) => (
                        <div
                            key={index}
                            className="border-2 border-white rounded-[30px] p-[50px] max-[540px]:p-[30px] flex flex-col justify-center text-center"
                        >
                            {/* Icon Circle */}
                            <div className="bg-white h-[120px] w-[120px] rounded-full flex items-center justify-center p-[20px] mb-[30px] mx-auto">
                                <img src={card.icon} alt={card.title} />
                            </div>

                            {/* Title */}
                            <h3 className="text-[24px] font-[700] leading-[30px] mb-[15px]">
                                {card.title}
                            </h3>

                            {/* Description */}
                            <p className="text-[16px] leading-[23px]">
                                {card.description}
                            </p>
                        </div>
                    ))}
                </div>
            </Container>
        </section>
    )
}