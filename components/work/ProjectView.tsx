"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import Link from "next/link";
import { ArrowLeft, ExternalLink, ArrowRight } from "lucide-react";
import { useRef } from "react";
import Image from "next/image";

interface ProjectViewProps {
    project: {
        slug: string;
        title: string;
        category: string;
        description: string;
        tags: string[];
        image: string;
        color: string;
        link: string;
        challenge: string;
        solution: string;
        impact: string;
        content: string;
    };
}

export default function ProjectView({ project }: ProjectViewProps) {
    const containerRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end start"],
    });

    const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
    const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

    return (
        <main className="min-h-screen bg-background text-foreground selection:bg-primary/30 transition-colors">
            {/* Scroll Progress Bar */}
            <motion.div
                className="fixed top-0 left-0 right-0 h-1 bg-primary origin-left z-50"
                style={{ scaleX: scrollYProgress }}
            />

            {/* Hero Section */}
            <section ref={containerRef} className="relative h-screen w-full flex flex-col justify-center overflow-hidden">
                {/* Background Image/Gradient */}
                <div
                    className="absolute inset-0 z-0 opacity-20 bg-cover bg-center transition-transform duration-1000 scale-110"
                    style={{ backgroundColor: project.color }}
                />
                {/* Radial Gradient Overlay */}
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-transparent via-black/60 to-black z-0 pointer-events-none dark:via-black/60 dark:to-black via-white/60 to-background" />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-black/30 z-0 pointer-events-none dark:from-black dark:to-black/30" />

                <div className="container relative z-10 px-4 md:px-10 mx-auto h-full flex flex-col justify-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        className="max-w-4xl"
                    >
                        <Link href="/" className="inline-flex items-center text-muted-foreground hover:text-foreground mb-8 transition-colors group">
                            <ArrowLeft className="mr-2 h-4 w-4 transition-transform group-hover:-translate-x-1" />
                            Back to Home
                        </Link>

                        <div className="flex items-center gap-4 mb-6">
                            <span className="px-4 py-1.5 text-xs font-bold uppercase tracking-widest rounded-full border border-black/20 bg-black/5 backdrop-blur-md shadow-[0_0_15px_rgba(0,0,0,0.1)] dark:border-white/20 dark:bg-white/10 dark:shadow-[0_0_15px_rgba(255,255,255,0.1)]">
                                {project.category}
                            </span>
                            <div className="h-px w-10 bg-black/20 dark:bg-white/20" />
                            <span className="text-muted-foreground text-sm font-medium">2024 Release</span>
                        </div>

                        <h1 className="text-6xl sm:text-7xl md:text-9xl font-bold tracking-tighter mb-8 text-transparent bg-clip-text bg-gradient-to-b from-foreground to-foreground/60 leading-[0.9]">
                            {project.title}
                        </h1>
                        <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl leading-relaxed">
                            {project.description}
                        </p>
                    </motion.div>
                </div>

                {/* Scroll Indicator */}
                <motion.div
                    style={{ opacity }}
                    className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-zinc-500"
                >
                    <span className="text-xs uppercase tracking-widest">Scroll to Explore</span>
                    <div className="w-px h-12 bg-gradient-to-b from-zinc-500 to-transparent" />
                </motion.div>
            </section>

            {/* Featured Image Parallax */}
            <section className="relative w-full -mt-[20vh] z-20 px-4 md:px-10 mb-24">
                <motion.div
                    initial={{ opacity: 0, y: 100 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="aspect-video w-full max-w-6xl mx-auto rounded-3xl overflow-hidden shadow-2xl border border-black/10 relative group dark:border-white/10"
                >
                    <div className="absolute inset-0 bg-muted flex items-center justify-center dark:bg-neutral-900">
                        {/* Placeholder logic if image loads slowly or is generic */}
                        <div className="text-muted-foreground/20 text-9xl font-bold uppercase tracking-tighter scale-150 select-none dark:text-white/10">
                            {project.title}
                        </div>
                    </div>
                    {/* Replace with actual Image component when real assets are available */}
                    {/* <Image src={project.image} alt={project.title} fill className="object-cover" /> */}
                </motion.div>
            </section>

            {/* Content Body */}
            <section className="px-4 md:px-10 pb-32 relative z-20">
                <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-[1fr_350px] gap-20">

                    {/* Main Content Area */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="max-w-none"
                    >
                        {/* Challenge & Solution Cards */}
                        <div className="grid gap-8 mb-12">
                            {/* The Challenge */}
                            <div className="p-8 md:p-10 rounded-3xl bg-black/[0.03] border border-black/5 relative overflow-hidden group dark:bg-white/[0.03] dark:border-white/5">
                                <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-20 transition-opacity">
                                    <svg className="w-24 h-24" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                                    </svg>
                                </div>
                                <h3 className="text-sm font-bold uppercase tracking-widest text-red-400 mb-4 flex items-center gap-2">
                                    <span className="w-2 h-2 rounded-full bg-red-400"></span>
                                    The Challenge
                                </h3>
                                <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed font-light">
                                    {project.challenge}
                                </p>
                            </div>

                            {/* The Solution */}
                            <div className="p-8 md:p-10 rounded-3xl bg-gradient-to-br from-black/[0.08] to-black/[0.02] border border-black/10 relative overflow-hidden group dark:from-white/[0.08] dark:to-white/[0.02] dark:border-white/10">
                                <div className="absolute inset-0 bg-gradient-to-r from-primary/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                                <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-20 transition-opacity">
                                    <svg className="w-24 h-24" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                    </svg>
                                </div>

                                <h3 className="text-sm font-bold uppercase tracking-widest text-emerald-400 mb-4 flex items-center gap-2 relative z-10">
                                    <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
                                    The Solution
                                </h3>
                                <p className="text-xl md:text-2xl text-foreground leading-relaxed font-light relative z-10">
                                    {project.solution}
                                </p>
                            </div>
                        </div>

                        {/* Impact Stat */}
                        <div className="mb-16 flex items-center gap-6 p-8 rounded-2xl bg-gradient-to-r from-primary/20 to-transparent border-l-4 border-primary">
                            <div className="p-3 rounded-full bg-primary/20 text-primary">
                                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                                </svg>
                            </div>
                            <div className="flex-1">
                                <h4 className="text-lg font-bold text-foreground m-0 mb-1 uppercase tracking-wider text-xs opacity-70">Impact</h4>
                                <p className="text-foreground m-0 text-xl md:text-2xl font-semibold">{project.impact}</p>
                            </div>
                        </div>

                        <div className="not-prose p-10 rounded-3xl bg-background/50 border border-black/5 backdrop-blur-sm text-center dark:bg-zinc-900/50 dark:border-white/5">
                            <h3 className="text-2xl font-bold mb-4">Ready to transform your business?</h3>
                            <p className="text-muted-foreground mb-8 max-w-md mx-auto">Let&apos;s collaborate to build a digital experience that sets you apart.</p>
                            <Link
                                href="https://calendar.google.com/calendar/u/0/appointments/schedules/YOUR_SCHEDULE_ID"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex h-14 items-center justify-center rounded-full bg-white text-black px-8 font-bold hover:bg-zinc-200 transition-transform hover:scale-105"
                            >
                                Schedule a Call <ArrowRight className="ml-2 h-5 w-5" />
                            </Link>
                        </div>
                    </motion.div>

                    {/* Sidebar / Meta-data */}
                    <aside className="space-y-10">
                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.4 }}
                            className="p-8 rounded-3xl bg-background/30 border border-black/5 backdrop-blur-md sticky top-32 dark:bg-zinc-900/30 dark:border-white/5"
                        >
                            <div className="mb-8">
                                <h3 className="text-xs font-bold uppercase tracking-widest text-muted-foreground mb-4">Technologies</h3>
                                <div className="flex flex-wrap gap-2">
                                    {project.tags.map(tag => (
                                        <span key={tag} className="px-3 py-1 text-sm rounded-full bg-black/5 border border-black/10 text-muted-foreground hover:bg-black/10 transition-colors cursor-default dark:bg-white/5 dark:border-white/10 dark:text-zinc-300 dark:hover:bg-white/10">
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                            </div>

                            <div className="mb-8">
                                <h3 className="text-xs font-bold uppercase tracking-widest text-muted-foreground mb-4">Services Provided</h3>
                                <ul className="space-y-2 text-muted-foreground text-sm font-medium">
                                    <li className="flex items-center"><span className="w-1.5 h-1.5 rounded-full bg-primary mr-3" />UI/UX Design</li>
                                    <li className="flex items-center"><span className="w-1.5 h-1.5 rounded-full bg-primary mr-3" />Frontend Development</li>
                                    <li className="flex items-center"><span className="w-1.5 h-1.5 rounded-full bg-primary mr-3" />Performance Optimization</li>
                                </ul>
                            </div>

                            <div className="pt-8 border-t border-black/5 dark:border-white/5">
                                <h3 className="text-xs font-bold uppercase tracking-widest text-muted-foreground mb-4">Live Project</h3>
                                <Link href="#" className="flex items-center justify-between w-full p-4 rounded-xl bg-primary/10 border border-primary/20 text-primary hover:bg-primary hover:text-white transition-all group">
                                    <span className="font-semibold">Visit Website</span>
                                    <ExternalLink className="h-4 w-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                                </Link>
                            </div>
                        </motion.div>
                    </aside>
                </div>
            </section>
        </main>
    )
}
