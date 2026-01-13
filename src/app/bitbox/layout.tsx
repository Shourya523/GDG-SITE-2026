import { Particles } from "@/src/components/ui/particles";
import type { Metadata } from "next"; 

import "./bitboxPage.css"

export const metadata: Metadata = {
  title: "GDG Team | Meet the Builders",
  description: "Meet the Mentors, Team Leads, and Core Team behind GDG.",
};

export default function BitboxLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <section className="teams-layout relative min-h-screen bg-black">
      <Particles
        className="fixed inset-0 z-[1000] h-full w-full"
        quantity={250}
        staticity={30}
        ease={50}
        color="#ffffff"
        refresh={false}
      />
      <main className="relative z-10 min-h-screen pt-20">
        {children}
      </main>
    </section>
  );
}