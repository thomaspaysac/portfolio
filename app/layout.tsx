import type { Metadata } from "next";
import "./globals.css";
import { montserrat } from "./lib/fonts";
import Header from "./ui/header/Header";
import Footer from "./ui/Footer";

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
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
          <main className="bg-zinc-700">
            {children}
          </main>
      </body>
    </html>
  );
}
