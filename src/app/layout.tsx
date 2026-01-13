import type { Metadata } from "next";
import { Albert_Sans } from "next/font/google";
import "./globals.css";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { FloatingNav } from "../components/ui/floating-navbar";
import { Home, Calendar, Users, Rocket, BookOpen } from "lucide-react";

const albertSans = Albert_Sans({
  subsets: ["latin"],
  variable: "--font-albert-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: "GDG JIIT",
  description: "Google Developer Groups is a student-led community.",
};

const navItems = [
  { name: "Home", link: "/", icon: <Home size={20} /> },
  { name: "Events", link: "/events/2022-2023", icon: <Calendar size={20} /> },
  { name: "Team", link: "/team", icon: <Users size={20} /> },
  { name: "BitBox", link: "/bitbox", icon: <Rocket size={20} /> },
];

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
          <FloatingNav navItems={navItems} />
        </div>

        {children}
        <Footer />
      </body>
    </html>
  );
}