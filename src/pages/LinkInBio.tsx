import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import heroBG from "@/assets/hero-bg.png";
import SYAILogo from "@/assets/SYAI Logo.jpg";
import { EllipsisVertical, Ellipsis, Bell } from 'lucide-react';
import { Instagram, Linkedin } from "lucide-react"; 

export default function LinkInBio() {
    const socials = [
    {
      name: "Instagram",
      icon: <Instagram style={{ width: "1.15rem", height: "1.15rem" }} />,
      href: "https://www.instagram.com/sgyouthai/",
    },
    {
      name: "LinkedIn",
      icon: <Linkedin style={{ width: "1.15rem", height: "1.15rem" }} />,
      href: "https://www.linkedin.com/company/sgyouthai",
    },
  ];

  const links = [
    {
      name: "Telegram",
      href: "https://t.me/sgyouthai",
    },
    {
      name: "Discord",
      href: "https://t.me/sgyouthai",
    },
    {
      name: "Website",
      href: "https://sgyouthai.org/",
    },
  ];

  const [showHeader, setShowHeader] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 75) {
        setShowHeader(false);
      } else {
        setShowHeader(true);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      className="relative h-full bg-cover bg-no-repeat text-white"
      style={{
        backgroundImage: `url(${heroBG})`,
      }}
    >
      <div
        className={cn(
          "fixed px-3 top-3 w-full container mx-auto left-1/2 -translate-x-1/2 flex justify-between transition-all",
          showHeader ? "opacity-1" : "opacity-0",
        )}
      >
        <Button className="rounded-full bg-neutral-900/55 hover:bg-neutral-900/35 dark:bg-neutral-50/55 dark:hover:bg-neutral-50/25" size="icon"><Bell /></Button>
        <Button className="rounded-full bg-neutral-900/55 hover:bg-neutral-900/35 dark:bg-neutral-50/55 dark:hover:bg-neutral-50/55" size="icon"><Ellipsis /></Button>
      </div>
      <div className="container mx-auto p-5">
        <div className="flex flex-col justify-center items-center gap-2 pt-12">
          <img
            src={SYAILogo}
            className="h-28 w-28 rounded-full bg-white object-contain"
          />
          <h2 className="text-xl font-bold">sgyouthai</h2>
        </div>
        <div className="flex flex-col w-full py-7 gap-6">
          {links.map((e, idx) => {
            return (
              <Link to={e.href} key={e.name + idx}>
                <Button
                  variant="secondary"
                  className="w-full px-6 py-6 text-lg h-[4.5rem] relative"
                  size="lg"
                >
                  <span>{e.name}</span>
                  <Button
                    variant="ghost"
                    size="icon"
                    className="absolute right-2"
                    onClick={(e) => {
                      e.preventDefault();
                      e.stopPropagation();
                      alert("Share Btn");
                    }}
                  >
                    <EllipsisVertical />
                  </Button>
                </Button>
              </Link>
            );
          })}
        </div>
        <div className="flex flex-wrap gap-2 items-center justify-center">
         {socials.map((e) => {
           return (
            <Button
              key={"Social" + e.name}
              className="rounded-full aspect-square w-10 h-10 bg-blue-600 px-2.5 py-1.5 text-sm font-semibold text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
            >
              <Link to={e.href}>{e.icon}</Link>
            </Button>
          );
         })}
        </div>
      </div>
    </div>
  );
}
