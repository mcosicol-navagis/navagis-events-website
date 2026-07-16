import type { Metadata } from "next";
import { Inter, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import AOSProvider from "@/components/AOSProvider";

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
  title: "Map The Way to Chicago",
  description:
    "Join us at the NAVAGIS event. Register to attend in person or virtually and discover how NavaFleet and Google Cloud can transform your fleet operations.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${plusJakarta.variable} overflow-x-hidden`}>
        <AOSProvider />
        <main>{children}</main>
      </body>
    </html>
  );
}
