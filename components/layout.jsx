import { useState } from "react";

import Head from "next/head";
import Script from "next/script";
import Link from "next/link";

import { motion, MotionConfig } from "framer-motion";

import { Information } from "@carbon/icons-react";

import AboutDialog from "./aboutDialog";

import { motionVars } from "../utils/consts";

export default function Layout({ children }) {
  let [isAboutDialogOpen, setIsAboutDialogOpen] = useState(false);

  return (
    <>
      <Head>
        <title>Design Navigator</title>
        <meta
          name="description"
          content="A tool that helps you choose your path to become a great designer, and a library of 100+ books, podcasts, courses, and other resources to help you navigate."
        />
        <link
          rel="icon"
          href="/favicon.ico"
        />
      </Head>

      <div className="text-white min-h-screen w-screen max-w-[100vw] overflow-x-clip flex flex-col justify-between gap-12">
        <motion.header
          className="z-50 fixed inset-x-0 top-0 backdrop-blur bg-black/80 flex flex-row justify-between items-center w-full px-3 h-12 border-b-2"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Link
            href="/"
            className="anchor-plain font-display text-2xl opacity-80"
          >
            <strong>Design</strong> Navigator
          </Link>
          <div
            href="#"
            className="secret-button flex flex-row items-center gap-2 font-display text-r1 font-medium uppercase opacity-80 cursor-pointer"
            // onClick={setIsAboutDialogOpen(true)}
          >
            <Information size="20"></Information>{" "}
            <span className="hidden sd:block">About</span>
          </div>
        </motion.header>

        <AboutDialog
          isAboutDialogOpen={isAboutDialogOpen}
          setIsAboutDialogOpen={setIsAboutDialogOpen}
        />
        <div className="ghost h-12"></div>

        <main className="px-3 relative">{children}</main>

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
      </div>

      <Script
        data-domain="designdisciplin.com"
        src="https://plausible.io/js/plausible.js"
      ></Script>
    </>
  );
}
