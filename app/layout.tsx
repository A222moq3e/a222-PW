/**
 * Defines the required root HTML shell for the Next.js app.
 */
import { Geist, Geist_Mono } from "next/font/google";
import localFont from "next/font/local";

import "./globals.css";

// English text uses Geist; Arabic pages switch to Thmanyah Sans via .font-arabic.
const geistSans = Geist({
  subsets: ["latin"],
  variable: "--font-geist-sans",
  display: "swap",
});

const geistMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-geist-mono",
  display: "swap",
});

const thmanyahSans = localFont({
  src: [
    {
      path: "../public/thmanyah typeface/thmanyahsans/woff2/thmanyahsans-Light.woff2",
      weight: "300",
      style: "normal",
    },
    {
      path: "../public/thmanyah typeface/thmanyahsans/woff2/thmanyahsans-Regular.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "../public/thmanyah typeface/thmanyahsans/woff2/thmanyahsans-Medium.woff2",
      weight: "500",
      style: "normal",
    },
    {
      path: "../public/thmanyah typeface/thmanyahsans/woff2/thmanyahsans-Bold.woff2",
      weight: "700",
      style: "normal",
    },
    {
      path: "../public/thmanyah typeface/thmanyahsans/woff2/thmanyahsans-Black.woff2",
      weight: "900",
      style: "normal",
    },
  ],
  variable: "--font-thmanyah-sans",
  display: "swap",
});

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} ${thmanyahSans.variable}`}>{children}</body>
    </html>
  );
}
