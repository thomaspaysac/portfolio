import type { Metadata } from "next";
import "./globals.css";
import Header from "./ui/header/Header";
import Footer from "./ui/Footer";
import { montserrat } from "./lib/fonts";

export const metadata: Metadata = {
  title: "Thomas Paysac | Développeur Web",
  description: "Développeur Web Fullstack | React, Express, Node.js, MongoDB",
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
