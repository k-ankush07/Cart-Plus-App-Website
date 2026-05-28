import React from 'react'
import BannerSection from '../components/BannerSection'
import PricingSection from '../sections/home/Pricing'
import EverythingPlan from '../sections/Pricing/EverythingPlanS'
import FAQ from '../sections/home/FAQ'
import CTA from '../sections/home/CTA'

export default function Pricing() {
  return (
    <div>
      <BannerSection
        heading='Built to Turn More Carts Into Revenue'
        paragraph='We created this cart drawer app after seeing thousands of Shopify stores lose revenue with outdated cart experiences. Our goal is simple: help merchants increase conversions, upsells, and average order value with a faster, smarter cart experience.'
        buttonText='Try Demo'
        img='https://hubsyntax.com/cart-images/Group 1707480290.svg'
      />
      <PricingSection showGradient={false} />
      <EverythingPlan />
      <FAQ />
      <CTA />
    </div>
  )
}
