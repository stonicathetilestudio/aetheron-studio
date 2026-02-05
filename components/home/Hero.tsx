"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

export default function Hero() {
    return (
        <section className="relative flex min-h-screen w-full flex-col items-center justify-center overflow-hidden bg-transparent px-4 pt-20">
            {/* Background Gradients */}
            <div className="absolute top-[-20%] left-[-10%] h-[500px] w-[500px] rounded-full bg-primary/20 blur-[100px]" />
            <div className="absolute right-[-10%] bottom-[-20%] h-[500px] w-[500px] rounded-full bg-secondary/20 blur-[100px]" />

            <div className="container relative z-10 flex flex-col items-center text-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, ease: "easeOut" }}
                    className="mb-6 inline-flex items-center rounded-full border border-primary/20 bg-primary/10 px-3 py-1 text-sm font-medium text-primary backdrop-blur-sm"
                >
                    <span>Elevate your digital presence</span>
                </motion.div>

                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.1, ease: "easeOut" }}
                    className="max-w-4xl text-5xl font-bold tracking-tight text-foreground sm:text-7xl md:text-8xl will-change-transform"
                >
                    We build <span className="text-gradient">structured growth systems</span> for ambitious businesses.
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2, ease: "easeOut" }}
                    className="mt-8 max-w-3xl text-lg text-muted-foreground sm:text-xl will-change-transform"
                >
                    Not just marketing. We design strategy, funnels, performance, and automation that turn attention into predictable revenue.
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.3, ease: "easeOut" }}
                    className="mt-10 flex flex-col items-center gap-4 sm:flex-row"
                >
                    <Link
                        href="https://calendar.google.com/calendar/u/0/appointments/schedules/YOUR_SCHEDULE_ID"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex h-12 items-center justify-center rounded-full bg-primary px-8 text-base font-medium text-primary-foreground shadow-lg shadow-primary/25 transition-all hover:bg-primary/90 hover:shadow-primary/40 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
                    >
                        Request a Strategy Call
                        <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                    <Link
                        href="#work"
                        className="inline-flex h-12 items-center justify-center rounded-full border border-input bg-background px-8 text-base font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
                    >
                        See How We Work
                    </Link>
                </motion.div>
            </div>


        </section>
    );
}
