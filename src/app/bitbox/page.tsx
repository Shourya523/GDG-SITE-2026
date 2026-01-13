"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { MagicCard } from "@/src/components/ui/magic-card";
import { MacbookScroll } from "@/src/components/ui/macbook-scroll";
import { TimeLineDetails } from "./Timeline";
import "./bitbox-timeline.css";

export default function BitBoxPage() {
  const containerRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const backgroundColor = useTransform(
    scrollYProgress,
    [0, 0.3, 0.6, 1],
    ["#000000", "#0a0a1a", "#1a0a1a", "#000000"]
  );

  const scaleY = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  const firstItem = TimeLineDetails[0];
  const timelineItems = TimeLineDetails.slice(1);

  return (
    <motion.div 
      ref={containerRef}
      className="roadmap-container"
      style={{ backgroundColor }}
    >
      {/* MACBOOK SECTION */}
      <MacbookScroll 
        title={
          <div className="roadmap-header" style={{ marginBottom: 0 }}>
             <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="roadmap-eyebrow"
            >
              The Roadmap
            </motion.h2>
            <span style={{ fontSize: '3rem', fontWeight: 'bold' }}>
               Bitbox 2026
            </span>
          </div>
        }
        screenContent={
          // Added relative positioning to contain the card
          <div style={{ width: '100%', height: '100%', padding: '0px', backgroundColor: '#000', position: 'relative' }}>
            <MagicCard 
              // 1. FIXED: Moved layout styles to className (Tailwind) to fix TypeScript error
              className="roadmap-bento-box w-full h-full rounded-none border-none flex items-center justify-center"
              gradientSize={150}
              gradientOpacity={0.8}
              gradientColor="#262626"
              gradientFrom="#9E7AFF"
              gradientTo="#FE8BBB"
              // Removed the invalid 'display: flex' from style
            >
              <div className="roadmap-box-inner" style={{ padding: '24px', textAlign: 'center', alignItems: 'center' }}>
                <span className="roadmap-box-date" style={{ fontSize: '1rem' }}>{firstItem.date}</span>
                <h3 className="roadmap-box-title" style={{ fontSize: '2.5rem', marginTop: '10px' }}>{firstItem.title}</h3>
                <p className="roadmap-box-text" style={{ fontSize: '1rem', marginTop: '10px' }}>{firstItem.description}</p>
                <div className="roadmap-box-number" style={{ fontSize: '4rem', top: '10px', right: '20px', opacity: 0.3 }}>01</div>
              </div>
            </MagicCard>
          </div>
        }
      />

      {/* TIMELINE SPINE SECTION */}
      <div 
        className="roadmap-timeline-spine" 
        // 2. FIXED: Changed marginTop from -200px to -50px.
        // This stops the timeline from overlapping the MacBook too early.
        // Tweak this value (-100px, -50px, 0px) to align it perfectly.
        style={{ marginTop: '-50px', paddingTop: '100px', position: 'relative', zIndex: 10 }} 
      >
        <div className="roadmap-spine-line static" />
        
        <motion.div 
          className="roadmap-spine-line active" 
          style={{ scaleY, originY: 0 }} 
        />

        {timelineItems.map((item, index) => (
          <RoadmapStep key={item.id} item={item} index={index + 1} />
        ))}
      </div>
    </motion.div>
  );
}

function RoadmapStep({ item, index }: { item: any; index: number }) {
  const displayNum = index + 1; 

  return (
    <motion.div 
      initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className={`roadmap-step ${index % 2 === 0 ? "step-left" : "step-right"}`}
    >
      <div className="roadmap-dot">
        <div className="roadmap-dot-core" />
      </div>

      <div className="roadmap-card-anchor">
        <MagicCard 
          className="roadmap-bento-box"
          gradientSize={250}
          gradientOpacity={0.8}
          gradientColor="#262626"
          gradientFrom="#9E7AFF"
          gradientTo="#FE8BBB"
        >
          <div className="roadmap-box-inner">
            <header className="roadmap-box-header">
              <span className="roadmap-box-date">{item.date}</span>
            </header>
            <h3 className="roadmap-box-title">{item.title}</h3>
            <p className="roadmap-box-text">{item.description}</p>
          </div>
          <div className="roadmap-box-number">
            {displayNum < 10 ? `0${displayNum}` : displayNum}
          </div>
        </MagicCard>
      </div>
    </motion.div>
  );
}