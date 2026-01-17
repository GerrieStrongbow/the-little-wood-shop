import {
  MapPinIcon,
  PhoneIcon,
  EnvelopeIcon,
} from "@phosphor-icons/react/ssr";

const contactInfo = [
  {
    icon: <MapPinIcon size={24} weight="light" />,
    label: "Visit Us",
    value: "Cnr Service Road & Mossie Street",
    subvalue: "Sedgefield, Western Cape",
    href: "https://maps.google.com/?q=-34.01591,22.805494",
  },
  {
    icon: <PhoneIcon size={24} weight="light" />,
    label: "Call Johan",
    value: "083 302 8537",
    href: "tel:+27833028537",
  },
  {
    icon: <PhoneIcon size={24} weight="light" />,
    label: "Call René",
    value: "083 225 5677",
    href: "tel:+27832255677",
  },
  {
    icon: <EnvelopeIcon size={24} weight="light" />,
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
                className="group flex items-start gap-5 p-4 md:-mx-4 rounded-lg transition-all duration-300 hover:bg-cream-dark"
              >
                <div className="shrink-0 w-12 h-12 rounded-full bg-wood-light/20 flex items-center justify-center text-wood-dark transition-all duration-300 group-hover:bg-amber/20 group-hover:text-amber-dark">
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
            <div className="w-full h-[280px] md:aspect-square md:h-auto lg:aspect-auto lg:h-full md:min-h-[400px] rounded-lg overflow-hidden shadow-xl">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3307.108654756852!2d22.803432177364247!3d-34.015421826671094!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1e78a32df6b01203%3A0x9a8d1aff2ae2e65e!2sThe%20Little%20Wood%20Shop!5e0!3m2!1sen!2sza!4v1768653160499!5m2!1sen!2sza"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="The Little Wood Shop location"
                className="grayscale-30 contrast-110"
              />
            </div>

            {/* Decorative frame - hidden on mobile to prevent overflow */}
            <div className="hidden md:block absolute -inset-3 border border-wood-light/30 rounded-lg -z-10" />
            <div className="hidden md:block absolute -inset-6 border border-wood-light/20 rounded-lg -z-20" />
          </div>
        </div>
      </div>
    </section>
  );
}
