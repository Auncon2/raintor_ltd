import Contact from "@/components/Contact";
import Experience from "@/components/Experience";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import Navbar from "@/components/Navbar";
import Skills from "@/components/Skills";
import WorkProcess from "@/components/WorkProcess";

export default function Home() {
  return (
    <main className="overflow-x-hidden font-sans bg-white text-black">
      <Navbar />
      <HeroSection />
      <Skills />
      <Experience />
      <WorkProcess />
      <Contact />
      <Footer />
    </main>
  );
}
