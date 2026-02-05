"use client";

import Link from "next/link";
import { Twitter, Instagram, Linkedin, ArrowRight, Github, Send, Check, AlertCircle } from "lucide-react";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { subscribeToNewsletter } from "@/app/actions/send-email";

export default function Footer() {
    const [email, setEmail] = useState("");
    const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

    const handleSubscribe = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!email) return;

        setStatus("loading");
        const result = await subscribeToNewsletter(email);

        if (result.success) {
            setStatus("success");
            setEmail("");
            setTimeout(() => setStatus("idle"), 3000);
        } else {
            setStatus("error");
            setTimeout(() => setStatus("idle"), 3000);
        }
    };

    return (
        <footer className="relative border-t border-black/10 bg-background pt-20 pb-10 text-foreground overflow-hidden dark:border-white/10 dark:bg-black dark:text-white">
            {/* Ambient Background Glow */}
            <div className="absolute top-[-20%] left-[-10%] h-[500px] w-[500px] rounded-full bg-primary/10 blur-[120px]" />
            <div className="absolute bottom-[-20%] right-[-10%] h-[400px] w-[400px] rounded-full bg-secondary/10 blur-[100px]" />

            <div className="container px-4 md:px-6 relative z-10">
                <div className="grid gap-12 lg:grid-cols-2 lg:gap-8 mb-16">
                    <div className="space-y-6">
                        <Link href="/" className="text-3xl font-bold tracking-tighter">
                            Aetheron<span className="text-primary">.</span>
                        </Link>
                        <p className="max-w-md text-lg text-muted-foreground">
                            Crafting immersive digital experiences that blend aesthetics with functionality. We help ambitious brands tell their story.
                        </p>
                        <div className="flex gap-4">
                            <SocialLink href="https://twitter.com" icon={Twitter} label="Twitter" />
                            <SocialLink href="https://instagram.com" icon={Instagram} label="Instagram" />
                            <SocialLink href="https://linkedin.com" icon={Linkedin} label="LinkedIn" />
                            <SocialLink href="https://github.com" icon={Github} label="GitHub" />
                        </div>
                    </div>

                    <div className="flex flex-col gap-4 lg:items-end">
                        <h3 className="text-xl font-semibold">Stay in the loop</h3>
                        <p className="text-zinc-400 lg:text-right">Join our newsletter for the latest design trends and updates.</p>
                        <form onSubmit={handleSubscribe} className="flex w-full max-w-sm items-center space-x-2 relative">
                            <div className="relative w-full">
                                <input
                                    type="email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    placeholder="Enter your email"
                                    disabled={status === "loading" || status === "success"}
                                    className="w-full rounded-full border border-black/10 bg-black/5 px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary backdrop-blur-sm transition-all disabled:opacity-50 dark:border-white/10 dark:bg-white/5 dark:text-white dark:placeholder:text-zinc-500"
                                />
                                <AnimatePresence mode="wait">
                                    {status === "success" ? (
                                        <motion.div
                                            key="success"
                                            initial={{ scale: 0.5, opacity: 0 }}
                                            animate={{ scale: 1, opacity: 1 }}
                                            exit={{ scale: 0.5, opacity: 0 }}
                                            className="absolute right-1 top-1 bottom-1 inline-flex items-center justify-center rounded-full bg-green-500 px-3 text-white"
                                        >
                                            <Check className="h-4 w-4" />
                                        </motion.div>
                                    ) : status === "error" ? (
                                        <motion.div
                                            key="error"
                                            initial={{ scale: 0.5, opacity: 0 }}
                                            animate={{ scale: 1, opacity: 1 }}
                                            exit={{ scale: 0.5, opacity: 0 }}
                                            className="absolute right-1 top-1 bottom-1 inline-flex items-center justify-center rounded-full bg-red-500 px-3 text-white"
                                        >
                                            <AlertCircle className="h-4 w-4" />
                                        </motion.div>
                                    ) : (
                                        <motion.button
                                            key="submit"
                                            initial={{ scale: 0.5, opacity: 0 }}
                                            animate={{ scale: 1, opacity: 1 }}
                                            exit={{ scale: 0.5, opacity: 0 }}
                                            type="submit"
                                            disabled={status === "loading"}
                                            className="absolute right-1 top-1 bottom-1 inline-flex items-center justify-center rounded-full bg-primary px-3 text-white transition-transform hover:scale-105 disabled:bg-primary/50"
                                        >
                                            {status === "loading" ? (
                                                <div className="h-4 w-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                                            ) : (
                                                <ArrowRight className="h-4 w-4" />
                                            )}
                                        </motion.button>
                                    )}
                                </AnimatePresence>
                            </div>
                        </form>
                    </div>
                </div>

                <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 mb-16 pt-8 border-t border-black/5 dark:border-white/5">
                    <div>
                        <h4 className="mb-6 text-sm font-semibold uppercase tracking-wider text-muted-foreground">Services</h4>
                        <ul className="space-y-4 text-sm font-medium">
                            <li><FooterLink href="#services">Web Design</FooterLink></li>
                            <li><FooterLink href="#services">Development</FooterLink></li>
                            <li><FooterLink href="#services">SEO Optimization</FooterLink></li>
                            <li><FooterLink href="#services">Brand Identity</FooterLink></li>
                        </ul>
                    </div>
                    <div>
                        <h4 className="mb-6 text-sm font-semibold uppercase tracking-wider text-muted-foreground">Company</h4>
                        <ul className="space-y-4 text-sm font-medium">
                            <li><FooterLink href="/about">About Us</FooterLink></li>
                            <li><FooterLink href="#work">Our Work</FooterLink></li>
                            <li><FooterLink href="#process">Process</FooterLink></li>
                            <li><FooterLink href="#contact">Contact</FooterLink></li>
                        </ul>
                    </div>
                    <div>
                        <h4 className="mb-6 text-sm font-semibold uppercase tracking-wider text-muted-foreground">Legal</h4>
                        <ul className="space-y-4 text-sm font-medium">
                            <li><FooterLink href="/privacy-policy">Privacy Policy</FooterLink></li>
                            <li><FooterLink href="/terms-of-service">Terms of Service</FooterLink></li>
                            <li><FooterLink href="/cookie-policy">Cookie Policy</FooterLink></li>
                        </ul>
                    </div>
                    <div>
                        <h4 className="mb-6 text-sm font-semibold uppercase tracking-wider text-muted-foreground">Contact</h4>
                        <ul className="space-y-4 text-sm font-medium text-muted-foreground">
                            <li className="flex items-center gap-3 group cursor-pointer hover:text-foreground transition-colors">
                                <span className="flex h-8 w-8 items-center justify-center rounded-full bg-black/5 border border-black/10 group-hover:bg-black/10 group-hover:border-black/20 transition-all dark:bg-white/5 dark:border-white/10 dark:group-hover:bg-white/10 dark:group-hover:border-white/20">
                                    <Send className="h-3.5 w-3.5 text-primary" />
                                </span>
                                <a href="mailto:admin@aetheronstudio.com" className="text-sm font-medium">admin@aetheronstudio.com</a>
                            </li>
                            <li className="flex items-center gap-3">
                                <span className="relative flex h-2.5 w-2.5">
                                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                                    <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-green-500"></span>
                                </span>
                                <span className="text-sm font-medium text-green-400">Available for new projects</span>
                            </li>
                            <li className="flex items-start gap-3 pt-2">
                                <div className="text-xs text-zinc-500 leading-relaxed font-mono uppercase tracking-wide">
                                    Indore, India<br />
                                    Remote Worldwide
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="flex flex-col items-center justify-between gap-4 border-t border-black/5 pt-8 text-center text-sm text-muted-foreground md:flex-row dark:border-white/5">
                    <p>&copy; {new Date().getFullYear()} Aetheron Studio. All rights reserved.</p>
                    <div className="flex gap-6">
                        <Link href="#" className="hover:text-foreground transition-colors">Privacy</Link>
                        <Link href="#" className="hover:text-foreground transition-colors">Terms</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}

function SocialLink({ href, icon: Icon, label }: { href: string; icon: React.ElementType, label: string }) {
    return (
        <Link
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={label}
            className="group flex h-10 w-10 items-center justify-center rounded-full border border-black/10 bg-black/5 transition-all hover:bg-black hover:text-white hover:border-black hover:scale-110 dark:border-white/10 dark:bg-white/5 dark:hover:bg-white dark:hover:text-black dark:hover:border-white"
        >
            <Icon className="h-5 w-5" />
        </Link>
    )
}

function FooterLink({ href, children }: { href: string; children: React.ReactNode }) {
    return (
        <Link href={href} className="text-muted-foreground hover:text-primary hover:translate-x-1 transition-all block">
            {children}
        </Link>
    )
}
