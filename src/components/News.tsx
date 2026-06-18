import { useState, useEffect } from 'react'
import news from '../data/news.json'

interface NewsItem {
  id: number
  title: string
  summary: string
  fullDescription: string
  image: string
  date: string
  category: string
  badge: string
}

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString('en-US', {
    month: 'long',
    day: 'numeric',
    year: 'numeric',
  })
}

function NewsModal({ item, onClose }: { item: NewsItem; onClose: () => void }) {
  useEffect(() => {
    const handler = (e: KeyboardEvent) => { if (e.key === 'Escape') onClose() }
    document.addEventListener('keydown', handler)
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', handler)
      document.body.style.overflow = ''
    }
  }, [onClose])

  return (
    <div
      className="fixed inset-0 z-50 flex items-end sm:items-center justify-center sm:p-4 bg-black/80 backdrop-blur-sm"
      onClick={onClose}
    >
      <div
        className="relative bg-[#0d1f0d] border border-lime-500/30 rounded-t-2xl sm:rounded-2xl w-full sm:max-w-2xl max-h-[92vh] overflow-y-auto shadow-[0_0_60px_rgba(163,230,53,0.15)]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Drag handle (mobile) */}
        <div className="flex justify-center pt-3 pb-1 sm:hidden">
          <div className="w-10 h-1 rounded-full bg-white/20" />
        </div>

        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 w-8 h-8 rounded-full bg-white/10 hover:bg-lime-500/30 flex items-center justify-center text-white hover:text-lime-400 transition-colors"
          aria-label="Close"
        >
          ✕
        </button>

        {/* Image */}
        <div className="relative w-full overflow-hidden rounded-t-2xl sm:rounded-t-2xl">
          <img
            src={item.image}
            alt={item.title}
            className="w-full object-contain max-h-64 sm:max-h-80 bg-[#0a160a]"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0d1f0d] via-transparent to-transparent" />
          <span className="absolute top-4 left-4 text-xs font-bold bg-lime-500 text-black px-3 py-1 rounded-full">
            {item.badge}
          </span>
        </div>

        {/* Content */}
        <div className="p-5 sm:p-8">
          <p className="text-lime-400 text-xs font-semibold tracking-widest uppercase mb-2">
            {item.category} · {formatDate(item.date)}
          </p>
          <h3 className="text-white font-black text-lg sm:text-2xl mb-4 sm:mb-5 leading-snug">
            {item.title}
          </h3>
          <div className="text-gray-300 text-sm leading-relaxed space-y-4">
            {item.fullDescription.split('\n\n').map((para, i) => (
              <p key={i}>{para}</p>
            ))}
          </div>
          {/* Close button at bottom for easy mobile tap */}
          <button
            onClick={onClose}
            className="mt-6 w-full py-3 rounded-xl border border-lime-500/40 text-lime-400 text-sm font-semibold hover:bg-lime-500/10 transition-colors sm:hidden"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  )
}

export default function News() {
  const [selected, setSelected] = useState<NewsItem | null>(null)
  const allNews = news as NewsItem[]

  return (
    <section id="news" className="py-16 sm:py-24 bg-[#050f05]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="text-center mb-10 sm:mb-14">
          <p className="text-lime-400 text-sm font-semibold tracking-widest uppercase mb-3">Updates</p>
          <h2 className="text-3xl sm:text-4xl font-black text-lime-400 mb-3">NEWS</h2>
          <div className="w-20 h-1 bg-lime-500 mx-auto rounded-full mb-4" />
          <p className="text-gray-400 max-w-xl mx-auto text-sm sm:text-base">
            Latest announcements, design releases, and updates from Sihyu IT Solutions.
          </p>
        </div>

        {/* Mobile: stacked full-width cards */}
        <div className="flex flex-col gap-4 sm:hidden">
          {allNews.map((item) => (
            <button
              key={item.id}
              onClick={() => setSelected(item)}
              className="group flex gap-4 rounded-2xl overflow-hidden border border-white/10 bg-white/5 active:border-lime-500/60 transition-all duration-200 text-left"
            >
              <div className="relative w-28 shrink-0 overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover"
                />
                <span className="absolute top-2 left-1 text-[9px] font-bold bg-lime-500 text-black px-1.5 py-0.5 rounded leading-tight">
                  {item.badge}
                </span>
              </div>
              <div className="py-4 pr-4 flex flex-col justify-center gap-1">
                <p className="text-lime-400/70 text-[10px] font-semibold uppercase tracking-wider">{item.category}</p>
                <h3 className="text-white font-bold text-sm leading-snug line-clamp-2">{item.title}</h3>
                <p className="text-gray-500 text-[10px]">{formatDate(item.date)}</p>
                <span className="text-lime-400 text-xs font-semibold mt-1">Read More →</span>
              </div>
            </button>
          ))}
        </div>

        {/* Desktop: featured + side list */}
        <div className="hidden sm:grid grid-cols-1 lg:grid-cols-3 gap-6">

          {/* Featured card */}
          <button
            onClick={() => setSelected(allNews[0])}
            className="lg:col-span-1 group rounded-2xl overflow-hidden border border-white/10 bg-white/5 hover:border-lime-500/50 transition-all duration-300 flex flex-col text-left"
          >
            <div className="relative overflow-hidden h-56">
              <img
                src={allNews[0].image}
                alt={allNews[0].title}
                className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
              <span className="absolute top-3 left-3 text-xs font-bold bg-lime-500 text-black px-2 py-1 rounded-md">
                {allNews[0].badge}
              </span>
            </div>
            <div className="p-5 flex flex-col flex-1">
              <p className="text-gray-500 text-xs mb-1">{formatDate(allNews[0].date)}</p>
              <p className="text-lime-400/70 text-xs font-semibold uppercase tracking-wider mb-2">{allNews[0].category}</p>
              <h3 className="text-white font-bold text-lg mb-3 group-hover:text-lime-400 transition-colors leading-snug">
                {allNews[0].title}
              </h3>
              <p className="text-gray-400 text-sm leading-relaxed flex-1 line-clamp-3">{allNews[0].summary}</p>
              <span className="mt-4 inline-flex items-center gap-1 text-lime-400 text-sm font-semibold group-hover:gap-2 transition-all">
                Read More
                <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </span>
            </div>
          </button>

          {/* Rest */}
          <div className="lg:col-span-2 flex flex-col gap-5">
            {allNews.slice(1).map((item) => (
              <button
                key={item.id}
                onClick={() => setSelected(item)}
                className="group flex gap-4 rounded-2xl overflow-hidden border border-white/10 bg-white/5 hover:border-lime-500/50 transition-all duration-300 text-left"
              >
                <div className="relative w-36 sm:w-44 shrink-0 overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <span className="absolute top-2 left-2 text-[10px] font-bold bg-lime-500 text-black px-2 py-0.5 rounded">
                    {item.badge}
                  </span>
                </div>
                <div className="p-4 flex flex-col justify-center">
                  <p className="text-gray-500 text-xs mb-1">{formatDate(item.date)}</p>
                  <p className="text-lime-400/70 text-xs font-semibold uppercase tracking-wider mb-1">{item.category}</p>
                  <h3 className="text-white font-bold text-base mb-2 group-hover:text-lime-400 transition-colors leading-snug">
                    {item.title}
                  </h3>
                  <p className="text-gray-400 text-sm leading-relaxed line-clamp-2">{item.summary}</p>
                  <span className="mt-2 inline-flex items-center gap-1 text-lime-400 text-xs font-semibold group-hover:gap-2 transition-all">
                    Read More →
                  </span>
                </div>
              </button>
            ))}
          </div>
        </div>
      </div>

      {selected && <NewsModal item={selected} onClose={() => setSelected(null)} />}
    </section>
  )
}
