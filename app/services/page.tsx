'use client';

import { motion } from 'framer-motion';
import {
    Palette, Code, Search, Megaphone, Server, Smartphone,
    Bot, BarChart3, Database, Globe, ShoppingCart,
    PenTool, Layout, Video, Share2, Users, Briefcase,
    Building, GraduationCap, ArrowRight, Zap
} from 'lucide-react';
import Link from 'next/link';
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

const categories = [
    {
        title: "Brand Identity & Creative Design",
        icon: Palette,
        description: "Crafting memorable brands that stand out in a crowded market.",
        services: [
            { name: "Logo Design", desc: "Unique logos that capture your brand essence." },
            { name: "Brand Guidelines", desc: "Comprehensive guides for consistent brand usage." },
            { name: "Color Palette & Typography", desc: "Strategic visual elements for emotional impact." },
            { name: "Brand Voice & Tone", desc: "Defining how your brand speaks to its audience." },
            { name: "Rebranding Services", desc: "Modernizing existing brands for new markets." },
            { name: "UI/UX Design", desc: "User-centric interfaces for web and mobile apps." },
            { name: "Pitch Decks", desc: "Compelling presentations for investors and stakeholders." },
            { name: "Marketing Collateral", desc: "Brochures, flyers, and print materials." }
        ]
    },
    {
        title: "Social Media & Content",
        icon: Share2,
        description: "Building communities and engaging audiences with impactful content.",
        services: [
            { name: "Social Media Management", desc: "Full-service account handling and growth." },
            { name: "Content Strategy", desc: "Data-driven planning for long-term engagement." },
            { name: "Short-form Videos", desc: "Reels, TikToks, and Shorts production." },
            { name: "Influencer Marketing", desc: "Connecting brands with key opinion leaders." },
            { name: "Copywriting", desc: "Persuasive text for ads, blogs, and captions." },
            { name: "Community Management", desc: "Active engagement to foster brand loyalty." },
            { name: "Analytics & Reporting", desc: "Detailed insights into campaign performance." }
        ]
    },
    {
        title: "Web & E-Commerce",
        icon: Globe,
        description: "High-performance websites that convert visitors into customers.",
        services: [
            { name: "Custom Website Development", desc: "Tailor-made sites with cutting-edge tech." },
            { name: "E-Commerce Solutions", desc: "Shopify, WooCommerce, and custom stores." },
            { name: "Landing Pages", desc: "High-conversion pages for ad campaigns." },
            { name: "CMS Development", desc: "Easy-to-manage content systems." },
            { name: "Speed Optimization", desc: "Lightning-fast load times for better SEO." },
            { name: "Payment Gateway Integration", desc: "Secure and seamless transaction setups." },
            { name: "SEO Optimization", desc: "On-page and technical SEO for visibility." }
        ]
    },
    {
        title: "Mobile & Software",
        icon: Smartphone,
        description: "Scalable applications built for the modern digital ecosystem.",
        services: [
            { name: "iOS App Development", desc: "Native apps for the Apple ecosystem." },
            { name: "Android App Development", desc: "Apps reaching the massive Android user base." },
            { name: "Cross-Platform Apps", desc: "Flutter and React Native solutions." },
            { name: "SaaS Product Development", desc: "MVP to full-scale software platforms." },
            { name: "CRM & ERP Systems", desc: "Custom internal tools for business efficiency." },
            { name: "Client Portals", desc: "Secure dashboards for customer interaction." },
            { name: "API Development", desc: "Robust backends connecting your services." }
        ]
    },
    {
        title: "Paid Advertising",
        icon: Megaphone,
        description: "Targeted campaigns that drive immediate traffic and ROI.",
        services: [
            { name: "Meta Ads", desc: "Facebook and Instagram targeting strategies." },
            { name: "Google Ads", desc: "Search, Display, and Shopping campaigns." },
            { name: "YouTube Ads", desc: "Video advertising for brand awareness." },
            { name: "LinkedIn Ads", desc: "B2B lead generation campaigns." },
            { name: "Retargeting Strategies", desc: "Bringing back visitors who didn't convert." },
            { name: "Funnel Optimization", desc: "Improving the journey from click to close." }
        ]
    },
    {
        title: "AI & Automation",
        icon: Bot,
        description: "Leveraging artificial intelligence to streamline operations.",
        services: [
            { name: "AI Chatbots", desc: "24/7 customer support and lead gen agents." },
            { name: "Workflow Automation", desc: "Connecting apps to save manual effort." },
            { name: "AI Content Generation", desc: "Assisted creation for scale and speed." },
            { name: "Internal AI Assistants", desc: "Tools for HR, Sales, and Ops support." },
            { name: "WhatsApp Automation", desc: "Business communication at scale." },
            { name: "Lead Qualification Bots", desc: "Filtering high-quality prospects automatically." }
        ]
    },
    {
        title: "Specialized Industries",
        icon: Briefcase,
        description: "Tailored solutions for specific business sectors.",
        services: [
            { name: "Real Estate Tech", desc: "Listing portals and lead management CRMs." },
            { name: "Healthcare Systems", desc: "Booking engines and patient portals." },
            { name: "Education & Coaching", desc: "LMS platforms and student dashboards." },
            { name: "Local Business Growth", desc: "GMB optimization and local SEO mastery." }
        ]
    },
    {
        title: "Cloud & Consulting",
        icon: Server,
        description: "Strategic infrastructure and guidance for digital transformation.",
        services: [
            { name: "Cloud Infrastructure", desc: "AWS/GCP setup and management." },
            { name: "DevOps & CI/CD", desc: "Automated deployment pipelines." },
            { name: "Digital Transformation", desc: "Modernizing legacy business processes." },
            { name: "Tech Strategy", desc: "Roadmapping and architecture planning." }
        ]
    }
];

export default function ServicesPage() {
    return (
        <main className="min-h-screen bg-background pt-24 overflow-hidden">
            <Navbar />
            {/* Ambient Background */}
            <div className="fixed inset-0 z-0 pointer-events-none">
                <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/10 rounded-full blur-[120px] opacity-50" />
                <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-secondary/10 rounded-full blur-[120px] opacity-50" />
            </div>

            <div className="container px-4 md:px-6 relative z-10">
                {/* Header */}
                <div className="mx-auto max-w-3xl text-center mb-20">
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        className="text-4xl font-bold tracking-tight sm:text-6xl mb-6 bg-gradient-to-r from-white via-white to-zinc-400 dark:from-white dark:via-white dark:to-zinc-400 bg-clip-text text-transparent"
                    >
                        Our Comprehensive Suite of Services
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                        className="text-xl text-muted-foreground"
                    >
                        From rapid MVP development to enterprise-grade scaling, we provide end-to-end digital solutions tailored to your growth.
                    </motion.p>
                </div>

                {/* Categories Grid */}
                <div className="space-y-24">
                    {categories.map((category, catIndex) => (
                        <motion.div
                            key={category.title}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ duration: 0.6 }}
                            className="relative"
                        >
                            <div className="flex flex-col md:flex-row gap-8 mb-10 items-start md:items-center">
                                <div className="p-4 rounded-2xl bg-primary/10 text-primary">
                                    <category.icon className="w-8 h-8" />
                                </div>
                                <div>
                                    <h2 className="text-3xl font-bold mb-2">{category.title}</h2>
                                    <p className="text-lg text-muted-foreground max-w-2xl">{category.description}</p>
                                </div>
                            </div>

                            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                                {category.services.map((service, index) => (
                                    <motion.div
                                        key={service.name}
                                        initial={{ opacity: 0, scale: 0.95 }}
                                        whileInView={{ opacity: 1, scale: 1 }}
                                        viewport={{ once: true }}
                                        transition={{ duration: 0.4, delay: index * 0.05 }}
                                        className="group p-6 rounded-2xl border border-black/5 bg-white/50 dark:bg-zinc-900/50 dark:border-white/10 hover:border-primary/30 transition-all hover:shadow-lg hover:shadow-primary/5 dark:hover:bg-zinc-800/80 backdrop-blur-sm"
                                    >
                                        <div className="mb-3">
                                            <Zap className="w-5 h-5 text-primary/60 group-hover:text-primary transition-colors mb-2" />
                                            <h3 className="font-semibold text-lg group-hover:text-primary transition-colors">{service.name}</h3>
                                        </div>
                                        <p className="text-sm text-muted-foreground leading-relaxed">
                                            {service.desc}
                                        </p>
                                    </motion.div>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* CTA Section */}
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mt-32 p-8 md:p-12 rounded-3xl bg-gradient-to-br from-zinc-900 to-black border border-white/5 text-center relative overflow-hidden"
                >
                    <div className="absolute inset-0 bg-white/5 opacity-0 hover:opacity-10 transition-opacity duration-500" />
                    <div className="relative z-10">
                        <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">Ready to Transform Your Business?</h2>
                        <p className="text-zinc-400 max-w-2xl mx-auto mb-10 text-lg">
                            Whether you need a full digital overhaul or a specific solution, our team is ready to deliver excellence.
                        </p>
                        <Link
                            href="/#contact"
                            className="inline-flex items-center justify-center h-14 px-8 rounded-full bg-primary text-white font-medium text-lg hover:scale-105 transition-transform shadow-xl shadow-primary/20"
                        >
                            Start Your Project <ArrowRight className="ml-2 w-5 h-5" />
                        </Link>
                    </div>
                </motion.div>
            </div>
            <Footer />
        </main>
    );
}
