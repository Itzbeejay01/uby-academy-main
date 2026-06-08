import { useEffect, useRef } from 'react'

export default function Hero() {
  const titleRef = useRef(null)
  const subRef = useRef(null)
  const ctaRef = useRef(null)

  useEffect(() => {
    const title = titleRef.current
    const sub = subRef.current
    const cta = ctaRef.current

    setTimeout(() => {
      if (title) {
        title.style.opacity = '1'
        title.style.transform = 'translateY(0)'
      }
    }, 300)

    setTimeout(() => {
      if (sub) {
        sub.style.opacity = '1'
      }
    }, 800)

    setTimeout(() => {
      if (cta) {
        cta.style.opacity = '1'
      }
    }, 1200)
  }, [])

  return (
    <section className="relative h-screen w-full flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img
          className="w-full h-full object-cover opacity-60"
          alt="A cinematic, low-key photograph of a violin soloist performing on a grand stage."
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuCnHrgkARZBB4IchwQIoSaxgGJ2cDoUPlJ-kHauW-ZMQDRHMByVXELRLCBZfd_EliQL_koTqasMMpggMgW8IcjUPYReMgQo9ubfEvsDV2or2A2fRCM8-qBn1UR2UZP8qzOWDyh-dJAr8k1McL_3H-5KxAT0U277hn4WweCFZVb5a-8IknXzleH7XvrEJvX-SQFSPg0O3D9_2eCSW-tlBH8JKLjInI0AKaVvu9T8M_qvRbL75RngKNbiowjyLLwz6dHs8Anv5XeI6g"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent"></div>
      </div>

      <div className="relative z-10 text-center px-margin-mobile md:px-margin-desktop max-w-5xl">
        <h1
          ref={titleRef}
          className="text-[48px] md:text-display-lg leading-tight md:leading-[80px] font-bold text-on-surface mb-8 opacity-0 translate-y-10 transition-all duration-1000 ease-out"
        >
          The Pinnacle of{' '}
          <span className="text-secondary italic">String Excellence</span>
        </h1>
        <p
          ref={subRef}
          className="text-body-lg text-on-surface-variant max-w-2xl mx-auto mb-10 opacity-0 transition-all duration-1000 delay-300"
        >
          Cultivating the next generation of virtuosos through architectural
          precision, centuries of tradition, and an unwavering commitment to
          the art of performance.
        </p>
        <div
          ref={ctaRef}
          className="flex flex-col sm:flex-row gap-gutter justify-center opacity-0 transition-all duration-1000 delay-500"
        >
          <button className="bg-secondary-container text-on-secondary-container px-10 py-5 rounded-xl text-label-sm uppercase tracking-widest inner-glow-btn hover:scale-105 transition-transform">
            Audition for 2025
          </button>
          <button className="border border-on-surface/30 text-on-surface px-10 py-5 rounded-xl text-label-sm uppercase tracking-widest hover:bg-on-tertiary-fixed-variant backdrop-blur-sm transition-colors">
            View Programs
          </button>
        </div>
      </div>
    </section>
  )
}
