import { useState } from 'react'

export default function Contact() {
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)
  const [newsletter, setNewsletter] = useState(false)

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setLoading(true)
    const form = e.currentTarget
    const data = new FormData(form)

    try {
      const res = await fetch('https://formspree.io/f/xrbkzodb', {
        method: 'POST',
        body: data,
        headers: { Accept: 'application/json' },
      })
      if (res.ok) {
        setSubmitted(true)
        form.reset()
        setNewsletter(false)
      }
    } finally {
      setLoading(false)
    }
  }

  return (
    <section id="contact" className="py-16 sm:py-24 bg-[#081208]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="text-center mb-10 sm:mb-14">
          <p className="text-lime-400 text-sm font-semibold tracking-widest uppercase mb-3">Get In Touch</p>
          <h2 className="text-3xl sm:text-4xl font-black text-white mb-3">
            CONTACT <span className="text-lime-400">US</span>
          </h2>
          <div className="w-20 h-1 bg-lime-500 mx-auto rounded-full mb-4" />
          <p className="text-gray-400 max-w-xl mx-auto text-sm leading-relaxed">
            Fill out the form and we'll reach back to you.
            You can also contact us at{' '}
            <a href="tel:+639928041384" className="text-lime-400 hover:underline">0992 804 1384</a>
            {' '}or{' '}
            <a href="mailto:sihyusolutions.dev@gmail.com" className="text-lime-400 hover:underline">
              sihyusolutions.dev@gmail.com
            </a>
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-6 lg:gap-10">

          {/* Form */}
          <div className="lg:col-span-3">
            <div className="bg-white/5 border border-white/10 rounded-2xl p-5 sm:p-8">
              <h3 className="text-white font-black text-lg sm:text-xl mb-5 sm:mb-6">Send Us a Message</h3>

              {submitted ? (
                <div className="text-center py-10 sm:py-12">
                  <div className="text-5xl mb-4">✅</div>
                  <h4 className="text-lime-400 font-bold text-xl mb-2">Message Sent!</h4>
                  <p className="text-gray-400 text-sm">Thank you! We'll be in touch soon.</p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="mt-6 text-lime-400 text-sm underline hover:text-lime-300"
                  >
                    Send another message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-gray-300 text-sm font-medium mb-1" htmlFor="firstName">
                        First Name <span className="text-lime-400">*</span>
                      </label>
                      <input
                        id="firstName"
                        name="firstName"
                        type="text"
                        required
                        placeholder="Juan"
                        className="w-full bg-white/5 border border-white/15 rounded-lg px-4 py-3 text-white text-sm placeholder-gray-600 focus:outline-none focus:border-lime-500 transition-colors"
                      />
                    </div>
                    <div>
                      <label className="block text-gray-300 text-sm font-medium mb-1" htmlFor="lastName">
                        Last Name <span className="text-lime-400">*</span>
                      </label>
                      <input
                        id="lastName"
                        name="lastName"
                        type="text"
                        required
                        placeholder="Dela Cruz"
                        className="w-full bg-white/5 border border-white/15 rounded-lg px-4 py-3 text-white text-sm placeholder-gray-600 focus:outline-none focus:border-lime-500 transition-colors"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-gray-300 text-sm font-medium mb-1" htmlFor="email">
                      Email <span className="text-lime-400">*</span>
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      required
                      placeholder="juan@email.com"
                      className="w-full bg-white/5 border border-white/15 rounded-lg px-4 py-3 text-white text-sm placeholder-gray-600 focus:outline-none focus:border-lime-500 transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-gray-300 text-sm font-medium mb-1" htmlFor="message">
                      Let us know what's on your mind <span className="text-lime-400">*</span>
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      rows={5}
                      placeholder="Tell us about your project..."
                      className="w-full bg-white/5 border border-white/15 rounded-lg px-4 py-3 text-white text-sm placeholder-gray-600 focus:outline-none focus:border-lime-500 transition-colors resize-none"
                    />
                  </div>

                  <label className="flex items-start gap-3 cursor-pointer select-none group">
                    <div
                      onClick={() => setNewsletter(!newsletter)}
                      className={`mt-0.5 w-5 h-5 rounded border-2 flex items-center justify-center shrink-0 transition-colors ${
                        newsletter ? 'bg-lime-500 border-lime-500' : 'border-white/30 group-hover:border-lime-500/60'
                      }`}
                    >
                      {newsletter && <span className="text-black text-xs font-black">✓</span>}
                    </div>
                    <input
                      type="checkbox"
                      name="newsletter"
                      value="yes"
                      checked={newsletter}
                      onChange={() => setNewsletter(!newsletter)}
                      className="sr-only"
                    />
                    <span className="text-gray-400 text-sm leading-snug">Yes, subscribe me to your newsletter</span>
                  </label>

                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full py-3.5 bg-lime-500 text-black font-bold rounded-lg hover:bg-lime-400 transition-colors disabled:opacity-60 disabled:cursor-not-allowed text-sm tracking-wider"
                  >
                    {loading ? 'SENDING...' : 'SUBMIT'}
                  </button>
                </form>
              )}
            </div>
          </div>

          {/* Info cards */}
          <div className="lg:col-span-2 flex flex-col gap-4">
            {[
              { icon: '📍', label: 'Location', value: 'Philippines' },
              { icon: '📞', label: 'Phone', value: '0992 804 1384', href: 'tel:+639928041384' },
              { icon: '✉️', label: 'Email', value: 'sihyusolutions.dev@gmail.com', href: 'mailto:sihyusolutions.dev@gmail.com' },
            ].map((item) => (
              <div key={item.label} className="flex items-start gap-4 p-4 sm:p-5 rounded-xl bg-white/5 border border-white/10">
                <span className="text-xl sm:text-2xl mt-0.5">{item.icon}</span>
                <div className="min-w-0">
                  <p className="text-lime-400 text-xs font-semibold tracking-wider uppercase mb-0.5">{item.label}</p>
                  {item.href ? (
                    <a href={item.href} className="text-white text-sm font-medium hover:text-lime-400 transition-colors break-all">
                      {item.value}
                    </a>
                  ) : (
                    <p className="text-white text-sm font-medium">{item.value}</p>
                  )}
                </div>
              </div>
            ))}

            <div className="p-4 sm:p-5 rounded-xl bg-lime-500/10 border border-lime-500/30">
              <p className="text-lime-400 font-bold mb-2 text-sm">Ready to start your project?</p>
              <p className="text-gray-400 text-sm leading-relaxed">
                We'd love to hear about your idea. Reach out and our team will get back to you within 24 hours.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
