"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";

const Navbar = () => {
    const { scrollY } = useScroll();
    const [hidden, setHidden] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useMotionValueEvent(scrollY, "change", (latest) => {
        const previous = scrollY.getPrevious() ?? 0;
        if (latest > previous && latest > 150) {
            setHidden(true);
        } else {
            setHidden(false);
        }
        setScrolled(latest > 20);
    });

    const links = [
        { name: "Services", href: "#services" },
        { name: "Work", href: "#work" },
        { name: "Process", href: "#process" },
        { name: "Contact", href: "#contact" },
    ];

    return (
        <motion.header
            variants={{
                visible: { y: 0 },
                hidden: { y: "-100%" },
            }}
            animate={hidden ? "hidden" : "visible"}
            transition={{ duration: 0.35, ease: "easeInOut" }}
            className={cn(
                "fixed inset-x-0 top-0 z-50 flex h-20 items-center justify-center px-4 transition-all duration-300",
                scrolled ? "py-4" : "py-6"
            )}
        >
            <div
                className={cn(
                    "flex w-full max-w-5xl items-center justify-between rounded-full px-6 transition-all duration-300",
                    scrolled
                        ? "glass h-14 bg-black/40 shadow-lg backdrop-blur-md dark:border-white/10 dark:bg-black/40"
                        : "h-16 bg-transparent"
                )}
            >
                {/* Logo */}
                <Link
                    href="/"
                    className="relative z-50 text-xl font-bold tracking-tighter text-foreground"
                >
                    Aetheron<span className="text-primary">.</span>
                </Link>

                {/* Desktop Nav */}
                <nav className="hidden md:block">
                    <ul className="flex items-center gap-8 text-sm font-medium text-muted-foreground">
                        {links.map((link) => (
                            <li key={link.name}>
                                <Link
                                    href={link.href}
                                    className="transition-colors hover:text-primary dark:hover:text-white"
                                >
                                    {link.name}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </nav>

                {/* CTA Button */}
                <div className="hidden md:block">
                    <Link
                        href="#contact"
                        className="inline-flex h-9 items-center justify-center rounded-full bg-foreground px-4 text-sm font-medium text-background transition-colors hover:bg-foreground/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 dark:bg-white dark:text-black dark:hover:bg-white/90"
                    >
                        Get Started
                    </Link>
                </div>


                {/* Mobile Toggle */}
                <button
                    className="relative z-50 block p-2 md:hidden"
                    onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                >
                    {mobileMenuOpen ? (
                        <X className="h-6 w-6 text-foreground" />
                    ) : (
                        <Menu className="h-6 w-6 text-foreground" />
                    )}
                </button>
            </div>

            {/* Mobile Menu Overlay */}
            <div
                className={cn(
                    "fixed inset-0 z-40 flex flex-col items-center justify-center bg-background/95 backdrop-blur-xl transition-all duration-500 md:hidden",
                    mobileMenuOpen ? "translate-y-0 opacity-100" : "-translate-y-full opacity-0"
                )}
            >
                <ul className="flex flex-col items-center gap-8 text-2xl font-medium text-foreground">
                    {links.map((link) => (
                        <li key={link.name}>
                            <Link
                                href={link.href}
                                onClick={() => setMobileMenuOpen(false)}
                                className="hover:text-primary"
                            >
                                {link.name}
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>
        </motion.header>
    );
};

export default Navbar;
