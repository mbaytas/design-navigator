// Motion
export const motionVars = {
  defaultTransition: { duration: 0.5 },
  childVariants: {
    initial: { opacity: 0, y: 24 },
    animate: { opacity: 1, y: 0 },
  },
  childTransition: {
    duration: 0.5,
  },
  footerTransition: { delay: 1, duration: 0.5 },
  headerVariants: {
    initial: { opacity: 0, y: -10 },
    animate: { opacity: 1, y: 0 },
  },
  parentTransition: {
    delayChildren: 0.5,
    staggerChildren: 0.3,
  },
};
