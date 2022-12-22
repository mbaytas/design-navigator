// Motion
export const motionVars = {
  childVariants: {
    initial: { opacity: 0, y: 8 },
    animate: { opacity: 1, y: 0 },
  },
  childTransition: {
    duration: 0.6,
  },
  parentTransition: {
    staggerChildren: 0.2,
    duration: 0.1,
  },
};
