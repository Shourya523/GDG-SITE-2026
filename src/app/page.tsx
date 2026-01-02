"use client"
import "./homePage.css"
import Image from "next/image";
import { useEffect, useState, useRef } from "react";
import {
  CheckCircle,
  CalendarRange,
  ShoppingBag,
  Sparkles,
  XCircle,
  Car,
  Zap,
  Coffee,
  FolderHeart,
  Users,
  Code2,
  Globe
} from "lucide-react";
import Navbar from "@/src/component/Navbar";
import Footer from "@/src/component/Footer";

export default function HomePage() {
  const [fade, setFade] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

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
    <section>
      <Navbar /><div ref={containerRef}>
      <div className="grid-background" />
      <div className="cursor-spotlight" />

      <section className="hero">
        {/* GDG Logo Background */}
        <img 
          src="/gdg-outlined-logo.png" 
          alt="GDG Logo" 
          className={`hero-background-logo${fade ? " visible" : ""}`}
        />

        <div className={`hero-title fade-up${fade ? " visible" : ""}`}>
          Google Developer Groups
          <br />Jaypee Institute of Information Technology - Sec 128
        </div>
        
        <p className={`hero-subtext fade-up${fade ? " visible" : ""}`}>
          We are a community of students passionate about Google technologies. 
          From Cloud to Android, we bridge the gap between theory and practice 
          through peer-to-peer learning and building impactful projects.
        </p>

        <div className={`hero-actions fade-up${fade ? " visible" : ""}`}>
          <a href="#" className="btn-primary">Join Chapter</a>
          <a href="#" className="btn-secondary-demo-dashboard" style={{
            border: '1px solid var(--border)',
            padding: '0.8rem 2rem',
            borderRadius: '999px',
            color: 'var(--text-primary)',
            textDecoration: 'none'
          }}>View Projects</a>
        </div>

        <div className={`hero-stats fade-up${fade ? " visible" : ""}`}>
          <div className="stat-item">
            <span className="stat-value">500+</span>
            <span className="stat-label">Members</span>
          </div>
          <div className="stat-item">
            <span className="stat-value">20+</span>
            <span className="stat-label">Events / Year</span>
          </div>
          <div className="stat-item">
            <span className="stat-value">15+</span>
            <span className="stat-label">Projects</span>
          </div>
        </div>
      </section>
    </div>
    <Footer />
    </section>
  );
}