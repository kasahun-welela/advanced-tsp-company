"use client";

import Link from "next/link";
import React from "react";
import { motion } from "framer-motion";

function ServiceCard({
  link,
  icon,
  title,
  description,
}: {
  link: string;
  icon: React.ReactElement;
  title: string;
  description: string;
}) {
  return (
    <Link href={link}>
      <div className="bg-card rounded-xl shadow p-8 hover:shadow-xl transition-all duration-300 cursor-pointer">
        <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center mb-4">
          {icon}
        </div>
        <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
          {title}
        </h3>
        <p className="text-gray-600 dark:text-gray-200">{description}</p>
      </div>
    </Link>
  );
}

export default ServiceCard;
