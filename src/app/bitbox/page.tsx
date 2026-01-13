"use client";

import React, { useRef, useState } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { TimeLineDetails } from "./Timeline";

// Imports for the Macbook integration
import { MacbookScroll } from "@/src/components/ui/macbook-scroll";
import { MagicCard } from "@/src/components/ui/magic-card";

import { RoadmapBackground } from "@/src/components/ui/RoadmapBackground";
import { RoadmapStep } from "@/src/components/ui/RoadmapStep";
import { RoadmapOverlay } from "@/src/components/ui/RoadmapOverlay";
import "./bitbox-timeline.css";

export default function BitBoxPage() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeId, setActiveId] = useState<number>(0);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const backgroundColor = useTransform(
    scrollYProgress,
    [0, 0.4, 0.7, 1],
    ["#000000", "#0a0a1a", "#050a14", "#000000"]
  );

  const scaleY = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  // Split logic: Item 0 (Registration) goes to MacBook, Items 1+ go to timeline
  const firstItem = TimeLineDetails[0];
  const timelineItems = TimeLineDetails.slice(1);

  return (
    <div ref={containerRef} className="roadmap-page-root">
      {/* Background Layer: Flickering Grid (3-6) */}
      <RoadmapBackground 
        backgroundColor={backgroundColor} 
        activeRange={activeId >= 3 && activeId <= 6} 
      />

      {/* Overlay Layer: Ripple Effect (7-9) */}
      <RoadmapOverlay activeRange={activeId >= 7 && activeId <= 9} />

      {/* MACBOOK SECTION */}
      <MacbookScroll 
        title={
          <div className="roadmap-header" style={{ marginBottom: 0, paddingTop: 0, paddingBottom: '2rem' }}>
             <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="roadmap-eyebrow"
            >
              The Roadmap
            </motion.h2>
            <motion.h1 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              className="roadmap-title"
              style={{ fontSize: 'clamp(3rem, 10vw, 6rem)' }}
            >
              BitBox <span className="roadmap-title-muted">6.0</span>
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="roadmap-tagline"
              style={{ marginTop: '20px' }}
            >
              Simplicity is the ultimate sophistication.
            </motion.p>
          </div>
        }
        screenContent={
          // Removed backgroundColor: '#000' here to prevent the "weird black background"
          <div style={{ width: '100%', height: '100%', position: 'relative' }}>
            <MagicCard 
              // Removed 'rounded-none' and 'border-none' so it looks like a normal card with borders
              className="roadmap-bento-box w-full h-full flex items-center justify-center"
              gradientSize={150}
              gradientOpacity={0.8}
              gradientColor="#262626"
              gradientFrom="#9E7AFF"
              gradientTo="#FE8BBB"
            >
              <div className="roadmap-box-inner" style={{ padding: '24px', textAlign: 'center', alignItems: 'center', height: '100%', justifyContent: 'center' }}>
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
        style={{ marginTop: '-50px', paddingTop: '100px', position: 'relative', zIndex: 10 }} 
      >
        <div className="roadmap-spine-line static" />
        <motion.div 
          className="roadmap-spine-line active" 
          style={{ scaleY, originY: 0 }} 
        />

        {timelineItems.map((item, index) => (
          <RoadmapStep 
            key={item.id} 
            item={item} 
            index={index + 1} 
            onVisible={(id) => setActiveId(id)}
          />
        ))}
      </div>
    </div>
  );
}