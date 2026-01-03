import EventsBottomNavbar from "@/src/component/EventsBottomNavBar";

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
