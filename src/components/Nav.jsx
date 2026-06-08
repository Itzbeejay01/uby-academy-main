import { useState, useEffect } from 'react'
import { NavLink } from 'react-router-dom'

export default function Nav() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const baseClass =
    'relative text-[15px] tracking-wide uppercase transition-colors duration-300 py-1'
  const inactiveClass = 'text-on-surface-variant hover:text-secondary'
  const activeClass = 'text-secondary'

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-background/90 backdrop-blur-xl shadow-[0_1px_0_rgba(246,190,57,0.08)]'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-container-max mx-auto flex items-center justify-between px-margin-mobile md:px-margin-desktop py-5">
        {/* Logo */}
        <NavLink
          to="/"
          className="text-xl md:text-2xl font-bold text-secondary tracking-tight shrink-0"
        >
          UBY&apos;S
          <span className="text-on-surface font-light ml-2">Academy</span>
        </NavLink>

        {/* Center Nav Links */}
        <div className="hidden md:flex items-center gap-10">
          <NavLink
            to="/"
            end
            className={({ isActive }) =>
              `${baseClass} ${isActive ? activeClass : inactiveClass}`
            }
          >
            Home
          </NavLink>
          <NavLink
            to="/about-us"
            className={({ isActive }) =>
              `${baseClass} ${isActive ? activeClass : inactiveClass}`
            }
          >
            About Us
          </NavLink>
          <NavLink
            to="/faculty"
            className={({ isActive }) =>
              `${baseClass} ${isActive ? activeClass : inactiveClass}`
            }
          >
            Faculty
          </NavLink>
          <NavLink
            to="/programs"
            className={({ isActive }) =>
              `${baseClass} ${isActive ? activeClass : inactiveClass}`
            }
          >
            Programs
          </NavLink>
          <NavLink
            to="/performances"
            className={({ isActive }) =>
              `${baseClass} ${isActive ? activeClass : inactiveClass}`
            }
          >
            Performances
          </NavLink>
          <NavLink
            to="/admissions"
            className={({ isActive }) =>
              `${baseClass} ${isActive ? activeClass : inactiveClass}`
            }
          >
            Admissions
          </NavLink>
        </div>

        {/* CTA */}
        <button className="bg-secondary text-on-secondary text-sm font-semibold uppercase tracking-widest px-6 py-3 rounded-lg hover:opacity-90 active:scale-95 transition-all shrink-0">
          Audition Now
        </button>
      </div>
    </nav>
  )
}
