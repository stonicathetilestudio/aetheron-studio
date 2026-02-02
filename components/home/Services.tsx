"use client";

import { motion } from "framer-motion";
import { Code, Palette, Search, Smartphone, Rocket, Globe } from "lucide-react";
import { cn } from "@/lib/utils";

const services = [
    {
        title: "Web Design",
        description: "We craft visually stunning, user-centric designs that tell your brand's unique story.",
        icon: Palette,
    },
    {
        title: "Development",
        description: "Robust, scalable websites built with the latest technologies like Next.js.",
        icon: Code,
    },
    {
        title: "SEO Optimization",
        description: "Data-driven strategies to boost your visibility and drive organic traffic.",
        icon: Search,
    },
    {
        title: "Mobile Apps",
        description: "Native and cross-platform mobile applications for iOS and Android.",
        icon: Smartphone,
    },
    {
        title: "Brand Strategy",
        description: "Comprehensive branding solutions to position you as a market leader.",
        icon: Rocket,
    },
    {
        title: "Global Reach",
        description: "Localization services to help you expand your business across borders.",
        icon: Globe,
    },
];

export default function Services() {
    return (
        <section id="services" className="relative py-24 sm:py-32 overflow-hidden bg-transparent">
            {/* Ambient Gradients - Matching Hero/Contact */}
            <div className="absolute top-1/2 left-0 -translate-y-1/2 h-[600px] w-[500px] bg-primary/20 blur-[120px] rounded-full opacity-50" />
            <div className="absolute bottom-0 right-0 h-[500px] w-[500px] bg-secondary/20 blur-[120px] rounded-full opacity-50" />

            <div className="container px-4 md:px-6 relative z-10">
                <div className="mb-20 text-center">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="mb-4 text-3xl font-bold tracking-tight text-white sm:text-5xl"
                    >
                        Our Expertise
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="mx-auto max-w-2xl text-lg text-zinc-400"
                    >
                        Transforming ideas into digital reality with a focus on aesthetics and performance.
                    </motion.p>
                </div>

                <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                    {services.map((service, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-8 transition-all hover:bg-white/10 hover:border-primary/50 hover:shadow-2xl hover:shadow-primary/10 backdrop-blur-sm"
                        >
                            <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

                            <div className="relative z-10">
                                <div className="mb-6 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-white/10 to-white/5 text-white shadow-inner group-hover:scale-110 transition-transform duration-300">
                                    <service.icon className="h-6 w-6 text-primary group-hover:text-white transition-colors" />
                                </div>

                                <h3 className="mb-3 text-xl font-bold text-white group-hover:text-primary transition-colors">{service.title}</h3>
                                <p className="text-zinc-400 leading-relaxed group-hover:text-zinc-300 transition-colors">
                                    {service.description}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
