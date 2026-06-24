import { motion, type HTMLMotionProps } from "framer-motion";
import { useReducedMotion } from "../hooks/useReducedMotion";

type RevealProps = HTMLMotionProps<"div"> & {
  delay?: number;
};

export default function Reveal({ children, delay = 0, ...props }: RevealProps) {
  const reducedMotion = useReducedMotion();

  return (
    <motion.div
      initial={reducedMotion ? false : { opacity: 0, y: 28 }}
      whileInView={reducedMotion ? undefined : { opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.12 }}
      transition={{
        duration: 0.7,
        ease: [0.2, 0.7, 0.2, 1],
        delay,
      }}
      {...props}
    >
      {children}
    </motion.div>
  );
}
