"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

const clients1 = [
    "Acme Corp", "Nebula Systems", "Vertex AI", "Spherule", "Tesseract", "Onyx Data"
];
const clients2 = [
    "Global Tech", "Stratos", "Apex Dynamics", "Zenith", "Novus", "Prime", "Echo"
];

export default function TrustedBy() {
    return (
        <section className="relative z-10 overflow-hidden bg-transparent py-24">
            {/* Background Decoration */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-zinc-800/20 via-black to-black opacity-40" />

            <div className="container relative z-10 px-4 md:px-6">
                <div className="mb-12 flex flex-col items-center text-center">
                    <div className="mb-6 inline-flex items-center justify-center rounded-full border border-white/10 bg-white/5 px-4 py-1.5 backdrop-blur-md">
                        <span className="flex h-2 w-2 rounded-full bg-green-500 mr-2 animate-pulse" />
                        <span className="text-xs font-medium uppercase tracking-widest text-zinc-300">
                            Trusted Partner Network
                        </span>
                    </div>

                    <h2 className="mb-4 text-3xl font-bold tracking-tight text-white">
                        Powering the world's most <span className="text-gradient">innovative brands.</span>
                    </h2>
                </div>

                {/* Marquee Wrapper with 3D Tilt perspective if supported, otherwise flat */}
                <div className="relative mx-auto max-w-[100vw] overflow-hidden py-10" style={{ perspective: "1000px" }}>

                    {/* Top Gradient Fade */}
                    <div className="absolute left-0 right-0 top-0 z-20 h-20 bg-gradient-to-b from-black to-transparent pointer-events-none" />

                    {/* Marquee Row 1 */}
                    <div className="mb-8 rotate-1 opacity-90 hover:opacity-100 transition-opacity duration-300 transform-gpu origin-center">
                        <MarqueeRow items={clients1} direction="left" />
                    </div>

                    {/* Marquee Row 2 */}
                    <div className="-rotate-1 opacity-90 hover:opacity-100 transition-opacity duration-300 transform-gpu origin-center">
                        <MarqueeRow items={clients2} direction="right" speed="slow" />
                    </div>

                    {/* Bottom Gradient Fade */}
                    <div className="absolute left-0 right-0 bottom-0 z-20 h-20 bg-gradient-to-t from-black to-transparent pointer-events-none" />

                    {/* Side Fades */}
                    <div className="absolute left-0 top-0 bottom-0 z-20 w-32 bg-gradient-to-r from-black to-transparent pointer-events-none" />
                    <div className="absolute right-0 top-0 bottom-0 z-20 w-32 bg-gradient-to-l from-black to-transparent pointer-events-none" />
                </div>
            </div>
        </section>
    );
}

function MarqueeRow({ items, direction = "left", speed = "normal" }: { items: string[], direction?: "left" | "right", speed?: "normal" | "slow" }) {
    return (
        <div className="relative flex w-full overflow-hidden">
            <div className={cn(
                "flex w-max gap-8 px-4",
                direction === "left" ? "animate-marquee" : "animate-marquee-reverse",
                speed === "slow" && "duration-[60s]" // Override animation duration
            )}>
                {[...items, ...items, ...items, ...items].map((client, index) => (
                    <div key={index} className="group relative flex items-center justify-center rounded-xl border border-white/5 bg-white/[0.02] px-8 py-4 backdrop-blur-sm transition-all hover:bg-white/10 hover:border-white/20">
                        <span className="text-xl font-bold uppercase tracking-tight text-zinc-500 transition-colors group-hover:text-white">
                            {client}
                        </span>
                    </div>
                ))}
            </div>
        </div>
    )
}
