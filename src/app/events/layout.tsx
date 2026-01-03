import type { Metadata } from "next"; 
import EventsBottomNavbar from "@/src/component/EventsBottomNavBar";
export const metadata: Metadata = {
    title: "GDG Events",
    description: "From beginner sessions to hackathons—explore the events where the GDG community learns, builds, and connects.",
};
export default function EventsLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <section className="events-layout">
            {children}
            <EventsBottomNavbar />
        </section>
    );
}
