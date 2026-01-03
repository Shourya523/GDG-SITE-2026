import React from 'react';
import { 
  Instagram, 
  Youtube, 
  MessageSquare, 
  Twitter,
  XIcon, 
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
    { icon: Instagram, label: "Instagram", href: "https://www.instagram.com/gdg_jiit/", className: "instagram" },
    { icon: Youtube, label: "YouTube", href: "https://www.youtube.com/channel/UCsq-cbi1tZStoem3KVQVjCg", className: "youtube" },
    { icon: MessageSquare, label: "Discord", href: "https://discord.com/invite/HqatsVyq5H", className: "discord" },
    { icon: Twitter, label: "Twitter", href: "https://x.com/gdgjiit", className: "twitter" },
    { icon: Github, label: "GitHub", href: "https://github.com/dsc-jiit-128", className: "github" },
    { icon: Facebook, label: "Facebook", href: "https://www.facebook.com/gdscjiit/", className: "facebook" },
  ];

  return (
    <div className="social-stats-container">
      {socials.map((social, index) => (
        <SocialItem key={index} {...social} />
      ))}
    </div>
  );
}