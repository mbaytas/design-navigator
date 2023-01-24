import { useState } from "react";

import Head from "next/head";
import Script from "next/script";
import Link from "next/link";

import { motion, MotionConfig } from "framer-motion";
import splitbee from "@splitbee/web";

import { Popover, Transition } from "@headlessui/react";

import {
  Checkmark,
  Copy,
  Information,
  Link as LinkIcon,
  LogoFacebook,
  LogoLinkedin,
  LogoTwitter,
  Share,
} from "@carbon/icons-react";

import AboutDialog from "./aboutDialog";

import { motionVars } from "../utils/consts";

export default function Layout({ children }) {
  let [isAboutDialogOpen, setIsAboutDialogOpen] = useState(false);

  splitbee.init({
    token: "VERHYXAM3LQL",
  });

  return (
    <>
      <Head>
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/favicons/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicons/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicons/favicon-16x16.png"
        />
        <link
          rel="manifest"
          href="/favicons/site.webmanifest"
        />
        <link
          rel="mask-icon"
          href="/favicons/safari-pinned-tab.svg"
          color="#000000"
        />
        <meta
          name="msapplication-TileColor"
          content="#000000"
        />
        <meta
          name="theme-color"
          content="#00000"
        />

        <script
          defer
          data-domain="navigator.designdisciplin.com"
          src="https://plausible.io/js/script.js"
        ></script>
      </Head>

      <div className="text-white min-h-screen w-screen max-w-[100vw] overflow-x-clip flex flex-col justify-between gap-12">
        <motion.header
          className="z-30 fixed inset-x-0 top-0 backdrop-blur bg-black/80 flex flex-row justify-between items-center w-full px-3 h-12 border-b-2"
          variants={motionVars.headerVariants}
          initial="initial"
          animate="animate"
          transition={motionVars.defaultTransition}
        >
          <Link
            href="/"
            className="anchor-plain font-display text-2xl opacity-80"
          >
            <strong>Design</strong> Navigator
          </Link>
          <Popover>
            <Popover.Button className="secret-button flex flex-row items-center gap-2 font-display text-r1 font-medium uppercase opacity-80 cursor-pointer">
              <Share size="20" /> <span className="hidden sd:block">Share</span>
            </Popover.Button>
            <Transition
              enter="transition duration-300 ease-out transform"
              enterFrom="translate-x-24 opacity-0"
              enterTo="translate-x-0 opacity-90"
              leave="transition duration-300 ease-out transform"
              leaveFrom="translate-x-0 opacity-90"
              leaveTo="translate-x-24 opacity-0"
            >
              <Popover.Panel className="absolute top-3 p-3 right-0 rounded-xl bg-gradient-to-b from-white/10 via-white/7 to-white/7">
                <div className="flex gap-1 items-center">
                  <a
                    href="http://twitter.com/share?url=Check%20out%20Design%20Navigator%20by%20@designdisciplin%20–%20a%20great%20tool%20and%20resource%20for%20designers!%0Ahttps://navigator.designdisciplin.com"
                    target="_blank"
                    className="secret-button"
                  >
                    <LogoTwitter size="24" />
                  </a>
                  <a
                    href="https://www.linkedin.com/sharing/share-offsite/?url=https://navigator.designdisciplin.com"
                    target="_blank"
                    className="secret-button"
                  >
                    <LogoLinkedin size="24" />
                  </a>
                  <a
                    href="https://www.facebook.com/sharer/sharer.php?u=https://navigator.designdisciplin.com"
                    target="_blank"
                    className="secret-button"
                  >
                    <LogoFacebook size="24" />
                  </a>
                  <button
                    className="relative secret-button group w-12 h-10"
                    onClick={() => {
                      navigator.clipboard.writeText(
                        "http://navigator.designdisciplin.com"
                      );
                    }}
                  >
                    <LinkIcon
                      className="absolute top-1/2 -translate-y-1/2 group-hover:opacity-0 group-active:opacity-0 transition-opacity group-active:transition-none"
                      size="24"
                    />
                    <Copy
                      className="absolute top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 group-active:opacity-0 transition-opacity group-active:transition-none"
                      size="24"
                    />
                    <Checkmark
                      className="absolute top-1/2 -translate-y-1/2 opacity-0 group-active:opacity-100 transition-opacity group-active:transition-none"
                      size="24"
                    />
                  </button>
                </div>
              </Popover.Panel>
            </Transition>
          </Popover>
        </motion.header>

        <div className="ghost h-12"></div>

        <main className="px-3 relative">{children}</main>

        <motion.footer
          className="px-3 py-6 flex flex-row gap-3 flex-wrap justify-between items-end w-full"
          initial="initial"
          animate="animate"
          transition={motionVars.footerTransition}
          variants={motionVars.childVariants}
        >
          <p className="w-max max-w-xs leading-tight">
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
          <button
            className="secret-button flex flex-row items-center gap-2 font-display text-r1 font-medium uppercase opacity-80 cursor-pointer"
            onClick={() => setIsAboutDialogOpen(true)}
          >
            <Information size="32"></Information>{" "}
            <span className="hidden">About</span>
          </button>
          {/* <p className="w-full max-w-xs text-xs">
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
          </p> */}
        </motion.footer>
      </div>

      <AboutDialog
        isAboutDialogOpen={isAboutDialogOpen}
        setIsAboutDialogOpen={setIsAboutDialogOpen}
      />

      <Script
        data-domain="designdisciplin.com"
        src="https://plausible.io/js/plausible.js"
      ></Script>
    </>
  );
}
