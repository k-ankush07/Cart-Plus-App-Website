import React, { useState } from 'react'
import Container from '../../components/Container'

const faqs = [
  {
    q: 'What is HubCart?',
    a: 'HubCart is a cart optimization platform for Shopify brands that helps increase conversions, boost average order value (AOV), and reduce cart abandonment using smart upsells, rewards, and checkout optimization tools.',
  },
  {
    q: 'Does HubCart work with Shopify?',
    a: 'Yes — colors, typography, spacing, and layout are fully customizable to match your brand.',
  },
  {
    q: 'How does HubCart increase average order value?',
    a: 'Product recommendations, bundle offers, free-gift unlocks, and threshold-based promotions are all supported.',
  },
  {
    q: 'Can I customize the cart drawer design?',
    a: 'HubCart works with every Shopify theme — Dawn, Online Store 2.0, and custom themes alike.',
  },
  {
    q: ' What types of upsells can I create?',
    a: 'Product recommendations, bundle offers, free-gift unlocks, and threshold-based promotions are all supported.',
  },
  {
    q: 'Can I customize the cart drawer design?',
    a: 'HubCart works with every Shopify theme — Dawn, Online Store 2.0, and custom themes alike.',
  },
]

const plusImg = 'https://hubsyntax.com/cart-images/CartPluss.png'
const minusImg = 'https://hubsyntax.com/cart-images/CartMinus.png'

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(0)

  return (
    <section>
      <Container className="pt-[20px]">
       <div className='px-[78px]'>
          <div className="text-center">
            <h2 className="font-bold text-[50px] leading-[60px] ">
              Frequently asked questions
            </h2>
          </div>

          <div className="mx-auto mt-[20px] space-y-5">
            {faqs.map((faq, i) => {
              const isOpen = openIndex === i
              return (
                <div
                  key={faq.q}
                  className="rounded-xl border border-gray-200 bg-white "
                >
                  <button
                    type="button"
                    onClick={() => setOpenIndex(isOpen ? -1 : i)}
                    className="flex w-full items-center justify-between px-6 py-4 text-left cursor-pointer"
                  >
                    <span className="text-[20px] font-[600] text-[#000000] leading-[32px]">{faq.q}</span>
                    <img
                      src={isOpen ? minusImg : plusImg}
                      alt={isOpen ? 'collapse' : 'expand'}
                      className="w-7 h-7 flex-shrink-0"
                    />
                  </button>
                  {isOpen && (
                    <div className="px-6 pb-4 text-[18px] leading-[28px] text-[#000000]">
                      {faq.a}
                    </div>
                  )}
                </div>
              )
            })}
          </div>
        </div>
      </Container>
    </section>
  )
}
