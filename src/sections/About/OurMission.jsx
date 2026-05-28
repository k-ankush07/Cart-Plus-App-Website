import React from 'react'
import Container from '../../components/Container'

export default function OurMission() {
    return (
        <section className="relative" >
            <Container className="py-[40px] max-[540px]:py-[25px] relative z-10">

                <div className="flex flex-col md:flex-row items-center gap-10 md:gap-[85px]">

                    {/* Left: Image */}
                    <div className="w-full md:w-1/2 flex-shrink-0">
                        <div>
                            <img
                                src="https://hubsyntax.com/cart-images/Rectangle%20240648554.svg"
                                alt="Our Mission"
                                className="w-full h-full"
                            />
                        </div>
                    </div>

                    {/* Right: Text Content */}
                    <div className="w-full md:w-1/2 text-white">
                        <h2 className="font-semibold max-[540px]:text-[35px] text-[45px] lg:text-[55px] max-[540px]:leading-[45px] leading-[60px]">
                            Our Mission
                        </h2>

                        <p className="text-[18px] max-[540px]:text-[16px] py-[20px] max-[540px]:py-[16px]">
                            Our mission is to help Shopify merchants create faster, smarter, and
                            higher-converting cart experiences.
                        </p>

                        <p className="text-[18px] max-[540px]:text-[16px] py-[20px] max-[540px]:py-[16px]">
                            We believe ecommerce brands should be able to increase revenue, improve
                            customer experience, and boost average order value without relying on
                            complicated tools or custom development.
                        </p>

                        <p className="text-[18px] max-[540px]:text-[16px] py-[20px] max-[540px]:py-[16px]">
                            Our focus is on building tools that simplify the checkout journey,
                            reduce friction, and enable customers to complete purchases with
                            confidence. We&apos;re committed to helping brands unlock more value
                            from the traffic they already have while creating shopping experiences
                            customers genuinely enjoy.
                        </p>
                    </div>
                </div>
            </Container>
            <div className='absolute right-20 top-20 hidden lg:block'>
                <img src="https://hubsyntax.com/cart-images/Mask group (30).svg" alt="" loading="lazy" decoding="async" />
            </div>
        </section>
    )
}