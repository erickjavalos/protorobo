import React from 'react'
import { useParams, Link } from 'react-router-dom'
import posts from '../data/posts.js'
import '../App.css'

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

function Block({ block }) {
  switch (block.type) {
    case 'heading':
      return (
        <h2 className="text-2xl md:text-3xl font-gagalin text-white mt-8 mb-3">
          {block.content}
        </h2>
      )
    case 'text':
      return (
        <p className="text-white/80 text-base md:text-lg leading-relaxed mb-4">
          {block.content}
        </p>
      )
    case 'list':
      return (
        <ul className="mb-4 space-y-2 pl-2">
          {block.items.map((item, i) => (
            <li key={i} className="flex gap-2 text-white/80 text-base md:text-lg leading-relaxed">
              <span className="text-white/40 select-none mt-1">—</span>
              <span>{item}</span>
            </li>
          ))}
        </ul>
      )
    case 'image':
      return (
        <figure className="my-6">
          <img
            src={block.src}
            alt={block.caption ?? ''}
            className="w-full rounded-xl object-cover border border-white/10"
          />
          {block.caption && (
            <figcaption className="text-white/40 text-sm mt-2 text-center italic">
              {block.caption}
            </figcaption>
          )}
        </figure>
      )
    case 'code':
      return (
        <pre className="my-4 p-4 rounded-xl bg-black/40 border border-white/10 overflow-x-auto">
          <code className="text-green-300 text-sm font-mono leading-relaxed whitespace-pre">
            {block.content}
          </code>
        </pre>
      )
    default:
      return null
  }
}

export default function PostPage() {
  const { slug } = useParams()
  const post = posts.find(p => p.id === slug)

  if (!post) {
    return (
      <section className="mx-auto max-w-3xl py-16 min-h-[calc(100vh-160px)] flex flex-col items-center justify-center gap-4">
        <p className="text-white/60 font-gagalin text-2xl">Post not found.</p>
        <Link to="/blog" className="text-white underline font-gagalin hover:opacity-70">← Back to Build Log</Link>
      </section>
    )
  }

  return (
    <article className="mx-auto max-w-3xl py-10 md:py-16 min-h-[calc(100vh-160px)]">

      {/* Back link */}
      <Link to="/blog" className="text-white/50 hover:text-white font-gagalin text-sm transition-colors no-underline mb-8 inline-block">
        ← Build Log
      </Link>

      {/* Cover */}
      {post.cover && (
        <div className="w-full h-56 md:h-72 rounded-2xl overflow-hidden mb-8 border border-white/10">
          <img src={post.cover} alt={post.title} className="w-full h-full object-cover" />
        </div>
      )}

      {/* Meta */}
      <div className="flex flex-wrap items-center gap-2 mb-4">
        <span className="text-xs px-2.5 py-0.5 rounded-full bg-white/10 text-white/70 border border-white/20 font-gagalin">
          {post.category}
        </span>
        <span className={`text-xs px-2.5 py-0.5 rounded-full border font-gagalin ${STATUS_COLORS[post.status] ?? 'bg-white/10 text-white/70 border-white/20'}`}>
          {post.status}
        </span>
        <span className="text-white/30 text-xs font-gagalin ml-auto">{formatDate(post.date)}</span>
      </div>

      {/* Title */}
      <h1 className="text-4xl md:text-6xl font-gagalin text-white tracking-wide leading-tight mb-6">
        {post.title}
      </h1>

      {/* Summary */}
      <p className="text-white/60 text-lg md:text-xl leading-relaxed mb-8 border-l-2 border-white/20 pl-4 italic">
        {post.summary}
      </p>

      {/* Divider */}
      <div className="border-t border-white/10 mb-8" />

      {/* Body blocks */}
      <div>
        {post.body.map((block, i) => (
          <Block key={i} block={block} />
        ))}
      </div>

      {/* Footer nav */}
      <div className="border-t border-white/10 mt-12 pt-6">
        <Link to="/blog" className="text-white/50 hover:text-white font-gagalin text-sm transition-colors no-underline">
          ← Back to Build Log
        </Link>
      </div>

    </article>
  )
}
