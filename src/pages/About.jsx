import React from 'react'
import Container from '../components/Container'
import BuiltCart from '../sections/About/BuiltCart'
import ShopifyCarts from '../sections/About/ShopifyCarts'
import OurMission from '../sections/About/OurMission'
import DrawerDesigned from '../sections/About/DrawerDesigned'
import CartRevenue from '../sections/About/CartRevenue'
import DesginRevenue from '../sections/About/DesginRevenue'
import CTA from '../sections/home/CTA'

export default function About() {
  return (
    <div>
      <BuiltCart />
      <ShopifyCarts />
      <OurMission />
      <DrawerDesigned />
      <CartRevenue />
      <DesginRevenue />
    </div>
  )
}
