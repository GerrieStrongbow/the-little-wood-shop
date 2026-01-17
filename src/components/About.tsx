const offerings = [
  {
    icon: (
      // Table icon
      <svg
        className="w-8 h-8"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1}
          d="M3 8h18M3 8v2h18V8M3 8l1-3h16l1 3M6 10v9M18 10v9M9 10v6M15 10v6"
        />
      </svg>
    ),
    title: "Furniture",
    description: "Handcrafted tables, chairs, and bespoke pieces",
  },
  {
    icon: (
      // Gift box icon
      <svg
        className="w-8 h-8"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1}
          d="M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12zm-7 4h14M5 12a2 2 0 110-4h14a2 2 0 110 4M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7"
        />
      </svg>
    ),
    title: "Gifts",
    description: "Unique wooden treasures for every occasion",
  },
  {
    icon: (
      // Toy car icon
      <svg
        className="w-8 h-8"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1}
          d="M5 17a2 2 0 104 0m-4 0a2 2 0 014 0m-4 0H4v-4l2-4h8l3 4h3v4h-1m-4 0a2 2 0 104 0m-4 0a2 2 0 014 0M9 17h6"
        />
      </svg>
    ),
    title: "Toys",
    description: "Traditional wooden toys for little ones",
  },
  {
    icon: (
      // Wood log/slab cross-section icon
      <svg
        className="w-8 h-8"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <ellipse
          cx="12"
          cy="12"
          rx="8"
          ry="6"
          strokeWidth={1}
        />
        <ellipse
          cx="12"
          cy="12"
          rx="5"
          ry="3.5"
          strokeWidth={1}
        />
        <ellipse
          cx="12"
          cy="12"
          rx="2"
          ry="1.5"
          strokeWidth={1}
        />
      </svg>
    ),
    title: "Wooden Slabs",
    description: "Quality wood planks on request",
  },
];

export default function About() {
  return (
    <section
      id="about"
      className="py-24 md:py-32 bg-cream texture-grain relative"
    >
      <div className="max-w-6xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="font-body text-sm tracking-[0.3em] uppercase text-wood-medium mb-4">
            Our Story
          </p>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl text-charcoal font-semibold mb-6">
            Crafted with Care
          </h2>
          <div className="section-divider mb-8" />
        </div>

        {/* Story Content */}
        <div className="max-w-3xl mx-auto text-center mb-20">
          <p className="font-body text-lg md:text-xl text-charcoal/80 leading-relaxed mb-6">
            The Little Wood Shop is one of the oldest gems in Sedgefield,
            Western Cape. For years, we&apos;ve been creating authentic wood
            pieces that tell stories and stand the test of time.
          </p>
          <p className="font-body text-lg md:text-xl text-charcoal/80 leading-relaxed">
            Every piece that leaves our workshop carries the warmth of
            handcrafted artistry and the beauty of quality woods from South
            Africa and beyond. Visit us to find something truly special.
          </p>
        </div>

        {/* Offerings Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
          {offerings.map((item, index) => (
            <div
              key={item.title}
              className="group text-center p-6 md:p-8 bg-cream-dark/50 rounded-lg transition-all duration-300 hover:bg-cream-dark hover:shadow-lg"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-wood-light/20 text-wood-dark mb-4 transition-all duration-300 group-hover:bg-amber/20 group-hover:text-amber-dark">
                {item.icon}
              </div>
              <h3 className="font-display text-xl md:text-2xl text-charcoal font-semibold mb-2">
                {item.title}
              </h3>
              <p className="font-body text-sm text-charcoal/60">
                {item.description}
              </p>
            </div>
          ))}
        </div>

        {/* Decorative Quote */}
        <div className="mt-20 text-center">
          <blockquote className="font-display text-2xl md:text-3xl text-charcoal/70 italic max-w-2xl mx-auto">
            &ldquo;Every piece of wood has a story waiting to be told&rdquo;
          </blockquote>
        </div>
      </div>
    </section>
  );
}
