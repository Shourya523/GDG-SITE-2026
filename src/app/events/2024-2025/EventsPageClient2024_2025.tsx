"use client";

import { useSearchParams } from "next/navigation";
import EventCard from "@/src/components/EventsCard";
import EventsCategoryBar from "@/src/components/EventsCategoryBar";
import styles from "./EventsPage.module.css";
import { useEffect,useState } from "react";

export default function EventsPageClient2024_2025() {
    const searchParams = useSearchParams();
    
  const [fade, setFade] = useState(false);
    const activeCategory = searchParams.get("type") || "sessions";

    const eventData: Record<string, any[]> = {
        sessions: [
            //Add sessions here
        ],
        hackathons: [
            // Add Hackathon events here
        ],
        upcoming: [
            // Add Upcoming events here
        ],
        meetups: [
            // Add Meetup events here
        ]
    };

    const filteredEvents = eventData[activeCategory] || [];
    useEffect(() => {
        const timeout = setTimeout(() => setFade(true), 50);
        const handleMouseMove = (e: MouseEvent) => {
            document.documentElement.style.setProperty("--mouse-x", `${e.clientX}px`);
            document.documentElement.style.setProperty("--mouse-y", `${e.clientY}px`);
        };
        window.addEventListener("mousemove", handleMouseMove);
        return () => {
            clearTimeout(timeout);
            window.removeEventListener("mousemove", handleMouseMove);
        };
    }, []);
    return (
        <main className={styles.container}>
            <EventsCategoryBar />
            <div className={styles.grid}>
                {filteredEvents.length > 0 ? (
                    filteredEvents.map((event, index) => (
                        <EventCard
                            key={`${activeCategory}-${index}`}
                            title={event.title}
                            description={event.description}
                            imageSrc={event.imageSrc}
                        />
                    ))
                ) : (
                    <p className={styles.noEvents}>No events found for this category.</p>
                )}
            </div>
        </main>
    );
}