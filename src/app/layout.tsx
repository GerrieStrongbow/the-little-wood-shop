import type { Metadata } from "next";
import { Cormorant_Garamond, Source_Sans_3 } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const sourceSans = Source_Sans_3({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "The Little Wood Shop | Authentic Wood Creations",
  description:
    "One of the oldest gems in Sedgefield, Western Cape. Find authentic wood creations and local craft - furniture, gifts, toys, and wooden slabs.",
  keywords: [
    "woodworking",
    "Sedgefield",
    "furniture",
    "wood craft",
    "indigenous wood",
    "Western Cape",
  ],
  openGraph: {
    title: "The Little Wood Shop | Authentic Wood Creations",
    description:
      "One of the oldest gems in Sedgefield. Authentic wood creations and local craft.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${cormorant.variable} ${sourceSans.variable} antialiased`}
      >
        {children}
        <Analytics />
      </body>
    </html>
  );
}
