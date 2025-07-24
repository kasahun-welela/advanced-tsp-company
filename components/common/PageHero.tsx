import Link from "next/link";
import { PhoneIcon } from "lucide-react";
import React from "react";
import { Button } from "../ui/button";

function PageHero({
  title,
  description,
}: {
  title: string;
  description: string;
}) {
  return (
    <section className="relative md:mt-16 w-full h-96 flex items-center justify-center overflow-hidden">
      {/* Background image layer */}
      <div className="absolute inset-0 bg-[url('/images/about.jpg')] bg-cover bg-center bg-no-repeat"></div>
      {/* Overlay layer */}
      <div className="absolute inset-0 bg-black/40"></div>
      {/* Content layer */}
      <div className="relative text-center px-4 sm:px-6 lg:px-8 z-10">
        <h1 className="text-4xl font-extrabold text-white mt-16 md:mt-4 uppercase">
          {title}
        </h1>
        <p className="text-lg md:text-xl text-white mt-4 max-w-2xl mx-auto">
          {description}
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-8 animate-fade-in-up animate-delay-300">
          <Link
            href="/contact"
            className="bg-primary text-white px-4 py-2 rounded-md hover:bg-primary/80"
          >
            Schedule a Consultation
          </Link>
          <Link href="tel:100-2222-2222">
            <Button className="bg-white text-black hover:text-white px-4 py-2 rounded-md">
              <PhoneIcon className="w-4 h-4" />
              100-2222-2222
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}

export default PageHero;
