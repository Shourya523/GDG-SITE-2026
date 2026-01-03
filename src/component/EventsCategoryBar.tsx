"use client";

import React from 'react';
import Link from 'next/link';
import { usePathname, useSearchParams } from 'next/navigation';
import './EventsCategoryBar.css';

const categories = [
  { name: "SESSIONS", id: "sessions" },
  { name: "HACKATHONS", id: "hackathons" },
  { name: "UPCOMING", id: "upcoming" },
  { name: "MEETUPS", id: "meetups" },
];

export default function EventsCategoryBar() {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const activeCategory = searchParams.get('type') || 'sessions';

  return (
    <div className="category-bar-container">
      <nav className="category-nav">
        {categories.map((cat) => (
          <Link
            key={cat.id}
            href={`${pathname}?type=${cat.id}`}
            className={`category-item ${activeCategory === cat.id ? "active" : ""}`}
          >
            <span className="category-name">{cat.name}</span>
            {activeCategory === cat.id && <div className="active-indicator" />}
          </Link>
        ))}
      </nav>
    </div>
  );
}