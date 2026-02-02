"use client";

import { useEffect, useState } from "react";

export default function Background() {
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            setMousePosition({ x: e.clientX, y: e.clientY });
        };

        window.addEventListener("mousemove", handleMouseMove);
        return () => window.removeEventListener("mousemove", handleMouseMove);
    }, []);

    return (
        <div className="fixed inset-0 -z-50 h-full w-full bg-black">
            {/* Base Grid */}
            <div
                className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"
                style={{ maskImage: "radial-gradient(ellipse 60% 50% at 50% 0%, #000 70%, transparent 100%)" }}
            />

            {/* Spotlight Effect following mouse */}
            <div
                className="pointer-events-none absolute inset-0 transition-opacity duration-300"
                style={{
                    background: `radial-gradient(600px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(99, 102, 241, 0.05), transparent 40%)`,
                }}
            />

            {/* Ambient Orbs */}
            <div className="absolute top-0 right-0 h-[600px] w-[600px] rounded-full bg-primary/5 blur-[120px] animate-pulse" style={{ animationDuration: '8s' }} />
            <div className="absolute bottom-0 left-0 h-[600px] w-[600px] rounded-full bg-secondary/5 blur-[120px] animate-pulse" style={{ animationDuration: '10s' }} />
        </div>
    );
}
