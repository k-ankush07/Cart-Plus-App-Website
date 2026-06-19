import React, { useState } from 'react'
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
    features: [
      'Dev & Partner Only',
    ],
    cta: 'Get Started Free',
  },
  {
    id: 2,
    name: 'Starter',
    badge: 'Popular',
    subtitle: 'For growing stores',
    orders: '200 ORDERS',
    showDivider: true,
    price: '$4.99',
    period: '/month',
    features: [
      '14-day free trial',
      'Design settings',
      'Announcements module',
      'Upsells & cross-sells',
      'Reward progress bar',
      'Add-ons module',
      'Custom HTML & CSS'
    ],
    cta: 'Upgrade to Starter',
  },
  {
    id: 3,
    name: 'Growth',
    badge: 'Best value',
    subtitle: 'For Scaling businesses',
    orders: '500 ORDERS',
    showDivider: false,
    price: '$9.99',
    period: '/month',
    features: [
      '14-day free trial',
      'Design settings',
      'Announcements module',
      'Upsells & cross-sells',
      'Reward progress bar',
      'Add-ons module',
      'Custom HTML & CSS'
    ],
    cta: 'Upgrade to Growth',
  },
  {
    id: 4,
    name: 'Advanced',
    badge: 'Best value',
    subtitle: 'For high-volume businesses',
    orders: '1000 ORDERS',
    showDivider: false,
    price: '$14.99',
    period: '/month',
    features: [
      '14-day free trial',
      'Design settings',
      'Announcements module',
      'Upsells & cross-sells',
      'Reward progress bar',
      'Add-ons module',
      'Custom HTML & CSS'
    ],
    cta: 'Upgrade to Advanced',
  },
]

// Badge background when a card is NOT active (its own default tint)
const badgeIdleClass = {
  1: '',
  2: 'bg-[#9D70CC] text-[#ffffff]',
  3: 'bg-[#9D70CC] text-[#ffffff]',
  4: 'bg-[#FF6B00] text-[#ffffff]',
}

export default function Pricing({ showGradient }) {
  const [hoveredId, setHoveredId] = useState(null)
  const DEFAULT_ACTIVE_ID = 2

  return (
    <section className='relative'>
      <Container className='py-[40px] max-[540px]:py-[25px] relative z-10'>
        <div>
          <div className='text-center max-[540px]:mb-[20px] mb-[40px]'>
            <h2 className='font-bold max-[540px]:text-[35px] text-[45px] lg:text-[50px] leading-[45px] lg:leading-[60px] max-[540px]:mb-[15px] mb-[20px]'>
              Simple, Transparent pricing
            </h2>
            <p className='max-[540px]:text-[16px] text-[18px] max-[540px]:leading-[22px] leading-[28px] mx-auto max-w-[950px]'>
              Choose the plan that best fits your store and grow with confidence.
            </p>
          </div>

          <div className='grid max-[768px]:grid-cols-1 max-[840px]:grid-cols-2 grid-cols-4 gap-[50px] md:gap-[15px] lg:gap-[30px] items-stretch max-[540px]:pt-[0] pt-[20px]'>
            {plans.map((plan) => {
              const isActive = hoveredId ? hoveredId === plan.id : plan.id === DEFAULT_ACTIVE_ID

              return (
                <div
                  key={plan.id}
                  onMouseEnter={() => setHoveredId(plan.id)}
                  onMouseLeave={() => setHoveredId(null)}
                  className={`relative rounded-[10px] py-[15px] lg:py-[30px] px-[15px] lg:px-[20px] flex flex-col justify-between
                    border transition-all duration-300 ease-out
                    ${isActive
                      ? 'bg-[#512B6C] text-white border-transparent -mt-[20px] -mb-[20px] shadow-xl z-10'
                      : 'bg-white text-[#1D1E20] border-gray-200'
                    }`}
                >
                  {/* Badge */}
                  {plan.badge && (
                    <span
                      className={`absolute -top-[14px] text-[14px] font-semibold px-[16px] py-[4px] rounded-full whitespace-nowrap transition-colors duration-300
                        ${isActive ? 'bg-white text-black' : (badgeIdleClass[plan.id] || 'bg-[#1D1E20] text-white')}`}
                    >
                      {plan.badge}
                    </span>
                  )}

                  {/* Top Content */}
                  <div>
                    <h3 className='text-[20px] font-bold mb-[10px]'>{plan.name}</h3>
                    <p className={`text-[12px] mb-[20px] transition-colors duration-300 ${isActive ? 'text-white/70' : 'text-[#000000]'}`}>
                      {plan.subtitle}
                    </p>

                    <hr className={`max-[540px]:mb-[10px] mb-[16px] border-t transition-colors duration-300 ${isActive ? 'border-white/20' : 'border-[#F4F4F4]'}`} />

                    {plan.orders && (
                      <p className={`text-[12px] font-semibold mb-[6px] transition-colors duration-300 ${isActive ? 'text-white/60' : 'text-gray-400'}`}>
                        {plan.orders}
                      </p>
                    )}
                    <div className='flex items-end gap-[4px] mb-[6px]'>
                      <span className='max-[540px]:text-[25px] text-[36px] font-bold max-[540px]:leading-[35px] leading-[44px]'>{plan.price}</span>
                      {plan.period && (
                        <span className={`text-[14px] mb-[6px] transition-colors duration-300 ${isActive ? 'text-white/70' : 'text-gray-500'}`}>
                          {plan.period}
                        </span>
                      )}
                    </div>
                    <hr className={`max-[540px]:mb-[10px] mb-[16px] border-t transition-colors duration-300 ${isActive ? 'border-white/20' : 'border-[#F4F4F4]'}`} />
                    <ul className='flex flex-col gap-[12px] my-[30px]'>
                      {plan.features.map((feature, index) => (
                        <li key={index} className='flex items-center gap-[10px] text-[12px]'>
                          <img
                            src={isActive ? 'https://hubsyntax.com/cart-images/whiteCheck.png' : 'https://hubsyntax.com/cart-images/blackCheck.png'}
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
              )
            })}
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