import { motion } from "framer-motion";

import { motionVars } from "../utils/consts";

export default function Footer() {
  return (
    <motion.footer
      className="px-3 py-6 flex flex-row gap-3 flex-wrap justify-between items-center w-full"
      initial="initial"
      animate="animate"
      transition={motionVars.footerTransition}
      variants={motionVars.childVariants}
    >
      <p className="w-full max-w-xs leading-tight">
        <span className="text-r1 opacity-80 font-display">Created by</span>
        <br />
        <a
          href="https://www.designdisciplin.com/"
          target="_blank"
          className="anchor-plain font-bold text-r2 opacity-80"
        >
          Design Disciplin
        </a>
      </p>
      <p className="w-full max-w-xs text-xs">
        <span className="opacity-40">&copy; 2022</span>{" "}
        <a
          href="https://www.weatherlight.com/"
          target="_blank"
          className="anchor-plain opacity-40"
        >
          WEATHERLIGHT d/b/a Design Disciplin
        </a>
        <br />
        <span className="opacity-40">
          Commissions may be earned from links on this website.
        </span>
      </p>
    </motion.footer>
  );
}
