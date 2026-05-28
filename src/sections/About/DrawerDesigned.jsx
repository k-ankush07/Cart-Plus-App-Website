import React from 'react'
import Container from '../../components/Container'
import Button from '../../components/Button'

const benefits = [
    'Smart upsells inside cart',
    'Faster checkout flow',
    'Sticky buying momentum',
    'Mobile-optimized experience',
    'Fully customizable design',
    'Built specifically for Shopify',
]

export default function DrawerDesigned() {
    return (
        <section className="relative ">

            <Container className="py-[40px] max-[540px]:py-[25px] relative z-10">

                <div className="flex flex-col lg:flex-row items-center gap-[75px]">

                    {/* ── LEFT COLUMN ── */}
                    <div className="w-full flex flex-col justify-center">
                        {/* Heading */}
                        <h2 className="font-semibold max-[540px]:text-[35px] text-[45px] lg:text-[55px] max-[540px]:leading-[45px] leading-[60px]">
                            A Cart Drawer Designed to Increase Revenue
                        </h2>

                        {/* Benefit Bullets */}
                        <p className="text-white font-semibold text-[15px] my-[20px]">Benefit Bullets</p>
                        <ul className="space-y-[10px] mb-[20px]">
                            {benefits.map((item) => (
                                <li key={item} className="flex items-center gap-3">
                                    {/* Purple checkmark circle */}
                                    <span
                                        className="flex-shrink-0 w-5 h-5 rounded-full flex items-center justify-center"
                                    >
                                        <img src="https://hubsyntax.com/cart-images/whiteCirlce.svg" alt="" />
                                    </span>
                                    <span
                                        className="text-[14px]"
                                        style={{ color: 'rgba(255,255,255,0.85)' }}
                                    >
                                        {item}
                                    </span>
                                </li>
                            ))}
                        </ul>

                        {/* CTA Button */}
                        <div>
                            <Button icon="https://hubsyntax.com/cart-images/buttonIcon.png">App The Install</Button>
                        </div>
                    </div>

                    {/* ── RIGHT COLUMN — Cart Drawer Mockups ── */}
                    <div className="w-full relative flex items-center justify-center min-h-[420px]">

                        {/* Group SVG (cart drawer mockup stack) */}
                        <img
                            src="https://hubsyntax.com/cart-images/Group 1707480084.svg"
                            alt="Cart Drawer Preview"
                            className="w-full relative z-10"
                        />
                    </div>
                </div>
            </Container>

            <div className='absolute right-30 bottom-[-25%] hidden lg:block'>
                <img src="https://hubsyntax.com/cart-images/Mask group (31).svg" alt="" loading="lazy" decoding="async" />
            </div>

        </section>
    )
}