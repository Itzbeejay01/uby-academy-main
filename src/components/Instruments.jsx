const instruments = [
  {
    name: 'Violin',
    path: 'Virtuoso Path',
    description:
      'Mastering the soaring heights of the treble through intensive focus on intonation and projection.',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuC9zdw_Z174UOmG4MblvLcrhiicQArJmnAds7IN8ZIP3_FJFWUpEIqOPcecQHdkqdHyYTnf7cVm-O8v5iDywCnXU2IBdoLCKsLxyTupiG0pZzUQko4XTR_OjdfyfdtZBBbGU0pPuzoX-uRxznW-wlz8K2lAXvs8VKmciGH0QVruQWROazT2AC3p66k9e8U6HRO3VQ2UlF3ZnAS1_UDPlXUHHKxrU6SL6Fj-Ho4rMm275JYWL0cAMxoS2XvMa-UUAu-NVRYXSg2SBA',
    alt: 'A high-end, editorial portrait of a professional-grade violin.',
  },
  {
    name: 'Viola',
    path: 'Artisan Path',
    description:
      'Exploring the rich, melancholic inner voices and the unique technical demands of the alto clef.',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuA-9Ge1W9YUKpQyd3v--cNDM-WgyBK2INC6Zwl-UKw7_n1MlumhPENWt3XVf9QRjGkyN3JeZYViVdMHmAkuP28HwjTRvLw6OYRa8H55Dxg_T18iVqeVQ2gRhly-04JBivVKZw2v2XudwwGTeeY9vjZvKGNs9Cm7jASM1IviL-zWFmVijXl_NPuo8N59zvm2Mnoh2ReuTTYPykLAdCJgdHfZ9J2_tgEwUOXkHNrJQvkjVqwXoJpp8AiKsjqRz3XTt3i669b1WlEZRw',
    alt: 'A sophisticated close-up of a viola being played.',
  },
  {
    name: 'Cello',
    path: 'Resonant Path',
    description:
      'The pursuit of resonant power and lyricism from the foundational bass to the lyric tenor register.',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuBUY2G3hJwAlARvXvm55gnrGG-gUvPHPKzNa3NtETrendZ1p7vDzwgOpCMxI7KJw0Tq3Gn8BptaLY6EOd_QKM2YzCfNncUI7EQlLvd1eluW1zCS6P3CjMaMBPy4cXjAamtxKoxJb4RiTaG1vauGdRKbT3a-Fr7SxwADLUZq1Lq035-RooDTDTtCAhmAie9ZCUH0oS-kzoGhHnuraI6N8mFH0qAPoba6tN_PqsC8g9R6-GIxQs2aIPYBOkjUZNvnUI4SfqS96jsxqA',
    alt: 'A powerful image of a cello standing on a stage.',
  },
]

export default function Instruments() {
  return (
    <section className="py-32 bg-surface-container-low px-margin-mobile md:px-margin-desktop">
      <div className="max-w-container-max mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-gutter">
          <div className="max-w-xl">
            <span className="text-secondary text-label-sm uppercase tracking-[0.3em]">
              Disciplines
            </span>
            <h2 className="text-display-md font-semibold mt-4">
              Instruments of Distinction
            </h2>
          </div>
          <div className="flex gap-4">
            <button className="w-12 h-12 rounded-full border border-secondary/40 flex items-center justify-center hover:bg-secondary/10 transition-colors group">
              <span className="text-secondary group-hover:-translate-x-1 transition-transform text-lg">←</span>
            </button>
            <button className="w-12 h-12 rounded-full border border-secondary/40 flex items-center justify-center hover:bg-secondary/10 transition-colors group">
              <span className="text-secondary group-hover:translate-x-1 transition-transform text-lg">→</span>
            </button>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-gutter">
          {instruments.map((inst) => (
            <div
              key={inst.name}
              className="glass-card group p-2 relative overflow-hidden"
            >
              <div className="aspect-[3/4] overflow-hidden mb-6">
                <img
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  alt={inst.alt}
                  src={inst.image}
                />
              </div>
              <div className="p-4">
                <div className="flex justify-between items-center mb-2">
                  <h3 className="text-headline-lg text-on-surface font-semibold">
                    {inst.name}
                  </h3>
                  <span className="bg-on-tertiary-fixed-variant text-secondary px-3 py-1 rounded-full text-[10px] uppercase tracking-wider">
                    {inst.path}
                  </span>
                </div>
                <p className="text-body-md text-on-surface-variant mb-6">
                  {inst.description}
                </p>
                <a
                  className="inline-block text-label-sm uppercase text-secondary tracking-widest text-underline-draw"
                  href="#"
                >
                  Curriculum details
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
