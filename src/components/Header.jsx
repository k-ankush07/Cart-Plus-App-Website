import React, { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import Button from './Button'
import Container from './Container'

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false)

  const linkBase = 'text-[18px] text-[#000000] font-[600]'

  const linkClass = ({ isActive }) =>
    `${linkBase} ${isActive ? 'border-b-2 border-black pb-1' : 'opacity-80 hover:opacity-100'}`

  const mobileLinkClass = ({ isActive }) =>
    `text-[18px] max-[540px]:text-[16px] text-[#1a1a2e] font-[600] 
  block py-4 border-b border-gray-200 transition-all duration-200 ${isActive ? 'opacity-100 pl-2 border-l-2 border-l-[#1a1a2e]' : 'opacity-70 hover:opacity-100 hover:pl-2'
    }`

  return (
    <>
      {/* ====== DESKTOP HEADER ====== */}
      <header className="hidden lg:block sticky top-0 z-40 w-full py-[30px] px-0 backdrop-blur">
        <Container className="flex items-center justify-between relative">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <img
              src="https://cartplus.io/cartplus-img/websiteLogo.png"
              alt="CartPlus"
              className="h-[51px] w-auto"
            />
          </Link>

          {/* Desktop Nav */}
          <nav className="flex items-center gap-8">
            <NavLink to="/" end className={linkClass}>Home</NavLink>
            <NavLink to="/pricing" className={linkClass}>Pricing</NavLink>
            <NavLink to="/about" className={linkClass}>About us</NavLink>
            <NavLink to="/contact" className={linkClass}>Contact us</NavLink>
          </nav>

          {/* Desktop Button */}
          <div className="flex items-center gap-4">
            <Button>Install Now</Button>
          </div>
        </Container>
      </header>

      {/* ====== MOBILE HEADER ====== */}
      <header
        className="lg:hidden sticky top-0 z-40 w-full"
        style={{ background: 'linear-gradient(135deg, #e8d5f5 0%, #d4b8f0 100%)' }}
      >
        <div className="flex items-center justify-between px-4 py-[14px]">

          {/* Hamburger Button */}
          <button
            className="flex flex-col justify-center items-center max-[430px]:w-5 max-[430px]:h-5 w-10 h-10 cursor-pointer z-[60] relative"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            <span
              className={`absolute block h-[3px] w-6 bg-[#1a1a2e] rounded-full transition-all duration-300 ease-in-out
      ${menuOpen ? 'rotate-45 translate-y-0' : '-translate-y-[7px]'}`}
            />
            <span
              className={`absolute block h-[3px] w-6 bg-[#1a1a2e] rounded-full transition-all duration-300 ease-in-out
      ${menuOpen ? 'opacity-0 scale-x-0' : 'opacity-100 scale-x-100'}`}
            />
            <span
              className={`absolute block h-[3px] w-6 bg-[#1a1a2e] rounded-full transition-all duration-300 ease-in-out
      ${menuOpen ? '-rotate-45 translate-y-0' : 'translate-y-[7px]'}`}
            />
          </button>

          {/* Centered Logo */}
          <Link to="/">
            <img
              src="https://cartplus.io/cartplus-img/websiteLogo.png"
              alt="CartPlus"
              className="h-[36px] w-auto"
            />
          </Link>

          {/* Install Now Button */}
          <Button className="text-[13px] px-4 py-2">Install Now</Button>
        </div>
      </header>

      {/* ====== MOBILE DRAWER BACKDROP ====== */}
      <div
        onClick={() => setMenuOpen(false)}
        className={`lg:hidden fixed inset-0 z-[45] bg-[black]/60 backdrop-blur-sm transition-all duration-300 ${menuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
          }`}
      />

      {/* ====== MOBILE SLIDE-IN DRAWER ====== */}
      <div
        className={`lg:hidden fixed top-0 right-0 h-full w-full sm:w-[75%] z-[50] transition-transform duration-300 ease-in-out ${menuOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
        style={{ background: '#ffffff', borderLeft: '1px solid #e5e7eb' }}

      >
        {/* Drawer Header */}
        <div className="flex items-center justify-between px-6 max-[540px]:px-4 py-[20px] border-b border-gray-200">
          <Link to="/">
            <img
              src="https://cartplus.io/cartplus-img/websiteLogo.png"
              alt="CartPlus"
              className="h-[30px] w-auto"
            />
          </Link>
          <button
            onClick={() => setMenuOpen(false)}
            className="w-8 h-8 flex items-center justify-center rounded-full text-lg cursor-pointer"
            aria-label="Close menu"
          >
             <img src="https://cartplus.io/cartplus-img/Vector (5).svg" alt="" />
          </button>
        </div>

        {/* Drawer Nav Links */}
        <nav className="flex flex-col px-6 max-[540px]:px-4 pt-4">
          <NavLink to="/" end className={mobileLinkClass} onClick={() => setMenuOpen(false)}>Home</NavLink>
          <NavLink to="/features" className={mobileLinkClass} onClick={() => setMenuOpen(false)}>Features</NavLink>
          <NavLink to="/pricing" className={mobileLinkClass} onClick={() => setMenuOpen(false)}>Pricing</NavLink>
          <NavLink to="/about" className={mobileLinkClass} onClick={() => setMenuOpen(false)}>About us</NavLink>
          <NavLink to="/contact" className={mobileLinkClass} onClick={() => setMenuOpen(false)}>Contact us</NavLink>
        </nav>

      </div>
    </>
  )
}