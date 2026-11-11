import React from 'react'
import '../App.css'

export default function Portfolio() {
  return (
    <section className="mx-auto max-w-5xl py-10 md:py-16 min-h-[calc(100vh-160px)]">

      {/* Section heading */}
      <h1 className="text-5xl md:text-7xl font-gagalin text-white tracking-wide text-center mb-10">
        PORTFOLIO
      </h1>

      {/* Coming soon card */}
      <div
        className="
          w-full rounded-3xl p-10 md:p-16
          bg-[rgba(4,22,90,0.55)]
          border border-white/20
          backdrop-blur-sm
          text-white text-2xl md:text-3xl
          text-center font-gagalin
          flex flex-col items-center gap-4
        "
      >
        <p className="opacity-80">Projects coming soon.</p>
        <p className="text-base md:text-lg opacity-60">Check back later!</p>
      </div>

    </section>
  )
}
