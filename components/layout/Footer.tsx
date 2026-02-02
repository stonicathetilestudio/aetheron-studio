"use client";

import Link from "next/link";
import { Twitter, Instagram, Linkedin, ArrowRight, Github } from "lucide-react";

export default function Footer() {
    return (
        <footer className="relative border-t border-white/10 bg-black pt-20 pb-10 text-white overflow-hidden">
            {/* Ambient Background Glow */}
            <div className="absolute top-[-20%] left-[-10%] h-[500px] w-[500px] rounded-full bg-primary/10 blur-[120px]" />
            <div className="absolute bottom-[-20%] right-[-10%] h-[400px] w-[400px] rounded-full bg-secondary/10 blur-[100px]" />

            <div className="container px-4 md:px-6 relative z-10">
                <div className="grid gap-12 lg:grid-cols-2 lg:gap-8 mb-16">
                    <div className="space-y-6">
                        <Link href="/" className="text-3xl font-bold tracking-tighter">
                            Aetheron<span className="text-primary">.</span>
                        </Link>
                        <p className="max-w-md text-lg text-zinc-400">
                            Crafting immersive digital experiences that blend aesthetics with functionality. We help ambitious brands tell their story.
                        </p>
                        <div className="flex gap-4">
                            <SocialLink href="#" icon={Twitter} />
                            <SocialLink href="#" icon={Instagram} />
                            <SocialLink href="#" icon={Linkedin} />
                            <SocialLink href="#" icon={Github} />
                        </div>
                    </div>

                    <div className="flex flex-col gap-4 lg:items-end">
                        <h3 className="text-xl font-semibold">Stay in the loop</h3>
                        <p className="text-zinc-400 lg:text-right">Join our newsletter for the latest design trends and updates.</p>
                        <form className="flex w-full max-w-sm items-center space-x-2">
                            <div className="relative w-full">
                                <input
                                    type="email"
                                    placeholder="Enter your email"
                                    className="w-full rounded-full border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder:text-zinc-500 focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary backdrop-blur-sm"
                                />
                                <button
                                    type="submit"
                                    className="absolute right-1 top-1 bottom-1 inline-flex items-center justify-center rounded-full bg-primary px-3 text-white transition-transform hover:scale-105"
                                >
                                    <ArrowRight className="h-4 w-4" />
                                </button>
                            </div>
                        </form>
                    </div>
                </div>

                <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 mb-16 pt-8 border-t border-white/5">
                    <div>
                        <h4 className="mb-6 text-sm font-semibold uppercase tracking-wider text-zinc-500">Services</h4>
                        <ul className="space-y-4 text-sm font-medium">
                            <li><FooterLink href="#">Web Design</FooterLink></li>
                            <li><FooterLink href="#">Development</FooterLink></li>
                            <li><FooterLink href="#">SEO Optimization</FooterLink></li>
                            <li><FooterLink href="#">Brand Identity</FooterLink></li>
                        </ul>
                    </div>
                    <div>
                        <h4 className="mb-6 text-sm font-semibold uppercase tracking-wider text-zinc-500">Company</h4>
                        <ul className="space-y-4 text-sm font-medium">
                            <li><FooterLink href="#">About Us</FooterLink></li>
                            <li><FooterLink href="#">Careers</FooterLink></li>
                            <li><FooterLink href="#">Blog</FooterLink></li>
                            <li><FooterLink href="#contact">Contact</FooterLink></li>
                        </ul>
                    </div>
                    <div>
                        <h4 className="mb-6 text-sm font-semibold uppercase tracking-wider text-zinc-500">Legal</h4>
                        <ul className="space-y-4 text-sm font-medium">
                            <li><FooterLink href="#">Privacy Policy</FooterLink></li>
                            <li><FooterLink href="#">Terms of Service</FooterLink></li>
                            <li><FooterLink href="#">Cookie Policy</FooterLink></li>
                        </ul>
                    </div>
                    <div>
                        <h4 className="mb-6 text-sm font-semibold uppercase tracking-wider text-zinc-500">Contact</h4>
                        <ul className="space-y-4 text-sm font-medium text-zinc-400">
                            <li className="flex items-start gap-2">
                                <span>hello@aetheronstudio.com</span>
                            </li>
                            <li className="flex items-start gap-2">
                                <span>+1 (555) 123-4567</span>
                            </li>
                            <li>
                                <span>123 Design Street,<br />San Francisco, CA 94103</span>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="flex flex-col items-center justify-between gap-4 border-t border-white/5 pt-8 text-center text-sm text-zinc-500 md:flex-row">
                    <p>&copy; {new Date().getFullYear()} Aetheron Studio. All rights reserved.</p>
                    <div className="flex gap-6">
                        <Link href="#" className="hover:text-white transition-colors">Privacy</Link>
                        <Link href="#" className="hover:text-white transition-colors">Terms</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}

function SocialLink({ href, icon: Icon }: { href: string; icon: React.ElementType }) {
    return (
        <Link
            href={href}
            className="group flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 transition-all hover:bg-white hover:text-black hover:border-white"
        >
            <Icon className="h-5 w-5" />
        </Link>
    )
}

function FooterLink({ href, children }: { href: string; children: React.ReactNode }) {
    return (
        <Link href={href} className="text-zinc-400 hover:text-primary transition-colors block">
            {children}
        </Link>
    )
}
