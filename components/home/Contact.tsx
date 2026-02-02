"use client";

import { motion } from "framer-motion";
import { Send } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

export default function Contact() {
    const [formState, setFormState] = useState({
        name: "",
        email: "",
        message: ""
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormState({
            ...formState,
            [e.target.name]: e.target.value
        });
    };

    return (
        <section id="contact" className="relative py-32 overflow-hidden bg-transparent">
            {/* Background Elements */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] bg-primary/5 blur-[120px] rounded-full pointer-events-none" />

            <div className="container px-4 md:px-6 relative z-10">
                <div className="flex flex-col items-center text-center max-w-4xl mx-auto">
                    <motion.span
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="inline-block mb-4 px-3 py-1 rounded-full border border-white/10 bg-white/5 text-xs font-mono tracking-widest text-primary uppercase backdrop-blur-md"
                    >
                        Get in Touch
                    </motion.span>

                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="mb-6 text-5xl md:text-7xl font-bold tracking-tight text-white leading-[1.1]"
                    >
                        Let&apos;s build the <br /> <span className="text-gradient">future together.</span>
                    </motion.h2>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="mb-12 text-xl text-zinc-400 leading-relaxed max-w-2xl mx-auto"
                    >
                        Ready to transform your digital presence? We assist ambitious brands in defining their digital future strategies.
                    </motion.p>
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 }}
                    className="max-w-2xl mx-auto"
                >
                    {/* Form Container */}
                    <div className="relative rounded-3xl border border-white/10 bg-white/5 p-8 md:p-12 backdrop-blur-xl shadow-2xl">
                        <form className="space-y-6">
                            <div className="grid gap-6 md:grid-cols-2">
                                <div className="space-y-2">
                                    <label htmlFor="name" className="text-sm font-medium text-zinc-400 ml-1">Name</label>
                                    <input
                                        type="text"
                                        id="name"
                                        name="name"
                                        value={formState.name}
                                        onChange={handleChange}
                                        placeholder="John Doe"
                                        className="w-full rounded-xl bg-black/20 border border-white/10 px-4 py-3 text-white placeholder:text-zinc-600 focus:border-primary focus:bg-black/40 focus:outline-none focus:ring-1 focus:ring-primary transition-all"
                                    />
                                </div>
                                <div className="space-y-2">
                                    <label htmlFor="email" className="text-sm font-medium text-zinc-400 ml-1">Email</label>
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        value={formState.email}
                                        onChange={handleChange}
                                        placeholder="john@example.com"
                                        className="w-full rounded-xl bg-black/20 border border-white/10 px-4 py-3 text-white placeholder:text-zinc-600 focus:border-primary focus:bg-black/40 focus:outline-none focus:ring-1 focus:ring-primary transition-all"
                                    />
                                </div>
                            </div>

                            <div className="space-y-2">
                                <label htmlFor="message" className="text-sm font-medium text-zinc-400 ml-1">Message</label>
                                <textarea
                                    id="message"
                                    name="message"
                                    value={formState.message}
                                    onChange={handleChange}
                                    rows={4}
                                    placeholder="Tell us about your project..."
                                    className="w-full rounded-xl bg-black/20 border border-white/10 px-4 py-3 text-white placeholder:text-zinc-600 focus:border-primary focus:bg-black/40 focus:outline-none focus:ring-1 focus:ring-primary transition-all resize-none"
                                />
                            </div>

                            <button type="submit" className="w-full group btn-premium overflow-hidden relative">
                                <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-primary to-secondary opacity-10 group-hover:opacity-20 transition-opacity" />
                                <div className="relative flex items-center justify-center gap-2 py-4 rounded-xl border border-white/10 bg-white/5 font-semibold text-white transition-all group-hover:bg-white/10 group-hover:border-white/20">
                                    Send Message <Send className="h-4 w-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                                </div>
                            </button>
                        </form>
                    </div>


                </motion.div>
            </div>
        </section>
    );
}
