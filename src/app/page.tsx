import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import TrustedBy from "@/components/TrustedBy";
import About from "@/components/About";
import Projects from "@/components/Projects";
import Testimonials from "@/components/Testimonials";
import Skills from "@/components/Skills";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import GlobalFish from "@/components/GlobalFish";
import GlobalSpaceship from "@/components/GlobalSpaceship";
import FloatingContact from "@/components/FloatingContact";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <TrustedBy />
      <About />
      <Projects />
      <Testimonials />
      <Skills />
      <Contact />
      <Footer />
      <GlobalFish />
      <GlobalSpaceship />
      <FloatingContact />
    </main>
  );
}
