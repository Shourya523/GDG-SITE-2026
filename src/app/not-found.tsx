"use client";

import React from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import "./not-found.css"
const NotFound = () => {
  const router = useRouter();

  return (
    <div className="not-found-wrapper">
      <div className="grid-background" />
      
      <div className="shape-decoration shape-1" />
      <div className="shape-decoration shape-2" />

      <div className="not-found-content">
        <div className="not-found-badge">
          <span>Error 404</span>
        </div>

        <h1 className="not-found-title">
          Explore. Connect. <br />
          <span className="dimmed">Redirect.</span>
        </h1>

        <p className="not-found-subtext">
          The path you followed lead to a digital dead end. Even the best developers 
          take a wrong turn sometimes. Let's get you back to the sandbox.
        </p>

        <div className="not-found-actions">
          <a
            href="/"
            className="btn-secondary-demo-dashboard"
            style={{
              border: "1px solid var(--border)",
              padding: "0.8rem 2rem",
              borderRadius: "999px",
              color: "var(--bg-main)",
              textDecoration: "none",
              backgroundColor:"var(--text-primary)"
            }}
          >
            Return To Base
          </a>
          <button onClick={() => router.back()} className="btn-secondary-demo-dashboard"
            style={{
              border: "1px solid var(--border)",
              padding: "0.8rem 2rem",
              borderRadius: "999px",
              color: "var(--text-primary)",
              textDecoration: "none",
              backgroundColor:"var(--bg-main)"
            }}>
            Study Jams
          </button>
        </div>
      </div>

      <div className="not-found-footer-pill">
        <div className="footer-pill-content">
          <span className="pill-dot"></span>
          <p>PATH_NOT_RESOLVED: 0x404_VOID</p>
        </div>
      </div>
    </div>
  );
};

export default NotFound;

