"use client"

import React from "react"
import { Rocket, Clock } from "lucide-react"

export function BitBoxComingSoon() {
  return (
    <div className="flex w-95 items-center gap-3 rounded-full border border-zinc-800 bg-yellow-800/20 px-5 py-5 shadow-md backdrop-blur">
      
      {/* Icon */}
      <div className="flex h-8 w-8 items-center justify-center rounded-full bg-orange-500/10">
        <Rocket className="h-4 w-4 text-yellow-400" />
      </div>

      {/* Text */}
      <div className="flex-1 leading-tight">
        <p className="text-sm mb-0.5 font-medium text-white">BitBox 6.0</p>
        <p className="text-xs text-zinc-400">Click To Register in Our Flagship Hackathon</p>
      </div>

      {/* Status */}
      <div className="flex items-center gap-1 rounded-full bg-indigo-500/10 px-3 py-1 text-xs font-medium text-red-400">
        <Clock className="h-3 w-3" />
        Soon
      </div>
    </div>
  )
}
