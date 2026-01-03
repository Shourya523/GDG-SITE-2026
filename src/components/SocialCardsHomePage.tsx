import React from 'react';
import { 
  Instagram, 
  Youtube, 
  MessageSquare, 
  Twitter, 
  Github, 
  Facebook 
} from "lucide-react";
import "./SocialCardsHomePage.css"

interface SocialItemProps {
  icon: React.ElementType;
  label: string;
  href: string;
  className: string;
}

const SocialItem = ({ icon: Icon, label, href, className }: SocialItemProps) => (
  <a href={href} className={`social-item-link ${className}`} target="_blank" rel="noopener noreferrer">
    <div className="social-icon-wrapper">
      <Icon size={20} />
    </div>
    <span className="stat-label" style={{ textTransform: 'none', color: 'inherit' }}>{label}</span>
  </a>
);

export default function SocialHomePage() {
  const socials = [
    { icon: Instagram, label: "Instagram", href: "#", className: "instagram" },
    { icon: Youtube, label: "YouTube", href: "#", className: "youtube" },
    { icon: MessageSquare, label: "Discord", href: "#", className: "discord" },
    { icon: Twitter, label: "Twitter", href: "#", className: "twitter" },
    { icon: Github, label: "GitHub", href: "#", className: "github" },
    { icon: Facebook, label: "Facebook", href: "#", className: "facebook" },
  ];

  return (
    <div className="social-stats-container">
      {socials.map((social, index) => (
        <SocialItem key={index} {...social} />
      ))}
    </div>
  );
}