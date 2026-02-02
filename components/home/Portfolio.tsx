"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform, MotionValue } from "framer-motion";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { projects } from "@/lib/data";

interface Project { // Still needed for type safety in props, or import if exported
    title: string;
    category: string;
    description: string;
    tags: string[];
    image: string;
    color: string;
    link: string;
}

export default function Portfolio() {
    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end end"],
    });

    return (
        <section id="work" className="bg-transparent relative z-10">
            <div ref={containerRef} className="relative">
                <div className="sticky top-0 h-[20vh] flex items-center justify-center pointer-events-none z-10 bg-gradient-to-b from-black to-transparent">
                    <h2 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">
                        Selected Works
                    </h2>
                </div>

                <div className="flex flex-col items-center gap-10 pb-[20vh]">
                    {projects.map((project, index) => {
                        // Calculate range for each card based on index
                        const targetScale = 1 - (projects.length - index) * 0.05;
                        const range = [index * 0.25, 1];

                        return (
                            <Card
                                key={index}
                                i={index}
                                project={project}
                                progress={scrollYProgress}
                                range={range}
                                targetScale={targetScale}
                            />
                        );
                    })}
                </div>


            </div>
        </section>
    )
}

function Card({ i, project, progress, range, targetScale }: { i: number, project: Project, progress: MotionValue<number>, range: number[], targetScale: number }) {
    const container = useRef(null);
    const { scrollYProgress } = useScroll({
        target: container,
        offset: ["start end", "start start"]
    });

    // Scale effect as the card moves up the stack
    const scale = useTransform(progress, range, [1, targetScale]);

    return (
        <div ref={container} className="h-screen flex items-center justify-center sticky top-0">
            <motion.div
                style={{ scale, top: `calc(-5vh + ${i * 25}px)` }}
                className="relative flex flex-col md:flex-row h-[500px] w-[1000px] max-w-[90vw] rounded-3xl border border-white/10 bg-neutral-900 overflow-hidden shadow-2xl origin-top"
            >
                <div className="flex flex-col justify-between p-8 md:p-12 w-full md:w-[45%] h-full relative z-10">
                    <div>
                        <div className="flex items-center gap-3 mb-4">
                            <div className="h-3 w-3 rounded-full" style={{ backgroundColor: project.color }} />
                            <span className="text-sm font-bold uppercase tracking-widest text-zinc-400">
                                {project.category}
                            </span>
                        </div>
                        <h3 className="mb-4 text-4xl font-bold text-white leading-tight">{project.title}</h3>
                        <p className="text-lg text-zinc-400 leading-relaxed">{project.description}</p>
                    </div>

                    <div>
                        <div className="flex flex-wrap gap-2 mb-8">
                            {project.tags.map((tag: string) => (
                                <span key={tag} className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-medium text-zinc-400">
                                    {tag}
                                </span>
                            ))}
                        </div>
                        <Link
                            href={project.link}
                            className="inline-flex items-center gap-2 text-white font-medium hover:text-primary transition-colors hover:gap-3"
                        >
                            View Case Study <ArrowUpRight className="h-4 w-4" />
                        </Link>
                    </div>
                </div>

                <div className="relative w-full md:w-[55%] h-full overflow-hidden bg-neutral-800">
                    <motion.div
                        className="w-full h-full relative"
                        style={{ scale: useTransform(scrollYProgress, [0, 1], [1.3, 1]) }}
                    >
                        <div className="absolute inset-0 bg-gradient-to-br from-black/20 to-black/60 z-10" />
                        {/* Placeholder for image */}
                        <div
                            className="w-full h-full flex items-center justify-center text-white/10 text-4xl font-bold"
                            style={{ backgroundColor: project.color }}
                        >
                            {project.title}
                        </div>
                    </motion.div>
                </div>

            </motion.div>
        </div>
    )
}
