export default function Admissions() {
  return (
    <>
      <main className="pt-24 overflow-x-hidden">
        {/* Hero Section */}
        <section
          className="relative min-h-[716px] flex flex-col items-center justify-center text-center px-margin-mobile md:px-margin-desktop"
          style={{
            background:
              'radial-gradient(circle at center, rgba(15,45,82,0.3) 0%, rgba(18,20,18,1) 70%)',
          }}
        >
          <div className="max-w-4xl space-y-unit">
            <span className="text-label-sm text-secondary tracking-[0.3em] uppercase mb-4 block">
              Enrollment 2025
            </span>
            <h1 className="text-display-md md:text-display-lg font-bold text-on-surface leading-tight">
              Mastery Awaits Your Bow.
            </h1>
            <p className="text-body-lg text-on-surface-variant max-w-2xl mx-auto mt-6">
              Joining UBY&rsquo;S String Academy is more than an academic
              pursuit; it is an induction into a legacy of world-class
              virtuosity and artistic precision.
            </p>
          </div>
        </section>

        {/* Pathways to Excellence */}
        <section className="py-24 px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-gutter">
            <div className="max-w-xl">
              <h2 className="text-display-md font-semibold text-secondary">
                Pathways to Excellence
              </h2>
              <p className="text-body-lg mt-4 text-on-surface-variant">
                Our curricula are designed to challenge the limits of technical
                proficiency while nurturing the soul of the performer.
              </p>
            </div>
            <div className="hidden md:block h-px flex-1 bg-secondary/20 mb-6 mx-8"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-gutter">
            {/* Concertmaster Diploma */}
            <div className="group relative aspect-[3/4] overflow-hidden glass-panel flex flex-col justify-end p-8 transition-all duration-500 hover:border-secondary/40">
              <img
                className="absolute inset-0 w-full h-full object-cover opacity-40 group-hover:opacity-60 group-hover:scale-105 transition-all duration-700"
                alt="A macro cinematic shot of a master-crafted violin headstock and tuning pegs."
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuAMRs4VfW6zeKBFp2xsXBIEcQxk0g7mzLQQgTXef-ycD7Lta1muK875HD1_zFnMSb8RQ0nQ816ny15W43NDH-FqMX1nwlXPuiqqoZlPm8GjM1PxZBOKgJhcRFDVhlKE8XnCcXrgvLsdJ4DygCaYY2Pfi2qHDge5prEZzD052vYTLroGCTN5eVw60hndC6fk8Z9ZUdHXrJPrU8sUOieAaftAtz-kTflXTPu8LZqf4iGNtWx2evUH0aZOfC4bxq9EmaHE6-voItZo6Q"
              />
              <div className="relative z-10 space-y-4">
                <span className="inline-block px-3 py-1 bg-tertiary-container text-secondary text-label-sm rounded-xl">
                  Advanced
                </span>
                <h3 className="text-headline-lg font-semibold text-on-surface">
                  Concertmaster Diploma
                </h3>
                <p className="text-body-md text-on-surface-variant">
                  Three-year intensive focusing on solo repertoire and
                  orchestral leadership.
                </p>
                <a
                  className="inline-flex items-center text-secondary text-label-sm gap-2 gold-underline"
                  href="#"
                >
                  VIEW CURRICULUM <span className="text-sm">→</span>
                </a>
              </div>
            </div>

            {/* Artist-in-Residence */}
            <div className="group relative aspect-[3/4] overflow-hidden glass-panel flex flex-col justify-end p-8 transition-all duration-500 hover:border-secondary/40">
              <img
                className="absolute inset-0 w-full h-full object-cover opacity-40 group-hover:opacity-60 group-hover:scale-105 transition-all duration-700"
                alt="A professional cellist's hand in mid-performance."
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCjS4eUj_F_UJrkD7Twa9BRcWGdgUoOvjMQWJqZs6fMnvxTO2KgZALd5weRXmDjD5t_KafUrzQ96_1-x20Qf8K251LEwQz0-w04ZTPtuMMDPD9DQAgJpvoa9db4T4plD3JosdVARjhDcjZeRdMsFiHpROznV0M8J3qqADL6Q6W1szCeBTa8erEvyQTnYFyoUnXGPsvdw9dzoj7vnGeZdAq4j7TnMRXBxbi8h-y4xpTsrZE30q7hJmGmb_LCrQI7FDki3ycX7pD53w"
              />
              <div className="relative z-10 space-y-4">
                <span className="inline-block px-3 py-1 bg-tertiary-container text-secondary text-label-sm rounded-xl">
                  Post-Graduate
                </span>
                <h3 className="text-headline-lg font-semibold text-on-surface">
                  Artist-in-Residence
                </h3>
                <p className="text-body-md text-on-surface-variant">
                  Bespoke mentorship for established artists preparing for
                  international competition.
                </p>
                <a
                  className="inline-flex items-center text-secondary text-label-sm gap-2 gold-underline"
                  href="#"
                >
                  VIEW CURRICULUM <span className="text-sm">→</span>
                </a>
              </div>
            </div>

            {/* Chamber Music Fellowship */}
            <div className="group relative aspect-[3/4] overflow-hidden glass-panel flex flex-col justify-end p-8 transition-all duration-500 hover:border-secondary/40">
              <img
                className="absolute inset-0 w-full h-full object-cover opacity-40 group-hover:opacity-60 group-hover:scale-105 transition-all duration-700"
                alt="An elegant sheet music score laid out on a dark mahogany desk."
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCKkcITNBfQzypDrzsUIPNAkrwhhdBrHnblabk3wPDqUpt3fB9tiIC6BkyVfRm_V0m9eNfmeDgmOieZjXQhZlpkvUc0x3yVX44cQjRXG2oaWQPPRkbrntkdfguLzgkh6qgbYWynQqv7Y0090CzvLKiD4stYaalUzDha9uExpJu6saVxKHb47yX7LRl8ao4paXewlZOT6NHbPtOcE4XERwZcWaqmeb9osCEQ1NBk02wEJ4YaNbZw7hHxM6lbgVpL0bc4J8wEQuMYLQ"
              />
              <div className="relative z-10 space-y-4">
                <span className="inline-block px-3 py-1 bg-tertiary-container text-secondary text-label-sm rounded-xl">
                  Collaborative
                </span>
                <h3 className="text-headline-lg font-semibold text-on-surface">
                  Chamber Music Fellowship
                </h3>
                <p className="text-body-md text-on-surface-variant">
                  Focusing on the intricate dialogue of string quartets and
                  piano trios.
                </p>
                <a
                  className="inline-flex items-center text-secondary text-label-sm gap-2 gold-underline"
                  href="#"
                >
                  VIEW CURRICULUM <span className="text-sm">→</span>
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* The Audition Process */}
        <section className="py-24 bg-surface-container-low overflow-hidden">
          <div className="px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto">
            <div className="text-center mb-20">
              <h2 className="text-display-md font-semibold text-on-surface">
                The Audition Process
              </h2>
              <p className="text-body-lg text-on-surface-variant mt-4">
                A step-by-step journey to entering the Academy.
              </p>
            </div>

            <div className="relative flex flex-col md:flex-row justify-between gap-12">
              <div className="hidden md:block absolute top-12 left-0 w-full h-px bg-secondary/10 z-0"></div>

              <div className="relative z-10 flex-1 flex flex-col items-center text-center group cursor-default">
                <div className="w-24 h-24 rounded-full bg-surface-container-highest border border-secondary/20 flex items-center justify-center mb-8 group-hover:border-secondary transition-all duration-500">
                  <span className="text-secondary text-4xl">🎵</span>
                </div>
                <h4 className="text-label-sm text-secondary mb-2">
                  STEP 01
                </h4>
                <h3 className="text-headline-lg font-semibold mb-4">
                  Initial Portfolio
                </h3>
                <p className="text-body-md text-on-surface-variant px-4">
                  Submit high-quality recordings of three contrasting works from
                  different eras.
                </p>
              </div>

              <div className="relative z-10 flex-1 flex flex-col items-center text-center group cursor-default">
                <div className="w-24 h-24 rounded-full bg-surface-container-highest border border-secondary/20 flex items-center justify-center mb-8 group-hover:border-secondary transition-all duration-500">
                  <span className="text-secondary text-4xl">💬</span>
                </div>
                <h4 className="text-label-sm text-secondary mb-2">
                  STEP 02
                </h4>
                <h3 className="text-headline-lg font-semibold mb-4">
                  Faculty Interview
                </h3>
                <p className="text-body-md text-on-surface-variant px-4">
                  A dialogue with the department heads regarding your artistic
                  vision and goals.
                </p>
              </div>

              <div className="relative z-10 flex-1 flex flex-col items-center text-center group cursor-default">
                <div className="w-24 h-24 rounded-full bg-surface-container-highest border border-secondary/20 flex items-center justify-center mb-8 group-hover:border-secondary transition-all duration-500">
                  <span className="text-secondary text-4xl">🎪</span>
                </div>
                <h4 className="text-label-sm text-secondary mb-2">
                  STEP 03
                </h4>
                <h3 className="text-headline-lg font-semibold mb-4">
                  Live Performance
                </h3>
                <p className="text-body-md text-on-surface-variant px-4">
                  An in-person performance at our Grand Hall for the final
                  adjudication board.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Global Certification */}
        <section className="py-32 px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-20">
            <div className="relative">
              <div className="absolute -top-10 -left-10 w-40 h-40 border-l border-t border-secondary/20"></div>
              <img
                className="w-full h-[500px] object-cover rounded-sm grayscale hover:grayscale-0 transition-all duration-1000 shadow-2xl"
                alt="A prestigious, high-end graduation diploma folder."
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBott1phci93OyuDS3YRQzcdgOyXr6_ccjFQeXfcLZDa8spcFh3gkqdeN2X1jQ9YChHBz17V8MKRzLFVhBqmgjhzBfachXA6JXnyD8ShnjvpT68JgiEKFyhNlf3W6ZelD1jS7lmfPaiPVumXZh_wu6lNPrvYjDoGZ8cGMrsGvXDFfCMzLNlFOs_8e9g97E49gRKo9aI6TKpMoBkyPdo6BkcsaimzTGXR_32phstTzHf0WDSBrpvVpmCak67j8jrYJMQnrul22fIzw"
              />
              <div className="absolute bottom-10 right-10 bg-surface px-8 py-6 border border-secondary/30">
                <p className="text-headline-lg font-semibold text-secondary">
                  A1+ Rated
                </p>
                <p className="text-label-sm text-on-surface-variant uppercase tracking-widest">
                  Global Standard
                </p>
              </div>
            </div>
            <div className="space-y-8">
              <h2 className="text-display-md font-semibold text-on-surface">
                Global Certification
              </h2>
              <p className="text-body-lg text-on-surface-variant leading-relaxed">
                UBY&rsquo;S certificates are recognized by the World Alliance of
                Musical Conservatories and leading orchestral bodies. Our alumni
                hold positions in the top five orchestras globally, from the
                Berlin Philharmonic to the New York Symphony.
              </p>
              <ul className="space-y-6">
                <li className="flex items-start gap-4">
                  <span className="text-secondary mt-1 text-xl">✓</span>
                  <div>
                    <h4 className="text-body-lg font-semibold">
                      International Accreditation
                    </h4>
                    <p className="text-on-surface-variant text-body-md">
                      Seamless credit transfer to 40+ premier conservatories
                      worldwide.
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <span className="text-secondary mt-1 text-xl">✓</span>
                  <div>
                    <h4 className="text-body-lg font-semibold">
                      Artist Mobility Network
                    </h4>
                    <p className="text-on-surface-variant text-body-md">
                      Exclusive visa sponsorship and global performance
                      placement support.
                    </p>
                  </div>
                </li>
              </ul>
              <div className="pt-8">
                <button className="border border-on-surface text-on-surface px-10 py-4 text-label-sm uppercase tracking-widest hover:bg-secondary hover:border-secondary hover:text-on-secondary transition-all duration-300">
                  Download Prospectus
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="py-24 border-t border-secondary/10">
          <div className="px-margin-mobile md:px-margin-desktop max-w-4xl mx-auto text-center space-y-10">
            <h2 className="text-display-md font-bold text-on-surface italic">
              &ldquo;The strings wait for no one.&rdquo;
            </h2>
            <p className="text-body-lg text-on-surface-variant">
              The Fall 2025 application window closes on February 15th. Start
              your journey into the elite world of string performance today.
            </p>
            <div className="flex flex-col md:flex-row gap-6 justify-center">
              <button className="bg-secondary text-on-secondary px-12 py-5 text-label-sm font-semibold uppercase tracking-[0.2em] transform transition hover:-translate-y-1 hover:shadow-xl active:translate-y-0">
                Apply for Audition
              </button>
              <button className="border border-secondary/30 text-secondary px-12 py-5 text-label-sm font-semibold uppercase tracking-[0.2em] hover:bg-secondary/10 transition-colors">
                Inquire with Dean
              </button>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="w-full py-20 px-margin-mobile md:px-margin-desktop flex flex-col md:flex-row justify-between items-start gap-gutter max-w-container-max mx-auto border-t border-secondary/10 bg-surface-container-lowest">
        <div className="max-w-sm space-y-6">
          <div className="text-headline-lg font-bold text-secondary">
            UBY&apos;S Academy
          </div>
          <p className="text-body-md text-on-surface-variant">
            Dedicated to the preservation of string artistry and the development
            of the next generation of musical masters.
          </p>
          <p className="text-body-md text-on-surface-variant">
            &copy; 2024 UBY&apos;S String Academy. Excellence in Musical
            Artistry.
          </p>
        </div>
        <div className="grid grid-cols-2 gap-12">
          <div className="flex flex-col gap-3">
            <span className="text-label-sm text-secondary mb-2 uppercase">
              Explore
            </span>
            <a className="text-body-md text-on-surface-variant hover:text-secondary transition-colors" href="#">
              Heritage
            </a>
            <a className="text-body-md text-on-surface-variant hover:text-secondary transition-colors" href="#">
              Faculty
            </a>
            <a className="text-body-md text-on-surface-variant hover:text-secondary transition-colors" href="#">
              Programs
            </a>
            <a className="text-body-md text-on-surface-variant hover:text-secondary transition-colors" href="#">
              Performances
            </a>
          </div>
          <div className="flex flex-col gap-3">
            <span className="text-label-sm text-secondary mb-2 uppercase">
              Institutional
            </span>
            <a className="text-body-md text-on-surface-variant hover:text-secondary transition-colors" href="#">
              Privacy Policy
            </a>
            <a className="text-body-md text-on-surface-variant hover:text-secondary transition-colors" href="#">
              Terms of Service
            </a>
            <a className="text-body-md text-on-surface-variant hover:text-secondary transition-colors" href="#">
              Press Room
            </a>
            <a className="text-body-md text-on-surface-variant hover:text-secondary transition-colors" href="#">
              Alumni Network
            </a>
            <a className="text-body-md text-on-surface-variant hover:text-secondary transition-colors" href="#">
              Contact Us
            </a>
          </div>
        </div>
      </footer>
    </>
  )
}
