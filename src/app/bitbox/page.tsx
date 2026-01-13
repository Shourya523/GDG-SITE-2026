"use client";

import React, { useRef, useState } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { TimeLineDetails } from "./Timeline";

import { RoadmapBackground } from "@/src/components/ui/RoadmapBackground";
import { RoadmapStep } from "@/src/components/ui/RoadmapStep";
import "./bitbox-timeline.css";
import { RoadmapOverlay } from "@/src/components/ui/RoadmapOverlay";
import { AuroraText } from "@/src/components/ui/aurora-text";

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

  return (
    <div ref={containerRef} className="roadmap-page-root">
      {/* Background Layer: Flickering Grid (3-6) */}
      <RoadmapBackground 
        backgroundColor={backgroundColor} 
        activeRange={activeId >= 3 && activeId <= 6} 
      />

      {/* Overlay Layer: Ripple Effect (7-9) */}
      <RoadmapOverlay activeRange={activeId >= 7 && activeId <= 9} />

      <header className="roadmap-header">
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
          BitBox  <AuroraText><span className="roadmap-title-muted">6.0</span></AuroraText>
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="roadmap-tagline"
        >
          Simplicity is the ultimate sophistication.
        </motion.p>
      </header>

      <div className="roadmap-timeline-spine">
        <div className="roadmap-spine-line static" />
        <motion.div 
          className="roadmap-spine-line active" 
          style={{ scaleY, originY: 0 }} 
        />

        {TimeLineDetails.map((item, index) => (
          <RoadmapStep 
            key={item.id} 
            item={item} 
            index={index} 
            onVisible={(id) => setActiveId(id)}
          />
        ))}
      </div>
    </div>
  );
}