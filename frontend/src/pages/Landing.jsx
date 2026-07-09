import Navbar from "../components/layout/Navbar";
import Hero from "../components/landing/Hero";
import Features from "../components/landing/Features";
import Stats from "../components/landing/Stats";
import CommandCenter from "../components/landing/CommandCenter";
import Footer from "../components/landing/Footer";

function Landing() {
  return (
    <div className="min-h-screen bg-[#08111F] text-white">
      <Navbar />
      <Hero />
      <Features />
      <Stats />
      <CommandCenter />
      <Footer />
    </div>
  );
}

export default Landing;