import { Suspense } from "react";
import EventsPageClient2023_2024 from "./EventsPageClient2023_2024";
import { Spinner } from "@/src/components/ui/spinner";

function LoadingFallback() {
  return (
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <div
        style={{
          padding: "2.5rem 3rem",
          borderRadius: "16px",
          background: "rgba(26,26,26,0.6)",
          backdropFilter: "blur(8px)",
          border: "1px solid rgba(255,255,255,0.1)",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "1rem",
        }}
      >
        <Spinner />
        <p
          style={{
            color: "#d1d1d1",
            fontSize: "1rem",
            fontWeight: 500,
          }}
        >
          Loading events…
        </p>
      </div>
    </div>
  );
}

export default function Page() {
  return (
    <Suspense fallback={<LoadingFallback />}>
      <EventsPageClient2023_2024 />
    </Suspense>
  );
}
