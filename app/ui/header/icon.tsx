import { motion } from "framer-motion";
import "../../globals.css";

const icon = {
  hidden: {
    opacity: 0,
    pathLength: 0,
    fill: "rgba(255, 255, 255, 0)"
  },
  visible: {
    opacity: 1,
    pathLength: 1,
    fill: "rgba(255, 255, 255, 1)"
  }
};

export default function HeaderAnimatedIcon () {
  return (
    <div className="mr-auto h-12">
    <motion.svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 100 100"
      className="item h-12 w-12"
    >
      <motion.path
        d="M0 100V0l50 50 50-50v100L75 75l-25 25-25-25z"
        variants={icon}
        initial="hidden"
        animate="visible"
        transition={{
          default: { duration: 2, ease: "easeInOut" },
          fill: { duration: 2, ease: [1, 0, 0.8, 1] }
        }}
      />
    </motion.svg>
  </div>
  )
      };
