import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'

export default function Header() {
  const [open, setOpen] = useState(false)

  const linkClass = ({ isActive }) =>
    isActive
      ? 'border-b-2 border-white opacity-100'
      : 'opacity-80 hover:opacity-100 transition-opacity'

  return (
    <header
      className="
        sticky top-0 z-40 w-full
        border-b-2 border-white/40
        bg-[#18165A]/80
        backdrop-blur-md
      "
    >
      <div className="grid grid-cols-[auto_1fr] items-center px-4 sm:px-6 md:px-8 py-3">

        {/* Logo / site name */}
        <NavLink
          to="/about"
          className="flex items-center gap-3 no-underline"
        >
          <img
            src={`${import.meta.env.BASE_URL}images/logo.png`}
            alt="protorobo logo"
            className="h-10 w-10 md:h-12 md:w-12 rounded-xl object-cover"
          />
          <span className="text-white font-gagalin text-2xl md:text-3xl tracking-wide">
            protorobo
          </span>
        </NavLink>

        {/* Desktop nav */}
        <nav className="hidden md:flex justify-end items-center gap-10 w-full text-xl lg:text-2xl xl:text-3xl text-white font-gagalin">
          <NavLink to="/about" className={linkClass}><b>ABOUT</b></NavLink>
          <NavLink to="/blog" className={linkClass}><b>BLOG</b></NavLink>
        </nav>

        {/* Mobile hamburger */}
        <button
          type="button"
          className="md:hidden justify-self-end inline-flex items-center rounded-lg p-2 text-white focus:outline-none focus:ring-2 focus:ring-white/50"
          aria-controls="mobile-menu"
          aria-expanded={open}
          onClick={() => setOpen(o => !o)}
        >
          <span className="sr-only">Open main menu</span>
          <svg
            className={`h-7 w-7 transition-transform ${open ? 'rotate-90' : ''}`}
            viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"
          >
            {open ? (
              <path d="M6 18L18 6M6 6l12 12" />
            ) : (
              <>
                <path d="M3 6h18" />
                <path d="M3 12h18" />
                <path d="M3 18h18" />
              </>
            )}
          </svg>
        </button>
      </div>

      {/* Mobile menu panel */}
      <div
        id="mobile-menu"
        className={`md:hidden overflow-hidden transition-[max-height,opacity] duration-300 ${
          open ? 'max-h-48 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <nav className="px-6 pb-4 pt-2 flex flex-col gap-4 text-lg font-gagalin text-white border-t border-white/20 bg-[#18165A]/90">
          <NavLink onClick={() => setOpen(false)} to="/about"
            className={({ isActive }) => isActive ? 'opacity-100 border-b border-white w-fit' : 'opacity-80 hover:opacity-100'}
          ><b>ABOUT</b></NavLink>
          <NavLink onClick={() => setOpen(false)} to="/blog"
            className={({ isActive }) => isActive ? 'opacity-100 border-b border-white w-fit' : 'opacity-80 hover:opacity-100'}
          ><b>BLOG</b></NavLink>
        </nav>
      </div>
    </header>
  )
}
