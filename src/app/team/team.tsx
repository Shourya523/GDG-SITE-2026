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
} from "@/components/ui/carousel";

type Category = "Mentors" | "Team Leads" | "Core Team";

interface TeamMember {
  id: number;
  name: string;
  role: string;
  category: Category;
  image: string;
  quote: string;
  socials: {
    instagram?: string;
    linkedin?: string;
    github?: string;
    discord?: string;
  };
}

// Dummy Data
const teamData: TeamMember[] = [
  {
    id: 1,
    name: "Jinendra Jain",
    role: "GDG Organizer",
    category: "Team Leads",
    image: "https://github.com/shadcn.png", 
    quote: "Code is like humor. If you have to explain it, it's bad.",
    socials: {
      instagram: "hattori.03",
      linkedin: "jinendra-jain",
      github: "jjinendra3",
      discord: "jim_k_schrute"
    }
  },
  {
    id: 2,
    name: "Aditya Singh",
    role: "Tech Lead",
    category: "Team Leads",
    image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Aditya",
    quote: "Talk is cheap. Show me the code.",
    socials: { linkedin: "aditya-singh", github: "aditya" }
  },
  {
    id: 3,
    name: "Dr. Anubha",
    role: "Faculty Advisor",
    category: "Mentors",
    image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Anubha",
    quote: "Empowering students to build the future.",
    socials: { linkedin: "anubha-prof" }
  },
  {
    id: 4,
    name: "Rohan Gupta",
    role: "Management Lead",
    category: "Core Team",
    image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Rohan",
    quote: "Management is doing things right; leadership is doing the right things.",
    socials: { instagram: "rohan_g", linkedin: "rohan-gupta" }
  },
];

export default function Team() {
  const [activeCategory, setActiveCategory] = useState<Category>("Team Leads");
  const [selectedMember, setSelectedMember] = useState<TeamMember | null>(null);

  // Filter Data
  const filteredMembers = teamData.filter(m => m.category === activeCategory);

  useEffect(() => {
    if (filteredMembers.length > 0) {
      setSelectedMember(filteredMembers[0]);
    } else {
      setSelectedMember(null);
    }
  }, [activeCategory]);

  return (
    <div className="team-container fade-up visible">
      <div className="text-center mb-8">
        <h1 style={{ fontSize: '1.5rem', color: '#fff', fontWeight: 600 }}></h1>
        <p style={{ color: '#a1a1a1', fontSize: '1rem', marginTop: '0.5rem' }}>
        </p>
      </div>
      {selectedMember && (
        <div className="active-profile-card">
          <div className="profile-image-container">
            <div className="gradient-ring"></div>
            <div className="profile-image-wrapper">
              <img src={selectedMember.image} alt={selectedMember.name} />
            </div>
          </div>

          <div className="profile-info">
            <h2 className="profile-title">
              Hi, my name is <br />
              <span className="highlight-name">{selectedMember.name}</span>
            </h2>
            <p className="profile-quote">{selectedMember.quote}</p>

            <div className="social-links">
              {selectedMember.socials.instagram && (
                <a href={`https://instagram.com/${selectedMember.socials.instagram}`} target="_blank" className="social-item">
                  <Instagram size={24} />
                  <span>{selectedMember.socials.instagram}</span>
                </a>
              )}
              {selectedMember.socials.linkedin && (
                <a href={`https://linkedin.com/in/${selectedMember.socials.linkedin}`} target="_blank" className="social-item">
                  <Linkedin size={24} />
                  <span>{selectedMember.name}</span>
                </a>
              )}
              {selectedMember.socials.github && (
                <a href={`https://github.com/${selectedMember.socials.github}`} target="_blank" className="social-item">
                  <Github size={24} />
                  <span>{selectedMember.socials.github}</span>
                </a>
              )}
              {selectedMember.socials.discord && (
                <a href="#" className="social-item">
                  <MessageSquare size={24} />
                  <span>{selectedMember.socials.discord}</span>
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
          opts={{
            align: "center",
            loop: true,
          }}
          className="w-full"
        >
          <CarouselContent className="-ml-4 flex items-center">
            {filteredMembers.map((member) => (
              <CarouselItem key={member.id} className="pl-4 basis-1/4 md:basis-1/6 lg:basis-1/6 flex justify-center">
                <div 
                  className={`carousel-avatar-btn ${selectedMember?.id === member.id ? 'selected' : ''}`}
                  onClick={() => setSelectedMember(member)}
                >
                  <img src={member.image} alt={member.name} />
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="bg-transparent border-white/20 text-white hover:bg-white hover:text-black" />
          <CarouselNext className="bg-transparent border-white/20 text-white hover:bg-white hover:text-black" />
        </Carousel>
      </div>
    </div>
  );
}