import type { Metadata } from "next"; 
import Navbar from "@/src/components/Navbar";
import Footer from "@/src/components/Footer";

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
      <main className="min-h-screen pt-20">
        {children}
      </main>
    </section>
  );
}