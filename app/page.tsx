import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/home/Hero";
import TrustedBy from "@/components/home/TrustedBy";
import Services from "@/components/home/Services";
import Portfolio from "@/components/home/Portfolio";
import Testimonials from "@/components/home/Testimonials";
import Contact from "@/components/home/Contact";
import Footer from "@/components/layout/Footer";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col selection:bg-primary/20 selection:text-primary">
      <Navbar />
      <Hero />
      <TrustedBy />
      <Services />
      <Portfolio />
      <Testimonials />
      <Contact />
      <Footer />
    </main>
  );
}
