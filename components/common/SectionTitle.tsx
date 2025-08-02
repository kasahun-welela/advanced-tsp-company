"use client";
import { easeOut, motion } from "framer-motion";

function SectionTitle({
  title,
  description,
}: {
  title: string;
  description: string;
}) {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const childVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: easeOut,
      },
    },
  };
  return (
    <div className="text-center space-y-4 mb-16">
      <motion.h2
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        transition={{ duration: 0.4, delay: 0.5 }}
        className="text-2xl md:text-3xl lg:text-4xl mb-6 font-bold text-gray-900 dark:text-white   "
      >
        {title}
      </motion.h2>
      <motion.p
        variants={childVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="text-xl text-gray-600 dark:text-gray-200 max-w-3xl mx-auto"
      >
        {description}
      </motion.p>
    </div>
  );
}

export default SectionTitle;
