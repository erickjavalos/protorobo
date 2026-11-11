import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import posts from '../data/posts.js'

const STATUS_COLORS = {
  'In Progress': 'bg-yellow-400/20 text-yellow-300 border-yellow-400/40',
  'Completed':   'bg-green-400/20  text-green-300  border-green-400/40',
  'Tutorial':    'bg-blue-400/20   text-blue-300   border-blue-400/40',
}

function formatDate(dateStr) {
  return new Date(dateStr).toLocaleDateString('en-US', {
    year: 'numeric', month: 'long', day: 'numeric',
  })
}

export default function Blog() {
  const categories = ['All', ...Array.from(new Set(posts.map(p => p.category)))]
  const [active, setActive] = useState('All')

  const filtered = active === 'All' ? posts : posts.filter(p => p.category === active)

  return (
    <section className="mx-auto max-w-5xl py-10 md:py-16 min-h-[calc(100vh-160px)]">

      {/* Page header */}
      <div className="mb-10 md:mb-14 rounded-3xl p-6 md:p-10 bg-[rgba(4,22,90,0.55)] border border-white/20 backdrop-blur-sm">
        <h1 className="text-5xl md:text-7xl font-gagalin text-white tracking-wide mb-4">
          BLOG
        </h1>
        <p className="text-white/70 text-lg md:text-xl max-w-2xl leading-relaxed">
          A place to document the builds. Drones, robots, embedded systems, whatever's on the bench at the time.
          Some posts are full breakdowns, others are just notes from the weekend.
        </p>
      </div>

      {/* Category filter + empty state */}
      <div className="rounded-3xl p-4 bg-[rgba(4,22,90,0.55)] border border-white/20 backdrop-blur-sm mb-8">
        <div className="flex flex-wrap gap-2 mb-0">
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => setActive(cat)}
              className={`px-4 py-1.5 rounded-full font-gagalin text-sm md:text-base border transition-all ${
                active === cat
                  ? 'bg-white text-[#18165A] border-white'
                  : 'bg-white/10 text-white border-white/20 hover:bg-white/20'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {filtered.length === 0 && (
          <p className="text-white/40 text-lg font-gagalin mt-4 pt-4 border-t border-white/10 text-center">
            No posts yet in this category.
          </p>
        )}
      </div>

      {/* Post grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {filtered.map(post => (
          <Link
            key={post.id}
            to={`/blog/${post.id}`}
            className="group block rounded-2xl overflow-hidden bg-[rgba(4,22,90,0.55)] border border-white/20 backdrop-blur-sm hover:border-white/50 transition-all hover:-translate-y-1 duration-200 no-underline"
          >
            {/* Cover image */}
            {post.cover ? (
              <div className="w-full h-44 overflow-hidden">
                <img
                  src={post.cover}
                  alt={post.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
            ) : (
              <div className="w-full h-44 bg-[rgba(4,22,90,0.4)] flex items-center justify-center">
                <span className="text-white/20 font-gagalin text-4xl">{post.category}</span>
              </div>
            )}

            {/* Card body */}
            <div className="p-5">
              {/* Tags row */}
              <div className="flex flex-wrap items-center gap-2 mb-3">
                <span className="text-xs px-2.5 py-0.5 rounded-full bg-white/10 text-white/70 border border-white/20 font-gagalin">
                  {post.category}
                </span>
                <span className={`text-xs px-2.5 py-0.5 rounded-full border font-gagalin ${STATUS_COLORS[post.status] ?? 'bg-white/10 text-white/70 border-white/20'}`}>
                  {post.status}
                </span>
              </div>

              {/* Title */}
              <h2 className="text-white font-gagalin text-xl md:text-2xl leading-snug mb-2 group-hover:underline">
                {post.title}
              </h2>

              {/* Summary */}
              <p className="text-white/60 text-sm md:text-base leading-relaxed line-clamp-3 mb-4">
                {post.summary}
              </p>

              {/* Date + read more */}
              <div className="flex items-center justify-between">
                <span className="text-white/40 text-xs font-gagalin">{formatDate(post.date)}</span>
                <span className="text-white/60 text-xs font-gagalin group-hover:text-white transition-colors">
                  Read more →
                </span>
              </div>
            </div>
          </Link>
        ))}
      </div>

    </section>
  )
}
