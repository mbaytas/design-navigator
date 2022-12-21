import { useState } from "react";

import Link from "next/link";

import { motion } from "framer-motion";

import { Information } from "@carbon/icons-react";

export default function Header(props) {
  return (
    <motion.header
      className="z-50 fixed inset-x-0 top-0 backdrop-blur bg-black/80 flex flex-row justify-between items-center w-full px-3 h-12 border-b-2"
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
    >
      <Link href="/" className="anchor-plain font-display text-2xl opacity-80">
        <strong>Design</strong> Navigator
      </Link>
      <div
        href="#"
        className="secret-button flex flex-row items-center gap-2 font-display text-r1 font-medium uppercase opacity-80 cursor-pointer"
        onClick={() => props.setIsAboutDialogOpen(true)}
      >
        <Information size="20"></Information>{" "}
        <span className="hidden sd:block">About</span>
      </div>
    </motion.header>
  );
}
