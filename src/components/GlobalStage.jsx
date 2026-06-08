export default function GlobalStage() {
  return (
    <section className="relative py-32 bg-primary-container/20 px-margin-mobile md:px-margin-desktop overflow-hidden">
      <div className="max-w-container-max mx-auto relative z-10">
        <div className="flex flex-col md:flex-row gap-gutter">
          <div className="md:w-1/2">
            <span className="text-secondary text-label-sm uppercase tracking-[0.3em]">
              International Partnerships
            </span>
            <h2 className="text-display-md font-semibold mt-4 mb-8">
              A Global Stage
            </h2>
            <p className="text-body-lg text-on-surface-variant mb-12">
              Music knows no borders. At UBY&apos;S, our students don&apos;t just study
              in one room; they integrate into a global network of premier
              conservatories, festivals, and concert series spanning four
              continents.
            </p>

            <div className="space-y-8">
              <div className="flex items-start gap-6 group">
                <div className="w-12 h-12 flex-shrink-0 border border-secondary flex items-center justify-center text-secondary text-2xl font-semibold">
                  01
                </div>
                <div>
                  <h5 className="text-[22px] leading-tight font-semibold mb-1 group-hover:text-secondary transition-colors">
                    London Exchange Program
                  </h5>
                  <p className="text-on-surface-variant opacity-70 text-body-md">
                    A semester of residency with the Royal Philharmonic Orchestra&apos;s principal players.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-6 group">
                <div className="w-12 h-12 flex-shrink-0 border border-secondary flex items-center justify-center text-secondary text-2xl font-semibold">
                  02
                </div>
                <div>
                  <h5 className="text-[22px] leading-tight font-semibold mb-1 group-hover:text-secondary transition-colors">
                    Berlin Technical Seminar
                  </h5>
                  <p className="text-on-surface-variant opacity-70 text-body-md">
                    Intensive workshops focused on German string methodology and chamber music mastery.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-6 group">
                <div className="w-12 h-12 flex-shrink-0 border border-secondary flex items-center justify-center text-secondary text-2xl font-semibold">
                  03
                </div>
                <div>
                  <h5 className="text-[22px] leading-tight font-semibold mb-1 group-hover:text-secondary transition-colors">
                    The New York Gala
                  </h5>
                  <p className="text-on-surface-variant opacity-70 text-body-md">
                    Annual showcase at Carnegie Hall for our graduating elite cohort.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="md:w-1/2 relative min-h-[500px]">
            <div className="absolute inset-0 bg-on-secondary-fixed/10 border border-secondary/10 rounded-2xl p-1">
              <div className="w-full h-full bg-[#0d0f0d] rounded-xl overflow-hidden relative">
                <div
                  className="absolute inset-0 opacity-20 pointer-events-none"
                  style={{
                    backgroundImage:
                      'radial-gradient(#f6be39 1px, transparent 1px)',
                    backgroundSize: '30px 30px',
                  }}
                ></div>
                <div className="relative w-full h-full flex flex-col items-center justify-center text-center p-12">
                  <span className="text-[80px] text-secondary mb-6">🌐</span>
                  <h4 className="text-display-md font-semibold mb-4 gold-glow">
                    World-Class Network
                  </h4>
                  <p className="text-body-md text-on-surface-variant max-w-sm mb-8">
                    Access the globe&apos;s most prestigious stages through our 12
                    international partner institutions.
                  </p>
                  <button className="border border-secondary text-secondary px-8 py-3 rounded-lg text-label-sm uppercase tracking-[0.2em] hover:bg-secondary hover:text-on-secondary transition-all">
                    View Map
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
