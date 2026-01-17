"use client";

import Image from "next/image";
import { useState, useEffect, useCallback, useRef } from "react";

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
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  const openLightbox = (index: number) => setSelectedIndex(index);
  const closeLightbox = () => setSelectedIndex(null);

  const goToPrevious = useCallback(() => {
    if (selectedIndex !== null) {
      setSelectedIndex(
        selectedIndex === 0 ? galleryImages.length - 1 : selectedIndex - 1
      );
    }
  }, [selectedIndex]);

  const goToNext = useCallback(() => {
    if (selectedIndex !== null) {
      setSelectedIndex(
        selectedIndex === galleryImages.length - 1 ? 0 : selectedIndex + 1
      );
    }
  }, [selectedIndex]);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (selectedIndex === null) return;

      switch (e.key) {
        case "Escape":
          closeLightbox();
          break;
        case "ArrowLeft":
          goToPrevious();
          break;
        case "ArrowRight":
          goToNext();
          break;
      }
    };

    globalThis.addEventListener("keydown", handleKeyDown);
    return () => globalThis.removeEventListener("keydown", handleKeyDown);
  }, [selectedIndex, goToPrevious, goToNext]);

  // Prevent body scroll when lightbox is open
  useEffect(() => {
    if (selectedIndex === null) {
      document.body.style.overflow = "";
    } else {
      document.body.style.overflow = "hidden";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [selectedIndex]);

  // Touch/swipe handling for mobile
  const touchStartX = useRef<number | null>(null);
  const touchStartY = useRef<number | null>(null);

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
    touchStartY.current = e.touches[0].clientY;
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX.current === null || touchStartY.current === null) return;

    const touchEndX = e.changedTouches[0].clientX;
    const touchEndY = e.changedTouches[0].clientY;
    const deltaX = touchEndX - touchStartX.current;
    const deltaY = touchEndY - touchStartY.current;

    // Only trigger swipe if horizontal movement is greater than vertical
    // and the swipe distance is significant (> 50px)
    if (Math.abs(deltaX) > Math.abs(deltaY) && Math.abs(deltaX) > 50) {
      if (deltaX > 0) {
        goToPrevious(); // Swipe right = previous
      } else {
        goToNext(); // Swipe left = next
      }
    }

    touchStartX.current = null;
    touchStartY.current = null;
  };

  const selectedImage =
    selectedIndex === null ? null : galleryImages[selectedIndex];

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
            <button
              key={image.src}
              onClick={() => openLightbox(index)}
              className="group relative aspect-square overflow-hidden rounded-lg bg-wood-dark cursor-pointer focus:outline-none focus:ring-2 focus:ring-amber focus:ring-offset-2 focus:ring-offset-charcoal"
              style={{ animationDelay: `${index * 50}ms` }}
              aria-label={`View ${image.alt}`}
            >
              <Image
                src={image.src}
                alt={image.alt}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
                sizes="(max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
              />

              {/* Subtle border glow on hover */}
              <div className="absolute inset-0 rounded-lg ring-2 ring-amber/0 group-hover:ring-amber/30 transition-all duration-300" />
            </button>
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

      {/* Lightbox Modal */}
      {selectedImage && (
        <dialog
          open
          className="fixed inset-0 z-50 w-full h-full max-w-none max-h-none m-0 p-0 border-none bg-transparent"
          aria-label="Image preview"
        >
          {/* Backdrop button for closing */}
          <button
            onClick={closeLightbox}
            className="absolute inset-0 w-full h-full bg-charcoal/95 backdrop-blur-sm cursor-default"
            aria-label="Close preview"
          />

          {/* Content container with touch handlers for swipe */}
          <div
            className="relative z-10 flex items-center justify-center w-full h-full pointer-events-none"
            onTouchStart={handleTouchStart}
            onTouchEnd={handleTouchEnd}
          >
            {/* Close button */}
            <button
              onClick={closeLightbox}
              className="absolute top-4 right-4 p-2 text-cream/70 hover:text-cream transition-colors pointer-events-auto"
              aria-label="Close preview"
            >
              <svg
                className="w-8 h-8"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>

            {/* Previous button - visible on desktop, styled for mobile */}
            <button
              onClick={goToPrevious}
              className="absolute left-3 md:left-4 z-20 p-3 md:p-2 text-charcoal md:text-cream/70 bg-cream/90 md:bg-transparent hover:bg-cream md:hover:bg-transparent hover:text-charcoal md:hover:text-cream rounded-full md:rounded-none shadow-lg md:shadow-none transition-colors pointer-events-auto"
              aria-label="Previous image"
            >
              <svg
                className="w-6 h-6 md:w-10 md:h-10"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 19l-7-7 7-7"
                />
              </svg>
            </button>

            {/* Next button - visible on desktop, styled for mobile */}
            <button
              onClick={goToNext}
              className="absolute right-3 md:right-4 z-20 p-3 md:p-2 text-charcoal md:text-cream/70 bg-cream/90 md:bg-transparent hover:bg-cream md:hover:bg-transparent hover:text-charcoal md:hover:text-cream rounded-full md:rounded-none shadow-lg md:shadow-none transition-colors pointer-events-auto"
              aria-label="Next image"
            >
              <svg
                className="w-6 h-6 md:w-10 md:h-10"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </button>

            {/* Image container */}
            <figure className="relative max-w-[90vw] max-h-[85vh] aspect-auto pointer-events-auto">
              <Image
                src={selectedImage.src}
                alt={selectedImage.alt}
                width={1200}
                height={1200}
                className="max-w-full max-h-[85vh] w-auto h-auto object-contain rounded-lg"
                priority
              />

              {/* Caption */}
              <figcaption className="absolute -bottom-10 left-0 right-0 text-center font-body text-cream/70 text-sm">
                {selectedImage.alt}
              </figcaption>
            </figure>

            {/* Image counter and swipe hint on mobile */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 font-body text-cream/50 text-sm text-center">
              <span className="md:hidden block mb-1 text-xs">Swipe to navigate</span>
              {selectedIndex === null ? 0 : selectedIndex + 1} /{" "}
              {galleryImages.length}
            </div>
          </div>
        </dialog>
      )}
    </section>
  );
}
