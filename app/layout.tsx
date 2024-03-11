import type { Metadata } from "next";
import "./globals.css";
import Header from "./ui/header/Header";
import Footer from "./ui/Footer";
import { montserrat } from "./lib/fonts";

export const metadata: Metadata = {
  title: "Thomas Paysac | Développeur Web",
  description: "Développeur Web Fullstack | React, Express, Node.js, MongoDB",
  metadataBase: new URL('https://thomaspaysac.com/'),
  twitter: {
    card: 'summary_large_image',
    title: "Thomas Paysac | Développeur Web",
    description: "Développeur Web Fullstack | React, Express, Node.js, MongoDB",
    siteId: '1767197636539392000',
    creator: '@tommyBlablaXrd',
    creatorId: '1767197636539392000',
    images: ["https://thomaspaysac.com/opengraph-image.png"], // Must be an absolute URL
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={montserrat.className}>
        <Header />
          <main className="bg-zinc-700 text-lg">
            {children}
          </main>
      </body>
    </html>
  );
}
