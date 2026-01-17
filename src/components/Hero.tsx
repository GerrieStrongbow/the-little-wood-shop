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
          className="object-cover blur-[2px]"
        />
        {/* Gradient Overlay - lighter since blur helps legibility */}
        <div className="absolute inset-0 bg-linear-to-b from-charcoal/50 via-charcoal/40 to-charcoal/60" />
        {/* Subtle warm tint */}
        <div className="absolute inset-0 bg-wood-dark/20 mix-blend-multiply" />
        {/* Vignette effect for focus */}
        <div className="absolute inset-0 bg-radial-[ellipse_at_center] from-transparent via-transparent to-charcoal/40" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        {/* Small decorative element */}
        <div className="w-16 h-px bg-amber mx-auto mb-8 animate-fade-in" />

        {/* Main Title */}
        <h1 className="font-display text-5xl md:text-7xl lg:text-8xl text-cream font-semibold tracking-wide mb-6 animate-fade-in-up md:whitespace-nowrap drop-shadow-lg">
          The Little Wood Shop
        </h1>

        {/* Tagline */}
        <p className="font-body text-xl md:text-2xl text-cream/90 tracking-[0.2em] uppercase mb-4 animate-fade-in-up delay-200 drop-shadow-md">
          Authentic Wood Creations{" "}
          <span className="text-amber mx-2">·</span> Local Craft
        </p>

        {/* Offerings */}
        <p className="font-display text-xl md:text-2xl text-amber-light italic mb-8 animate-fade-in-up delay-200 drop-shadow-md">
          Furniture, Gifts, Toys and Wooden Slabs
        </p>

        {/* Subtitle */}
        <p className="font-display text-2xl md:text-3xl text-cream/90 italic max-w-2xl mx-auto mb-12 animate-fade-in-up delay-300 drop-shadow-md">
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

      {/* Scroll Indicator - Down Arrow */}
      <a
        href="#about"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-cream/60 hover:text-cream transition-colors"
        aria-label="Scroll to content"
      >
        <svg
          className="w-8 h-8 animate-bounce"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </a>
    </section>
  );
}
