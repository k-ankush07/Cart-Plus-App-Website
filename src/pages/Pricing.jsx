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
        heading='Build to Turn More Carts Into Sales'
        paragraph='We created HubCart after seeing thousands of Shopify stores lose sales because of outdated cart experiences. Our goal is simple help merchants increase conversions, drive more upsells, and boost average order value with a faster, smarter cart experience.'
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
