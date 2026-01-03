"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import "./EventsBottomNavBar.css";

const pages = [
  { name: "2025-2026", route: "/events/2025-2026" },
  { name: "2024-2025", route: "/events/2024-2025" },
  { name: "2023-2024", route: "/events/2023-2024" },
  { name: "2022-2023", route: "/events/2022-2023" },
];

export default function EventsBottomNavbar() {
  const pathname = usePathname();

  return (
    <div className="events-bottom-container">
      <nav className="events-bottom-nav">
        <ul className="events-bottom-links">
          {pages.map(({ name, route }) => {
            const isActive =
              pathname === route || 
              pathname.startsWith(`${route}/`) || 
              (pathname === "/events" && route === "/events/2022-2023");

            return (
              <li key={route} className={isActive ? "active" : ""}>
                <Link href={route}>{name}</Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </div>
  );
}