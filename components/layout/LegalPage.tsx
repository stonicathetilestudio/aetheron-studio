"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowLeft, Clock } from "lucide-react";

interface LegalPageProps {
    title: string;
    date: string;
    children: React.ReactNode;
}

export default function LegalPage({ title, date, children }: LegalPageProps) {
    return (
        <main className="min-h-screen bg-background text-foreground selection:bg-primary/30 relative transition-colors">
            {/* Background Gradients */}
            <div className="fixed top-0 left-0 w-full h-[500px] bg-gradient-to-b from-primary/5 to-transparent pointer-events-none" />
            <div className="fixed bottom-0 right-[-10%] w-[500px] h-[500px] bg-secondary/5 blur-[120px] rounded-full pointer-events-none" />

            <div className="container px-4 md:px-6 py-32 max-w-4xl mx-auto relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                >
                    <Link
                        href="/"
                        className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors mb-8 group"
                    >
                        <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
                        Back to Home
                    </Link>

                    <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6">{title}</h1>

                    <div className="flex items-center gap-2 text-muted-foreground text-sm mb-12 border-b border-black/10 pb-8 dark:border-white/10">
                        <Clock className="w-4 h-4" />
                        <span>Last updated: {date}</span>
                    </div>

                    <div className="prose dark:prose-invert prose-lg max-w-none prose-headings:text-foreground prose-p:text-muted-foreground prose-a:text-primary hover:prose-a:text-purple-400 prose-strong:text-foreground prose-li:text-muted-foreground dark:prose-headings:text-white dark:prose-p:text-zinc-400 dark:prose-strong:text-white dark:prose-li:text-zinc-400">
                        {children}
                    </div>
                </motion.div>
            </div>
        </main>
    );
}
