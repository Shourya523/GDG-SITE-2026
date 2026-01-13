"use client";

import React, { ComponentPropsWithoutRef, CSSProperties } from "react";
import { cn } from "@/lib/utils";
import "./Ripple.css";

interface RippleProps extends ComponentPropsWithoutRef<"div"> {
  mainCircleSize?: number;
  mainCircleOpacity?: number;
  numCircles?: number;
}

export function Ripple() {
  const mainCircleSize = 210;
  const numCircles = 8;

  return (
    <div className="ripple-container">
      {Array.from({ length: numCircles }).map((_, i) => (
        <div
          key={i}
          className="ripple-circle"
          style={{
            width: `${mainCircleSize + i * 100}px`,
            height: `${mainCircleSize + i * 100}px`,
            "--i": i,
            "--duration": "4s",
          } as React.CSSProperties}
        />
      ))}
    </div>
  );
}

Ripple.displayName = "Ripple";