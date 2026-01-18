"use client";

import { motion, AnimatePresence, MotionValue } from "framer-motion";
import { FlickeringGrid } from "./flickering-grid";

interface BackgroundProps {
  backgroundColor: MotionValue<string>;
  activeRange: boolean;
}

export function RoadmapBackground({ backgroundColor, activeRange }: BackgroundProps) {
  return (
    <motion.div 
      className="roadmap-background-layer"
      style={{ backgroundColor }}
    >
      <AnimatePresence>
        {activeRange && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1 }}
            className="flicker-overlay"
          >
            <FlickeringGrid 
              squareSize={4}
              gridGap={6}
              color="#9E7AFF"
              maxOpacity={0.2}
              flickerChance={0.1}
              height={2000}
              width={2000}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}