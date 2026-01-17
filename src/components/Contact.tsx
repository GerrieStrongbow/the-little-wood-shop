const contactInfo = [
  {
    icon: (
      <svg
        className="w-6 h-6"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
        />
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
        />
      </svg>
    ),
    label: "Visit Us",
    value: "Cnr Service Road & Mossie Street",
    subvalue: "Sedgefield, Western Cape",
    href: "https://maps.google.com/?q=-34.01591,22.805494",
  },
  {
    icon: (
      <svg
        className="w-6 h-6"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
        />
      </svg>
    ),
    label: "Call Johan",
    value: "083 302 8537",
    href: "tel:+27833028537",
  },
  {
    icon: (
      <svg
        className="w-6 h-6"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
        />
      </svg>
    ),
    label: "Call René",
    value: "083 225 5677",
    href: "tel:+27832255677",
  },
  {
    icon: (
      <svg
        className="w-6 h-6"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
        />
      </svg>
    ),
    label: "Email Us",
    value: "jrsteenkamp001@gmail.com",
    href: "mailto:jrsteenkamp001@gmail.com",
  },
];

export default function Contact() {
  return (
    <section id="contact" className="py-24 md:py-32 bg-cream texture-grain">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="font-body text-sm tracking-[0.3em] uppercase text-wood-medium mb-4">
            Get In Touch
          </p>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl text-charcoal font-semibold mb-6">
            Visit Our Workshop
          </h2>
          <div className="section-divider mb-8" />
          <p className="font-body text-lg text-charcoal/70 max-w-2xl mx-auto">
            We&apos;d love to meet you. Come visit our shop in Sedgefield to see
            our creations in person and discuss your custom woodworking needs.
          </p>
        </div>

        {/* Content Grid */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Contact Info */}
          <div className="space-y-8">
            {contactInfo.map((item) => (
              <a
                key={item.label}
                href={item.href}
                target={item.href.startsWith("http") ? "_blank" : undefined}
                rel={
                  item.href.startsWith("http")
                    ? "noopener noreferrer"
                    : undefined
                }
                className="group flex items-start gap-5 p-4 -mx-4 rounded-lg transition-all duration-300 hover:bg-cream-dark"
              >
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-wood-light/20 flex items-center justify-center text-wood-dark transition-all duration-300 group-hover:bg-amber/20 group-hover:text-amber-dark">
                  {item.icon}
                </div>
                <div>
                  <p className="font-body text-sm text-charcoal/50 uppercase tracking-wider mb-1">
                    {item.label}
                  </p>
                  <p className="font-display text-xl text-charcoal group-hover:text-amber-dark transition-colors">
                    {item.value}
                  </p>
                  {item.subvalue && (
                    <p className="font-body text-charcoal/60">{item.subvalue}</p>
                  )}
                </div>
              </a>
            ))}

            {/* Decorative element */}
            <div className="pt-8 border-t border-wood-light/30">
              <p className="font-display text-lg text-charcoal/70 italic">
                &ldquo;Come see the beauty of South African wood&rdquo;
              </p>
            </div>
          </div>

          {/* Google Maps */}
          <div className="relative">
            <div className="aspect-square lg:aspect-auto lg:h-full min-h-[400px] rounded-lg overflow-hidden shadow-xl">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d826.5!2d22.805494!3d-34.01591!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1e615415b9d83c9b%3A0x7dd3b91b5c9f4c9a!2sThe%20Little%20Wood%20Shop!5e0!3m2!1sen!2sza!4v1705000000000!5m2!1sen!2sza"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="The Little Wood Shop location"
                className="grayscale-[30%] contrast-[1.1]"
              />
            </div>

            {/* Decorative frame */}
            <div className="absolute -inset-3 border border-wood-light/30 rounded-lg -z-10" />
            <div className="absolute -inset-6 border border-wood-light/20 rounded-lg -z-20" />
          </div>
        </div>
      </div>
    </section>
  );
}
