import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="/media/cover_photo.jpg"
          alt="The Little Wood Shop workshop"
          fill
          priority
          className="object-cover"
        />
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-charcoal/60 via-charcoal/40 to-charcoal/70" />
        {/* Subtle warm tint */}
        <div className="absolute inset-0 bg-wood-dark/20 mix-blend-multiply" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        {/* Small decorative element */}
        <div className="w-16 h-px bg-amber mx-auto mb-8 animate-fade-in" />

        {/* Main Title */}
        <h1 className="font-display text-5xl md:text-7xl lg:text-8xl text-cream font-semibold tracking-wide mb-6 animate-fade-in-up">
          The Little Wood Shop
        </h1>

        {/* Tagline */}
        <p className="font-body text-lg md:text-xl text-cream/90 tracking-[0.2em] uppercase mb-8 animate-fade-in-up delay-200">
          Authentic Wood Creations{" "}
          <span className="text-amber mx-2">·</span> Local Craft
        </p>

        {/* Subtitle */}
        <p className="font-display text-xl md:text-2xl text-cream/80 italic max-w-2xl mx-auto mb-12 animate-fade-in-up delay-300">
          One of the oldest gems in Sedgefield, Western Cape
        </p>

        {/* CTA */}
        <a
          href="#gallery"
          className="inline-flex items-center gap-3 font-body text-sm tracking-wider uppercase text-cream border border-cream/50 px-8 py-4 rounded-full transition-all duration-300 hover:bg-cream hover:text-charcoal hover:border-cream animate-fade-in-up delay-400"
        >
          View Our Work
          <svg
            className="w-4 h-4"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={1.5}
              d="M19 14l-7 7m0 0l-7-7m7 7V3"
            />
          </svg>
        </a>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-cream/50 rounded-full flex justify-center pt-2">
          <div className="w-1 h-2 bg-cream/70 rounded-full" />
        </div>
      </div>
    </section>
  );
}
