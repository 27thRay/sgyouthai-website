import { useState, useEffect } from "react";
import Navbar from "@/components/Navbar";
import { Button } from "@/components/ui/button";
import { HashLink } from "react-router-hash-link";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Initiatives from "@/components/Initiatives";
import Team from "@/components/Team";
import Partner from "@/components/Partner";
import Events from "@/components/Events";
import Contact from "@/components/Contact";
import AOS from "aos";
import "aos/dist/aos.css";
import Gallery from "@/components/Gallery";
import { useVitePostHog } from "vite-plugin-posthog/react";

export default function Home() {
  const posthog = useVitePostHog();
  const [showTopButton, setShowTopButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setShowTopButton(true);
      } else {
        setShowTopButton(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    posthog?.capture("scroll up");
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    AOS.init({
      once: true,
      easing: "ease-in-out",
      duration: 1000,
      mirror: false,
    });
  }, []);

  return (
    <>
      <Navbar />
      <Hero />
      <div id="About">
        <About />
      </div>

      <div
        id="Initiatives"
        className="bg-[#ecf5ff] shadow-[inset_0px_0px_12px_0px_rgba(0,0,0,0.1)]"
      >
        <Initiatives />
      </div>

      <div id="Team">
        <Team />
      </div>

      <div
        id="Partner"
        className="bg-[#ecf5ff] shadow-[inset_0px_0px_12px_0px_rgba(0,0,0,0.1)]"
      >
        <Partner />
      </div>

      <div id="Events" className="bg-[#004a99] text-[#eee]">
        <Events />
      </div>
      <Gallery />

      <div id="Contact" className="bg-[#004a99] text-[#eee]">
        <Contact />
      </div>

      {/* Return to Top Button */}
      {showTopButton && (
        <Button
          onClick={scrollToTop}
          className="fixed bottom-5 right-5 z-50 rounded-full aspect-square w-10 h-10 bg-blue-600 px-2.5 py-1.5 text-sm font-semibold text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
        >
          <HashLink to={"#"} smooth>
            ↑
          </HashLink>
        </Button>
      )}
    </>
  );
}
