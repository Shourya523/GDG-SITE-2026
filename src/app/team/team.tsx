import React from "react";
import { Github, Linkedin, Twitter, Instagram, Mail } from "lucide-react";
import mentorsData from "./Mentors.json";
import leadsData from "./TeamLead.json";
import coreData from "./CoreTeam.json";

const SocialIcon = ({ type, url }: { type: string; url: string }) => {
  const iconClass = "w-5 h-5 text-gray-400 hover:text-blue-400 transition-colors duration-200";
  
  switch (type) {
    case "github": return <a href={url} target="_blank" rel="noopener noreferrer"><Github className={iconClass} /></a>;
    case "linkedin": return <a href={url} target="_blank" rel="noopener noreferrer"><Linkedin className={iconClass} /></a>;
    case "twitter": return <a href={url} target="_blank" rel="noopener noreferrer"><Twitter className={iconClass} /></a>;
    case "instagram": return <a href={url} target="_blank" rel="noopener noreferrer"><Instagram className={iconClass} /></a>;
    case "email": return <a href={url}><Mail className={iconClass} /></a>;
    default: return null;
  }
};

const TeamCard = ({ member }: { member: any }) => (
  <div className="group relative p-6 bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl hover:border-blue-500/30 transition-all duration-300 hover:transform hover:-translate-y-1">
    <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-purple-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
    
    <div className="relative z-10 flex flex-col items-center">
      <div className="w-32 h-32 mb-4 rounded-full overflow-hidden border-2 border-white/10 group-hover:border-blue-400/50 transition-colors duration-300">
        <img 
          src={member.image} 
          alt={member.name}
          className="w-full h-full object-cover"
        />
      </div>
      
      <h3 className="text-xl font-bold text-white mb-1">{member.name}</h3>
      <p className="text-blue-400 text-sm font-medium mb-4">{member.role}</p>
      
      <div className="flex gap-4 mt-2">
        {Object.entries(member.socials).map(([platform, url]) => (
          <SocialIcon key={platform} type={platform} url={url as string} />
        ))}
      </div>
    </div>
  </div>
);

const Section = ({ title, data }: { title: string; data: any[] }) => (
  <div className="mb-20 last:mb-0">
    <h2 className="text-3xl md:text-4xl font-bold text-center text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400 mb-12">
      {title}
    </h2>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 max-w-7xl mx-auto px-4">
      {data.map((member) => (
        <TeamCard key={member.id} member={member} />
      ))}
    </div>
  </div>
);

const Team = () => {
  return (
    <div className="w-full py-12">
      <Section title="Our Mentors" data={mentorsData} />
      <Section title="Team Leads" data={leadsData} />
      <Section title="Core Team" data={coreData} />
    </div>
  );
};

export default Team;