import dynamic from "next/dynamic";
import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/home/Hero";
import Footer from "@/components/layout/Footer";

// Lazy load heavy components below the fold
const TrustedBy = dynamic(() => import("@/components/home/TrustedBy"), { ssr: true });
const Services = dynamic(() => import("@/components/home/Services"), { ssr: true });
const Process = dynamic(() => import("@/components/home/Process"), { ssr: true });
const Portfolio = dynamic(() => import("@/components/home/Portfolio"), { ssr: true });
const Testimonials = dynamic(() => import("@/components/home/Testimonials"), { ssr: true });
const Contact = dynamic(() => import("@/components/home/Contact"), { ssr: true });

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col selection:bg-primary/20 selection:text-primary">
      <Navbar />
      <Hero />
      <TrustedBy />
      <Services />
      <Process />
      <Portfolio />
      <Testimonials />
      <Contact />
      <Footer />
    </main>
  );
}
