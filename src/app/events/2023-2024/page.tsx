import { Suspense } from "react";
import EventsPageClient2023_2024 from "./EventsPageClient2023_2024";

export default function Page() {
  return (
    <Suspense fallback={<div>Loading events...</div>}>
      <EventsPageClient2023_2024/>
    </Suspense>
  );
}
