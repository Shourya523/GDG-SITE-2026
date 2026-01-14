import { Particles } from "@/src/components/ui/particles";
import type { Metadata } from "next"; 

// import "./bitboxPage.css"

export const metadata: Metadata = {
  title: "BITBOX 6.0",
  description: "Flagship And Most Anticipated Hackathon Of GDG JIIT",
};

export default function RegisterLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <section className="teams-layout relative min-h-screen bg-black">
      <main className="relative z-10 min-h-screen pt-20">
        {children}
      </main>
    </section>
  );
}