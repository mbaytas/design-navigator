import { useRouter } from "next/router";

import { motion } from "framer-motion";

import {
  LogoTwitter,
  LogoFacebook,
  LogoLinkedin,
  Link as LinkIcon,
  Copy,
  Checkmark,
} from "@carbon/icons-react";

import { motionVars } from "../utils/consts";

export default function CareerHeader(props) {
  const router = useRouter();

  return (
    <>
      <motion.header
        className="z-10 w-full max-w-lg flex flex-col justify-center gap-3 min-h-[38vh] px-6"
        variants={motionVars.childVariants}
        transition={motionVars.childTransition}
      >
        <div className="flex gap-6 justify-between items-center mb-3">
          <div className="">
            <p className="text-r1 font-display font-medium opacity-50 mb-3">
              You would do well as...
            </p>
            <h1 className="font-display text-r4 font-bold mb-3">
              {props.title}
            </h1>
          </div>
          <div className="bg-black/30 backdrop-blur p-5 rounded-full border-2 flex justify-center items-center">
            <props.Icon
              size={32}
              className="opacity-80"
            />
          </div>
        </div>
        <p className="opacity-80 text-r2">{props.p1}</p>
        <p className="opacity-60 text-r1">{props.p2}</p>

        {/* SHARE */}
        <div className="flex flex-col justify-center gap-1 mt-9">
          <p className="text-r1 opacity-50 font-display font-medium text-center">
            Would you friends agree? Share and find out!
          </p>
          <div className="flex items-center justify-center gap-1 px-3 mx-auto">
            <a
              href={`http://twitter.com/share?url=According%20to%20@designdisciplin's%20Design%20Navigator,%20I%20would%20do%20well%20as%20a%20${props.title}.%0A%0AWould%20you%20agree?%0A%0A${router.pathname}`}
              target="_blank"
              className="secret-button opacity-50"
            >
              <LogoTwitter size="32" />
            </a>
            <a
              href={`https://www.linkedin.com/sharing/share-offsite/?url=${router.pathname}`}
              target="_blank"
              className="secret-button opacity-50"
            >
              <LogoLinkedin size="32" />
            </a>
            <a
              href={`https://www.facebook.com/sharer/sharer.php?u=${router.pathname}`}
              target="_blank"
              className="secret-button opacity-50"
            >
              <LogoFacebook size="32" />
            </a>
            <button
              className="relative secret-button group w-14 h-12 opacity-50"
              onClick={() => {
                navigator.clipboard.writeText(router.pathname);
              }}
            >
              <LinkIcon
                className="absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 group-hover:opacity-0 group-active:opacity-0 transition-opacity group-active:transition-none"
                size="32"
              />
              <Copy
                className="absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 group-active:opacity-0 transition-opacity group-active:transition-none"
                size="32"
              />
              <Checkmark
                className="absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 opacity-0 group-active:opacity-100 transition-opacity group-active:transition-none"
                size="32"
              />
            </button>
          </div>
        </div>
      </motion.header>
    </>
  );
}
