import type { Metadata, Viewport } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-jetbrains",
});

export const metadata: Metadata = {
  title: {
    default: "World Places",
    template: "%s | World Places",
  },
  description:
    "An interactive 3D globe showcasing interesting places across the world. Built with Next.js, React, and BabylonJS.",
  keywords: [
    "globe",
    "3D",
    "world",
    "places",
    "travel",
    "BabylonJS",
    "interactive map",
  ],
  authors: [{ name: "Theodoros Doukoulos" }],
  openGraph: {
    title: "World Places",
    description:
      "An interactive 3D globe showcasing interesting places across the world.",
    type: "website",
    locale: "en_US",
  },
};

export const viewport: Viewport = {
  themeColor: "#1d2021",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${jetbrainsMono.variable}`}>
      <body className="flex min-h-dvh flex-col font-sans antialiased">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
