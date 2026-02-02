"use client";

import { motion } from "framer-motion";
import { ArrowRight, Users, Target, Zap, Award } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export default function AboutPage() {
    return (
        <main className="min-h-screen bg-black text-white selection:bg-primary/30">
            {/* Hero Section */}
            <section className="relative pt-32 pb-20 overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-[500px] bg-gradient-to-b from-primary/10 to-transparent pointer-events-none" />
                <div className="absolute bottom-0 right-[-10%] w-[500px] h-[500px] bg-secondary/10 blur-[120px] rounded-full pointer-events-none" />

                <div className="container px-4 md:px-6 relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="max-w-4xl mx-auto text-center"
                    >
                        <span className="inline-block mb-4 px-3 py-1 rounded-full border border-white/10 bg-white/5 text-xs font-mono tracking-widest text-primary uppercase backdrop-blur-md">
                            Our Story
                        </span>
                        <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-8 leading-tight">
                            We are the architects of <br />
                            <span className="text-gradient">digital reality.</span>
                        </h1>
                        <p className="text-xl text-zinc-400 max-w-2xl mx-auto leading-relaxed">
                            Aetheron Studio was born from a simple belief: that digital experiences should be as immersive and emotive as the physical world.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Mission Section */}
            <section className="py-20 bg-neutral-900/50 border-y border-white/5 relative overflow-hidden">
                <div className="container px-4 md:px-6">
                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="relative"
                        >
                            <div className="aspect-square rounded-3xl overflow-hidden grayscale hover:grayscale-0 transition-all duration-700 bg-neutral-800 border border-white/10">
                                {/* Placeholder for Team/Office Image */}
                                <div className="w-full h-full flex items-center justify-center text-zinc-700 bg-[linear-gradient(45deg,transparent_25%,rgba(68,68,68,.2)_50%,transparent_75%,transparent_100%)] bg-[length:250%_250%] animate-[shimmer_3s_infinite]">
                                    <div className="text-center p-8">
                                        <Users className="w-16 h-16 mx-auto mb-4 opacity-50" />
                                        <p className="text-sm font-mono uppercase tracking-widest">Team Photography</p>
                                    </div>
                                </div>
                            </div>
                            <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-primary/20 blur-[60px] rounded-full" />
                        </motion.div>

                        <div>
                            <h2 className="text-3xl font-bold mb-6">Our Mission</h2>
                            <div className="space-y-6 text-lg text-zinc-400">
                                <p>
                                    In a digital landscape saturated with noise, we strive to create clarity and impact. We don't just build websites; we craft digital ecosystems that breathe life into brands.
                                </p>
                                <p>
                                    Our philosophy is rooted in the convergence of art and technology. We believe that true innovation happens when aesthetic beauty meets functional precision.
                                </p>
                                <div className="grid grid-cols-2 gap-6 mt-8">
                                    <div className="p-4 rounded-xl border border-white/10 bg-white/5">
                                        <Target className="w-6 h-6 text-primary mb-2" />
                                        <h3 className="font-bold text-white mb-1">Precision</h3>
                                        <p className="text-sm text-zinc-500">Pixel-perfect execution in every detail.</p>
                                    </div>
                                    <div className="p-4 rounded-xl border border-white/10 bg-white/5">
                                        <Zap className="w-6 h-6 text-secondary mb-2" />
                                        <h3 className="font-bold text-white mb-1">Speed</h3>
                                        <p className="text-sm text-zinc-500">Optimized performance for modern web.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Values Section */}
            <section className="py-24">
                <div className="container px-4 md:px-6">
                    <div className="text-center max-w-3xl mx-auto mb-16">
                        <h2 className="text-3xl md:text-5xl font-bold mb-6">Built on Principles</h2>
                        <p className="text-zinc-400">
                            Our culture is defined by a relentless pursuit of excellence and a deep respect for the craft of digital creation.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-6">
                        {[
                            {
                                title: "Innovation First",
                                description: "We constantly explore the bleeding edge of web technologies to keep our clients ahead.",
                                icon: Award
                            },
                            {
                                title: "User-Centric",
                                description: "Every pixel is placed with the user in mind. We design for humans, not just algorithms.",
                                icon: Users
                            },
                            {
                                title: "Transparent Process",
                                description: "We believe in open collaboration. No black boxes, just clear communication and results.",
                                icon: Target
                            }
                        ].map((item, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1 }}
                                className="p-8 rounded-3xl border border-white/10 bg-white/5 hover:bg-white/10 transition-colors group"
                            >
                                <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                                    <item.icon className="w-6 h-6 text-primary" />
                                </div>
                                <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                                <p className="text-zinc-400 leading-relaxed">{item.description}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-20 relative overflow-hidden">
                <div className="absolute inset-0 bg-primary/5" />
                <div className="container px-4 md:px-6 relative z-10 text-center">
                    <h2 className="text-4xl font-bold mb-6">Ready to work with us?</h2>
                    <p className="text-xl text-zinc-400 mb-10 max-w-xl mx-auto">
                        Let's turn your vision into a digital reality that stands the test of time.
                    </p>
                    <Link
                        href="/#contact"
                        className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-white text-black font-bold hover:bg-zinc-200 transition-colors"
                    >
                        Start a Project <ArrowRight className="w-4 h-4" />
                    </Link>
                </div>
            </section>
        </main>
    );
}
