import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from './Header'
import Footer from './Footer'

export default function Layout() {
  return (
    <div className="flex min-h-screen flex-col bg-[#1D1E20] text-[#FFFFFF]">
      <Header />
      <div className='absolute top-0'>
        <img src="https://hubsyntax.com/cart-images/Mask group (8).svg" alt="" />
      </div>
      <main className="flex-1">
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}
