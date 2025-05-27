"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils"; // You can replace this if you're not using `cn` helper

type MotionDivProps = {
  children: React.ReactNode;
  className?: string;
};

export const MotionDiv = ({ children, className }: MotionDivProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className={cn(className)}
    >
      {children}
    </motion.div>
  );
};
