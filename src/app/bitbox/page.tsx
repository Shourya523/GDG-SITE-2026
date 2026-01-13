"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { MagicCard } from "@/src/components/ui/magic-card";
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

  return (
    <motion.div 
      ref={containerRef}
      className="roadmap-container"
      style={{ backgroundColor }}
    >
      <div className="roadmap-header">
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
        >
          BitBox <span className="roadmap-title-muted">6.0</span>
        </motion.h1>
        <p className="roadmap-tagline">Simplicity is the ultimate sophistication.</p>
      </div>

      <div className="roadmap-timeline-spine">
        <div className="roadmap-spine-line static" />
        
        <motion.div 
          className="roadmap-spine-line active" 
          style={{ scaleY, originY: 0 }} 
        />

        {TimeLineDetails.map((item, index) => (
          <RoadmapStep key={item.id} item={item} index={index} />
        ))}
      </div>
    </motion.div>
  );
}

function RoadmapStep({ item, index }: { item: any; index: number }) {
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
            {index + 1 < 10 ? `0${index + 1}` : index + 1}
          </div>
        </MagicCard>
      </div>
    </motion.div>
  );
}