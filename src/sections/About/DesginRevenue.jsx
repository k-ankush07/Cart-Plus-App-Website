import React from 'react'
import Container from '../../components/Container'

export default function DesginRevenue() {
  return (
    <section className="relative" >
               <Container className="py-[40px] max-[540px]:py-[25px] relative z-10">
   
                   <div className="flex flex-col md:flex-row items-center gap-10 md:gap-[75px]">
   
                       {/* Left: Image */}
                       <div className="w-full md:w-1/2 flex-shrink-0">
                           <div>
                               <img
                                   src="https://hubsyntax.com/cart-images/cartRevenues.svg"
                                   alt="Our Mission"
                                   className="w-full h-full"
                               />
                           </div>
                       </div>
   
                       {/* Right: Text Content */}
                       <div className="w-full md:w-1/2 text-white">
                           <h2 className="font-semibold max-[540px]:text-[35px] text-[45px] lg:text-[55px] max-[540px]:leading-[45px] leading-[60px]">
                               A Cart Drawer Designed to Increase Revenue
                           </h2>
   
                           <p className="text-[18px] max-[540px]:text-[16px] py-[15px] max-[540px]:py-[16px]">
                               We’ve worked closely with ecommerce brands and noticed one common issue the cart experience was being ignored.
                           </p>
   
                           <p className="text-[18px] max-[540px]:text-[16px] py-[15px] max-[540px]:py-[16px]">
                             While brands spent heavily on ads and product pages, the actual cart remained outdated.
                           </p>
   
                           <p className="text-[18px] max-[540px]:text-[16px] py-[15px] max-[540px]:py-[16px]">
                               We built this app to help Shopify merchants unlock more revenue from traffic they already have
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
