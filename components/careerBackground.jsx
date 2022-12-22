import Image from "next/image";

import { motion, useScroll, useTransform } from "framer-motion";

import { motionVars } from "../utils/consts";

export default function CareerBackground(props) {
  const { scrollY } = useScroll();
  let yVal = useTransform(scrollY, [0, 1], [0, -0.38], { clamp: false });

  return (
    <motion.div
      className="bg-div z-0 fixed top-0 left-1/2 w-full max-w-7xl aspect-[24/10]"
      style={{ x: "-50%", y: yVal }}
      initial={{ opacity: 0, y: -8 }}
      animate={{ opacity: 1, y: 0 }}
      transition={motionVars.childTransition}
    >
      <Image
        placeholder="blur"
        alt={props.alt}
        src={props.src}
        className="h-full w-full object-cover"
      />
      <div className="absolute inset-0 w-full h-full bg-gradient-to-b from-black/0 to-black shadow-inner"></div>
      <div className="absolute inset-0 w-full h-full bg-gradient-to-t from-black/0 via-black/0 to-black shadow-inner"></div>
      <div className="absolute inset-0 w-full h-full bg-gradient-to-l from-black/0 via-black/0 to-black shadow-inner"></div>
      <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-black/0 via-black/0 to-black shadow-inner"></div>
    </motion.div>
  );
}
