const offerings = [
  {
    icon: (
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
          d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"
        />
      </svg>
    ),
    title: "Furniture",
    description: "Handcrafted tables, chairs, and bespoke pieces",
  },
  {
    icon: (
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
          d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
        />
      </svg>
    ),
    title: "Toys",
    description: "Traditional wooden toys for little ones",
  },
  {
    icon: (
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
          d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z"
        />
      </svg>
    ),
    title: "Wooden Slabs",
    description: "Indigenous wood planks on request",
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
            handcrafted artistry and the soul of indigenous South African woods.
            Visit us to find something truly special.
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
