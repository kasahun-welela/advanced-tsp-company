"use client";
import React, { useState } from "react";
import {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuTrigger,
  NavigationMenuContent,
  NavigationMenuLink,
} from "@/components/ui/navigation-menu";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";

const NavBar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const pathname = usePathname();

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    {
      name: "Services",
      href: "/services",
      submenu: [
        { name: "Managed IT Services", href: "#" },
        { name: "Cloud Computing & Migration", href: "#" },
        { name: "Cybersecurity & Risk Management", href: "#" },
        { name: "IT Consulting & Strategy", href: "#" },
        { name: "Custom Web & Software Development", href: "#" },
        { name: "Learning and Training", href: "#" },
      ],
    },
    { name: "Contact Us", href: "/contact" },
    { name: "Get IT support", href: "/get-it-support" },
  ];

  const mobileMenuVariants = {
    open: {
      opacity: 1,
      x: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 20,
        duration: 0.5,
      },
    },
    closed: {
      opacity: 0,
      x: -400,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 20,
        duration: 0.5,
      },
    },
  };

  return (
    <nav className="w-full z-50 relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between py-4 items-center ">
          <div className="flex-shrink-0 text-xl font-bold">TSP Company</div>
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center flex-1 justify-end">
            <NavigationMenu>
              <NavigationMenuList>
                {navLinks.map((link) =>
                  !link.submenu ? (
                    <NavigationMenuItem key={link.name}>
                      <NavigationMenuLink
                        href={link.href}
                        className={`px-4 py-2 text-sm font-medium hover:text-primary transition-colors ${
                          pathname === link.href ? "text-primary" : ""
                        }`}
                      >
                        {link.name}
                      </NavigationMenuLink>
                    </NavigationMenuItem>
                  ) : (
                    <NavigationMenuItem key={link.name}>
                      <NavigationMenuTrigger
                        className={`px-4 py-2 text-sm font-medium hover:text-primary transition-colors ${
                          pathname === link.href ? "text-primary" : ""
                        }`}
                      >
                        {link.name}
                      </NavigationMenuTrigger>
                      <NavigationMenuContent className="md:w-[200px] lg:w-[300px]">
                        <div className="flex flex-col p-2">
                          {link.submenu.map((sublink) => (
                            <NavigationMenuLink
                              key={sublink.name}
                              href={sublink.href}
                              className={`px-4 py-2 text-sm rounded hover:bg-accent hover:text-accent-foreground transition-colors ${
                                pathname === sublink.href ? "text-primary" : ""
                              }`}
                            >
                              {sublink.name}
                            </NavigationMenuLink>
                          ))}
                        </div>
                      </NavigationMenuContent>
                    </NavigationMenuItem>
                  )
                )}
              </NavigationMenuList>
            </NavigationMenu>
          </div>
          {/* Mobile Navigation */}
          <div className="md:hidden flex items-center">
            {menuOpen ? (
              <X className="text-2xl" onClick={() => setMenuOpen(false)} />
            ) : (
              <Menu className="text-2xl" onClick={() => setMenuOpen(true)} />
            )}
          </div>
        </div>
      </div>
      {/* Mobile menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            className="md:hidden fixed top-0 left-0 w-3/4 max-w-xs h-full bg-background shadow-lg z-50"
            id="mobile-menu"
            variants={mobileMenuVariants}
            initial="closed"
            animate="open"
            exit="closed"
          >
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 border-t border-border mt-16">
              {navLinks.map((link) =>
                !link.submenu ? (
                  <Link
                    key={link.name}
                    href={link.href}
                    className={`block text-foreground hover:text-primary-foreground transition-colors px-3 py-2 rounded-md text-base font-medium ${
                      pathname === link.href ? "text-primary" : ""
                    }`}
                    onClick={() => setMenuOpen(false)}
                  >
                    {link.name}
                  </Link>
                ) : (
                  <div key={link.name} className="block">
                    <button
                      onClick={() => setServicesOpen((open) => !open)}
                      className="w-full flex items-center justify-between text-foreground hover:text-primary-foreground transition-colors px-3 py-2 rounded-md text-base font-medium"
                    >
                      {link.name}
                      <svg
                        className={`w-4 h-4 ml-1 transform transition-transform duration-200 ${
                          servicesOpen ? "rotate-180" : "rotate-0"
                        }`}
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M19 9l-7 7-7-7"
                        />
                      </svg>
                    </button>
                    {servicesOpen && (
                      <div className="pl-4">
                        {link.submenu.map((sublink) => (
                          <Link
                            key={sublink.name}
                            href={sublink.href}
                            className={`block px-4 py-2 text-sm text-foreground hover:bg-muted hover:text-primary-foreground transition-colors ${
                              pathname === sublink.href ? "text-primary" : ""
                            }`}
                            onClick={() => setMenuOpen(false)}
                          >
                            {sublink.name}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                )
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default NavBar;
