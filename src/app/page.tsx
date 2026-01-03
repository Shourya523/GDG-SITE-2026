"use client";
import "./homePage.css";
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
import HomePageCards from "@/src/components/HomePageCards";
import HomePageEventCards from "../components/HomePageEventCards";
import SocialHomePage from "../components/SocialCardsHomePage";

export default function HomePage() {
  const [fade, setFade] = useState(false);
  const [currTitle, setCurTitle] = useState("");
  const [currSubTitle, setSubCurTitle] = useState("");
  const containerRef = useRef<HTMLDivElement>(null);

  const heroTitleMessages = [
    {
      heroTitle: "Create. Conquer. Collaborate.",
      heroSubTitle:
        "The ultimate hub for student builders. Build your squad, win the hackathons, and own the campus tech scene."
    },
    {
      heroTitle: "Build for mobile. Scale with cloud.\nThrive together.",
      heroSubTitle:
        "Stop just building apps—start building infrastructure. Join the community pushing mobile and cloud to the limit."
    },
    {
      heroTitle: "Shape the future of\nWeb and AI.",
      heroSubTitle:
        "Moving beyond the basics. From React to LLMs, we’re tinkering with the tech that will define our careers."
    },
    {
      heroTitle: "Innovate with data.\nLead with AI.",
      heroSubTitle:
        "Deep dive into data science and neural networks. Turn your academic projects into real-world AI applications."
    },
    {
      heroTitle: "Innovate. Learn. Grow.",
      heroSubTitle:
        "The campus sandbox for big ideas. A place to experiment with new tech, share knowledge, and level up together."
    },
    {
      heroTitle: "Design. Develop. Deploy.",
      heroSubTitle:
        "Go beyond the syllabus. Master the full product lifecycle and ship live code before you even graduate."
    }
  ];

  const prevIndexRef = useRef<number | null>(null);

  useEffect(() => {
    let randomIndex;

    do {
      randomIndex = Math.floor(Math.random() * heroTitleMessages.length);
    } while (randomIndex === prevIndexRef.current);

    prevIndexRef.current = randomIndex;

    setCurTitle(heroTitleMessages[randomIndex].heroTitle);
    setSubCurTitle(heroTitleMessages[randomIndex].heroSubTitle);
  }, []);


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
    <section >

        <section className="hero">
          <div className={`hero-badge fade-up${fade ? ' visible' : ''}`}>
                    Google Developer Groups JIIT 128
          </div>
          <img
            src="/gdg-outlined-logo.png"
            alt="GDG Logo"
            className={`hero-background-logo${fade ? " visible" : ""}`}
          />

          <div className={`hero-title fade-up${fade ? " visible" : ""}`}>
            {currTitle}
          </div>

          <p className={`hero-subtext fade-up${fade ? " visible" : ""}`}>
            {currSubTitle}
          </p>

          <div className={`hero-actions fade-up${fade ? " visible" : ""}`}>
            <a href="#" className="btn-primary">
              View Events
            </a>
            <a
              href="#"
              className="btn-secondary-demo-dashboard"
              style={{
                border: "1px solid var(--border)",
                padding: "0.8rem 2rem",
                borderRadius: "999px",
                color: "var(--text-primary)",
                textDecoration: "none"
              }}
            >
              Study Jams
            </a>
          </div>

          <div className={`fade-up ${fade ? "visible" : ""}`}>
            <SocialHomePage />
          </div>
        </section>
        <section className={`what-do-we-do fade-up ${fade ? "visible" : ""}`}>
          <span className="section-label">Our Impact</span>

          <div className="content-wrapper">
            <div className="text-content">
              <h2>What do we do?</h2>
              <p>
                With our team's motto being <span className="motto-highlight">"Giving Direction to Greatness"</span>,
                we help students climb mountains on their own, as high as possible.
                We provide the tools, community, and guidance to turn curiosity into industry-ready expertise.
              </p>
            </div>

            <div className="flagship-cards">
              <HomePageCards
                heading="BitBox"
                icon={Zap}
                description="Flagship Hackathon"
              />

              <HomePageCards
                heading="ExploreML"
                icon={Sparkles}
                description="AI/ML Deep Dive"
              />

              <HomePageCards
                heading="Workshops & Meetups"
                icon={Globe}
                description="Weekly Tech Sessions"
              />
            </div>
          </div>
        </section>
        <section className={`events-section fade-up ${fade ? "visible" : ""}`}>
          <span className="section-label">Our Programs</span>
          <h2 className="hero-title" style={{ fontSize: "3rem" }}>Events</h2>

          <div className="events-grid">
            <HomePageEventCards
              heading="Hackathons"
              description="The idea of conducting hackathons is to make students code collaboratively from scratch to end with a working prototype."
              variant="hackathons"
            />

            <HomePageEventCards
              heading="Sessions"
              description="Small sessions for the students to showcase their projects, achievements and for getting to know about the current trends."
              variant="sessions"
            />

            <HomePageEventCards
              heading="Study Jams"
              description="Study Jams are community-run groups for Developers. Whether you are a beginner or an experienced developer, you get to learn new things."
              variant="study-jams"
            />

            <HomePageEventCards
              heading="Meetups"
              description="Regular meetings are organised for the students who share the same technical interests, so they can get connected with each other."
              variant="meetups"
            />

          </div>
        </section>
    </section>
  );
}
