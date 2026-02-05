"use client";

import { motion } from "framer-motion";
import { Send, Calendar, Loader2, CheckCircle, AlertCircle } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import { sendEmail } from "@/app/actions/send-email";

export default function Contact() {
    const [formState, setFormState] = useState({
        name: "",
        email: "",
        message: ""
    });
    const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
    const [errorMessage, setErrorMessage] = useState("");

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormState({
            ...formState,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setStatus("loading");
        setErrorMessage("");

        const formData = new FormData();
        formData.append("name", formState.name);
        formData.append("email", formState.email);
        formData.append("message", formState.message);

        const result = await sendEmail(formData);

        if (result.success) {
            setStatus("success");
            setFormState({ name: "", email: "", message: "" });
        } else {
            setStatus("error");
            setErrorMessage(result.error || "Something went wrong.");
        }
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
                        className="inline-block mb-4 px-3 py-1 rounded-full border border-black/5 bg-black/5 text-xs font-mono tracking-widest text-primary uppercase backdrop-blur-md dark:border-white/10 dark:bg-white/5"
                    >
                        Get in Touch
                    </motion.span>

                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="mb-6 text-5xl md:text-7xl font-bold tracking-tight text-foreground leading-[1.1]"
                    >
                        Let&apos;s build the <br /> <span className="text-gradient">future together.</span>
                    </motion.h2>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="mb-12 text-xl text-muted-foreground leading-relaxed max-w-2xl mx-auto"
                    >
                        Ready to transform your digital presence? We assist ambitious brands in defining their digital future strategies.
                    </motion.p>
                </div>

                <div className="flex flex-col items-center gap-6 mb-12">
                    <Link
                        href="https://calendar.google.com/calendar/u/0/appointments/schedules/YOUR_SCHEDULE_ID"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-primary text-primary-foreground font-bold hover:bg-primary/90 transition-colors shadow-lg shadow-primary/20"
                    >
                        <Calendar className="w-5 h-5" />
                        Schedule a Call
                    </Link>
                    <p className="text-zinc-500 text-sm">Or send us a message below</p>
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 }}
                    className="max-w-2xl mx-auto"
                >
                    {/* Form Container */}
                    <div className="relative rounded-3xl border border-black/5 bg-black/5 p-8 md:p-12 backdrop-blur-xl shadow-2xl dark:border-white/10 dark:bg-white/5">
                        {status === "success" ? (
                            <div className="flex flex-col items-center justify-center py-12 text-center">
                                <div className="w-16 h-16 bg-green-500/10 rounded-full flex items-center justify-center mb-6">
                                    <CheckCircle className="w-8 h-8 text-green-500" />
                                </div>
                                <h3 className="text-2xl font-bold text-foreground mb-2">Message Sent!</h3>
                                <p className="text-muted-foreground">Thanks for reaching out. We&apos;ll get back to you shortly.</p>
                                <button
                                    onClick={() => setStatus("idle")}
                                    className="mt-8 text-primary hover:underline"
                                >
                                    Send another message
                                </button>
                            </div>
                        ) : (
                            <form onSubmit={handleSubmit} className="space-y-6">
                                <div className="grid gap-6 md:grid-cols-2">
                                    <div className="space-y-2">
                                        <label htmlFor="name" className="text-sm font-medium text-muted-foreground ml-1">Name</label>
                                        <input
                                            type="text"
                                            id="name"
                                            name="name"
                                            required
                                            value={formState.name}
                                            onChange={handleChange}
                                            placeholder="John Doe"
                                            className="w-full rounded-xl bg-black/5 border border-black/10 px-4 py-3 text-foreground placeholder:text-muted-foreground focus:border-primary focus:bg-background focus:outline-none focus:ring-1 focus:ring-primary transition-all dark:bg-black/20 dark:border-white/10 dark:text-white dark:placeholder:text-zinc-600 dark:focus:bg-black/40"
                                        />
                                    </div>
                                    <div className="space-y-2">
                                        <label htmlFor="email" className="text-sm font-medium text-muted-foreground ml-1">Email</label>
                                        <input
                                            type="email"
                                            id="email"
                                            name="email"
                                            required
                                            value={formState.email}
                                            onChange={handleChange}
                                            placeholder="john@example.com"
                                            className="w-full rounded-xl bg-black/5 border border-black/10 px-4 py-3 text-foreground placeholder:text-muted-foreground focus:border-primary focus:bg-background focus:outline-none focus:ring-1 focus:ring-primary transition-all dark:bg-black/20 dark:border-white/10 dark:text-white dark:placeholder:text-zinc-600 dark:focus:bg-black/40"
                                        />
                                    </div>
                                </div>

                                <div className="space-y-2">
                                    <label htmlFor="message" className="text-sm font-medium text-muted-foreground ml-1">Message</label>
                                    <textarea
                                        id="message"
                                        name="message"
                                        required
                                        value={formState.message}
                                        onChange={handleChange}
                                        rows={4}
                                        placeholder="Tell us about your project..."
                                        className="w-full rounded-xl bg-black/5 border border-black/10 px-4 py-3 text-foreground placeholder:text-muted-foreground focus:border-primary focus:bg-background focus:outline-none focus:ring-1 focus:ring-primary transition-all resize-none dark:bg-black/20 dark:border-white/10 dark:text-white dark:placeholder:text-zinc-600 dark:focus:bg-black/40"
                                    />
                                </div>

                                {status === "error" && (
                                    <div className="flex items-center gap-2 text-red-400 text-sm bg-red-400/10 p-3 rounded-lg border border-red-400/20">
                                        <AlertCircle className="w-4 h-4" />
                                        <span>{errorMessage}</span>
                                    </div>
                                )}

                                <button
                                    type="submit"
                                    disabled={status === "loading"}
                                    className="w-full group btn-premium overflow-hidden relative disabled:opacity-70 disabled:cursor-not-allowed"
                                >
                                    <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-primary to-secondary opacity-10 group-hover:opacity-20 transition-opacity" />
                                    <div className="relative flex items-center justify-center gap-2 py-4 rounded-xl border border-black/10 bg-black/5 font-semibold text-foreground transition-all group-hover:bg-black/10 group-hover:border-black/20 dark:border-white/10 dark:bg-white/5 dark:text-white dark:group-hover:bg-white/10 dark:group-hover:border-white/20">
                                        {status === "loading" ? (
                                            <>
                                                <Loader2 className="h-4 w-4 animate-spin" />
                                                Sending...
                                            </>
                                        ) : (
                                            <>
                                                Send Message <Send className="h-4 w-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                                            </>
                                        )}
                                    </div>
                                </button>
                            </form>
                        )}
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
