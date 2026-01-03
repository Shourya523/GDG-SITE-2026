"use client";

import { useSearchParams } from "next/navigation";
import EventCard from "@/src/components/EventsCard";
import EventsCategoryBar from "@/src/components/EventsCategoryBar";
import styles from "./EventsPage.module.css";
import {useEffect, useState } from "react";


export default function EventsPageClient2023_2024() {
  const searchParams = useSearchParams();
  const activeCategory = searchParams.get("type") || "sessions";
  
  const [fade, setFade] = useState(false);

  const eventData: Record<string, any[]> = {
    sessions: [
      {
        title: "AI ML Session",
        description: "Dissected AI, ML, and Deep Learning to exploring various ML types and models.",
        imageSrc: "/aimlsession.webp"
      },
      {
        title: "Git & Github",
        description: "During this session, students were exposed to the\n effective utilization of GitHub for\n coding and collaborative purposes.",
        imageSrc: "/gitgithub.webp"
      }
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