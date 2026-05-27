import React from 'react'
import IncreaseSales from '../sections/home/IncreaseSales'
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
      <IncreaseSales />
      <Features />
      {/* <Features />
      <CustomizeCart />
      <PowerfulCart />
      <RevenueGrowth />
      <HubCartFeatures />
      <Pricing />
      <FAQ />
      <CTA /> */}
    </div>
  )
}
