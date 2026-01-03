"use client";
import React, { useState, useEffect } from "react";
import "./team.css";
import { Instagram, Linkedin, Github, Globe } from "lucide-react";

type Category = "Mentors" | "Team Leads" | "Core Team";
type BrandColor = "blue" | "red" | "yellow" | "green";

interface TeamMember {
  id: number;
  name: string;
  firstName: string;
  role: string;
  category: Category;
  image: string;
  color: BrandColor;
  socials: {
    linkedin?: string;
    github?: string;
    instagram?: string;
    website?: string;
  };
}

const teamData: TeamMember[] = [
  {
    id: 1,
    name: "Jinendra Jain",
    firstName: "Jinendra",
    role: "Organizer",
    category: "Team Leads",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=500&h=600&fit=crop",
    color: "blue",
    socials: { linkedin: "#", github: "#" }
  },
  {
    id: 4,
    name: "Aditya Singh",
    firstName: "Aditya",
    role: "Tech Lead",
    category: "Team Leads",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=500&h=600&fit=crop",
    color: "yellow",
    socials: { linkedin: "#", github: "#" }
  },
  {
    id: 8,
    name: "David Chen",
    firstName: "David",
    role: "App Dev Lead",
    category: "Team Leads",
    image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=500&h=600&fit=crop",
    color: "green",
    socials: { github: "#", linkedin: "#" }
  },
  {
    id: 9,
    name: "Aisha Khan",
    firstName: "Aisha",
    role: "Cloud Lead",
    category: "Team Leads",
    image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=500&h=600&fit=crop",
    color: "red",
    socials: { linkedin: "#", website: "#" }
  },
  {
    id: 12,
    name: "William Garcia",
    firstName: "William",
    role: "AI/ML Lead",
    category: "Team Leads",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=500&h=600&fit=crop",
    color: "blue",
    socials: { github: "#", linkedin: "#" }
  },
  {
    id: 13,
    name: "Lucas Robinson",
    firstName: "Lucas",
    role: "Workshop Lead",
    category: "Team Leads",
    image: "https://images.unsplash.com/photo-1519345182560-3f2917c472ef?w=500&h=600&fit=crop",
    color: "green",
    socials: { linkedin: "#" }
  },
  {
    id: 14,
    name: "Daniel Wright",
    firstName: "Daniel",
    role: "Project Manager",
    category: "Team Leads",
    image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=500&h=600&fit=crop",
    color: "yellow",
    socials: { linkedin: "#" }
  },
  {
    id: 15,
    name: "Matthew Green",
    firstName: "Matthew",
    role: "Cybersec Lead",
    category: "Team Leads",
    image: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=500&h=600&fit=crop",
    color: "red",
    socials: { github: "#", website: "#" }
  },
  {
    id: 16,
    name: "James Wilson",
    firstName: "James",
    role: "DevOps Lead",
    category: "Team Leads",
    image: "https://images.unsplash.com/photo-1522075469751-3a3694c60e9e?w=500&h=600&fit=crop",
    color: "blue",
    socials: { github: "#" }
  },

  // --- Mentors (Original + New) ---
  {
    id: 3,
    name: "Dr. Anubha",
    firstName: "Anubha",
    role: "Faculty Advisor",
    category: "Mentors",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=500&h=600&fit=crop",
    color: "green",
    socials: { linkedin: "#" }
  },
  {
    id: 7,
    name: "Elena Rodriguez",
    firstName: "Elena",
    role: "Alumni Mentor",
    category: "Mentors",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=500&h=600&fit=crop",
    color: "yellow",
    socials: { linkedin: "#" }
  },
  {
    id: 17,
    name: "Prof. Robert Baker",
    firstName: "Robert",
    role: "Faculty Mentor",
    category: "Mentors",
    image: "https://images.unsplash.com/photo-1537511446984-935f663eb1f4?w=500&h=600&fit=crop",
    color: "blue",
    socials: { linkedin: "#", website: "#" }
  },
  {
    id: 18,
    name: "Dr. Susan Carter",
    firstName: "Susan",
    role: "Technical Advisor",
    category: "Mentors",
    image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=500&h=600&fit=crop",
    color: "red",
    socials: { linkedin: "#" }
  },
  {
    id: 19,
    name: "Michael Chang",
    firstName: "Michael",
    role: "Industry Expert",
    category: "Mentors",
    image: "https://images.unsplash.com/photo-1556157382-97eda2d62296?w=500&h=600&fit=crop",
    color: "green",
    socials: { linkedin: "#" }
  },

  // --- Core Team (Original + New) ---
  {
    id: 2,
    name: "Sarah Lee",
    firstName: "Sarah",
    role: "Design Lead",
    category: "Core Team",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=500&h=600&fit=crop",
    color: "red",
    socials: { instagram: "#", website: "#" }
  },
  {
    id: 5,
    name: "Marcus Reid",
    firstName: "Marcus",
    role: "Event Manager",
    category: "Core Team",
    image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=500&h=600&fit=crop",
    color: "blue",
    socials: { instagram: "#", linkedin: "#" }
  },
  {
    id: 6,
    name: "Priya Patel",
    firstName: "Priya",
    role: "Content Lead",
    category: "Core Team",
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=500&h=600&fit=crop",
    color: "yellow",
    socials: { linkedin: "#" }
  },
  {
    id: 10,
    name: "Tom Wilson",
    firstName: "Tom",
    role: "Logistics",
    category: "Core Team",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=500&h=600&fit=crop",
    color: "green",
    socials: { instagram: "#" }
  },
  {
    id: 11,
    name: "Sofia Rossi",
    firstName: "Sofia",
    role: "Social Media",
    category: "Core Team",
    image: "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=500&h=600&fit=crop",
    color: "blue",
    socials: { instagram: "#", website: "#" }
  },
  {
    id: 20,
    name: "Linda Chen",
    firstName: "Linda",
    role: "UI/UX Designer",
    category: "Core Team",
    image: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=500&h=600&fit=crop",
    color: "red",
    socials: { instagram: "#", website: "#" }
  },
  {
    id: 21,
    name: "Michael Brown",
    firstName: "Michael",
    role: "Backend Dev",
    category: "Core Team",
    image: "https://images.unsplash.com/photo-1504257432389-52343af06ae3?w=500&h=600&fit=crop",
    color: "green",
    socials: { github: "#" }
  },
  {
    id: 22,
    name: "Emily Davis",
    firstName: "Emily",
    role: "Frontend Dev",
    category: "Core Team",
    image: "https://images.unsplash.com/photo-1544725176-7c40e5a71c5e?w=500&h=600&fit=crop",
    color: "yellow",
    socials: { github: "#" }
  },
  {
    id: 23,
    name: "Olivia Martinez",
    firstName: "Olivia",
    role: "Marketing",
    category: "Core Team",
    image: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=500&h=600&fit=crop",
    color: "red",
    socials: { instagram: "#", linkedin: "#" }
  },
  {
    id: 24,
    name: "Charlotte Clark",
    firstName: "Charlotte",
    role: "Social Media",
    category: "Core Team",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=500&h=600&fit=crop",
    color: "yellow",
    socials: { instagram: "#" }
  },
  {
    id: 25,
    name: "Alexander Lewis",
    firstName: "Alexander",
    role: "Android Dev",
    category: "Core Team",
    image: "https://images.unsplash.com/photo-1463453091185-61582044d556?w=500&h=600&fit=crop",
    color: "blue",
    socials: { github: "#" }
  },
  {
    id: 26,
    name: "Mia Walker",
    firstName: "Mia",
    role: "Web Dev",
    category: "Core Team",
    image: "https://images.unsplash.com/photo-1515023115689-589c33041697?w=500&h=600&fit=crop",
    color: "red",
    socials: { github: "#" }
  },
  {
    id: 27,
    name: "Benjamin Hall",
    firstName: "Benjamin",
    role: "Events Co-Lead",
    category: "Core Team",
    image: "https://images.unsplash.com/photo-1507591064344-4c6ce005b128?w=500&h=600&fit=crop",
    color: "green",
    socials: { linkedin: "#" }
  },
  {
    id: 28,
    name: "Amelia Allen",
    firstName: "Amelia",
    role: "Speaker Outreach",
    category: "Core Team",
    image: "https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?w=500&h=600&fit=crop",
    color: "yellow",
    socials: { linkedin: "#" }
  },
  {
    id: 29,
    name: "Ethan Young",
    firstName: "Ethan",
    role: "Flutter Dev",
    category: "Core Team",
    image: "https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?w=500&h=600&fit=crop",
    color: "blue",
    socials: { github: "#" }
  },
  {
    id: 30,
    name: "Harper King",
    firstName: "Harper",
    role: "Graphic Designer",
    category: "Core Team",
    image: "https://images.unsplash.com/photo-1534751516642-a1af1ef26a56?w=500&h=600&fit=crop",
    color: "red",
    socials: { instagram: "#" }
  },
  {
    id: 31,
    name: "Ava Adams",
    firstName: "Ava",
    role: "Video Editor",
    category: "Core Team",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=500&h=600&fit=crop",
    color: "blue",
    socials: { instagram: "#" }
  }
];

export default function Team() {
  const [activeCategory, setActiveCategory] = useState<Category>("Team Leads");
  const filteredMembers = teamData.filter(m => m.category === activeCategory);
  
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      requestAnimationFrame(() => {
        setScrollY(window.scrollY);
      });
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);


  const getParallaxStyle = (index: number) => {
    const isFirstRow = index < 4;

    const initialOffsets = [15, 0, 20, 5, 15, 0, 10]; 
    const baseOffset = isFirstRow ? 0 : initialOffsets[index % initialOffsets.length];


    const speeds = [1.2, 0.5, 1.5, 0.8, 1.8, 0.6, 1.3];
    const speed = speeds[index % speeds.length];
    

    const maxDistance = 50; 
    
    const movement = maxDistance * Math.tanh((scrollY * speed) / maxDistance);

    const transformY = baseOffset - movement;

    return {
      transform: `translateY(${transformY}px)`,
      transition: 'transform 0.1s linear',
      zIndex: 1
    };
  };

  return (
    <div className="team-container fade-up visible">
      <div className="team-header">
        <h1 className="header-title">Meet the Team</h1>
        <p className="header-subtitle">The creative minds behind GDG JIIT</p>
      </div>

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

      <div className="team-grid">
        {filteredMembers.map((member, index) => (
          <div 
            key={member.id}
            className="profile-card-wrapper"
            style={getParallaxStyle(index)} 
          >
            <div className={`profile-card color-${member.color}`}>
              <div className="image-container">
                <img src={member.image} alt={member.name} className="profile-img" />
                <div className="gradient-overlay"></div>
                
                <div className="social-overlay">
                    {member.socials.linkedin && <a href={member.socials.linkedin}><Linkedin size={18}/></a>}
                    {member.socials.github && <a href={member.socials.github}><Github size={18}/></a>}
                    {member.socials.instagram && <a href={member.socials.instagram}><Instagram size={18}/></a>}
                    {member.socials.website && <a href={member.socials.website}><Globe size={18}/></a>}
                </div>
              </div>

              <div className="card-info-pill">
                <span className="name-tag">{member.firstName}</span>
                <span className="role-text">{member.role}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}