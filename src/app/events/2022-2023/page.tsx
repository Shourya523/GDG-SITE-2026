import { Suspense } from "react";
import EventsPageClient2022_2023 from "./EventsPage2022_2023";

export default function Page() {
  return (
    <Suspense fallback={<div>Loading events...</div>}>
      <EventsPageClient2022_2023/>
    </Suspense>
  );
}
