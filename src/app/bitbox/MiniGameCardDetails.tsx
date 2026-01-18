import React from "react";
import { ArrowRight, LucideIcon, Gamepad2, Sparkles } from "lucide-react";

export interface GameCardProps {
    title: string;
    description: string;
    image?: string;
    icon?: LucideIcon;
    borderColor?: string;
    glowStyles?: string;
    ambientColor?: string;
  }
export const mockGames: GameCardProps[] = [
    {
      title: "Cyber Rush",
      description: "Navigate through the neon-lit grid in this high-speed reflex challenge.",
      icon: Gamepad2,
      borderColor: "border-cyan-500/20 hover:border-cyan-500/50",
      glowStyles: "hover:shadow-[0_0_50px_-12px_rgba(6,182,212,0.3)]",
      ambientColor: "rgba(6,182,212,0.1)",
      image:"./cyber-rush.webp"
    },
    {
      title: "Memory Matrix",
      description: "Test your focus and memory sequence in the ultimate mental sprint.",
      icon: Sparkles,
      borderColor: "border-purple-500/20 hover:border-purple-500/50",
      glowStyles: "hover:shadow-[0_0_50px_-12px_rgba(168,85,247,0.3)]",
      ambientColor: "rgba(168,85,247,0.1)",
      image:"./memory-matrix.webp"
    }
  ];