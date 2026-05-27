import React from 'react'
import { Link } from 'react-router-dom'
import Container from './Container'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="relative">
      <Container>
        <div className="flex flex-col items-center text-center">
          <Link to="/" className="flex items-center">
            <img
              src="https://hubsyntax.com/cart-images/HUBCART.svg"
              alt="HubCart"
              className="h-[37px] w-auto brightness-0 invert"
            />
          </Link>

          <p className="mt-[20px] text-[16px] leading-[26px]">
            Increase your revenue with smarter checkout, upsells, and conversion tools built for modern Shopify brands.
          </p>

          <nav className="mt-[20px] flex flex-wrap items-center justify-center gap-x-10 gap-y-3 text-[18px]">
            <Link to="/about" className="text-gray-200 transition-colors hover:text-white">About Us</Link>
            <Link to="/contact" className="text-gray-200 transition-colors hover:text-white">Contact Us</Link>
            <Link to="/pricing" className="text-gray-200 transition-colors hover:text-white">Pricing</Link>
            <Link to="/features" className="text-gray-200 transition-colors hover:text-white">Features</Link>
          </nav>
        </div>
      </Container>
      <p className="my-[20px] text-[14px] text-center border-t border-t-[#D9D9D9] pt-[20px]">

        © {year} HubCart. All rights reserved.
      </p>
    </footer>
  )
}
