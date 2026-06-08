export default function Footer() {
  return (
    <footer className="w-full py-20 px-margin-mobile md:px-margin-desktop flex flex-col md:flex-row justify-between items-start gap-gutter max-w-container-max mx-auto border-t border-secondary/10 bg-surface-container-lowest">
      <div className="md:w-1/3">
        <div className="text-display-md font-bold text-secondary mb-6">
          UBY&apos;S Academy
        </div>
        <p className="text-on-surface-variant text-body-md opacity-70 mb-8">
          Elevating string performance since 1892. A sanctuary for artistic
          pursuit and the home of world-class virtuosos.
        </p>
        <div className="flex gap-6">
          <a className="text-on-surface-variant hover:text-secondary transition-colors text-xl" href="#">
            ♪
          </a>
          <a className="text-on-surface-variant hover:text-secondary transition-colors text-xl" href="#">
            ♫
          </a>
          <a className="text-on-surface-variant hover:text-secondary transition-colors text-xl" href="#">
            ♬
          </a>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-x-20 gap-y-4">
        <div className="flex flex-col gap-3">
          <p className="text-label-sm uppercase text-secondary mb-2">
            Academy
          </p>
          <a
            className="text-on-surface-variant hover:text-secondary transition-all text-body-md hover:translate-x-1"
            href="#"
          >
            Heritage
          </a>
          <a
            className="text-on-surface-variant hover:text-secondary transition-all text-body-md hover:translate-x-1"
            href="#"
          >
            Faculty
          </a>
          <a
            className="text-on-surface-variant hover:text-secondary transition-all text-body-md hover:translate-x-1"
            href="#"
          >
            Programs
          </a>
          <a
            className="text-on-surface-variant hover:text-secondary transition-all text-body-md hover:translate-x-1"
            href="#"
          >
            Admissions
          </a>
        </div>
        <div className="flex flex-col gap-3">
          <p className="text-label-sm uppercase text-secondary mb-2">
            Legal
          </p>
          <a
            className="text-on-surface-variant hover:text-secondary transition-all text-body-md hover:translate-x-1"
            href="#"
          >
            Privacy Policy
          </a>
          <a
            className="text-on-surface-variant hover:text-secondary transition-all text-body-md hover:translate-x-1"
            href="#"
          >
            Terms of Service
          </a>
          <a
            className="text-on-surface-variant hover:text-secondary transition-all text-body-md hover:translate-x-1"
            href="#"
          >
            Press Room
          </a>
          <a
            className="text-on-surface-variant hover:text-secondary transition-all text-body-md hover:translate-x-1"
            href="#"
          >
            Contact Us
          </a>
        </div>
      </div>

      <div className="md:w-1/4">
        <p className="text-label-sm uppercase text-secondary mb-6">
          Stay Informed
        </p>
        <div className="flex gap-0 border-b border-secondary/30 pb-2">
          <input
            className="bg-transparent border-none focus:ring-0 text-on-surface w-full text-body-md placeholder:opacity-40 outline-none"
            placeholder="Email Address"
            type="email"
          />
          <button className="text-secondary hover:translate-x-2 transition-transform">
            <span className="text-lg">→</span>
          </button>
        </div>
        <p className="text-[12px] text-on-surface-variant opacity-40 mt-12">
          &copy; 2024 UBY&apos;S String Academy. Excellence in Musical Artistry.
        </p>
      </div>
    </footer>
  )
}
