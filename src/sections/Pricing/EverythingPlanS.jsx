import React from 'react'
import Container from '../../components/Container'

const features = [
    { name: 'Smart Upsells', free: false, pro: true, scale: true },
    { name: 'Cart Progress Bar', free: false, pro: true, scale: true },
    { name: 'Sticky Cart Drawer', free: false, pro: true, scale: true },
    { name: 'Custom Branding', free: false, pro: true, scale: true },
    { name: 'Mobile Optimization', free: false, pro: true, scale: true },
    { name: 'Cart Analytics', free: false, pro: true, scale: true },
    { name: 'A/B Testing', free: false, pro: true, scale: true },
]

const CHECK = 'https://hubsyntax.com/cart-images/checkSign.svg'
const CROSS = 'https://hubsyntax.com/cart-images/crossSign.svg'

function Icon({ value }) {
    return (
        <img
            src={value ? CHECK : CROSS}
            alt={value ? 'Included' : 'Not included'}
            width={25}
            height={25}
            className="mx-auto w-[25px] h-[20px] lg:w-[20px] lg:h-[25px]"
        />
    )
}

export default function EverythingPlan() {
    return (
        <section className='relative'>
            <Container className='py-[40px] max-[540px]:py-[25px] relative z-10'>

                {/* Heading */}
                <div className='text-center max-[540px]:mb-[10px] mb-[20px]'>
                    <h2 className='font-bold max-[540px]:text-[35px] text-[45px] lg:text-[50px] leading-[45px] lg:leading-[60px] mb-[10px]'>
                        See Everything Included In Each Plan
                    </h2>
                    <p className='max-[540px]:text-[16px] text-[18px] max-[540px]:leading-[22px] leading-[28px] mx-auto max-w-[950px]'>
                        See Everything Included In Each Plan Compare features across all plans and choose the perfect cart
                        drawer solution for your Shopify store.
                    </p>
                </div>

                {/* Table */}
                <div className='overflow-x-auto rounded-[12px] border border-[#FFFFFF]'>
                    <table className='w-full border-collapse'>
                        <thead>
                            <tr>
                                {/* Feature label col */}
                                <th className='py-[15px] lg:py-[28px] px-[20px] lg:px-[38px] text-left text-[24px] tracking-widest font-semibold'>
                                    From Feature
                                </th>

                                {/* Free */}
                                <th className='py-[15px] lg:py-[28px] px-[20px] lg:px-[38px] text-center'>
                                    <p className='text-white font-bold text-[20px] lg:text-[25px] mb-1'>Free</p>
                                    <p className='text-white font-[600] text-[25px] lg:text-[38px] leading-none flex items-end justify-center'>
                                        $0.00{' '}
                                        <span className='text-[14px] lg:text-[14px] lg:text-[20px] font-normal opacity-70'>/lifetime</span>
                                    </p>
                                </th>

                                {/* Pro (highlighted) */}
                                <th className='py-[15px] lg:py-[28px] px-[20px] lg:px-[38px] text-center bg-[#46285C]'>
                                    <p className='text-white font-bold text-[20px] lg:text-[25px] mb-1'>Pro</p>
                                    <p className='text-white font-[600] text-[25px] lg:text-[38px] leading-none flex items-end justify-center'>
                                        $4.99{' '}
                                        <span className='text-[14px] lg:text-[20px] font-normal opacity-70'>/lifetime</span>
                                    </p>
                                </th>

                                {/* Scale */}
                                <th className='py-[15px] lg:py-[28px] px-[20px] lg:px-[38px] text-center'>
                                    <p className='text-white font-bold text-[20px] lg:text-[25px] mb-1'>Scale</p>
                                    <p className='text-white font-[600] text-[25px] lg:text-[38px] leading-none flex items-end justify-center'>
                                        $9.99{' '}
                                        <span className='text-[14px] lg:text-[20px] font-normal opacity-70'>/lifetime</span>
                                    </p>
                                </th>

                                {/* Scale */}
                                <th className='py-[15px] lg:py-[28px] px-[20px] lg:px-[38px] text-center'>
                                    <p className='text-white font-bold text-[20px] lg:text-[25px] mb-1'>Scale</p>
                                    <p className='text-white font-[600] text-[25px] lg:text-[38px] leading-none flex items-end justify-center'>
                                        $14.99{' '}
                                        <span className='text-[14px] lg:text-[20px] font-normal opacity-70'>/lifetime</span>
                                    </p>
                                </th>
                            </tr>
                        </thead>

                        <tbody>
                            {features.map((feature) => (
                                <tr
                                    key={feature.name}
                                    className='border-t border-white/[0.07]'
                                >
                                    <td className='px-[20px] lg:px-[38px] py-[15px] lg:py-[20px] text-white text-[15px] lg:text-[20px] font-medium'>
                                        {feature.name}
                                    </td>
                                    <td className='px-[20px] lg:px-[38px] py-[15px] lg:py-[20px] text-center'>
                                        <Icon value={feature.free} />
                                    </td>
                                    <td className='px-[20px] lg:px-[38px] py-[15px] lg:py-[20px] text-center bg-[#46285C]'>
                                        <Icon value={feature.pro} />
                                    </td>
                                    <td className='px-[20px] lg:px-[38px] py-[15px] lg:py-[20px] text-center'>
                                        <Icon value={feature.scale} />
                                    </td>
                                    <td className='px-[20px] lg:px-[38px] py-[15px] lg:py-[20px] text-center'>
                                        <Icon value={feature.scale} />
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </Container>
            <div className='absolute z-0 top-[-10%] right-0 hidden xl:block'>
                <img src="https://hubsyntax.com/cart-images/Mask group (91).svg" alt="" loading="lazy" decoding="async" />
            </div>
        </section>
    )
}