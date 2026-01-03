import type { Metadata } from "next"; 
import Navbar from "@/src/component/Navbar";
import Footer from "@/src/component/Footer";

export const metadata: Metadata = {
  title: "GDG Team | Where Builders Come Together",
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