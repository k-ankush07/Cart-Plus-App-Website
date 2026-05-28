import React from 'react'
import BannerSection from '../components/BannerSection'
import Features from '../sections/home/SmartFeatures'
import CustomizeCart from "../sections/home/CustomizeCart"
import PowerfulCart from '../sections/home/PowerfulCart'
import RevenueGrowth from '../sections/home/RevenueGrowth'
import HubCartFeatures from '../sections/home/HubCartFeatures'
import Pricing from '../sections/home/Pricing'
import FAQ from '../sections/home/FAQ'
import CTA from '../sections/home/CTA'

export default function Home() {
  return (
    <div>
      <BannerSection
        heading='Increase Your Sales with Smart Checkout & Upsell Tools'
        paragraph=' Boost conversions and average order value with a high-converting cart drawer built for modern ecommerce brands.'
        buttonText='Try Demo'
        img='https://hubsyntax.com/cart-images/mainImage.svg'
      />
      <Features />
      <CustomizeCart />
      <PowerfulCart />
      <RevenueGrowth />
      <HubCartFeatures />
      <Pricing showGradient />
      <FAQ />
      <CTA />
    </div>
  )
}
