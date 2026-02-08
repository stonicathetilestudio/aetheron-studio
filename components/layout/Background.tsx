"use client";

import { useEffect } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export default function Background() {
    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);

    const springConfig = { damping: 25, stiffness: 150, mass: 0.5 }; // Add slight spring for smoothness
    const x = useSpring(mouseX, springConfig);
    const y = useSpring(mouseY, springConfig);

    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            // Center the spotlight on the cursor
            // We'll use a 600px circle, so offset by 300px
            mouseX.set(e.clientX - 300);
            mouseY.set(e.clientY - 300);
        };

        window.addEventListener("mousemove", handleMouseMove);
        return () => window.removeEventListener("mousemove", handleMouseMove);
    }, [mouseX, mouseY]);

    return (
        <div className="fixed inset-0 -z-50 h-full w-full bg-background transition-colors duration-300 overflow-hidden">
            {/* Base Grid - Static, no re-renders */}
            <div
                className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"
                style={{ maskImage: "radial-gradient(ellipse 60% 50% at 50% 0%, #000 70%, transparent 100%)" }}
            />

            {/* Spotlight Effect - Uses Compositor Layer via transform */}
            <motion.div
                className="pointer-events-none absolute h-[600px] w-[600px] rounded-full bg-[radial-gradient(circle_at_center,rgba(99,102,241,0.08),transparent_70%)] opacity-80 blur-3xl will-change-transform"
                style={{
                    x,
                    y,
                }}
            />

            {/* Ambient Orbs - CSS Animation (GPU accelerated) */}
            <div className="absolute top-0 right-0 h-[600px] w-[600px] rounded-full bg-primary/5 blur-[120px] animate-pulse will-change-[opacity]" style={{ animationDuration: '8s' }} />
            <div className="absolute bottom-0 left-0 h-[600px] w-[600px] rounded-full bg-secondary/5 blur-[120px] animate-pulse will-change-[opacity]" style={{ animationDuration: '10s' }} />
        </div>
    );
}
