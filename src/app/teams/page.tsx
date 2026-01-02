"use client";
import React from "react";
import Team from "./team";

export default function TeamsPage() {
  return (
    // Hardcoded bg-[#0a0a0a] to ensure it matches HomePage exactly
    <div className="w-full min-h-screen bg-[#0a0a0a] relative overflow-hidden">
      
      {/* Grid Background from HomePage */}
      <div 
        className="fixed inset-0 z-[0] pointer-events-none" 
        style={{
             backgroundImage: `linear-gradient(rgba(255, 255, 255, 0.03) 1px, transparent 1px), 
             linear-gradient(90deg, rgba(255, 255, 255, 0.03) 1px, transparent 1px)`,
             backgroundSize: '30px 30px'
        }} 
      />
      
      {/* Spotlight Effect */}
      <div 
        className="fixed inset-0 z-[0] pointer-events-none"
        style={{
          background: 'radial-gradient(circle at center, rgba(66, 133, 244, 0.05), transparent 70%)'
        }}
      />

      {/* Main Content */}
      <div className="relative z-10 pt-20">
        <Team />
      </div>
    </div>
  );
}