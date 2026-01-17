export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-wood-dark text-cream/80">
      {/* Main Footer */}
      <div className="max-w-6xl mx-auto px-6 py-16">
        <div className="grid md:grid-cols-3 gap-12">
          {/* Brand */}
          <div>
            <h3 className="font-display text-2xl text-cream font-semibold mb-4">
              The Little Wood Shop
            </h3>
            <p className="font-body text-sm leading-relaxed text-cream/60 mb-6">
              Authentic wood creations and local craft. One of Sedgefield&apos;s
              oldest gems, crafting beautiful pieces from indigenous South
              African woods.
            </p>
            <div className="w-12 h-px bg-amber/50" />
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-body text-sm tracking-wider uppercase text-amber mb-6">
              Explore
            </h4>
            <ul className="space-y-3">
              {[
                { label: "About Us", href: "#about" },
                { label: "Gallery", href: "#gallery" },
                { label: "Contact", href: "#contact" },
              ].map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="font-body text-cream/60 hover:text-amber transition-colors duration-300"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-body text-sm tracking-wider uppercase text-amber mb-6">
              Contact
            </h4>
            <ul className="space-y-3 font-body text-sm text-cream/60">
              <li>Cnr Service Road & Mossie Street</li>
              <li>Sedgefield, Western Cape</li>
              <li className="pt-2">
                <a
                  href="tel:+27833028537"
                  className="hover:text-amber transition-colors"
                >
                  Johan: 083 302 8537
                </a>
              </li>
              <li>
                <a
                  href="tel:+27832255677"
                  className="hover:text-amber transition-colors"
                >
                  René: 083 225 5677
                </a>
              </li>
              <li className="pt-2">
                <a
                  href="mailto:jrsteenkamp001@gmail.com"
                  className="hover:text-amber transition-colors"
                >
                  jrsteenkamp001@gmail.com
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-cream/10">
        <div className="max-w-6xl mx-auto px-6 py-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="font-body text-xs text-cream/40">
            © {currentYear} The Little Wood Shop. All rights reserved.
          </p>
          <p className="font-body text-xs text-cream/40">
            Handcrafted with{" "}
            <span className="text-amber" aria-label="love">
              ♥
            </span>{" "}
            in Sedgefield
          </p>
        </div>
      </div>
    </footer>
  );
}
