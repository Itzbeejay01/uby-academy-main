export default function AuditionBanner() {
  return (
    <section className="py-24 px-margin-mobile md:px-margin-desktop">
      <div className="bg-secondary-container rounded-3xl p-12 md:p-20 text-center relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 blur-3xl rounded-full translate-x-1/2 -translate-y-1/2"></div>
        <h2 className="text-display-md md:text-display-lg font-bold text-on-secondary-container mb-8">
          Join the 2025 Cohort
        </h2>
        <p className="text-on-secondary-container/80 max-w-2xl mx-auto mb-10 text-body-lg">
          Applications for our prestigious 2025 programs are now open. We seek
          individuals with exceptional talent, relentless discipline, and the
          courage to pursue artistic perfection.
        </p>
        <div className="flex flex-col sm:flex-row gap-gutter justify-center">
          <button className="bg-on-secondary-container text-white px-12 py-5 rounded-xl text-label-sm uppercase tracking-widest hover:scale-105 transition-transform shadow-2xl">
            Start Application
          </button>
          <button className="border border-on-secondary-container/40 text-on-secondary-container px-12 py-5 rounded-xl text-label-sm uppercase tracking-widest hover:bg-on-secondary-container hover:text-white transition-all">
            Download Brochure
          </button>
        </div>
      </div>
    </section>
  )
}
