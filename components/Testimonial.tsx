"use client";

import SectionTitle from "./common/SectionTitle";
import { Star } from "lucide-react";
import React from "react";
import Image from "next/image";
import { motion, easeInOut, easeOut } from "framer-motion";

function Testimonial() {
  const testimonials = [
    {
      id: "1",
      name: "Daniel Tesfaye",
      service: "Digital Transformation",
      rating: 5,
      comment:
        "Advanced Technology Solutions transformed our legacy infrastructure into a modern, scalable digital environment. Their strategic guidance and flawless execution helped us stay ahead of the competition.",
      image: "/images/testimonial.jpeg",
    },
    {
      id: "2",
      name: "Lily Worku",
      service: "Managed IT Services",
      rating: 5,
      comment:
        "Their managed IT services have drastically improved our system uptime and performance. The support team is proactive, responsive, and truly understands our needs.",
      image: "/images/testimonial.jpeg",
    },
    {
      id: "3",
      name: "Samuel Kebede",
      service: "Cloud Solutions (AWS & Azure)",
      rating: 5,
      comment:
        "We migrated to the cloud with zero downtime, thanks to their expert planning and support. Security, scalability, and performance have all improved since partnering with them.",
      image: "/images/testimonial.jpeg",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  };

  const cardVariants = {
    hidden: {
      opacity: 0,
      y: 30,
      scale: 0.95,
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: easeOut,
      },
    },
    hover: {
      y: -8,
      scale: 1.02,
      transition: {
        duration: 0.3,
        ease: easeInOut,
      },
    },
  };

  const starVariants = {
    hidden: { opacity: 0, scale: 0 },
    visible: (i: number) => ({
      opacity: 1,
      scale: 1,
      transition: {
        delay: i * 0.1,
        duration: 0.3,
        ease: easeOut,
      },
    }),
  };

  return (
    <div className="py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <SectionTitle
            title="What Our Customers Say"
            description="Don't just take our word for it. Here's what our satisfied customers have to say about our services."
          />
        </motion.div>

        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          {testimonials.map((testimonial) => (
            <motion.div
              key={testimonial.id}
              variants={cardVariants}
              whileHover="hover"
              className="bg-card rounded-xl shadow-lg p-6 hover:shadow-xl transition-all duration-300 cursor-pointer"
            >
              <motion.div
                className="flex items-center mb-4"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <Image
                  src={testimonial.image}
                  alt={testimonial.name}
                  width={48}
                  height={48}
                  className="w-12 h-12 rounded-full object-cover mr-4"
                />

                <div>
                  <h3 className="font-semibold text-gray-900 dark:text-gray-200">
                    {testimonial.name}
                  </h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    {testimonial.service}
                  </p>
                </div>
              </motion.div>

              <motion.div
                className="flex mb-4"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.4 }}
              >
                {[...Array(testimonial.rating)].map((_, i) => (
                  <motion.div
                    key={i}
                    custom={i}
                    variants={starVariants}
                    initial="hidden"
                    whileInView="visible"
                    whileHover={{
                      scale: 1.2,
                      rotate: 10,
                      transition: { duration: 0.2 },
                    }}
                  >
                    <Star className="h-5 w-5 text-yellow-400 fill-current" />
                  </motion.div>
                ))}
              </motion.div>

              <motion.p
                className="text-gray-700 dark:text-gray-300 italic"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.6 }}
              >
                {`"${testimonial.comment}"`}
              </motion.p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}

export default Testimonial;
