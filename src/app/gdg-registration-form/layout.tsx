import type { Metadata } from "next"; 

// import "./bitboxPage.css"

export const metadata: Metadata = {
  title: "GDG | Register",
  description: "Register and become a part of the most prestigious club of JIIT",
};

export default function RegisterLayout({
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