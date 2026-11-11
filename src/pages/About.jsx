import React from 'react'
import '../App.css'

export default function About() {
  return (
    <section className="mx-auto max-w-4xl py-10 md:py-16 min-h-[calc(100vh-160px)] flex items-center">
      <div className="w-full flex flex-col items-center gap-8">

        {/* Single card wrapping everything */}
        <div className="w-full rounded-3xl p-6 md:p-10 bg-[rgba(4,22,90,0.55)] border border-white/20 backdrop-blur-sm flex flex-col items-center gap-6">

          {/* Name heading */}
          <h1 className="text-5xl md:text-7xl font-gagalin text-white tracking-wide text-center">
            protorobo
          </h1>

          {/* Profile picture */}
          <img
            src={`${import.meta.env.BASE_URL}images/pfp.png`}
            alt="protorobo profile"
            className="w-40 h-40 md:w-56 md:h-56 rounded-2xl object-cover border-2 border-white/30"
          />

          {/* Bio */}
          <p className="text-white/70 text-lg md:text-xl leading-relaxed text-center max-w-2xl">
            A place to document the builds. Drones, robots, embedded systems, whatever's on the
            bench at the time. Some posts are full breakdowns, others are just notes from the weekend.
          </p>

        </div>

      </div>
    </section>
  )
}
