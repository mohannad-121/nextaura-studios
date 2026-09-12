import { type Variants } from "framer-motion";

export const solarTransition = {
  duration: 0.7,
  ease: [0.16, 1, 0.3, 1] as [number, number, number, number],
};

export const snappyTransition = {
  duration: 0.35,
  ease: [0.25, 0.1, 0.25, 1] as [number, number, number, number],
};

export const cinematicTransition = {
  duration: 1.1,
  ease: [0.19, 1, 0.22, 1] as [number, number, number, number],
};

export const fadeIn: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: solarTransition,
  },
};

export const revealUp: Variants = {
  hidden: { opacity: 0, y: 28 },
  visible: {
    opacity: 1,
    y: 0,
    transition: solarTransition,
  },
};

export const revealScale: Variants = {
  hidden: { opacity: 0, scale: 0.96 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: solarTransition,
  },
};

export const staggerContainer = (staggerChildren = 0.1, delayChildren = 0): Variants => ({
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren,
      delayChildren,
    },
  },
});
