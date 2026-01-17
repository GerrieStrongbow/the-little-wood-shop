import Image from "next/image";

const galleryImages = [
  {
    src: "/media/photo_10.jpg",
    alt: "Stunning epoxy river dining table",
    category: "Furniture",
  },
  {
    src: "/media/photo_1.jpg",
    alt: "Handcrafted rustic wooden bench",
    category: "Furniture",
  },
  {
    src: "/media/photo_2.jpg",
    alt: "Epoxy resin wood art piece",
    category: "Art",
  },
  {
    src: "/media/photo_6.jpg",
    alt: "Indigenous wood slabs",
    category: "Slabs",
  },
  {
    src: "/media/photo_5.jpg",
    alt: "Handmade wooden chess set",
    category: "Games",
  },
  {
    src: "/media/photo_7.jpg",
    alt: "Custom TV cabinet",
    category: "Furniture",
  },
  {
    src: "/media/photo_3.jpg",
    alt: "Multi-wood cutting boards",
    category: "Kitchen",
  },
  {
    src: "/media/photo_15.jpg",
    alt: "Colorful wooden toy trucks",
    category: "Toys",
  },
  {
    src: "/media/photo_30.jpg",
    alt: "Hand-turned pepper mills",
    category: "Kitchen",
  },
  {
    src: "/media/photo_25.jpg",
    alt: "Decorative wooden letters",
    category: "Gifts",
  },
  {
    src: "/media/photo_4.jpg",
    alt: "Shop interior with wooden crafts",
    category: "Shop",
  },
  {
    src: "/media/photo_20.jpg",
    alt: "Traditional Afrikaans wooden sign",
    category: "Signs",
  },
];

export default function Gallery() {
  return (
    <section id="gallery" className="py-24 md:py-32 bg-charcoal texture-grain">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="font-body text-sm tracking-[0.3em] uppercase text-amber mb-4">
            Our Craftsmanship
          </p>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl text-cream font-semibold mb-6">
            Gallery
          </h2>
          <div className="w-16 h-px bg-amber mx-auto mb-8" />
          <p className="font-body text-lg text-cream/70 max-w-2xl mx-auto">
            Each piece tells a story. Browse our collection of handcrafted
            furniture, gifts, toys, and more.
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
          {galleryImages.map((image, index) => (
            <div
              key={image.src}
              className="group relative aspect-square overflow-hidden rounded-lg bg-wood-dark cursor-pointer"
              style={{ animationDelay: `${index * 50}ms` }}
            >
              <Image
                src={image.src}
                alt={image.alt}
                fill
                className="object-cover transition-all duration-500 group-hover:scale-105"
                sizes="(max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
              />

              {/* Hover Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-charcoal/80 via-charcoal/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300" />

              {/* Category Badge */}
              <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                <span className="inline-block font-body text-xs tracking-wider uppercase text-amber bg-charcoal/80 px-3 py-1 rounded-full">
                  {image.category}
                </span>
              </div>

              {/* Subtle border glow on hover */}
              <div className="absolute inset-0 rounded-lg ring-2 ring-amber/0 group-hover:ring-amber/30 transition-all duration-300" />
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <p className="font-body text-cream/60 mb-6">
            Visit our shop to see more creations and discuss custom orders
          </p>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 font-body text-sm tracking-wider uppercase text-charcoal bg-amber px-8 py-4 rounded-full transition-all duration-300 hover:bg-amber-light hover:shadow-lg hover:shadow-amber/20"
          >
            Get in Touch
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
