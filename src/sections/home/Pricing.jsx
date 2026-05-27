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

export default function Pricing() {
  return (
    <section>
      <Container className='py-[80px]'>
        <div className='px-[78px]'>
          <div className='text-center mb-[40px]'>
            <h2 className='font-bold text-[50px] leading-[60px] mb-[20px]'>
              Simple, Transparent Pricing
            </h2>
            <p className='text-[18px] leading-[28px] mx-auto max-w-[950px]'>
              Choose the perfect plan for your store and start increasing conversions, average order
              value, and revenue with powerful cart and checkout optimization tools.
            </p>
          </div>

          <div className='grid grid-cols-3 gap-[30px] items-stretch pt-[20px]'>
            {plans.map((plan) => (
              <div
                key={plan.id}
                className={`relative rounded-[10px] py-[30px] px-[40px] flex flex-col justify-between ${plan.highlight
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

                  <hr className='mb-[16px] border-t border-[#F4F4F4]' />

                  {plan.orders && (
                    <p className={`text-[12px] font-semibold mb-[6px] ${plan.highlight ? 'text-white/60' : 'text-gray-400'}`}>
                      {plan.orders}
                    </p>
                  )}
                  <div className='flex items-end gap-[4px] mb-[6px]'>
                    <span className='text-[36px] font-bold leading-[44px]'>{plan.price}</span>
                    {plan.period && (
                      <span className={`text-[14px] mb-[6px] ${plan.highlight ? 'text-white/70' : 'text-gray-500'}`}>
                        {plan.period}
                      </span>
                    )}
                  </div>
                  <hr className='mb-[16px] border-t border-[#F4F4F4]' />
                  <ul className='flex flex-col gap-[12px] my-[30px]'>
                    {plan.features.map((feature, index) => (
                      <li key={index} className='flex items-center gap-[10px] text-[12px]'>
                        <img
                          src={plan.checkIcon}
                          alt='check'
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
    </section>
  )
}