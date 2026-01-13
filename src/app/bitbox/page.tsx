"use client";

import React, { useRef, useState } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { TimeLineDetails } from "./Timeline";

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

  const firstItem = TimeLineDetails[0];
  const timelineItems = TimeLineDetails.slice(1);

  return (
    <div ref={containerRef} className="roadmap-page-root">
      <RoadmapBackground 
        backgroundColor={backgroundColor} 
        activeRange={activeId >= 3 && activeId <= 6} 
      />

      <RoadmapOverlay activeRange={activeId >= 7 && activeId <= 9} />

      <MacbookScroll 
        title={<MacbookHeader />}
        screenContent={<MacbookContent item={firstItem} />}
      />

      <div className="roadmap-timeline-spine-wrapper">
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

function MacbookHeader() {
  return (
    <div className="roadmap-header macbook-header-adjust">
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
        className="roadmap-title title-small"
      >
        BitBox <span className="roadmap-title-muted">6.0</span>
      </motion.h1>
      <motion.p 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
        className="roadmap-tagline tagline-margin"
      >
        Simplicity is the ultimate sophistication.
      </motion.p>
    </div>
  );
}

function MacbookContent({ item }: { item: typeof TimeLineDetails[0] }) {
  return (
    <div className="macbook-screen-container">
      <MagicCard 
        className="roadmap-bento-box macbook-card-fix"
        gradientSize={150}
        gradientOpacity={0.8}
        gradientColor="#262626"
        gradientFrom="#9E7AFF"
        gradientTo="#FE8BBB"
      >
        <div className="roadmap-box-inner macbook-inner-fix">
          <span className="roadmap-box-date date-small">{item.date}</span>
          <h3 className="roadmap-box-title title-mid">{item.title}</h3>
          <p className="roadmap-box-text text-small">{item.description}</p>
          <div className="roadmap-box-number number-small">01</div>
        </div>
      </MagicCard>
    </div>
  );
}