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

const getAvatar = (seed: string) => `https://api.dicebear.com/7.x/avataaars/svg?seed=${seed}&backgroundColor=b6e3f4,c0aede,d1d4f9`;

const teamData: TeamMember[] = [
  // --- MENTORS (10 Items) ---
  {
    id: 1, name: "Dr. Anubha", role: "Faculty Advisor", category: "Mentors",
    image: getAvatar("Anubha"), quote: "Empowering students to build the future.",
    socials: { linkedin: "anubha-prof" }
  },
  {
    id: 2, name: "Prof. Sharma", role: "Technical Mentor", category: "Mentors",
    image: getAvatar("Sharma"), quote: "Innovation starts with a single step.",
    socials: { linkedin: "sharma-tech", github: "sharma-code" }
  },
  {
    id: 3, name: "Dr. R.K. Gupta", role: "Dean of Student Affairs", category: "Mentors",
    image: getAvatar("Gupta"), quote: "Leadership is service, not position.",
    socials: { linkedin: "rk-gupta" }
  },
  {
    id: 4, name: "Ms. Priya Das", role: "Alumni Mentor", category: "Mentors",
    image: getAvatar("Priya"), quote: "Your network is your net worth.",
    socials: { linkedin: "priya-d", instagram: "priya_life" }
  },
  {
    id: 5, name: "Mr. Amit Verma", role: "Industry Expert", category: "Mentors",
    image: getAvatar("Amit"), quote: "Build things that matter.",
    socials: { linkedin: "amit-verma-ind" }
  },
  {
    id: 6, name: "Dr. S. Singh", role: "Research Guide", category: "Mentors",
    image: getAvatar("Singh"), quote: "Question everything, learn something.",
    socials: { linkedin: "s-singh", github: "research-singh" }
  },
  {
    id: 7, name: "Mrs. Kavita R", role: "Soft Skills Mentor", category: "Mentors",
    image: getAvatar("Kavita"), quote: "Communication bridges the gap.",
    socials: { instagram: "kavita_speaks", linkedin: "kavita-r" }
  },
  {
    id: 8, name: "Mr. John Doe", role: "Cloud Architect", category: "Mentors",
    image: getAvatar("John"), quote: "The sky is not the limit, the cloud is.",
    socials: { github: "johndoe", linkedin: "john-cloud" }
  },
  {
    id: 9, name: "Dr. Emily W", role: "Data Science Lead", category: "Mentors",
    image: getAvatar("Emily"), quote: "Data tells a story if you listen.",
    socials: { linkedin: "emily-ds", github: "emily-data" }
  },
  {
    id: 10, name: "Prof. Alan T", role: "Cybersecurity Expert", category: "Mentors",
    image: getAvatar("Alan"), quote: "Security is not a product, it's a process.",
    socials: { github: "alan-sec", linkedin: "alan-cyber" }
  },

  // --- TEAM LEADS (10 Items) ---
  {
    id: 11, name: "Jinendra Jain", role: "GDG Organizer", category: "Team Leads",
    image: "https://github.com/shadcn.png", quote: "Code is like humor. If you have to explain it, it's bad.",
    socials: { instagram: "hattori.03", linkedin: "jinendra-jain", github: "jjinendra3", discord: "jim_k_schrute" }
  },
  {
    id: 12, name: "Aditya Singh", role: "Tech Lead", category: "Team Leads",
    image: getAvatar("Aditya"), quote: "Talk is cheap. Show me the code.",
    socials: { linkedin: "aditya-singh", github: "aditya" }
  },
  {
    id: 13, name: "Sarah Connor", role: "Event Lead", category: "Team Leads",
    image: getAvatar("Sarah"), quote: "The future is what we make it.",
    socials: { instagram: "sarah_c", linkedin: "sarah-events" }
  },
  {
    id: 14, name: "Michael Scott", role: "Community Lead", category: "Team Leads",
    image: getAvatar("Michael"), quote: "I want people to be afraid of how much they love me.",
    socials: { linkedin: "michael-scott-paper", instagram: "greatest_boss" }
  },
  {
    id: 15, name: "Pam Beesly", role: "Design Lead", category: "Team Leads",
    image: getAvatar("Pam"), quote: "There’s a lot of beauty in ordinary things.",
    socials: { instagram: "pam_art", linkedin: "pam-beesly" }
  },
  {
    id: 16, name: "Jim Halpert", role: "Outreach Lead", category: "Team Leads",
    image: getAvatar("Jim"), quote: "Bears. Beets. Battlestar Galactica.",
    socials: { linkedin: "jim-sales", discord: "big_tuna" }
  },
  {
    id: 17, name: "Dwight Schrute", role: "Logistics Lead", category: "Team Leads",
    image: getAvatar("Dwight"), quote: "False. I am the best lead.",
    socials: { discord: "dwight_shrute", linkedin: "assistant-regional-mgr" }
  },
  {
    id: 18, name: "Ryan Howard", role: "Innovation Lead", category: "Team Leads",
    image: getAvatar("Ryan"), quote: "I’m the wonder kid.",
    socials: { github: "ryan_temp", linkedin: "wuphf-founder" }
  },
  {
    id: 19, name: "Kelly Kapoor", role: "Social Media Lead", category: "Team Leads",
    image: getAvatar("Kelly"), quote: "Who says exactly what they’re thinking?",
    socials: { instagram: "kelly_biz", linkedin: "kelly-customer-svc" }
  },
  {
    id: 20, name: "Angela Martin", role: "Finance Lead", category: "Team Leads",
    image: getAvatar("Angela"), quote: "I don't suffer fools correctly.",
    socials: { linkedin: "angela-acct" }
  },

  // --- CORE TEAM (10 Items) ---
  {
    id: 21, name: "Rohan Gupta", role: "Management Lead", category: "Core Team",
    image: getAvatar("Rohan"), quote: "Management is doing things right.",
    socials: { instagram: "rohan_g", linkedin: "rohan-gupta" }
  },
  {
    id: 22, name: "Isha Patel", role: "Web Developer", category: "Core Team",
    image: getAvatar("Isha"), quote: "Eat. Sleep. Code. Repeat.",
    socials: { github: "isha_dev", linkedin: "isha-web" }
  },
  {
    id: 23, name: "Rahul Kumar", role: "Content Writer", category: "Core Team",
    image: getAvatar("Rahul"), quote: "Words have power.",
    socials: { linkedin: "rahul-writes", instagram: "rahul_poet" }
  },
  {
    id: 24, name: "Sneha Reddy", role: "Graphic Designer", category: "Core Team",
    image: getAvatar("Sneha"), quote: "Design is intelligence made visible.",
    socials: { instagram: "sneha_designs", linkedin: "sneha-ux" }
  },
  {
    id: 25, name: "Vikram Malhotra", role: "Video Editor", category: "Core Team",
    image: getAvatar("Vikram"), quote: "Fix it in post.",
    socials: { instagram: "vikram_edits", linkedin: "vikram-vfx" }
  },
  {
    id: 26, name: "Pooja Hegde", role: "PR Coordinator", category: "Core Team",
    image: getAvatar("Pooja"), quote: "Building relationships matters.",
    socials: { linkedin: "pooja-pr", instagram: "pooja_connects" }
  },
  {
    id: 27, name: "Arjun Rampal", role: "Logistics Member", category: "Core Team",
    image: getAvatar("Arjun"), quote: "Execution is everything.",
    socials: { discord: "arjun_logs", linkedin: "arjun-ops" }
  },
  {
    id: 28, name: "Nisha Singh", role: "App Developer", category: "Core Team",
    image: getAvatar("Nisha"), quote: "There's an app for that.",
    socials: { github: "nisha_app", linkedin: "nisha-dev" }
  },
  {
    id: 29, name: "Kabir Khan", role: "Sponsorship Member", category: "Core Team",
    image: getAvatar("Kabir"), quote: "Show me the money.",
    socials: { linkedin: "kabir-corp", instagram: "kabir_biz" }
  },
  {
    id: 30, name: "Zara Ali", role: "Volunteer", category: "Core Team",
    image: getAvatar("Zara"), quote: "Service to others is the rent you pay.",
    socials: { instagram: "zara_v", linkedin: "zara-vol" }
  }
];

export default function Team() {
  const [activeCategory, setActiveCategory] = useState<Category>("Team Leads");
  const [selectedMember, setSelectedMember] = useState<TeamMember | null>(null);

  const filteredMembers = teamData.filter(m => m.category === activeCategory);

  useEffect(() => {
    if (filteredMembers.length > 0) {
      setSelectedMember(filteredMembers[0]);
    } else {
      setSelectedMember(null);
    }
  }, [activeCategory]);

  return (
    <div className="team-container">
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
            align: "start",
            loop: true,
            dragFree: true,
          }}
          className="w-full team-carousel"
        >
          <CarouselContent className="-ml-2">
            {filteredMembers.map((member) => (
              <CarouselItem key={member.id} className="pl-1 basis-1/7 md:basis-1/9 lg:basis-1/12 flex justify-center items-center">
                <div 
                  className={`carousel-avatar-btn ${selectedMember?.id === member.id ? 'selected' : ''}`}
                  onClick={() => setSelectedMember(member)}
                >
                  <img src={member.image} alt={member.name} />
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious 
            className="custom-carousel-btn flex -left-12" 
          />
          <CarouselNext 
            className="custom-carousel-btn flex -right-12" 
          />
        </Carousel>
      </div>
    </div>
  );
}