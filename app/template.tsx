'use client';

import { motion } from "framer-motion";
import { montserrat } from "./lib/fonts";

export default function PageTransition ({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <motion.div
      initial={{ opacity: 0}}
      animate={{ opacity: 1 }}
      transition={{ ease: 'easeInOut', duration: 0.25}}
    >
      {children}
    </motion.div>
  )
}