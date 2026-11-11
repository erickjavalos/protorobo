import React from 'react'
import { useLocation } from 'react-router-dom'

export default function Background() {
  const location = useLocation()
  const isPortfolio = location.pathname === '/portfolio'
  const baseUrl = import.meta.env.BASE_URL

  return (
    <div
      className="fixed inset-0 -z-20 pointer-events-none overflow-hidden"
      aria-hidden="true"
    >
      <picture className="absolute inset-0 w-screen h-screen">
        {/* Mobile: use the small background.png */}
        <source
          media="(max-width: 639px)"
          srcSet={`${baseUrl}images/background.png`}
        />
        {/* Desktop: use the richer fixed.jpeg */}
        <source
          media="(min-width: 640px)"
          srcSet={`${baseUrl}images/fixed.jpeg`}
        />
        <img
          src={`${baseUrl}images/fixed.jpeg`}
          alt="decorative background"
          className="w-full h-full object-cover opacity-95 pointer-events-none select-none"
          loading="eager"
        />
      </picture>
    </div>
  )
}
