"use client";

import { useState, useEffect } from "react";
import type { NextPage } from "next";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import { Menu } from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "./sheet";
import { Button } from "./button";

export type FrameComponent1Type = {
  className?: string;
};

const links = [
  {
    href: "/",
    text: "Home",
  },
  {
    href: "/beats",
    text: "Beats",
  },
  // {
  //   href: "/about",
  //   text: "About",
  // },
  // {
  //   href: "/contact",
  //   text: "Contact",
  // },
];

const Navbar: NextPage<FrameComponent1Type> = ({ className = "" }) => {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const NavLinks = ({ mobile = false }) => (
    <div
      className={`flex ${
        mobile ? "flex-col items-start" : "flex-row items-center justify-center"
      } gap-5 ${
        !mobile &&
        "rounded-3xl  p-1 px-3 bg-gray-100 backdrop-blur-lg bg-opacity-60 shadow-lg"
      }`}
    >
      {links.map((link) => (
        <Link
          href={link.href}
          key={link.href}
          className={`rounded-2xl flex flex-row items-center justify-center pt-[7.6px] px-[15px] pb-[7.7px] no-underline text-black ${
            pathname === link.href ? "bg-white" : ""
          } ${mobile ? "text-lg py-2" : ""}`}
          onClick={() => setIsOpen(false)}
        >
          {link.text}
        </Link>
      ))}
    </div>
  );

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.2 }}
      className={`fixed top-0 left-0 w-full z-50 ${className}`}
    >
      <header
        className={`self-stretch flex flex-row items-center justify-between gap-5 max-w-full z-[1] text-left font-inter px-4 lg:px-[100px] py-[16px] transition-all duration-300 ${
          isScrolled
            ? "backdrop-blur-lg bg-[rgba(153,152,152,0.3)] shadow-lg"
            : "bg-transparent"
        }`}
      >
        <Link
          href="/"
          className="flex flex-row items-center justify-center gap-[4.8px]"
        >
          <Image
            className="h-[45.6px] w-[37.8px] relative object-cover"
            loading="lazy"
            alt="Beats Alchemy Logo"
            src="/beats-alchemy-logo-2@2x.png"
            width={38}
            height={46}
          />
          <Image
            className="h-[23.4px] w-[186.7px] relative object-cover"
            loading="lazy"
            alt="Beats Alchemy Text"
            src="/beats-alchemy-logo-1@2x.png"
            width={187}
            height={23}
          />
        </Link>
        <div className="hidden lg:block">
          <NavLinks />
        </div>
        <div className="lg:hidden">
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button variant="secondary" size="icon">
                <Menu className="h-6 w-6 text-white" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>

            <SheetContent
              className="rounded-3xl p-4 backdrop-blur-lg bg-gray-100 "
              side="right"
            >
              <SheetHeader className="p-4">
                <SheetTitle className="flex justify-center items-center gap-2">
                  <Image
                    className="h-[45.6px] w-[37.8px] relative object-cover"
                    loading="lazy"
                    alt="Beats Alchemy Logo"
                    src="/beats-alchemy-logo-2@2x.png"
                    width={38}
                    height={46}
                  />
                  <Image
                    className="h-[23.4px] w-[186.7px] relative object-cover"
                    loading="lazy"
                    alt="Beats Alchemy Text"
                    src="/beats-alchemy-logo-1@2x.png"
                    width={187}
                    height={23}
                  />
                </SheetTitle>
              </SheetHeader>
              <div className="mt-6">
                <NavLinks mobile />
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </header>
    </motion.section>
  );
};

export default Navbar;
