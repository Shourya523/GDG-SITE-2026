import type { Metadata } from "next";
import "../globals.css"; 
import Navbar from "@/src/component/Navbar";
import Footer from "@/src/component/Footer";

export const metadata: Metadata = {
  title: "GDG Team | Meet the Builders",
  description: "Meet the Mentors, Team Leads, and Core Team behind GDG.",
};

export default function TeamsLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <section className="teams-layout">
      <Navbar /> 
      <main className="min-h-screen pt-20">
        {children}
      </main>
      <Footer />
    </section>
  );
}