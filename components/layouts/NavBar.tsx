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
import { ChevronDown, ChevronUp, Menu, X } from "lucide-react";

const NavBar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const pathname = usePathname();

  const closeMenu = () => {
    setMenuOpen(false);
  };

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
        type: "spring" as const,
        stiffness: 100,
        damping: 20,
        duration: 0.5,
      },
    },
    closed: {
      opacity: 0,
      x: -400,
      transition: {
        type: "spring" as const,
        stiffness: 100,
        damping: 20,
        duration: 0.5,
      },
    },
  };

  return (
    <nav className="w-full  ">
      {/* Desktop Navigation */}
      <div className="hidden md:block fixed top-0 left-0 right-0 bg-white dark:bg-slate-800  z-50 tracking-wide">
        <div className="flex justify-between py-4 items-center container mx-auto px-4 sm:px-6 lg:px-8  ">
          <Link href="/" className="text-xl font-bold">
            TSP Company
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center flex-1 justify-end">
            <NavigationMenu>
              <NavigationMenuList>
                {navLinks.map((link) =>
                  !link.submenu ? (
                    <NavigationMenuItem key={link.name}>
                      <Link
                        href={link.href}
                        className={`px-4 py-2 text-sm font-medium hover:text-primary transition-colors ${
                          pathname === link.href ? "text-primary" : ""
                        }`}
                      >
                        {link.name}
                      </Link>
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
                              className={`px-4 py-2 text-sm rounded hover:bg-primary/10 hover:text-primary transition-colors ${
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
          {/* <div className="md:hidden flex items-center">
            <button onClick={() => setMenuOpen(!menuOpen)}>
              {menuOpen ? (
                <X className="text-2xl" />
              ) : (
                <Menu className="text-2xl" />
              )}
            </button>
          </div> */}
        </div>
      </div>
      {/* Mobile Navigation */}
      <div className=" bg-white dark:bg-slate-800  flex justify-between items-center px-4 md:hidden py-5 fixed top-0 left-0 right-0  z-50 transition-all duration-300">
        <Link href="/">
          <span className="text-xl font-bold">TSP Company</span>
        </Link>

        <div className="md:hidden flex items-center">
          <button onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? (
              <X className="text-2xl" onClick={closeMenu} />
            ) : (
              <Menu className="text-2xl" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            className="fixed inset-0  z-50 md:hidden"
            onClick={() => servicesOpen && closeMenu()}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1 }}
          >
            <motion.div
              className="fixed inset-y-0 left-0 w-[75%] bg-white dark:bg-slate-800  z-50 overflow-y-auto"
              variants={mobileMenuVariants}
              initial="closed"
              animate="open"
              exit="closed"
            >
              <div className="text-primary font-bold flex justify-between items-center p-4">
                <h1 className="text-xl font-bold">TSP Company</h1>
              </div>
              <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3   ">
                {navLinks.map((link) =>
                  !link.submenu ? (
                    <Link
                      key={link.name}
                      href={link.href}
                      className={`block text-foreground hover:text-primary-foreground transition-colors px-3 py-2 rounded-md text-base font-medium ${
                        pathname === link.href ? "text-primary" : ""
                      }`}
                      onClick={closeMenu}
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

                        {servicesOpen ? (
                          <ChevronUp
                            className={`w-4 h-4 ml-1 transform transition-transform duration-200 ${
                              servicesOpen ? "rotate-180" : "rotate-0"
                            }`}
                          />
                        ) : (
                          <ChevronDown
                            className={`w-4 h-4 ml-1 transform transition-transform duration-200 ${
                              servicesOpen ? "rotate-180" : "rotate-0"
                            }`}
                          />
                        )}
                      </button>
                      {servicesOpen && (
                        <div className="pl-4">
                          {link.submenu.map((sublink) => (
                            <Link
                              key={sublink.name}
                              href={sublink.href}
                              className={`block px-4 py-2 text-sm text-foreground hover:bg-primary/10 hover:text-primary transition-colors ${
                                pathname === sublink.href ? "text-primary" : ""
                              }`}
                              onClick={() => setServicesOpen(false)}
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
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default NavBar;
