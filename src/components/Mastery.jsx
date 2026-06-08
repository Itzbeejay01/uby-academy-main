export default function Mastery() {
  return (
    <section className="relative py-32 px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto overflow-hidden">
      <div className="floating-accent top-0 left-0"></div>
      <div className="grid md:grid-cols-12 gap-gutter items-center">
        <div className="md:col-span-5 relative">
          <div className="aspect-[4/5] rounded-lg overflow-hidden border border-secondary/20">
            <img
              className="w-full h-full object-cover"
              alt="A macro photograph showing the precise detail of a violin's f-hole and bridge."
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuCCqYYDcwLJn9fBBo_S8HukR2GzloLAkzppciX_0A_3hENhbhPVgyVuR4zTmjOkmzIdLGOmkRHWKYkKByNVX7JU9g9ZpyLpLAm72OvECC1JggilDwWimIE6-cgMuu29BgOke84Aj32tSETty0KJnimIolXxCY-NXX8mzw9FCJiYUU5hybFPd0HwBmUwK0eY568sC3LdxbIp4wsBGJCu-Oc6p18PqJ4gdfGSxjmYTjNvjxHIORz4dQ6H3qWWUaHjGnI0OATWuTiW8A"
            />
          </div>
          <div className="absolute -bottom-8 -right-8 w-48 h-48 border border-secondary/40 bg-background/80 backdrop-blur-lg flex flex-col items-center justify-center p-4 hidden md:flex">
            <span className="text-secondary text-[40px] font-bold">1892</span>
            <span className="text-label-sm uppercase tracking-widest">Founded</span>
          </div>
        </div>

        <div className="md:col-span-7 flex flex-col justify-center gap-6">
          <span className="text-secondary text-label-sm uppercase tracking-[0.3em]">
            Our Philosophy
          </span>
          <h2 className="text-display-md leading-tight font-semibold">
            The Art of <br />
            <span className="italic font-normal">Rigorous Mastery</span>
          </h2>
          <div className="w-20 h-1 bg-secondary"></div>
          <p className="text-body-lg text-on-surface-variant max-w-xl">
            At UBY&apos;S, we believe that musical genius is not merely discovered,
            but meticulously forged. Our curriculum bridges the gap between
            traditional European heritage and contemporary performance dynamics,
            demanding absolute technical perfection as the foundation for
            artistic soul.
          </p>
          <p className="text-body-lg text-on-surface-variant max-w-xl">
            Every student is paired with a master-level mentor, ensuring that
            the nuances of bow technique and expressive phrasing are passed down
            with the same reverence as a family heirloom.
          </p>
          <a
            className="text-secondary text-label-sm uppercase tracking-widest flex items-center gap-2 mt-4 hover:gap-4 transition-all group"
            href="#"
          >
            Explore our pedagogy
            <span className="text-[18px] group-hover:translate-x-1 transition-transform">→</span>
          </a>
        </div>
      </div>
    </section>
  )
}
