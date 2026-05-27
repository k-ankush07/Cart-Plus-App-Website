import React from 'react'
import Container from '../../components/Container'

const features = [
  {
    id: 1,
    title: 'Cart Optimization Engine',
    description:
      'Boost your store performance instantly with a high-converting cart drawer. HubCart transforms your cart into a revenue engine with smart upsells, rewards, and seamless checkout flow.',
    linkText: 'Explore Cart Features',
    href: '#',
  },
  {
    id: 2,
    title: 'Smart Upsell Engine',
    description:
      'Boost your store performance instantly with a high-converting cart drawer. HubCart transforms your cart into a revenue engine with smart upsells, rewards, and seamless checkout flow.',
    linkText: 'Explore Cart Features',
    href: '#',
  },
]

export default function Features() {
  return (
    <section className='py-[40px] text-white relative'>
      <Container>
        <div className='text-center'>
          <h2 className='font-semibold text-[55px] leading-[60px]'>
            Smart Features That Do the Selling for You
          </h2>
          <p className='text-[18px] py-[20px]'>
            HubCart works behind the scenes to increase your revenue automatically — from cart to checkout.
          </p>
        </div>

        <div className='grid grid-cols-[2fr_3fr]'>
          <div className='pt-[75px]'>
            {features.map((feature, index) => {
              const linkClass = `inline-block text-[16px] underline ${index < features.length - 1 ? 'mb-[30px]' : 'mt-3'
                }`

              return (
                <div key={feature.id}>
                  <h3 className='font-semibold text-[30px] leading-[32px]'>{feature.title}</h3>
                  <p className='text-[18px] my-[15px] leading-[28px] max-w-[415px]'>
                    {feature.description}
                  </p>
                  <a href={feature.href} className={linkClass}>
                    {feature.linkText}
                  </a>
                </div>
              )
            })}
          </div>

          <div className='w-full'>
            <img
              src='https://hubsyntax.com/cart-images/cartFeatures.png'
              alt='HubCart features'
              className='w-full h-auto'
            />
          </div>
          <div className='absolute right-0 top-0'>
            <img src="https://hubsyntax.com/cart-images/Mask group (10).svg" alt="" />
          </div>
        </div>
      </Container>
    </section>
  )
}