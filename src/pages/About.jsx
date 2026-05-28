import React from 'react'
import Container from '../components/Container'
import BuiltCart from '../sections/About/BuiltCart'
import ShopifyCarts from '../sections/About/ShopifyCarts'
import OurMission from '../sections/About/OurMission'
import DrawerDesigned from '../sections/About/DrawerDesigned'
import CartRevenue from '../sections/About/CartRevenue'
import FAQ from '../sections/home/FAQ'
import CTA from '../sections/home/CTA'

export default function About() {
  return (
    <div>
      <BuiltCart />
      <ShopifyCarts />
      <OurMission
        img='https://hubsyntax.com/cart-images/Rectangle%20240648554.svg'
        heading='Our Mission'
        paragraph1='Our mission is to help Shopify merchants create faster, smarter, and higher-converting cart experiences.'
        paragraph2='We believe ecommerce brands should be able to increase revenue, improve customer experience, and boost average order value without relying on complicated tools or custom development.'
        paragraph3='Our focus is on building tools that simplify the checkout journey, reduce friction, and enable customers to complete purchases with confidence. We&apos;re committed to helping brands unlock more value from the traffic they already have while creating shopping experiences customers genuinely enjoy.'
        gradientImg='https://hubsyntax.com/cart-images/Mask group (30).svg'
      />
      <DrawerDesigned />
      <CartRevenue />
      <OurMission
        img='https://hubsyntax.com/cart-images/cartRevenues.svg'
        heading='A Cart Drawer Designed to Increase Revenue'
        paragraph1='We’ve worked closely with ecommerce brands and noticed one common issue the cart experience was being ignored.'
        paragraph2='While brands spent heavily on ads and product pages, the actual cart remained outdated.'
        paragraph3=' We built this app to help Shopify merchants unlock more revenue from traffic they already have'
        gradientImg='https://hubsyntax.com/cart-images/Mask group (30).svg'
      />
      <FAQ />
      <CTA />
    </div>
  )
}
