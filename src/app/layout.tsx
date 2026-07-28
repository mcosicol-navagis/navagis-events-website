import type { Metadata } from "next";
import { Inter, Plus_Jakarta_Sans } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import AOSProvider from "@/components/AOSProvider";

const RECAPTCHA_SITE_KEY = "6Leu1FctAAAAAP47TDcdb6THKR8nN-lrfXR8-hjn";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  weight: ["400", "500", "600"],
});

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-jakarta",
  weight: ["600", "700", "800"],
});

export const metadata: Metadata = {
  title: "Map the Way Chicago │ Google Maps Platform",
  description:
    "Join the Google Maps Platform team and Navagis at the Google Chicago office for an exclusive, in-person event to discover how location intelligence and AI can solve your industry's biggest challenges.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${plusJakarta.variable} overflow-x-hidden`}
      >
        <AOSProvider />
        <main>{children}</main>
        <Script
          src={`https://www.google.com/recaptcha/api.js?render=${RECAPTCHA_SITE_KEY}`}
          strategy="afterInteractive"
        />
        <Script id="apollo-tracker" strategy="afterInteractive">{`
          function initApollo(){var n=Math.random().toString(36).substring(7),o=document.createElement("script");
          o.src="https://assets.apollo.io/micro/website-tracker/tracker.iife.js?nocache="+n,o.async=!0,o.defer=!0,
          o.onload=function(){window.trackingFunctions.onLoad({appId:"66312f4d059c3f0574ac8452"})},
          document.head.appendChild(o)}initApollo();
        `}</Script>
      </body>
    </html>
  );
}
