import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const DESCRIPTION =
  "The world's most dynamic mixed-use destination. Retail leasing, entertainment sponsorships, and world-class event venues — all under one roof in the New York metro.";

export const metadata: Metadata = {
  metadataBase: new URL("https://american-dream-deck.vercel.app"),
  title: "American Dream — Partner Presentation",
  description: DESCRIPTION,
  openGraph: {
    title: "American Dream — Partner Presentation",
    description: DESCRIPTION,
    type: "website",
    images: [
      {
        url: "/og.png",
        width: 1200,
        height: 630,
        alt: "American Dream — Partner Presentation",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "American Dream — Partner Presentation",
    description: DESCRIPTION,
  },
};

export const viewport: Viewport = {
  themeColor: "#080808",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} antialiased`}
    >
      <body>{children}</body>
    </html>
  );
}
