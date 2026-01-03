import type { Metadata } from "next"; 
import EventsBottomNavbar from "@/src/component/EventsBottomNavBar";
export const metadata: Metadata = {
    title: "GDG Events | Where Builders Come Together",
    description: "Explore GDG events where developers build real projects, collaborate in hackathons, and grow through hands-on sessions.",
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
