import type { Metadata } from "next";
import { Fraunces, Manrope } from "next/font/google";
import { SITE } from "@/lib/config";
import "./globals.css";

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  axes: ["opsz", "SOFT", "WONK"],
  weight: "variable",
  display: "swap",
});

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE.domain),
  title: {
    default: `${SITE.name} — Feel Younger. Move Better. Live Stronger.`,
    template: `%s — ${SITE.name}`,
  },
  description:
    "Online yoga coaching for Indian women 25–55 focused on flexibility, posture, weight management and calm — guided by an instructor whose decades of daily practice show. Small live batches, personalized guidance.",
  keywords: [
    "online yoga for women India",
    "yoga for weight loss women",
    "yoga for flexibility and posture",
    "yoga classes for women over 40",
    "stress relief yoga online",
    "personalized yoga coaching India",
  ],
  authors: [{ name: SITE.instructorName }],
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: SITE.domain,
    siteName: SITE.name,
    title: `${SITE.name} — Feel Younger. Move Better. Live Stronger.`,
    description:
      "Online yoga coaching for Indian women 25–55 — flexibility, posture, weight management and calm, guided by a teacher whose decades of practice speak for themselves.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: `${SITE.name} — premium online yoga coaching`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${SITE.name} — Feel Younger. Move Better. Live Stronger.`,
    description:
      "Online yoga coaching for Indian women 25–55 — flexibility, posture, weight management and calm.",
    images: ["/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "LocalBusiness",
      "@id": `${SITE.domain}/#business`,
      name: SITE.name,
      description:
        "Premium online yoga coaching for women, specializing in flexibility, posture, weight management and stress relief.",
      url: SITE.domain,
      email: SITE.email,
      areaServed: "IN",
      priceRange: "$$",
    },
    {
      "@type": "Person",
      "@id": `${SITE.domain}/#instructor`,
      name: SITE.instructorName,
      jobTitle: "Yoga Instructor",
      description:
        "Yoga instructor with decades of consistent practice, teaching flexibility, posture, and mindful movement to women online.",
      worksFor: { "@id": `${SITE.domain}/#business` },
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={`${fraunces.variable} ${manrope.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
