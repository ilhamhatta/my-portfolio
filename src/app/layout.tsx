import React from "react";
import type { Metadata } from "next";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "../styles/globals.css";

export const metadata: Metadata = {
  title: "M Ilham Hatta",
  description: "Welcome to my portfolio website",
};

// Import font dari next/font/google
import { Montserrat, Open_Sans } from "next/font/google";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "700"],
  display: "swap",
});

const openSans = Open_Sans({
  subsets: ["latin"],
  weight: ["400", "600"],
  display: "swap",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        {/* Tambahkan metadata untuk SEO */}
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body className={`${openSans.className} bg-[#222222] text-[#d5d5d5]`}>
        <Navbar /> {/* Navbar tetap ada di setiap halaman */}
        <main className={`${montserrat.className}`}>{children}</main>
        <Footer /> {/* Footer tetap ada di setiap halaman */}
      </body>
    </html>
  );
}
