import Image from "next/image";

import { motion, useScroll, useTransform } from "framer-motion";

import CareerCharacter from "../components/careerCharacter";
import CareerHeader from "../components/careerHeader";
import CareerSelector from "../components/careerSelector";
import SectionHeading from "../components/sectionHeading";

import upsell from "../public/upsell.png";

import { motionVars } from "../utils/consts";

export default function CareerPage(props) {
  const { scrollY } = useScroll();
  let yVal = useTransform(scrollY, [0, 1], [0, -0.38], { clamp: false });
  let oVal = useTransform(scrollY, [0, 800], [1, 0], { clamp: true });

  return (
    <>
      <motion.div
        className="career-container"
        initial="initial"
        animate="animate"
        transition={motionVars.parentTransition}
      >
        {/* BG */}
        <motion.div
          className="bg-div z-0 fixed top-0 left-1/2 w-full max-w-7xl aspect-video"
          style={{ x: "-50%", y: yVal, opacity: oVal }}
          initial={{ opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={motionVars.childTransition}
        >
          <Image
            placeholder="blur"
            alt={props.bg_alt}
            src={props.bg_src}
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 w-full h-full bg-gradient-to-b from-black/0 to-black shadow-inner"></div>
          <div className="absolute inset-0 w-full h-full bg-gradient-to-t from-black/0 via-black/0 to-black shadow-inner"></div>
          <div className="absolute inset-0 w-full h-full bg-gradient-to-l from-black/0 via-black/0 to-black shadow-inner"></div>
          <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-black/0 via-black/0 to-black shadow-inner"></div>
        </motion.div>
        {/* HEADER */}
        <CareerHeader
          title={props.title}
          Icon={props.icon}
          p1={props.header_p1}
          p2={props.header_p2}
        ></CareerHeader>

        {/* CHARACTER */}
        <CareerCharacter
          p1={props.char_p1}
          p2={props.char_p2}
          progressive={props.char_progressive}
          social={props.char_social}
          strategic={props.char_strategic}
        />

        {/* RESOURCES */}
        <motion.section
          className="section-resources"
          variants={motionVars.childVariants}
          transition={motionVars.childTransition}
        >
          <SectionHeading title="Suggested Resources" />
          <div className="flex flex-col gap-3 w-full">{props.children[0]}</div>
        </motion.section>

        {/* UPSELL */}
        <motion.section
          className="section-upsell"
          variants={motionVars.childVariants}
          transition={motionVars.childTransition}
        >
          <div className="p-6 grid grid-cols-1 sd:grid-cols-2 gap-3 rounded-none mx-auto w-full">
            <a href="https://designdisciplin.gumroad.com/l/navigator-library" target="_blank" className="anchor-plain opacity-90">
            <Image
              placeholder="blur"
              alt={props.bg_alt}
              src={upsell}
              className="h-full w-full object-cover"
            />
            </a>
            <div className="flex flex-col gap-3 justify-center">
              <h1 className="font-display text-r3 font-bold">
                Get the Full Library
              </h1>
              <p className="text-r1 opacity-50">
                The Design Navigator Library contains 100+ resources that help
                designers excel in their chosen path.
              </p>
              <a
                className="highlight-button mt-3 w-max mx-auto sd:mx-0"
                target="_blank"
                href="https://designdisciplin.gumroad.com/l/navigator-library"
              >
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 520 520"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M276.649 316.413L216.762 300.366L234.72 472.893L276.649 316.413Z"
                    fill="white"
                    stroke="white"
                    stroke-width="10"
                    stroke-linejoin="bevel"
                  />
                  <path
                    d="M242.644 203.774L302.531 219.82L284.573 47.2937L242.644 203.774Z"
                    fill="white"
                    stroke="white"
                    stroke-width="10"
                    stroke-linejoin="bevel"
                  />
                  <path
                    d="M315.965 243.091L299.918 302.978L472.445 285.019L315.965 243.091Z"
                    fill="white"
                    stroke="white"
                    stroke-width="10"
                    stroke-linejoin="bevel"
                  />
                  <path
                    d="M203.326 277.096L219.373 217.209L46.8458 235.167L203.326 277.096Z"
                    fill="white"
                    stroke="white"
                    stroke-width="10"
                    stroke-linejoin="bevel"
                  />
                </svg>
                <span>Discover More Resources</span>
              </a>
            </div>
          </div>
        </motion.section>

        {/* TOOLS */}
        <motion.section
          className="section-tools"
          variants={motionVars.childVariants}
          transition={motionVars.childTransition}
        >
          <SectionHeading title="Tools to Learn" />
          <div className="flex flex-row flex-wrap justify-center gap-3">
            {props.children[1]}
          </div>
        </motion.section>
        {/* PEOPLE */}
        <motion.section
          className="section-people"
          variants={motionVars.childVariants}
          transition={motionVars.childTransition}
        >
          <SectionHeading title="People to Follow" />
          <div className="flex flex-row flex-wrap justify-center gap-3 w-full">
            {props.children[2]}
          </div>
        </motion.section>

        <a
          className="highlight-button"
          target="_blank"
          href="https://designdisciplin.gumroad.com/l/navigator-library"
        >
          {/* <DataVis_1 size={24}></DataVis_1> */}
          <svg
            width="24"
            height="24"
            viewBox="0 0 520 520"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M276.649 316.413L216.762 300.366L234.72 472.893L276.649 316.413Z"
              fill="white"
              stroke="white"
              stroke-width="10"
              stroke-linejoin="bevel"
            />
            <path
              d="M242.644 203.774L302.531 219.82L284.573 47.2937L242.644 203.774Z"
              fill="white"
              stroke="white"
              stroke-width="10"
              stroke-linejoin="bevel"
            />
            <path
              d="M315.965 243.091L299.918 302.978L472.445 285.019L315.965 243.091Z"
              fill="white"
              stroke="white"
              stroke-width="10"
              stroke-linejoin="bevel"
            />
            <path
              d="M203.326 277.096L219.373 217.209L46.8458 235.167L203.326 277.096Z"
              fill="white"
              stroke="white"
              stroke-width="10"
              stroke-linejoin="bevel"
            />
          </svg>
          <span>Discover More</span>
        </a>

        <CareerSelector
          repeatButton
          message="...or check out:"
        ></CareerSelector>
      </motion.div>
    </>
  );
}
