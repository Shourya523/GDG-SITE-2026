"use client";

import React, { useRef, useState } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { TimeLineDetails } from "./Timeline";
import { RoadmapBackground } from "@/src/components/ui/RoadmapBackground";
import { RoadmapStep } from "@/src/components/ui/RoadmapStep";
import "./bitbox-timeline.css";
import { RoadmapOverlay } from "@/src/components/ui/RoadmapOverlay";
import { AuroraText } from "@/src/components/ui/aurora-text";
import BentoComponent from "@/src/components/BentoGrid";
import MiniGamesCard from "@/src/components/MiniGamesCard";
import { mockGames } from "./MiniGameCardDetails";
import SpeakerGrid from "@/src/components/SpeakerCard";
import Sponsors from "@/src/components/Sponsors"; // <--- Import the new component

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
    ["#000000", "#121212", "#0a0a0a", "#000000"]
  );

  const scaleY = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <div ref={containerRef} className="roadmap-page-root">
      <RoadmapBackground
        backgroundColor={backgroundColor}
        activeRange={activeId >= 0 && activeId <= 0}
      />

      <RoadmapOverlay activeRange={activeId >= 2 && activeId <= 9} />

      <header className="roadmap-header">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="roadmap-eyebrow"
        >
          Flagship Hackathon
        </motion.h2>
        <motion.h1
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          className="roadmap-title"
        >
          BitBox <AuroraText><span className="roadmap-title-muted">6.0</span></AuroraText>
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

        {TimeLineDetails.filter(item => item.id !== 1).map((item, index) => (
          <RoadmapStep
            key={item.id}
            item={item}
            index={index}
            onVisible={(id) => setActiveId(id)}
          />
        ))}
      </div>

      <div className="w-[80%] flex flex-col items-center justify-center mt-[200px] mb-[100px]">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-6xl font-bold text-white tracking-tighter">
            Exciting <AuroraText>Prizes</AuroraText>
          </h2>
          <div className="h-1 w-20 bg-white/20 mx-auto mt-4 rounded-full" />
        </motion.div>

        <div className="w-full md:w-[80%] lg:w-[70%]">
          <BentoComponent />
        </div>
      </div>

      {/* SPONSORS SECTION */}
      <Sponsors />

      <div className="w-[80%] flex flex-col items-center justify-center mt-[100px] mb-[100px]">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-6xl font-bold text-white tracking-tighter">
            Mini <AuroraText> Games</AuroraText>
          </h2>
          <div className="h-1 w-20 bg-white/20 mx-auto mt-4 rounded-full" />
        </motion.div>

        <div className="w-full md:w-[80%] lg:w-[70%]">
          <MiniGamesCard games={mockGames} />
        </div>
      </div>

      <div className="w-[80%] flex flex-col items-center justify-center mt-[200px] mb-[100px]">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-6xl font-bold text-white tracking-tighter">
            Our <AuroraText> Judges</AuroraText>
          </h2>
          <div className="h-1 w-20 bg-white/20 mx-auto mt-4 rounded-full" />
        </motion.div>
        
        <div className="w-[120%] md:w-[80%] lg:w-[70%] px-4 md:px-0 ">
          <SpeakerGrid />
        </div>
      </div>
    </div>
  );
}