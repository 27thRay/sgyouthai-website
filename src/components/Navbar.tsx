import {
  Sheet,
  SheetTrigger,
  SheetContent,
  SheetClose,
} from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { NavHashLink } from "react-router-hash-link";
import Logo from "@/assets/logo.png";
import { scrollWithOffset } from "@/lib/utils";

export default function Navbar() {
  const link = [
    { href: "#", name: "Home" },
    { href: "#About", name: "About" },
    { href: "#Initiatives", name: "Initiatives" },
    { href: "#Team", name: "Team" },
    { href: "#Partner", name: "Partner Organisation" },
    { href: "#Events", name: "Past Events" },
    { href: "#Contact", name: "Contact" },
  ];

  return (
    <div className="flex items-center justify-between px-3 md:px-8 py-4 bg-white dark:bg-gray-800 fixed w-full max-w-[100vw] top-0 left-0 right-0 z-10 h-[80px] shadow-md">
      <Link to="/" className="flex items-center gap-2 w-max">
        <img src={Logo} className="h-[3.25rem] w-[3.25rem]" />
        <span className="text-base font-semibold">Singapore Youth AI</span>
      </Link>
      <div className="hidden md:flex gap-8 items-center">
        {link.map((e, i) => {
          return (
            <NavHashLink
              key={"URL" + i + e.name}
              to={e.href}
              smooth
              className="text-base hover:underline underline-offset-4"
              scroll={(el) => scrollWithOffset(el)}
            >
              {e.name}
            </NavHashLink>
          );
        })}
      </div>
      <Sheet>
        <SheetTrigger asChild>
          <Button variant="outline" size="icon" className="md:hidden border-0 ">
            <MenuIcon className="h-12 w-12" />
            <span className="sr-only">Toggle navigation menu</span>
          </Button>
        </SheetTrigger>
        <SheetContent side="left">
          <div className="grid gap-4 w-[200px] px-2 py-4">
            {link.map((e, i) => {
              return (
                <SheetClose asChild>
                  <NavHashLink
                    key={"Link" + i + e.name}
                    to={e.href}
                    className="text-lg hover:underline underline-offset-4"
                    scroll={(el) => scrollWithOffset(el)}
                    smooth
                  >
                    {e.name}
                  </NavHashLink>
                </SheetClose>
              );
            })}
          </div>
        </SheetContent>
      </Sheet>
    </div>
  );
}

interface IconProps extends React.SVGProps<SVGSVGElement> {}

function MenuIcon(props: IconProps) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      style={{ width: "1.5rem", height: "1.5rem" }}
    >
      <line x1="4" x2="20" y1="12" y2="12" />
      <line x1="4" x2="20" y1="6" y2="6" />
      <line x1="4" x2="20" y1="18" y2="18" />
    </svg>
  );
}
