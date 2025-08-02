"use client";

import Link from "next/link";
import { motion, easeOut, easeInOut } from "framer-motion";

function PageHero({
  title,
  description,
  linkText,
  linkHref,
}: {
  title: string;
  description: string;
  linkText?: string;
  linkHref?: string;
}) {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.8,
        staggerChildren: 0.3,
      },
    },
  };

  const titleVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: easeOut,
      },
    },
  };

  const descriptionVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        delay: 0.2,
        ease: easeOut,
      },
    },
  };

  const buttonVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.5,
        delay: 0.4,
        ease: easeOut,
      },
    },
    hover: {
      scale: 1.05,
      transition: {
        duration: 0.2,
        ease: easeInOut,
      },
    },
    tap: {
      scale: 0.95,
      transition: {
        duration: 0.1,
      },
    },
  };

  const backgroundVariants = {
    hidden: { scale: 1.1, opacity: 0.8 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        duration: 1.2,
        ease: easeOut,
      },
    },
  };

  return (
    <section className="relative md:mt-16 w-full h-auto flex items-center justify-center overflow-hidden">
      {/* Background image layer with animation */}
      <motion.div
        className="absolute inset-0 bg-[url('/images/about.jpg')] bg-cover bg-center bg-no-repeat"
        variants={backgroundVariants}
        initial="hidden"
        animate="visible"
      ></motion.div>

      {/* Overlay layer */}
      <motion.div
        className="absolute inset-0 bg-black/50"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.3 }}
      ></motion.div>

      {/* Content layer */}
      <motion.div
        className="relative text-center  py-16 px-4 sm:px-6 lg:px-8 z-10"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.h1
          className="text-4xl md:text-5xl font-extrabold text-white mt-16 md:mt-4 capitalize"
          variants={titleVariants}
        >
          {title}
        </motion.h1>

        <motion.p
          className="text-lg md:text-xl text-white mt-4 max-w-2xl mx-auto"
          variants={descriptionVariants}
        >
          {description}
        </motion.p>

        {linkHref && linkText && (
          <motion.div
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-8"
            variants={buttonVariants}
            whileHover="hover"
            whileTap="tap"
          >
            <Link
              href={linkHref}
              className="bg-primary text-white px-6 py-3 rounded-md hover:bg-primary/80 transition-colors duration-200 font-medium"
            >
              {linkText}
            </Link>
          </motion.div>
        )}
      </motion.div>
    </section>
  );
}

export default PageHero;
