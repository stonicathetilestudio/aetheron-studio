"use client";

import { motion } from "framer-motion";
import { Search, PenTool, Zap, TrendingUp } from "lucide-react";

const steps = [
    {
        number: "01",
        title: "Understand",
        description: "We start by analysing your business objectives, audience, and current growth barriers.",
        icon: Search,
    },
    {
        number: "02",
        title: "Structure",
        description: "We design customer journeys, funnels, messaging, and tracking systems.",
        icon: PenTool,
    },
    {
        number: "03",
        title: "Execute",
        description: "Ads, content, automation, and optimisation - all aligned to your goals.",
        icon: Zap,
    },
    {
        number: "04",
        title: "Scale",
        description: "Measure, optimise, and scale what works - eliminate what doesn't.",
        icon: TrendingUp,
    },
];

export default function Process() {
    return (
        <section id="process" className="relative py-32 overflow-hidden bg-transparent">
            <div className="container px-4 md:px-6 relative z-10">
                <div className="mb-20 text-center">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="mb-6 text-3xl font-bold tracking-tight text-white sm:text-5xl"
                    >
                        Our <span className="text-gradient">Approach</span>
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="mx-auto max-w-2xl text-lg text-zinc-400"
                    >
                        How we turn complexity into scalable growth in four steps.
                    </motion.p>
                </div>

                <div className="relative grid gap-8 md:grid-cols-4">
                    {/* Connecting Line (Desktop) */}
                    <div className="hidden md:block absolute top-[60px] left-0 right-0 h-px bg-white/10 z-0 select-none">
                        <div className="w-full h-full bg-gradient-to-r from-transparent via-primary/50 to-transparent opacity-50" />
                    </div>

                    {steps.map((step, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="relative z-10 group"
                        >
                            {/* Step Indicator */}
                            <div className="mb-8 relative flex items-center justify-center">
                                <div className="h-14 w-14 rounded-full border border-white/20 bg-zinc-900 flex items-center justify-center text-sm font-bold text-white shadow-[0_0_15px_rgba(255,255,255,0.05)] transition-all duration-300 group-hover:scale-110 group-hover:border-primary/50 group-hover:shadow-[0_0_30px_rgba(99,102,241,0.3)]">
                                    <span className="sr-only">Step </span>{step.number}
                                </div>
                                {/* Icon floating nearby */}
                                <div className="absolute -top-6 -right-2 p-2 rounded-xl bg-white/5 backdrop-blur-md border border-white/10 opacity-0 transform translate-y-2 transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-0">
                                    <step.icon className="w-5 h-5 text-primary" />
                                </div>
                            </div>

                            <div className="text-center px-4">
                                <h3 className="mb-3 text-xl font-bold text-white group-hover:text-primary transition-colors duration-300">
                                    {step.title}
                                </h3>
                                <p className="text-zinc-400 text-sm leading-relaxed group-hover:text-zinc-300 transition-colors duration-300">
                                    {step.description}
                                </p>
                            </div>

                            {/* Hover Card Effect */}
                            <div className="absolute inset-0 -z-10 -m-4 rounded-3xl bg-white/[0.02] opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
