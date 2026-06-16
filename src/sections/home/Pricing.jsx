import React from 'react'
import Container from '../../components/Container'
import Button from '../../components/Button'

const plans = [
  {
    id: 1,
    name: 'Free',
    badge: null,
    subtitle: 'Perfect for getting started',
    orders: null,
    showDivider: false,
    price: 'Free',
    period: '',
    checkIcon: 'https://hubsyntax.com/cart-images/blackCheck.png',
    features: [
      '1 cart drawer',
      'Basic design customization',
      'Cart announcements',
      'Email support',
    ],
    cta: 'Upgrade to Growth',
    highlight: false,
  },
  {
    id: 2,
    name: 'Starter',
    badge: 'Popular',
    subtitle: 'For growing stores',
    orders: '0-200 ORDERS',
    showDivider: true,
    price: '$29.99',
    period: '/month',
    checkIcon: 'https://hubsyntax.com/cart-images/whiteCheck.png',
    features: [
      '3 cart drawers',
      'Advanced design customization',
      'Tiered rewards',
      'Tiered rewards',
      'Trust badges',
      'Priority email support',
    ],
    cta: 'Upgrade to Starter',
    highlight: true,
    badgeClass: 'bg-white text-black',
  },
  {
    id: 3,
    name: 'Growth',
    badge: 'Best value',
    subtitle: 'For Scaling businesses',
    orders: '201-500 ORDERS',
    showDivider: false,
    price: '$34.99',
    period: '/month',
    checkIcon: 'https://hubsyntax.com/cart-images/blackCheck.png',
    features: [
      'Unlimited cart drawers',
      'Everything in Starter',
      'Sticky cart button',
      'Express payments',
      'Discount codes',
      'Add-ons & subscriptions',
      'Custom HTML blocks',
      'Live chat support',
    ],
    cta: 'Upgrade to Growth',
    highlight: false,
    badgeClass: 'bg-[#9D70CC] text-[#ffffff]',
  },
]

export default function Pricing({ showGradient }) {
  return (
    <section className='relative'>
      <Container className='py-[40px] max-[540px]:py-[25px] relative z-10'>
        <div className='px-[0px] lg:px-[78px] max-[840px]:pb-[0] pb-[20px]'>
          <div className='text-center max-[540px]:mb-[20px] mb-[40px]'>
            <h2 className='font-bold max-[540px]:text-[35px] text-[45px] lg:text-[50px] leading-[45px] lg:leading-[60px] max-[540px]:mb-[15px] mb-[20px]'>
              Simple, Transparent pricing
            </h2>
            <p className='max-[540px]:text-[16px] text-[18px] max-[540px]:leading-[22px] leading-[28px] mx-auto max-w-[950px]'>
              Choose the plan that best fits your store and grow with confidence.
            </p>
          </div>

          <div className='grid max-[768px]:grid-cols-1 max-[840px]:grid-cols-2 grid-cols-3 gap-[50px] md:gap-[15px] lg:gap-[30px] items-stretch max-[540px]:pt-[0] pt-[20px]'>
            {plans.map((plan) => (
              <div
                key={plan.id}
                className={`relative rounded-[10px] py-[15px] lg:py-[30px] px-[15px] lg:px-[40px] flex flex-col justify-between ${plan.highlight
                  ? 'bg-[#512B6C] text-white mt-[-20px] mb-[-20px]'
                  : 'bg-white text-[#1D1E20] border border-gray-200'
                  }`}
              >
                {/* Badge */}
                {plan.badge && (
                  <span
                    className={`absolute -top-[14px] text-[14px] font-semibold px-[16px] py-[4px] rounded-full whitespace-nowrap ${plan.badgeClass}`}
                  >
                    {plan.badge}
                  </span>
                )}

                {/* Top Content */}
                <div>
                  <h3 className='text-[20px] font-bold mb-[10px]'>{plan.name}</h3>
                  <p className={`text-[12px] mb-[20px] ${plan.highlight ? 'text-white/70' : 'text-[#000000]'}`}>
                    {plan.subtitle}
                  </p>

                  <hr className='max-[540px]:mb-[10px] mb-[16px] border-t border-[#F4F4F4]' />

                  {plan.orders && (
                    <p className={`text-[12px] font-semibold mb-[6px] ${plan.highlight ? 'text-white/60' : 'text-gray-400'}`}>
                      {plan.orders}
                    </p>
                  )}
                  <div className='flex items-end gap-[4px] mb-[6px]'>
                    <span className='max-[540px]:text-[25px] text-[36px] font-bold max-[540px]:leading-[35px] leading-[44px]'>{plan.price}</span>
                    {plan.period && (
                      <span className={`text-[14px] mb-[6px] ${plan.highlight ? 'text-white/70' : 'text-gray-500'}`}>
                        {plan.period}
                      </span>
                    )}
                  </div>
                  <hr className='max-[540px]:mb-[10px] mb-[16px] border-t border-[#F4F4F4]' />
                  <ul className='flex flex-col gap-[12px] my-[30px]'>
                    {plan.features.map((feature, index) => (
                      <li key={index} className='flex items-center gap-[10px] text-[12px]'>
                        <img
                          src={plan.checkIcon}
                          alt='check'
                          loading='lazy'
                          decoding='async'
                          className='w-[15px] h-[15px]'
                          onError={(e) => { e.target.style.display = 'none' }}
                        />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* CTA pinned to bottom */}
                <Button className='w-full transition-all justify-center'>
                  {plan.cta}
                </Button>
              </div>
            ))}
          </div>
        </div>
      </Container>
      {showGradient && (
        <>
          <div className='absolute z-0 top-100 left-0 hidden xl:block'>
            <img src="https://hubsyntax.com/cart-images/Mask group (20).svg" alt="" loading="lazy" decoding="async" />
          </div>
          <div className='absolute z-0 top-50 right-0 hidden xl:block'>
            <img src="https://hubsyntax.com/cart-images/Mask group (21).svg" alt="" loading="lazy" decoding="async" />
          </div>
        </>)}
    </section>
  )
}