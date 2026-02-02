"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Palette, Code, Search, Megaphone, ArrowRight, CheckCircle2, X } from "lucide-react";

const services = [
    {
        title: "Web Design",
        description: "Visually stunning, user-centric designs that tell your brand's unique story.",
        icon: Palette,
        details: [
            "UI/UX Design",
            "Interactive Prototypes",
            "Mobile-First Layouts",
            "Design Systems"
        ]
    },
    {
        title: "Development",
        description: "Robust, scalable code that powers your digital growth with pixel-perfect precision.",
        icon: Code,
        details: [
            "Front-End Development",
            "CMS Integration",
            "Performance Optimization",
            "API Integrations"
        ]
    },
    {
        title: "SEO Optimization",
        description: "Visibility that matters. We help you rank higher and reach your target audience effectively.",
        icon: Search,
        details: [
            "Keyword Strategy",
            "Technical SEO",
            "Content Optimization",
            "Link Building"
        ]
    },
    {
        title: "Brand Identity",
        description: "A distinct voice and visual system that resonates with your audience and builds trust.",
        icon: Megaphone,
        details: [
            "Logo Design",
            "Brand Guidelines",
            "Visual Assets",
            "Tone of Voice"
        ]
    },
];

export default function Services() {
    const [selectedService, setSelectedService] = useState<typeof services[0] | null>(null);

    return (
        <section id="services" className="relative py-24 sm:py-32 overflow-hidden bg-transparent">
            {/* Ambient Gradients - Matching Hero/Contact */}
            <div className="absolute top-1/2 left-0 -translate-y-1/2 h-[600px] w-[500px] bg-primary/20 blur-[120px] rounded-full opacity-50 pointer-events-none" />
            <div className="absolute bottom-0 right-0 h-[500px] w-[500px] bg-secondary/20 blur-[120px] rounded-full opacity-50 pointer-events-none" />

            <div className="container px-4 md:px-6 relative z-10">
                <div className="mb-20 text-center">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="mb-4 text-3xl font-bold tracking-tight text-white sm:text-5xl"
                    >
                        Our Capabilities
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="mx-auto max-w-2xl text-lg text-zinc-400"
                    >
                        We help businesses scale through structured systems — not random tactics.
                    </motion.p>
                </div>

                <div className="grid gap-6 sm:grid-cols-2">
                    {services.map((service, index) => (
                        <motion.div
                            key={index}
                            layoutId={`service-${service.title}`}
                            onClick={() => setSelectedService(service)}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="group relative flex flex-col justify-between overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-8 transition-all hover:bg-white/10 hover:border-primary/50 hover:shadow-2xl hover:shadow-primary/10 backdrop-blur-sm cursor-pointer will-change-transform"
                        >
                            <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

                            <div className="relative z-10">
                                <div className="mb-6 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-white/10 to-white/5 text-white shadow-inner group-hover:scale-110 transition-transform duration-300">
                                    <service.icon className="h-6 w-6 text-primary group-hover:text-white transition-colors" />
                                </div>

                                <h3 className="mb-3 text-xl font-bold text-white group-hover:text-primary transition-colors">{service.title}</h3>
                                <p className="text-zinc-400 leading-relaxed group-hover:text-zinc-300 transition-colors mb-6">
                                    {service.description}
                                </p>
                            </div>

                            <div className="relative z-10 mt-auto">
                                <button
                                    onClick={() => setSelectedService(service)}
                                    className="inline-flex items-center text-sm font-medium text-white hover:text-primary transition-colors group/btn"
                                >
                                    Learn More
                                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover/btn:translate-x-1" />
                                </button>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>

            {/* Service Detail Modal */}
            <AnimatePresence>
                {selectedService && (
                    <>
                        {/* Backdrop */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={() => setSelectedService(null)}
                            className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm"
                        />

                        {/* Modal Content */}
                        <motion.div
                            layoutId={`service-${selectedService.title}`}
                            initial={{ opacity: 0, scale: 0.9, y: 20 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            exit={{ opacity: 0, scale: 0.9, y: 20 }}
                            className="fixed inset-0 z-50 flex items-center justify-center p-4 pointer-events-none"
                        >
                            <div className="pointer-events-auto relative w-full max-w-2xl overflow-hidden rounded-3xl border border-white/10 bg-zinc-900 shadow-2xl">
                                {/* Close Button */}
                                <button
                                    onClick={() => setSelectedService(null)}
                                    className="absolute top-4 right-4 z-10 rounded-full bg-white/10 p-2 text-white hover:bg-white/20 transition-colors"
                                >
                                    <X className="h-5 w-5" />
                                </button>

                                {/* Header Gradient */}
                                <div className="absolute top-0 inset-x-0 h-32 bg-gradient-to-br from-primary/20 via-purple-500/10 to-transparent pointer-events-none" />

                                <div className="p-8 md:p-12 relative z-0">
                                    <div className="mb-6 inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-white/10 to-white/5 text-white shadow-inner">
                                        <selectedService.icon className="h-8 w-8 text-primary" />
                                    </div>

                                    <h3 className="mb-4 text-3xl font-bold text-white tracking-tight">{selectedService.title}</h3>
                                    <p className="text-lg text-zinc-400 mb-8">{selectedService.description}</p>

                                    <div className="space-y-4">
                                        <h4 className="text-sm font-bold uppercase tracking-widest text-zinc-500">Service Capabilities</h4>
                                        <div className="grid gap-3 sm:grid-cols-2">
                                            {selectedService.details?.map((detail, idx) => (
                                                <div key={idx} className="flex items-center gap-3 rounded-lg border border-white/5 bg-white/[0.02] p-3 text-zinc-300">
                                                    <CheckCircle2 className="h-5 w-5 text-green-400 flex-shrink-0" />
                                                    <span className="text-sm font-medium">{detail}</span>
                                                </div>
                                            ))}
                                        </div>
                                    </div>

                                    <div className="mt-10 flex justify-end">
                                        <button
                                            onClick={() => { setSelectedService(null); const el = document.getElementById('contact'); el?.scrollIntoView({ behavior: 'smooth' }); }}
                                            className="inline-flex h-12 items-center justify-center rounded-full bg-primary px-8 text-sm font-medium text-white transition-transform hover:scale-105"
                                        >
                                            Inquire about this
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </>
                )}
            </AnimatePresence>
        </section>
    );
}
