"use client";
import { easeOut, motion } from "framer-motion";

function SectionTitle({
  title,
  description,
}: {
  title: string;
  description: string;
}) {
  return (
    <div className="text-center space-y-4 mb-16">
      <motion.h2
        initial={{ opacity: 0, translateY: 20 }}
        whileInView={{ opacity: 1, translateY: 0 }}
        transition={{ duration: 0.4, delay: 0.3, ease: easeOut }}
        className="text-2xl md:text-3xl lg:text-4xl mb-6 font-bold text-gray-900 dark:text-white   "
      >
        {title}
      </motion.h2>
      <motion.p
        initial={{ opacity: 0, translateY: 20 }}
        whileInView={{ opacity: 1, translateY: 0 }}
        transition={{ duration: 0.4, delay: 0.7, ease: easeOut }}
        className="text-xl text-gray-600 dark:text-gray-200 max-w-3xl mx-auto"
      >
        {description}
      </motion.p>
    </div>
  );
}

export default SectionTitle;
