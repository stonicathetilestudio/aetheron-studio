"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { useRef } from "react";

export default function Contact() {
    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end end"]
    });

    const y = useTransform(scrollYProgress, [0, 1], [0, -50]);

    return (
        <section ref={containerRef} id="contact" className="relative overflow-hidden py-32 bg-transparent">
            {/* Background Gradients */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[600px] bg-indigo-500/10 blur-[120px] rounded-full pointer-events-none" />

            {/* Grain overlay for texture */}
            <div className="absolute inset-0 bg-[#fff] opacity-[0.03] pointer-events-none mix-blend-overlay" style={{ backgroundImage: 'url("https://grainy-gradients.vercel.app/noise.svg")' }} />

            <div className="container relative z-10 px-4 md:px-6">
                <div className="flex flex-col items-center text-center">
                    <motion.span
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="mb-8 font-mono text-sm tracking-widest text-indigo-400 uppercase"
                    >
                        Start your journey
                    </motion.span>

                    <motion.h2
                        style={{ y }}
                        className="max-w-5xl text-6xl font-bold tracking-tighter text-white sm:text-8xl md:text-9xl bg-clip-text text-transparent bg-cover"
                    // style={{ background: "url('https://cdn.dribbble.com/users/1770290/screenshots/6252936/bg_2.png')" }} 
                    >
                        <span className="block text-white">Let&apos;s build</span>
                        <span className="block bg-gradient-to-r from-indigo-300 via-white/90 to-purple-300 bg-clip-text text-transparent pb-4">something legendary.</span>
                    </motion.h2>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="mt-12 max-w-2xl text-xl text-zinc-400"
                    >
                        We help ambitious brands define their digital future. <br className="hidden md:block" /> No fluff, just cutting-edge results.
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.3 }}
                        className="mt-12 flex flex-col items-center gap-6 sm:flex-row"
                    >
                        <Link
                            href="mailto:contact@aetheronstudio.com"
                            className="group relative inline-flex h-16 items-center justify-center overflow-hidden rounded-full bg-white px-10 text-lg font-bold text-black transition-all hover:scale-105 hover:bg-indigo-50"
                        >
                            <span className="relative z-10 flex items-center gap-2">
                                Get in touch <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
                            </span>
                            <div className="absolute inset-0 -z-10 bg-gradient-to-r from-indigo-200 to-purple-200 opacity-0 transition-opacity group-hover:opacity-100" />
                        </Link>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
