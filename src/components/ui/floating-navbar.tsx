"use client";
import React, { useState } from "react";
import {
  motion,
  AnimatePresence,
  useScroll,
  useMotionValueEvent,
} from "motion/react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import "./floating-navbar.css";
import { ReactNode } from "react";
import { AuroraText } from "./aurora-text";

type Props = {
  navItems: {
    name: string | ReactNode;
    link: string;
    icon?: ReactNode;
  }[];
  className?: string;
};

export const FloatingNav = ({
  navItems,
  className,
}: Props) => {
  const { scrollYProgress } = useScroll();
  const [visible, setVisible] = useState(true);
  const pathname = usePathname();

  const isBitBox = pathname.startsWith("/bitbox");

  useMotionValueEvent(scrollYProgress, "change", (current) => {
    if (typeof current === "number") {
      let direction = current - (scrollYProgress.getPrevious() ?? 0);

      if (scrollYProgress.get() < 0.05) {
        setVisible(true);
      } else {
        if (direction < 0) {
          setVisible(true);
        } else {
          setVisible(false);
        }
      }
    }
  });

  return (
    <AnimatePresence mode="wait">
      <motion.div
        initial={{ opacity: 1, y: 0 }}
        animate={{
          y: visible ? 0 : -100,
          opacity: visible ? 1 : 0,
        }}
        transition={{ duration: 0.2 }}
        className={`floating-nav-container ${className || ""}`}
      >
        <Link href="/" className="floating-nav-brand">
          <div className="floating-navbar-logo">
            {isBitBox ? (
              <AuroraText className="text-[18px] font-bold tracking-tighter">
                6.0
              </AuroraText>
            ) : (
              <img
                src="https://raw.githubusercontent.com/dsc-jiit-128/GDSC-Lead-Map/main/gdsc-logo.gif"
                alt="GDSC Logo"
              />
            )}
          </div>
          <span className="floating-brand-text">
            {isBitBox ? "BITBOX" : "GDG 128"}
          </span>
        </Link>

        <div className="floating-nav-divider" />

        {navItems.filter(item => item.name !== "Home").map((navItem: any, idx: number) => (
          <Link
            key={`link=${idx}`}
            href={navItem.link}
            className="floating-nav-link"
          >
            <span className="nav-icon-wrapper">{navItem.icon}</span>
            <span className="nav-link-text">{navItem.name}</span>
          </Link>
        ))}
      </motion.div>
    </AnimatePresence>
  );
};