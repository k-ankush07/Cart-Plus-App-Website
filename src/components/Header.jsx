import React, { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import Button from './Button'
import Container from './Container'

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false)

  const linkBase = 'text-[18px] text-[#FFFFFF] font-semibold'

  const linkClass = ({ isActive }) =>
    `${linkBase} ${isActive ? 'border-b-2 border-white pb-1' : 'opacity-80 hover:opacity-100'}`

  const mobileLinkClass = ({ isActive }) =>
    `text-[18px] max-[540px]:text-[16px] text-[#FFFFFF] font-semibold block py-4 border-b border-white/10 transition-all duration-200 ${isActive ? 'opacity-100 pl-2 border-l-2 border-l-white' : 'opacity-70 hover:opacity-100 hover:pl-2'
    }`

  return (
    <>
      <header className="sticky top-0 z-40 w-full py-[30px] max-[540px]:py-[16px] px-0 backdrop-blur relative">
        <Container className="flex items-center justify-between">

          {/* Logo */}
          <Link to="/" className="flex items-center">
            <img
              src="https://hubsyntax.com/cart-images/HUBCART.svg"
              alt="HubCart"
              className="h-[37px] max-[540px]:h-[30px] w-auto"
            />
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden items-center gap-8 lg:flex">
            <NavLink to="/" end className={linkClass}>Home</NavLink>
            <NavLink to="/features" className={linkClass}>Features</NavLink>
            <NavLink to="/pricing" className={linkClass}>Pricing</NavLink>
            <NavLink to="/about" className={linkClass}>About us</NavLink>
            <NavLink to="/contact" className={linkClass}>Contact us</NavLink>
          </nav>

          {/* Desktop Button */}
          <div className="hidden lg:flex items-center gap-4">
            <Button>Install HubCart</Button>
          </div>

          {/* Hamburger Button (mobile only) */}
          <button
            className="lg:hidden flex flex-col justify-center items-center gap-[5px] w-8 h-8 cursor-pointer z-[60] relative"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            <span className={`block h-[2px] w-6 bg-white transition-all duration-300 ${menuOpen ? 'rotate-45 translate-y-[7px]' : ''}`} />
            <span className={`block h-[2px] w-6 bg-white transition-all duration-300 ${menuOpen ? 'opacity-0' : ''}`} />
            <span className={`block h-[2px] w-6 bg-white transition-all duration-300 ${menuOpen ? '-rotate-45 -translate-y-[7px]' : ''}`} />
          </button>

        </Container>
      </header>

      {/* Backdrop */}
      <div
        onClick={() => setMenuOpen(false)}
        className={`lg:hidden fixed inset-0 z-[45] bg-black/60 backdrop-blur-sm transition-all duration-300 ${menuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
          }`}
      />

      {/* Slide-in Drawer */}
      <div
        className={`lg:hidden fixed top-0 right-0 h-full w-full sm:w-[75%] sm:max-w-[400px] z-[50] transition-transform duration-300 ease-in-out ${menuOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
        style={{ background: 'linear-gradient(135deg, #0f0f0f 0%, #1a1a2e 100%)' }}
      >
        {/* Drawer Header */}
        <div className="flex items-center justify-between px-6 max-[540px]:px-4 py-[30px] max-[540px]:py-4 border-b border-white/10">
          <img
            src="https://hubsyntax.com/cart-images/HUBCART.svg"
            alt="HubCart"
            className="h-[30px] w-auto"
          />
          <button
            onClick={() => setMenuOpen(false)}
            className="w-8 h-8 flex items-center justify-center rounded-full border border-white/20 text-white text-lg cursor-pointer"
            aria-label="Close menu"
          >
            ✕
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

        {/* Drawer Footer Button */}
        <div className="absolute bottom-10 left-0 w-full px-6">
          <Button className="w-full text-center justify-center">Install HubCart</Button>
        </div>
      </div>
    </>
  )
}