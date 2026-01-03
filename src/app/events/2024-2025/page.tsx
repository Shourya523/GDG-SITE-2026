import { Suspense } from "react";
import EventsPageClient2024_2025 from "./EventsPageClient2024_2025";

export default function Page() {
  return (
    <Suspense fallback={<div>Loading events...</div>}>
      <EventsPageClient2024_2025/>
    </Suspense>
  );
}
