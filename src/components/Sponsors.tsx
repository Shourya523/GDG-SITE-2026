"use client";

import React from "react";
import { motion } from "framer-motion";
import { GlowingEffect } from "@/src/components/ui/glowing-effect";
import { AuroraText } from "@/src/components/ui/aurora-text";

const sponsors = {
  title: [
    { name: "Devfolio", logo: "/Sponsors/devfolio", link: "https://devfolio.co/" },
  ],
  poweredBy: [
    { name: "EthIndia", logo: "/Sponsors/ethindia.png", link: "https://ethindia.co" },
  ],
  coSponsors: [
    { name: "GeeksForGeeks", logo: "/Sponsors/gfg.png", link: "https://geeksforgeeks.org/", bgWhite: true },
    { name: "MentorX", logo: "/Sponsors/MentorXGlobal.png", link: "https://thementorx.com/" },
    { name: "HoverRobotix", logo: "/Sponsors/HoverRobotix.png", link: "https://hoverrobotix.com/", bgWhite: true },
    { name: "Sybgen", logo: "/Sponsors/Sybgen.png", link: "https://sybgen.com/", bgWhite: true },
    { name: "InterviewBuddy", logo: "/Sponsors/InterviewBuddy.svg", link: "https://interviewbuddy.net/", bgWhite: true },
    { name: "RevUp", logo: "/Sponsors/RevupLifeSkills.jpg", link: "https://www.instagram.com/revuplifeskills/" },
    { name: "Lucr8Ventures", logo: "/Sponsors/Lucr8Ventures.jpg", link: "https://www.instagram.com/envision_thapar/" },
  ],
  oldSponsors: [
    { name: "Replit", logo: "/Sponsors/replit.png", link: "https://replit.com", bgWhite: true },
    { name: "Polygon", logo: "/Sponsors/polygon.jpg", link: "https://polygon.technology/" },
    { name: "CodingNinjas", logo: "/Sponsors/codingninja.svg", link: "https://www.codingninjas.com/" },
    { name: "Axure", logo: "/Sponsors/axure.webp", link: "https://www.axure.com" },
    { name: "Echo3D", logo: "/Sponsors/echo3d.webp", link: "https://www.echo3d.com/" },
    { name: "GiveMyCertificate", logo: "/Sponsors/gmc.svg", link: "https://givemycertificate.com/", bgWhite: true },
    { name: "StreamYard", logo: "/Sponsors/streamyardsponsor.png", link: "https://streamyard.com/" },
    { name: "AlgoCS", logo: "/Sponsors/algocs.svg", link: "https://www.algocs.in/", bgWhite: true },
    { name: "UpcomingFest", logo: "/Sponsors/uf.svg", link: "https://upcomingfest.netlify.app/" },
    { name: "StockEdge", logo: "/Sponsors/stockedge.svg", link: "https://stockedge.com/" },
    { name: "XYZ", logo: "/Sponsors/xyzz.webp", link: "https://gen.xyz/" },
    { name: "Rosenfeld", logo: "/Sponsors/rosenfeld.webp", link: "https://rosenfeldmedia.com", bgWhite: true },
    { name: "InterviewCake", logo: "/Sponsors/cake.webp", link: "https://www.interviewcake.com/", bgWhite: true },
    { name: "Taskade", logo: "/Sponsors/taskade.png", link: "https://www.taskade.com/", bgWhite: true },
    { name: "ThreeWay", logo: "/Sponsors/threeway.png", link: "https://www.threeway.studio/" },
    { name: "Wolfram", logo: "/Sponsors/wolf.webp", link: "https://www.wolfram.com/language/" },
  ],
};

const SponsorCard = ({ item, className = "", borderColor = "border-white/10", glowStyles = "", ambientColor = "rgba(255,255,255,0.05)" }: { 
  item: any; 
  className?: string;
  borderColor?: string;
  glowStyles?: string;
  ambientColor?: string;
}) => {
  return (
    <a
      // href={item.link}
      target="_blank"
      rel="noopener noreferrer"
      className={`group relative block h-full w-full ${className}`}
    >
      <div className={`relative h-full w-full overflow-hidden rounded-[40px] border bg-[rgba(15,15,15,0.4)] backdrop-blur-[25px] saturate-150 transition-all duration-500 hover:scale-[1.02] ${borderColor} ${glowStyles}`}>
        
        {/* Glowing Effect */}
        <GlowingEffect
          spread={50}
          glow={true}
          disabled={false}
          proximity={80}
          inactiveZone={0.2}
          borderWidth={2}
        />

        {/* Ambient Background Glow */}
        <div
          className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
          style={{ 
            backgroundImage: `linear-gradient(${ambientColor}, transparent)` 
          }}
        />

        {/* Inner Content */}
        <div className="relative z-10 flex h-full w-full items-center justify-center p-8">
          {item.bgWhite ? (
            <div className="flex h-full w-full items-center justify-center rounded-xl bg-white p-6 shadow-xl transition-all duration-300 group-hover:shadow-2xl group-hover:scale-105">
              <img
                src={item.logo}
                alt={item.name}
                className="max-h-full max-w-full object-contain"
              />
            </div>
          ) : (
            <div className="relative flex h-full w-full items-center justify-center">
              <img
                src={item.logo}
                alt={item.name}
                className="max-h-full max-w-full object-contain opacity-40 grayscale transition-all duration-700 group-hover:opacity-100 group-hover:scale-110 group-hover:grayscale-0"
              />
            </div>
          )}
        </div>

        {/* Subtle Top-Left Shine */}
        <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent pointer-events-none" />
      </div>
    </a>
  );
};

export default function Sponsors() {
  return (
    <div className="w-[80%] flex flex-col items-center justify-center mt-[150px] mb-[100px]">
      
      {/* Title Sponsors */}
      <div className="w-full flex flex-col items-center mb-[100px]">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-6xl font-bold text-white tracking-tighter">
            Title <AuroraText>Sponsors</AuroraText>
          </h2>
          <div className="h-1 w-20 bg-white/20 mx-auto mt-4 rounded-full" />
        </motion.div>
        
        <div className="w-full max-w-md md:max-w-lg">
          <SponsorCard 
            item={sponsors.title[0]} 
            className="h-64 md:h-72" 
            borderColor="border-purple-500/20 hover:border-purple-500/50"
            glowStyles="hover:shadow-[0_0_50px_-12px_rgba(168,85,247,0.3)]"
            ambientColor="rgba(168,85,247,0.1)"
          />
        </div>
      </div>

      {/* Powered By */}
      <div className="w-full flex flex-col items-center mb-[100px]">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h3 className="text-4xl md:text-6xl font-bold text-white tracking-tighter">
            Powered <AuroraText>By</AuroraText>
          </h3>
          <div className="h-1 w-20 bg-white/20 mx-auto mt-4 rounded-full" />
        </motion.div>
        
        <div className="w-full max-w-md md:max-w-lg">
          {sponsors.poweredBy.map((s, i) => (
            <SponsorCard 
              key={i} 
              item={s} 
              className="h-56 md:h-64" 
              borderColor="border-blue-500/20 hover:border-blue-500/50"
              glowStyles="hover:shadow-[0_0_50px_-12px_rgba(59,130,246,0.3)]"
              ambientColor="rgba(59,130,246,0.1)"
            />
          ))}
        </div>
      </div>

      {/* Co-Sponsors */}
      <div className="w-full flex flex-col items-center mb-[100px]">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h3 className="text-4xl md:text-6xl font-bold text-white tracking-tighter">
            Co <AuroraText>Sponsors</AuroraText>
          </h3>
          <div className="h-1 w-20 bg-white/20 mx-auto mt-4 rounded-full" />
        </motion.div>
        
        <div className="w-full max-w-none px-3 md:px-10 lg:px-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {sponsors.coSponsors.map((s, i) => (
              <SponsorCard 
                key={i} 
                item={s} 
                className="h-48 md:h-56" 
                borderColor="border-orange-500/20 hover:border-orange-500/50"
                glowStyles="hover:shadow-[0_0_50px_-12px_rgba(249,115,22,0.3)]"
                ambientColor="rgba(249,115,22,0.1)"
              />
            ))}
          </div>
        </div>
      </div>

      {/* Past Sponsors */}
      <div className="w-full flex flex-col items-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h3 className="text-4xl md:text-6xl font-bold text-white tracking-tighter">
            Past <AuroraText>Sponsors</AuroraText>
          </h3>
          <div className="h-1 w-20 bg-white/10 mx-auto mt-4 rounded-full" />
        </motion.div>
        
        <div className="w-full max-w-none px-3 md:px-10 lg:px-16">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-5">
            {sponsors.oldSponsors.map((s, i) => (
              <SponsorCard 
                key={i} 
                item={s} 
                className="h-36 md:h-40 opacity-50 hover:opacity-100 transition-opacity duration-300" 
                borderColor="border-white/5 hover:border-white/20"
                glowStyles="hover:shadow-[0_0_30px_-10px_rgba(255,255,255,0.15)]"
                ambientColor="rgba(255,255,255,0.05)"
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}