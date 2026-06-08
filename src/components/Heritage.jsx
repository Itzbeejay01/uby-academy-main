export default function Heritage() {
  return (
    <>
      <main>
        {/* Hero Section */}
        <section className="relative min-h-screen flex items-center justify-center pt-24 overflow-hidden">
          <div className="absolute inset-0 z-0">
            <img
              className="w-full h-full object-cover"
              alt="A grand, high-ceilinged concert hall with ornate gold leaf details and dark mahogany wood."
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuBtuihBtFZfEGrw91F3wzhhwKjhp4qoCVYKmTbV1c8dY9qmzRxuoYYoWQP0OYa4E3_aWjbO5tUiO7Lz7eXK1ieNF_LGeQqJ_4l8A_ZfF8mpEWvibRpNpdq_OIeX9vso4KvDgKiLtX1RygXBmqohurUV2DFBOVAYfSb_FWE2VnXRUtKf9upXuCLUEWyEJM_p2lS4CUTE454kg2r-3StTA-1Fou0Rg_38Qz9hrLcIyo1PSp2cVX5uYKb8XpEeo-oA4KF0NctDUKnPTw"
            />
            <div
              className="absolute inset-0"
              style={{
                background:
                  'radial-gradient(circle, transparent 20%, rgba(18,20,18,0.9) 100%)',
              }}
            ></div>
          </div>
          <div className="relative z-10 text-center px-margin-mobile md:px-margin-desktop max-w-4xl">
            <span className="text-label-sm text-secondary uppercase mb-6 block tracking-[0.2em] opacity-80">
              Established 1924
            </span>
            <h1 className="text-display-md md:text-display-lg font-bold text-on-surface mb-8 italic">
              The Art of the String
            </h1>
            <p className="text-body-lg text-on-surface-variant leading-relaxed mb-12">
              An odyssey through a century of musical virtuosity, where heritage
              meets the vanguard of contemporary performance.
            </p>
            <div className="flex flex-col md:flex-row gap-6 justify-center items-center">
              <div className="h-[1px] w-24 bg-secondary/40 hidden md:block"></div>
              <span className="text-label-sm text-secondary uppercase tracking-widest">
                Scroll to explore
              </span>
              <div className="h-[1px] w-24 bg-secondary/40 hidden md:block"></div>
            </div>
          </div>
        </section>

        {/* Our Heritage Section */}
        <section className="py-32 px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto overflow-hidden">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-gutter items-center">
            <div className="md:col-span-5 order-2 md:order-1 relative">
              <div className="absolute -top-10 -left-10 w-40 h-40 border-l border-t border-secondary/20 z-0"></div>
              <img
                className="relative z-10 w-full grayscale contrast-125 border border-secondary/10"
                alt="A grainy, sepia-toned vintage photograph of a master violinist teaching a young prodigy in a Parisian studio."
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuD7AT0eiGlFToAuxbvjTVrsyZyBjxOCr8d_uFTKOKRy-NZ9Dp1vVv0UE56WUGDhYKQfbM3wov6dIS6h41fs7ITTX_TkNtSZMPIrcVZsYJ7SGqguqAbh6xESID-5KpZ_VbYcePs0Z0BAPgpSgNM_amAvoMyDaaABBh_Mshz113OxJUj2mv6jqQWTROEX7sGvzuQu3aymcOS6QX-42gvvX0CLsQlRdGf0aYYhwNG_DbA9KjytHEf2F3ai_5W6LduFw3az5x2srLVICQ"
              />
              <div className="mt-8 glass-container p-8">
                <p className="text-body-md italic text-secondary">
                  &ldquo;Music is the silence between the notes, but our
                  heritage is the foundation of that silence.&rdquo;
                </p>
                <p className="text-label-sm text-on-surface-variant mt-4 text-right">
                  &mdash; Maestro Julian Uby
                </p>
              </div>
            </div>
            <div className="md:col-span-6 md:col-start-7 order-1 md:order-2 mb-16 md:mb-0">
              <h2 className="text-display-md font-semibold text-secondary mb-8">
                Our Heritage
              </h2>
              <div className="space-y-6">
                <p className="text-body-lg text-on-surface leading-relaxed">
                  Founded in the heart of the cultural renaissance, UBY&apos;S
                  String Academy was born from a singular vision: to preserve
                  the delicate alchemy of traditional lutherie and performance
                  while fostering a laboratory for future masters.
                </p>
                <p className="text-body-md text-on-surface-variant">
                  For ten decades, we have remained an anchor for the
                  world&apos;s most promising talent. Our halls have echoed with
                  the first notes of legendary soloists and the disciplined
                  rigor of the finest orchestral leaders. We do not just teach
                  an instrument; we transmit a lineage of artistic soul.
                </p>
                <div className="pt-8 grid grid-cols-2 gap-gutter">
                  <div>
                    <h4 className="text-display-md font-semibold text-on-surface">
                      100+
                    </h4>
                    <p className="text-label-sm text-secondary uppercase">
                      Years of Excellence
                    </p>
                  </div>
                  <div>
                    <h4 className="text-display-md font-semibold text-on-surface">
                      42
                    </h4>
                    <p className="text-label-sm text-secondary uppercase">
                      Global Laureates
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Academic Excellence Bento Grid */}
        <section className="bg-surface-container-low py-32 px-margin-mobile md:px-margin-desktop">
          <div className="max-w-container-max mx-auto">
            <div className="text-center mb-24">
              <h2 className="text-display-md font-semibold text-on-surface mb-4">
                Academic Excellence
              </h2>
              <div className="w-16 h-1 bg-secondary mx-auto mb-8"></div>
              <p className="text-body-lg text-on-surface-variant max-w-2xl mx-auto">
                A curriculum designed for the tireless pursuit of perfection,
                blending scientific precision with intuitive artistry.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 md:grid-rows-2 gap-gutter md:h-[800px]">
              {/* Solo Artistry - 2 cols, 2 rows */}
              <div className="md:col-span-2 md:row-span-2 glass-container relative overflow-hidden group">
                <img
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  alt="A close-up, high-shutter-speed shot of a violinist's hands in motion during a solo performance."
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuC2ybwbtmj2OGEIxpfoRqv2k7WlEaLxVOrNjAJnFh85MkCFuS9vDW24agMAOMTBdG6aQz7ONdDxLvbBBZ7e2ftVDRYsfVo9oMkSdrPCCSr16V7ATDdfnxpcV0H7F3a-ypedewBARd1VSe-MwbqdJIdXKz0s7Ulc3BP0snvwd4xLnug5PDwTiOu2zTVW3IOREVE-0bitWynATGIvlNS9xJCT8Yh30KqpgATIsBOxVjsRqXXI5Qotofb4rKVpR2SKA57444p-_6hZoQ"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-surface-container-lowest to-transparent opacity-80"></div>
                <div className="absolute bottom-0 left-0 p-12">
                  <h3 className="text-display-md font-semibold text-on-surface mb-4">
                    Solo Artistry
                  </h3>
                  <p className="text-body-md text-on-surface-variant max-w-sm">
                    Individualized intensive training sessions focusing on
                    technical mastery and individual voice development.
                  </p>
                </div>
              </div>

              {/* Theory - 2 cols */}
              <div className="md:col-span-2 glass-container p-12 flex flex-col justify-center border-l-4 border-l-secondary">
                <span className="text-secondary text-5xl mb-6">📚</span>
                <h3 className="text-headline-lg font-semibold text-on-surface mb-4">
                  Theoretic Foundations
                </h3>
                <p className="text-body-md text-on-surface-variant">
                  Deep immersion into musicology, composition, and the physics
                  of acoustics. We believe a master must understand the
                  &apos;why&apos; behind every vibration.
                </p>
              </div>

              {/* Ensemble */}
              <div className="glass-container group relative overflow-hidden flex flex-col justify-end p-8">
                <div className="absolute inset-0 bg-on-tertiary-fixed opacity-10 group-hover:opacity-20 transition-opacity"></div>
                <h3 className="text-headline-lg font-semibold text-secondary mb-2 relative z-10">
                  Ensemble
                </h3>
                <p className="text-label-sm text-on-surface-variant relative z-10">
                  THE DIALOGUE OF STRINGS
                </p>
              </div>

              {/* Modern Vistas */}
              <div className="glass-container p-8 flex flex-col justify-center items-center text-center">
                <div className="w-12 h-12 rounded-full bg-secondary-container/20 flex items-center justify-center mb-4">
                  <span className="text-secondary text-xl">〰️</span>
                </div>
                <h3 className="text-label-sm text-on-surface uppercase tracking-widest mb-2">
                  Modern Vistas
                </h3>
                <p className="text-body-md text-on-surface-variant text-[14px]">
                  Exploring contemporary repertoire and acoustic-electronic
                  fusion.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Mentorship & Mastery */}
        <section className="py-32 px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto">
          <div className="flex flex-col md:flex-row gap-20 items-start">
            <div className="w-full md:w-1/3">
              <h2 className="text-display-md font-semibold text-secondary mb-8 md:sticky md:top-32">
                Mentorship
                <br />&amp; Mastery
              </h2>
              <p className="text-body-lg text-on-surface leading-relaxed mb-8">
                At UBY&apos;S, education is not a lecture; it is an inheritance. Our
                faculty members are not just instructors&mdash;they are active
                practitioners on the world&apos;s most prestigious stages.
              </p>
              <div className="space-y-12">
                <div className="border-b border-secondary/10 pb-8 transition-all hover:pl-4 hover:border-secondary">
                  <span className="text-label-sm text-secondary uppercase tracking-widest">
                    The Relationship
                  </span>
                  <h4 className="text-headline-lg font-semibold text-on-surface mt-2">
                    One-to-One Legacy
                  </h4>
                  <p className="text-body-md text-on-surface-variant mt-4">
                    Students are paired with a single mentor for their entire
                    tenure, ensuring a profound understanding of their growth
                    and psychological artistic development.
                  </p>
                </div>
                <div className="border-b border-secondary/10 pb-8 transition-all hover:pl-4 hover:border-secondary">
                  <span className="text-label-sm text-secondary uppercase tracking-widest">
                    The Masterclasses
                  </span>
                  <h4 className="text-headline-lg font-semibold text-on-surface mt-2">
                    Visiting Sovereigns
                  </h4>
                  <p className="text-body-md text-on-surface-variant mt-4">
                    Quarterly masterclasses with visiting conductors and soloists
                    from the Berlin and Vienna Philharmonics.
                  </p>
                </div>
              </div>
            </div>

            <div className="w-full md:w-2/3 grid grid-cols-1 md:grid-cols-2 gap-gutter">
              <div className="space-y-gutter mt-12">
                <img
                  className="w-full h-[400px] object-cover border border-secondary/10"
                  alt="A wide shot of a masterclass session in a sun-drenched library."
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuAl8JGJSjUjMpYa0lXkmIK5XY47tJJFA-T4kncDFlVsF1InKTyj_dHsNKv735Kb0kwP0keS_zAb2-E3jsN7a7XxtSx-GBPKpRcZ2DYF7vxVHbYYDJ3wBsDmd5YTA50di5fD1RJjArvaP2x5BtuooRifIOSFhVy_O5SkP6VNFyeg7suo3NSDtPhEZWAenXJhT0wxkoIKcPUnlvp_zFn8FRgAY26vdSeNPoV8GqhmBHTq17tgnEJydktDnyxJbCIuqy4DffkdomylbA"
                />
                <img
                  className="w-full h-[500px] object-cover border border-secondary/10"
                  alt="A portrait of a renowned cellist mentor in their private studio."
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuAlxVLZ8kxXCPBT7s3hZQ7u3lG2my7i0ZSjbA8AG8MGsb6AwC7NQC3OckGYpbk2VsJ2InLan4sAeInU0WWAt2CaafcE6E_t7rVFJTtheMQW9LVT9KbkHDpHxLI5gxSzmsqJ22xtTKzCEc3Mgbu_kZVDshoDtDdzasRkip9hwL9ZpXB_e-O18B6l4SHratC_SFGEPX4mFviPIdi3P7fWjE6on4og4vBhuIPZTbiQP8ULyCMG3hszhO9DTg7558ziog9pfKBTw0OdOg"
                />
              </div>
              <div className="space-y-gutter">
                <img
                  className="w-full h-[600px] object-cover border border-secondary/10"
                  alt="A high-angle shot of a chamber group practicing in a modern glass-walled studio."
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuChTyMHS5TWReNs4TP9X1NiJafiuVbCWwq-j_mZA-3GMgOZpGpAt2XWdmH2YZSPelZluwniBZ2W8ZfBk0Gt1v6TSh-Kio_0IlGRIpzTNj8DQAIB_5QnJlYXCBXVIXgGp20Z6s6ywL8DZpba0ypM9ww_knD2z3xb7vYQJnvjUvWegb5rhRqt3QomFg2sK9D947hP5LjzXAQczpilPQ-pooMMa0a0G3qQJghbU9LBsmq4WOrRmH3GOMv48ycoPOKG07ECEpQav7sstA"
                />
                <div className="bg-secondary p-12 text-on-secondary">
                  <h3 className="text-display-md font-bold mb-6 italic">
                    &ldquo;To teach is to listen.&rdquo;
                  </h3>
                  <p className="text-body-md">
                    Join our next cohort of masters. The legacy begins with your
                    first note.
                  </p>
                  <button className="mt-8 border-2 border-on-secondary px-8 py-3 text-label-sm uppercase hover:bg-on-secondary hover:text-secondary transition-colors">
                    Apply for 2025
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Signature Quote */}
        <section className="py-40 bg-surface-container-lowest border-y border-secondary/10 text-center px-margin-mobile">
          <div className="max-w-4xl mx-auto">
            <span className="text-secondary text-6xl mb-8 block">❝</span>
            <h2 className="text-display-md md:text-display-lg font-bold italic text-on-surface leading-tight mb-12">
              &ldquo;We do not merely teach students to play strings; we teach
              them to command the very air in the room.&rdquo;
            </h2>
            <div className="flex items-center justify-center gap-4">
              <div className="w-12 h-[1px] bg-secondary/40"></div>
              <span className="text-label-sm text-secondary uppercase tracking-[0.3em]">
                Directorate of Artistry
              </span>
              <div className="w-12 h-[1px] bg-secondary/40"></div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="w-full py-20 px-margin-mobile md:px-margin-desktop flex flex-col md:flex-row justify-between items-start gap-gutter max-w-container-max mx-auto border-t border-secondary/10 bg-surface-container-lowest">
        <div className="flex flex-col gap-6">
          <div className="text-display-md font-bold text-secondary">
            UBY&apos;S
          </div>
          <p className="text-body-md text-on-surface-variant max-w-xs">
            &copy; 2024 UBY&apos;S String Academy. Excellence in Musical Artistry.
          </p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-12">
          <div className="flex flex-col gap-4">
            <span className="text-label-sm text-secondary uppercase mb-2">
              Explore
            </span>
            <a className="text-body-md text-on-surface-variant hover:text-secondary transition-all hover:translate-x-1" href="#">
              Heritage
            </a>
            <a className="text-body-md text-on-surface-variant hover:text-secondary transition-all hover:translate-x-1" href="#">
              Alumni Network
            </a>
            <a className="text-body-md text-on-surface-variant hover:text-secondary transition-all hover:translate-x-1" href="#">
              Press Room
            </a>
          </div>
          <div className="flex flex-col gap-4">
            <span className="text-label-sm text-secondary uppercase mb-2">
              Legal
            </span>
            <a className="text-body-md text-on-surface-variant hover:text-secondary transition-all hover:translate-x-1" href="#">
              Privacy Policy
            </a>
            <a className="text-body-md text-on-surface-variant hover:text-secondary transition-all hover:translate-x-1" href="#">
              Terms of Service
            </a>
          </div>
          <div className="flex flex-col gap-4">
            <span className="text-label-sm text-secondary uppercase mb-2">
              Connect
            </span>
            <a className="text-body-md text-on-surface-variant hover:text-secondary transition-all hover:translate-x-1" href="#">
              Contact Us
            </a>
            <div className="flex gap-4 mt-2">
              <span className="text-secondary cursor-pointer hover:opacity-70 text-xl">▶</span>
              <span className="text-secondary cursor-pointer hover:opacity-70 text-xl">📷</span>
            </div>
          </div>
        </div>
      </footer>
    </>
  )
}
