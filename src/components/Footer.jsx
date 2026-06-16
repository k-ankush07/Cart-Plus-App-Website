import React from 'react'
import { Link } from 'react-router-dom'
import Container from './Container'

export default function Footer() {
  const year = new Date().getFullYear()

  const scrollToTop = () => {
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative">
      <div className='absolute z-0 bottom-0 left-0'>
        <img src="https://hubsyntax.com/cart-images/Mask group (22).svg" alt="" loading="lazy" decoding="async" />
      </div>
      <div className='absolute z-0 bottom-0 right-0'>
        <img src="https://hubsyntax.com/cart-images/Mask group (23).svg" alt="" loading="lazy" decoding="async" />
      </div>
      <Container className='relative pt-[40px] max-[540px]:pt-[25px]'>
        <div className="flex flex-col items-center text-center">
          <Link to="/" onClick={scrollToTop} className="flex items-center">
            <img
              src="https://hubsyntax.com/cart-images/HUBCART.svg"
              alt="HubCart"
              loading="lazy"
              decoding="async"
              className="h-[30px] lg:h-[37px] w-auto brightness-0 invert"
            />
          </Link>

          <p className="mt-[20px] text-[16px] leading-[26px]">
            Increase your revenue with smarter checkout, upsells, and conversion tools built for modern Shopify brands.
          </p>

          <nav className="mt-[20px] flex flex-wrap items-center justify-center gap-x-10 gap-y-3 max-[540px]:text-[16px] text-[18px]">
            <Link to="/" onClick={scrollToTop} className="text-gray-200 transition-colors hover:text-white">Home</Link>
            <Link to="/about" onClick={scrollToTop} className="text-gray-200 transition-colors hover:text-white">About Us</Link>
            <Link to="/casestudie" onClick={scrollToTop} className="text-gray-200 transition-colors hover:text-white">Case Studies</Link>
            <Link to="/blog" onClick={scrollToTop} className="text-gray-200 transition-colors hover:text-white">Blog</Link>
            <Link to="/contact" onClick={scrollToTop} className="text-gray-200 transition-colors hover:text-white">Contact Us</Link>
            <Link to="/pricing" onClick={scrollToTop} className="text-gray-200 transition-colors hover:text-white">Pricing</Link>
            <Link to="/terms-and-condition" onClick={scrollToTop} className="text-gray-200 transition-colors hover:text-white">Terms & Conditions</Link>
            <Link to="/privacy-policy" onClick={scrollToTop} className="text-gray-200 transition-colors hover:text-white">Privacy Policy</Link>
          </nav>
        </div>
      </Container>
      <p className="my-[20px] text-[14px] text-center border-t border-t-[#D9D9D9] pt-[20px] relative z-10">
        © {year} HubCart. All rights reserved.
      </p>
    </footer>
  )
}