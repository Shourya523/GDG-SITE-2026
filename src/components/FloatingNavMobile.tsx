"use client";

import React from "react";
import { usePathname } from "next/navigation";
import { FloatingNav } from "./ui/floating-navbar";
import { Home, Calendar, Users, Rocket, HelpCircle } from "lucide-react";
import { AuroraText } from "./ui/aurora-text";

export function SmartFloatingNav() {
    const pathname = usePathname();
    const isBitBox = pathname.startsWith("/bitbox");

    const navItems = [
        {
            name: "Home",
            link: "/",
            icon: <Home size={20} />
        },
        {
            name: "Events",
            link: "/events/2022-2023",
            icon: <Calendar size={20} />
        },
        {
            name: "Team",
            link: "/team",
            icon: <Users size={20} />
        },
        {
            name: "BitBox",
            link: "/bitbox",
            icon:
                <Rocket size={20} />
        },
        {
            name: "Contact",
            link: "/contact-us",
            icon: <HelpCircle size={20} />
        },
    ];

    return <FloatingNav navItems={navItems} />;
}