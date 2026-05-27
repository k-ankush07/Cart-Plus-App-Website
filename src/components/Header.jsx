import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import Button from './Button'
import Container from './Container'

export default function Header() {
  const linkBase = 'text-[18px] text-[#FFFFFF] font-semibold'
  
  const linkClass = ({ isActive }) =>
  `${linkBase} ${isActive ? 'border-b-2 border-white pb-1' : 'opacity-80 hover:opacity-100'}`

  return (
    <header className="sticky top-0 z-40 w-full py-[30px] px-0 backdrop-blur">
      <Container className="flex items-center justify-between">
        <Link to="/" className="flex items-center">
          <img
            src="https://hubsyntax.com/cart-images/HUBCART.svg"
            alt="HubCart"
            className="h-[37px] w-auto"
          />
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          <NavLink to="/" end className={linkClass}>Home</NavLink>
          <NavLink to="/features" className={linkClass}>Features</NavLink>
          <NavLink to="/pricing" className={linkClass}>Pricing</NavLink>
          <NavLink to="/about" className={linkClass}>About us</NavLink>
          <NavLink to="/contact" className={linkClass}>Contact us</NavLink>
        </nav>

        <div className="flex items-center gap-4">
          <Button>Install HubCart</Button>
        </div>
      </Container>
    </header>
  )
}
