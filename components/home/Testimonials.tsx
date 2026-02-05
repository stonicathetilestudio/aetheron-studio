"use client";

import { Star, Quote } from "lucide-react";

const testimonials = [
    {
        content: "Aetheron Studio completely transformed our brand. The attention to detail and design quality is unmatched. Truly a premium experience.",
        author: "Sarah Johnson",
        role: "CEO, Lumina Finance",
        image: "/images/avatar1.jpg",
    },
    {
        content: "Working with the team was a breeze. They understood our vision perfectly and delivered a product that exceeded our wildest expectations.",
        author: "Michael Chen",
        role: "Founder, Nexus Tech",
        image: "/images/avatar2.jpg",
    },
    {
        content: "The best digital agency we've worked with. Professional, creative, and technical experts who actually care about the end result.",
        author: "Emily Davis",
        role: "Marketing Director, Aura Health",
        image: "/images/avatar3.jpg",
    },
    {
        content: "Their ability to blend aesthetics with functionality is rare. Our conversion rates have doubled since the redesign.",
        author: "David Wilson",
        role: "CTO, Stratos",
        image: "/images/avatar4.jpg",
    },
    {
        content: "A masterclass in web design. Every interaction feels polished and deliberate. Highly recommended.",
        author: "Jessica Lee",
        role: "Product Lead, Vercel",
        image: "/images/avatar5.jpg",
    },
];

export default function Testimonials() {
    return (
        <section className="py-24 sm:py-32 overflow-hidden bg-transparent relative">
            {/* Background Gradients */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-primary/5 blur-[120px] rounded-full pointer-events-none" />

            <div className="container px-4 md:px-6 mb-16 text-center relative z-10">
                <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-5xl mb-6">
                    Loved by <span className="text-gradient">Industry Leaders</span>
                </h2>
                <p className="max-w-2xl mx-auto text-lg text-muted-foreground">
                    Don&apos;t just take our word for it. Here&apos;s what our partners have to say about working with Aetheron.
                </p>
            </div>

            {/* Marquee Container */}
            <div className="relative w-full overflow-hidden mask-gradient-x">
                {/* Gradient Masks for smooth fade out at edges */}
                <div className="absolute left-0 top-0 bottom-0 z-20 w-32 bg-gradient-to-r from-background to-transparent" />
                <div className="absolute right-0 top-0 bottom-0 z-20 w-32 bg-gradient-to-l from-background to-transparent" />

                <div className="flex w-max gap-8 animate-marquee hover:[animation-play-state:paused] py-10">
                    {[...testimonials, ...testimonials].map((testimonial, index) => (
                        <div
                            key={index}
                            className="relative w-[350px] md:w-[450px] flex-shrink-0 rounded-3xl border border-black/5 bg-black/5 p-8 backdrop-blur-sm transition-all hover:bg-black/10 hover:border-primary/30 group dark:border-white/10 dark:bg-white/5 dark:hover:bg-white/10"
                        >
                            <Quote className="absolute top-8 right-8 h-8 w-8 text-black/5 group-hover:text-primary/20 transition-colors dark:text-white/5" />

                            <div className="flex gap-1 mb-6">
                                {[...Array(5)].map((_, i) => (
                                    <Star key={i} className="h-4 w-4 fill-amber-500 text-amber-500" />
                                ))}
                            </div>

                            <p className="mb-8 text-lg leading-relaxed text-muted-foreground">
                                &quot;{testimonial.content}&quot;
                            </p>

                            <div className="flex items-center gap-4">
                                <div className="h-12 w-12 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-sm font-bold text-white shadow-lg">
                                    {testimonial.author.charAt(0)}
                                </div>
                                <div>
                                    <div className="font-semibold text-foreground">{testimonial.author}</div>
                                    <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
