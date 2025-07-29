import React from "react";
import { Mail, Phone, MapPin, Linkedin, Facebook, Youtube } from "lucide-react";
import Link from "next/link";

const footerLinks = {
  services: {
    links: [
      { name: "Managed IT Services", href: "/services/managed-services" },
      {
        name: "Cloud Computing & Migration",
        href: "/services/cloud-migration",
      },
      {
        name: "Cybersecurity & Risk Management",
        href: "/services/cybersecurity",
      },
      { name: "IT Consulting & Strategy", href: "/services/consulting" },
      {
        name: "Custom Web & Software Development",
        href: "/services/development",
      },
      { name: "Learning and Training", href: "/services/training" },
    ],
  },
  company: {
    links: [
      { name: "About Us", href: "/about" },
      { name: "Careers", href: "/careers" },
      { name: "Contact Us", href: "/contact" },
      { name: "Schedule Consultation", href: "/schedule-consultation" },
    ],
  },
};

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 md:gap-8 py-16">
          {/* Company Info */}
          <div className="space-y-6 col-span-2 md:col-span-1">
            <div className="flex items-center">
              <span className=" text-xl font-bold">
                Advance Service Provider
              </span>
            </div>

            <p className="text-gray-300 leading-relaxed">
              Empowering businesses with innovative technology solutions that
              drive growth and digital transformation.
            </p>

            <div className="flex space-x-4">
              <Link
                href="#"
                target="_blank"
                className="text-gray-400 hover:text-primary transition-colors"
              >
                <Facebook className="w-5 h-5" />
              </Link>

              <Link
                href="#"
                target="_blank"
                className="text-gray-400 hover:text-primary transition-colors"
              >
                <Linkedin className="w-5 h-5" />
              </Link>
              <Link
                href="#"
                target="_blank"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <Youtube className="w-5 h-5" />
              </Link>
            </div>
          </div>

          {/* Services  Sections */}

          <div className="space-y-6 col-span-2 md:col-span-1">
            <h3 className="text-lg font-semibold">Services</h3>
            <ul className="space-y-3">
              {footerLinks.services.links.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-gray-300 hover:text-white transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          {/* Company Sections */}
          <div className="space-y-6">
            <h3 className="text-lg font-semibold">Company</h3>
            <ul className="space-y-3">
              {footerLinks.company.links.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-gray-300 hover:text-white transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-6 ">
            <h3 className="text-lg font-semibold">Contact Info</h3>
            <div className="space-y-4">
              <div className="flex  items-start gap-2">
                <Mail className="w-5 h-5 text-primary mt-0.5" />
                <div className="">
                  <p className="text-gray-300">hello@atsp.com</p>
                  <p className="text-gray-400 text-sm">General inquiries</p>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <Phone className="w-5 h-5 text-primary mt-0.5" />
                <div>
                  <p className="text-gray-300">+1 (555) 123-4567</p>
                  <p className="text-gray-400 text-sm">Mon-Fri 9AM-6PM EST</p>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-primary mt-0.5" />
                <div>
                  <p className="text-gray-300">123 Tech Street</p>
                  <p className="text-gray-300">lorem ipsum </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="border-t border-gray-800 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-gray-400 text-sm">
              © {currentYear} Advance Service Provider. All rights reserved.
            </div>

            <div className="flex space-x-6 text-sm">
              <Link
                href="#"
                className="text-gray-400 hover:text-white transition-colors"
              >
                Privacy Policy
              </Link>
              <Link
                href="#"
                className="text-gray-400 hover:text-white transition-colors"
              >
                Terms of Service
              </Link>
              <Link
                href="#"
                className="text-gray-400 hover:text-white transition-colors"
              >
                Cookie Policy
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
