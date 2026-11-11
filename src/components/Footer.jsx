import React from 'react'

export default function Footer() {
  return (
    <footer className="border-t-2 border-white/40 bg-[#18165A]/80 backdrop-blur-md">
      <div className="mx-auto px-6 md:px-10 py-3 md:py-4 text-white font-gagalin">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-2">

          {/* Copyright */}
          <p className="text-sm md:text-lg font-bold">© 2026 protorobo. All rights reserved.</p>

          {/* Social links */}
          <div className="flex items-center gap-4 text-sm md:text-lg font-bold">
            <span>Stay connected:</span>
            <a
              href="https://www.linkedin.com/in/erick-avalos-13014012a"
              target="_blank"
              rel="noopener noreferrer"
              className="underline hover:opacity-70 transition-opacity"
            >
              LinkedIn
            </a>
            <span>•</span>
            <a
              href="https://www.instagram.com/protorobo/"
              target="_blank"
              rel="noopener noreferrer"
              className="underline hover:opacity-70 transition-opacity"
            >
              Instagram
            </a>
          </div>

        </div>
      </div>
    </footer>
  )
}
