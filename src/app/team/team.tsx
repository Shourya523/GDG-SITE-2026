"use client";
import React, { useState, useEffect } from "react";
import "./team.css";
import { Instagram, Linkedin, Github, MessageSquare } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/src/components/ui/carousel";
import { TextAnimate } from "@/src/components/ui/text-animate";

import mentorsData from "./Mentors";
import leadsData from "./TeamLead";
import coreData from "./CoreTeam";
import { Spinner } from "@/src/components/ui/spinner";

type Category = "Mentors" | "Team Leads" | "Core Team";
type BrandColor = "blue" | "red" | "yellow" | "green";

interface TeamMember {
  id: number;
  name: string;
  firstName: string;
  role: string;
  category: string;
  image: string | any;
  quote: string;
  socials: {
    linkedin?: string;
    github?: string;
    instagram?: string;
    website?: string;
  };
}

function extractInstagramUsername(url: string): string {
  const regex = /instagram\.com\/([^/?]+)/i;
  const match = url.match(regex);
  return match ? match[1] : url;
}

function extractGithubUsername(url: string): string {
  const regex = /github\.com\/([^/?]+)/i;
  const match = url.match(regex);
  return match ? match[1] : url;
}

const getImageSrc = (image: string | any) => {
  if (typeof image === 'string') return image;
  return image?.src || '';
};

export default function Team() {
  const [isLoading, setIsLoading] = useState(true);
  const [api, setApi] = useState<any>(null);
  const [activeCategory, setActiveCategory] = useState<Category>("Team Leads");
  const [selectedMember, setSelectedMember] = useState<TeamMember | null>(null);

  const [fade, setFade] = useState(false);
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

  const categoryDataMap: Record<Category, TeamMember[]> = {
    "Mentors": mentorsData as unknown as TeamMember[],
    "Team Leads": leadsData as unknown as TeamMember[],
    "Core Team": coreData as unknown as TeamMember[],
  };

  const filteredMembers = categoryDataMap[activeCategory] || [];
  useEffect(() => {
    if (filteredMembers.length > 0) {
      if (activeCategory === "Core Team") {
        const candidates = filteredMembers.filter(m => m.id === 1 || m.id === 26);

        if (candidates.length > 0) {
          const randomMember = candidates[Math.floor(Math.random() * candidates.length)];
          setSelectedMember(randomMember);
        } else {
          setSelectedMember(filteredMembers[0]);
        }
      } else {
        setSelectedMember(filteredMembers[0]);
      }
    } else {
      setSelectedMember(null);
    }
  }, [activeCategory]);


  useEffect(() => {
    let loaded = 0;
    const images = filteredMembers.map(m => getImageSrc(m.image));

    if (images.length === 0) {
      setIsLoading(false);
      return;
    }

    images.forEach(src => {
      const img = new Image();
      img.src = src;
      img.onload = img.onerror = () => {
        loaded++;
        if (loaded === images.length) {
          setIsLoading(false);
        }
      };
    });
  }, [filteredMembers]);


  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      document.documentElement.style.setProperty("--mouse-x", `${e.clientX}px`);
      document.documentElement.style.setProperty("--mouse-y", `${e.clientY}px`);
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  useEffect(() => {
    if (api && filteredMembers.length > 0 && selectedMember) {
      const index = filteredMembers.findIndex(m => m.id === selectedMember.id);
      if (index !== -1) {
        api.scrollTo(index);
      }
    }
  }, [activeCategory, api, selectedMember]);

  if (isLoading) {
    return (
      <div className="team-loader">
        <Spinner className="size-8 text-white" />
        <p>Loading team...</p>
      </div>
    );
  }

  return (
    <div className="team-container">
      <div className="text-center mb-8">
        <h1 style={{ fontSize: '1.5rem', color: '#fff', fontWeight: 600 }}></h1>
        <p style={{ color: '#a1a1a1', fontSize: '1rem', marginTop: '0.5rem' }}></p>
      </div>

      {selectedMember && (
        <div className="active-profile-card">
          <div className="profile-image-container">
            <div className="gradient-ring"></div>
            <div className="profile-image-wrapper">
              <img src={getImageSrc(selectedMember.image)} alt={selectedMember.name} />
            </div>
          </div>

          <div className="profile-info">
            <div className={`role-badge fade-up${fade ? ' visible' : ''}`}>
              {selectedMember.role}
            </div>
            <h2 className="profile-title">
              Hi, my name is <br />
              <span className="highlight-name">{selectedMember.name}</span>
            </h2>

            <p className="profile-quote">
              <TextAnimate
                as="span"
                key={`${selectedMember.id}-quote`}
                by="word"
                animation="blurInUp"
                duration={0.5}
                delay={0}
                once={false}
              >

                {selectedMember.quote}
              </TextAnimate>
            </p>

            <div className="social-links">
              {selectedMember.socials.instagram && (
                <a
                  href={selectedMember.socials.instagram}
                  target="_blank"
                  className="social-item"
                >
                  <Instagram size={24} />
                  <span>{extractInstagramUsername(selectedMember.socials.instagram)}</span>
                </a>
              )}

              {selectedMember.socials.linkedin && (
                <a
                  href={selectedMember.socials.linkedin}
                  target="_blank"
                  className="social-item"
                >
                  <Linkedin size={24} />
                  <span>{selectedMember.name}</span>
                </a>
              )}

              {selectedMember.socials.github && (
                <a
                  href={selectedMember.socials.github}
                  target="_blank"
                  className="social-item"
                >
                  <Github size={24} />
                  <span>{extractGithubUsername(selectedMember.socials.github)}</span>
                </a>
              )}
            </div>
          </div>
        </div>
      )}

      <div className="category-nav">
        {(["Mentors", "Team Leads", "Core Team"] as Category[]).map((cat) => (
          <button
            key={cat}
            className={`nav-item ${activeCategory === cat ? "active" : ""}`}
            onClick={() => setActiveCategory(cat)}
          >
            {cat}
          </button>
        ))}
      </div>

      <div className="carousel-container">
        <Carousel
          setApi={setApi}
          opts={{
            align: "center",
            loop: true,
            dragFree: true,
            containScroll: "trimSnaps",
            skipSnaps: false,
            slidesToScroll: 1,
          }}
          className="w-full team-carousel"
        >
          <CarouselContent className="-ml-2 py-10">
            {filteredMembers.map((member) => (
              <CarouselItem
                key={member.id}
                className="pl-1 basis-1/5 md:basis-1/9 lg:basis-1/12 flex justify-center items-center"
              >
                <div
                  className={`carousel-avatar-btn ${selectedMember?.id === member.id ? "selected" : ""
                    }`}
                  onClick={() => {
                    setSelectedMember(member);
                    const index = filteredMembers.findIndex(
                      (m) => m.id === member.id
                    );
                    api?.scrollTo(index);
                  }}
                >
                  <img src={getImageSrc(member.image)} alt={member.name} />
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>

          <CarouselPrevious className="custom-carousel-btn flex -left-12" />
          <CarouselNext className="custom-carousel-btn flex -right-12" />
        </Carousel>
      </div>
    </div>
  )
}