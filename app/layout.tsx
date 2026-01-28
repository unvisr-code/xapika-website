import type { Metadata, Viewport } from "next";
import { Hanken_Grotesk } from "next/font/google";
import "./globals.css";

// Neo-Grotesque font (similar to Neue Haas Grotesk)
const hankenGrotesk = Hanken_Grotesk({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-hanken",
  weight: ["300", "400", "500", "600", "700", "800", "900"],
});

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://xapika.com";

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: {
    default: "Xapika - Railway Vehicle Maintenance Solutions",
    template: "%s | Xapika",
  },
  description:
    "Your trusted partner in railway vehicle maintenance. Xapika provides comprehensive maintenance solutions for railway operators worldwide.",
  keywords: [
    "railway maintenance",
    "railway vehicle",
    "train maintenance",
    "rolling stock",
    "locomotive maintenance",
    "rail depot services",
    "railway consulting",
    "Xapika",
    "Poland railway",
    "EU rail",
  ],
  authors: [{ name: "Xapika Sp. z o.o." }],
  creator: "Xapika",
  publisher: "Xapika Sp. z o.o.",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    title: "Xapika - Railway Vehicle Maintenance Solutions",
    description:
      "Your trusted partner in railway vehicle maintenance. Comprehensive solutions for railway operators worldwide.",
    url: BASE_URL,
    siteName: "Xapika",
    locale: "en_US",
    alternateLocale: "ko_KR",
    type: "website",
    images: [
      {
        url: "/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Xapika - Railway Vehicle Maintenance Solutions",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Xapika - Railway Vehicle Maintenance Solutions",
    description:
      "Your trusted partner in railway vehicle maintenance. Comprehensive solutions for railway operators worldwide.",
    images: ["/images/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: BASE_URL,
    languages: {
      en: BASE_URL,
      ko: BASE_URL,
    },
  },
  verification: {
    google: process.env.GOOGLE_SITE_VERIFICATION,
  },
};

export const viewport: Viewport = {
  themeColor: "#0A1628",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={hankenGrotesk.variable}>
      <head>
        {/* Pretendard Font (Korean) */}
        <link
          rel="stylesheet"
          as="style"
          crossOrigin="anonymous"
          href="https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.9/dist/web/variable/pretendardvariable.min.css"
        />
      </head>
      <body className="min-h-screen bg-background font-sans text-foreground antialiased">
        {children}
      </body>
    </html>
  );
}
