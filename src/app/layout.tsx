import type { Metadata } from "next";
import { Albert_Sans } from "next/font/google";
import "./globals.css";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { SmartFloatingNav } from "../components/FloatingNavMobile";

const albertSans = Albert_Sans({
  subsets: ["latin"],
  variable: "--font-albert-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: "GDG JIIT",
  description: "Google Developer Groups is a student-led community.",
};

export default function layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${albertSans.variable} antialiased`}>
        <div className="grid-background" />
        <div className="cursor-spotlight" />
        <div className="shape-decoration shape-1" />
        <div className="shape-decoration shape-2" />
        <div className="shape-decoration shape-3" />
        <div className="shape-decoration shape-4" />
        
        <div className="hidden-mobile">
          <Navbar />
        </div>

        <div className="hidden-desktop">
          <SmartFloatingNav />
        </div>

        {children}
        <Footer />
      </body>
    </html>
  );
}