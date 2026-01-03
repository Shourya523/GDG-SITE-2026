"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import "./Navbar.css";

const LATEST_EVENTS_YEAR = "2022-2023";

const pages = [
  { name: "Events", route: "/events" },
  { name: "Team", route: "/team" },
  { name: "BitBox", route: "/bitbox" },
  { name: "StudyJam", route: "/studyjam" },
];

export default function Navbar() {
  const pathname = usePathname();

  return (
    <div className="navbar-container">
      <nav className="navbar">
        <div className="navbar-brand">
          <Link href="/" className="navbar-logo-link">
            <div className="navbar-logo">
              <img
                src="https://raw.githubusercontent.com/dsc-jiit-128/GDSC-Lead-Map/main/gdsc-logo.gif"
                alt="GDSC Logo"
              />
            </div>
            <span className="brand-text">GDG JIIT 128</span>
          </Link>
        </div>

        {/* Links */}
        <ul className="navbar-links">
          {pages.map(({ name, route }) => {
            const isEvents = route === "/events";

            const isActive = isEvents
              ? pathname === "/events" || pathname.startsWith("/events/")
              : pathname === route || pathname.startsWith(`${route}/`);

            const href = isEvents
              ? `/events/${LATEST_EVENTS_YEAR}`
              : route;

            return (
              <li key={route} className={isActive ? "active" : ""}>
                <Link href={href}>{name}</Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </div>
  );
}
