export default function Performance() {
  return (
    <section className="py-32 px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto overflow-hidden">
      <div className="text-center mb-20">
        <span className="text-secondary text-label-sm uppercase tracking-[0.3em]">
          Timeline
        </span>
        <h2 className="text-display-md font-semibold mt-4">
          A Legacy of Performance
        </h2>
        <div className="w-24 h-1 bg-secondary mx-auto mt-6"></div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 md:grid-rows-2 gap-4 md:h-[800px]">
        {/* Large orchestra image - spans 2 cols, 2 rows */}
        <div className="md:col-span-2 md:row-span-2 relative group overflow-hidden rounded-lg border border-secondary/10">
          <img
            className="w-full h-full object-cover grayscale transition-all duration-700 group-hover:grayscale-0 group-hover:scale-105"
            alt="A wide-angle, cinematic photograph of a full string orchestra performing in a historic cathedral."
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuBdPEiPX8mmtzjCY9KPBLw3hKQTI_atp_0bQpNws3Xx7uOG3E6ilg5qSoPj28r45LuwvzBYn4RdEoLEfYphgaizSEv4BdQ96tKTaNIMzGcZ8kER1kmLlpTlZBJzrcQGbrbnW76DwYuz-OjW2AM8Ri1u44s_HSmGcrJC13H_NG7JXBlUKA2l3btwDKsMlajcF_1OVYQdU6F-dyMLc9pTHEpR_DeaI4x0Dqx_WSKrmsY2FXtrhpQKnIt8ssZZMOgyaftP4_VQHrNV8Q"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background/90 to-transparent flex flex-col justify-end p-8">
            <span className="text-secondary text-label-sm uppercase mb-2">
              2023 | Vienna Residency
            </span>
            <h4 className="text-[32px] font-semibold text-on-surface leading-tight">
              Mozartsaal Anniversary Concert
            </h4>
          </div>
        </div>

        {/* Tokyo Tour - 2 cols */}
        <div className="md:col-span-2 relative group overflow-hidden rounded-lg border border-secondary/10">
          <img
            className="w-full h-full object-cover grayscale transition-all duration-700 group-hover:grayscale-0 group-hover:scale-105"
            alt="A focused, modern shot of a string quartet in a contemporary performance space."
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuCs-PHAr6ZH3TOri57Gz9tCMPusscCTJfqQaekXtOideenwBT9ZB_dDVxPMgOWcdo4eKn8XlFv5dx-2v5mM6E9vWAtOZJwPuH4LxrBmMBGJ73ITvnJE8fskQd7qY_uaq6Es69FyhN5axB5yaOApTEG2ZsCjBFC9YepSqNeHkGCg11ZKiUQBCLEC7gR8zC983jtD0KzGEk_NzgZyOC9poFgNhdp-z4ay4dRwIbjRbVLYttyevFv1rTDLHGkafkdQ8V33z5QbNB8b0g"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background/90 to-transparent flex flex-col justify-end p-8">
            <span className="text-secondary text-label-sm uppercase mb-2">
              2022 | Tokyo Tour
            </span>
            <h4 className="text-headline-lg font-semibold text-on-surface">
              The Suntory Hall Solo Series
            </h4>
          </div>
        </div>

        {/* Craft Tradition - 1 col */}
        <div className="relative group overflow-hidden rounded-lg border border-secondary/10">
          <img
            className="w-full h-full object-cover grayscale transition-all duration-700 group-hover:grayscale-0 group-hover:scale-105"
            alt="A close-up photograph of hands meticulously crafting a bow."
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuBxSVLKdpALnaY7soyHEckD4gydUbaeIjc13GrhhVaD37smNRYUYcu1mN5rbiQzgQXJRdtM4oDjXEf6wS0XtgGTWIY-HdzCzuhZMvOHL-kj-auzLcdYsoVFqrVADszrmF7YCbZe9NRzd4-wgpYapL067y6gE2Xu4yxzNl_7tE9JxGW9y7QOdmCdg2bLsK-maJ706E8tYKj4CYrR6ZV-6g8xtYGsLgz2HLUCJ7AEkbJOD_F4iZkPajkV73-wLJKzcrgnD3Boa2JJng"
          />
          <div className="absolute inset-0 bg-background/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center text-center p-4">
            <p className="text-label-sm uppercase tracking-widest text-secondary">
              The Craft Tradition
            </p>
          </div>
        </div>

        {/* Library of Legacy - 1 col */}
        <div className="relative group overflow-hidden rounded-lg border border-secondary/10">
          <img
            className="w-full h-full object-cover grayscale transition-all duration-700 group-hover:grayscale-0 group-hover:scale-105"
            alt="An atmospheric photo of sheet music resting on an old wooden music stand."
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuAC3uD_wdC925s6UZtGaRDP7pB1S-phqJRPnW7NSeZ2xAXtPC_Xxu8IZ3P1_1dybs9tJowZlsJoR1SBazKHcN_wmsSMTUl8EYlz43dxMj1U4y9k-VtuLI2_AiagbExECuEbdBCd4dUPdQpfCvZoV823ZB0O2hZ2UNgYQFTNjdQj3sU0yVvmK9D8QLogRVJdaooE7wKuFyyW0sANRnhnF-5rHiaxtPs2qUNkZ-gOltwXvEkWYdhTIbuWpERtFcg9LwZOjI46m2Ug_A"
          />
          <div className="absolute inset-0 bg-background/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center text-center p-4">
            <p className="text-label-sm uppercase tracking-widest text-secondary">
              Library of Legacy
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
