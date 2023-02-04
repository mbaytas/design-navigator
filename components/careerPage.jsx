import Image from "next/image";

import { motion, useScroll, useTransform } from "framer-motion";

import CareerCharacter from "../components/careerCharacter";
import CareerHeader from "../components/careerHeader";
import CareerSelector from "../components/careerSelector";
import SectionHeading from "../components/sectionHeading";

import upsell from "../public/upsell.png";
import offerings from "../public/offerings.png";

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
            <a
              href="https://designdisciplin.gumroad.com/l/navigator-library"
              target="_blank"
              className="anchor-plain opacity-90"
              data-splitbee-event="Click Library Upsell"
            >
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
                designers excel in their chosen path
              </p>
              <a
                className="highlight-button mt-3 w-max mx-auto sd:mx-0"
                target="_blank"
                href="https://designdisciplin.gumroad.com/l/navigator-library"
                data-splitbee-event="Click Library Upsell"
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

        {/* UPSELL */}
        <motion.section
          className="section-upsell"
          variants={motionVars.childVariants}
          transition={motionVars.childTransition}
        >
          <div className="p-6 grid grid-cols-1 sd:grid-cols-2 gap-3 rounded-none mx-auto w-full">
            <div className="flex flex-col gap-3 justify-center">
              <h1 className="font-display text-r3 font-bold">
                Level Up as a Designer
              </h1>
              <p className="text-r1 opacity-50">
                Explore the full range of products and services from Design
                Disciplin to upgrade your creative work
              </p>
              <a
                className="highlight-button mt-3 w-max mx-auto sd:mx-0"
                target="_blank"
                href="https://www.designdisciplin.com/offerings/"
                data-splitbee-event="Click Offerings Upsell"
              >
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 15 15"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M6.5 1C6.77614 1 7 1.22386 7 1.5V2.5C7 2.77614 6.77614 3 6.5 3C6.22386 3 6 2.77614 6 2.5V1.5C6 1.22386 6.22386 1 6.5 1ZM2.14645 2.14645C2.34171 1.95118 2.65829 1.95118 2.85355 2.14645L3.85355 3.14645C4.04882 3.34171 4.04882 3.65829 3.85355 3.85355C3.65829 4.04882 3.34171 4.04882 3.14645 3.85355L2.14645 2.85355C1.95118 2.65829 1.95118 2.34171 2.14645 2.14645ZM10.1464 2.14645C10.3417 1.95118 10.6583 1.95118 10.8536 2.14645C11.0488 2.34171 11.0488 2.65829 10.8536 2.85355L9.85355 3.85355C9.65829 4.04882 9.34171 4.04882 9.14645 3.85355C8.95118 3.65829 8.95118 3.34171 9.14645 3.14645L10.1464 2.14645ZM4.14645 6.14645L6.14645 4.14645C6.34171 3.95118 6.65829 3.95118 6.85355 4.14645L8.85355 6.14645C9.04882 6.34171 9.04882 6.65829 8.85355 6.85355L8.20711 7.5L12.8536 12.1464C13.0488 12.3417 13.0488 12.6583 12.8536 12.8536C12.6583 13.0488 12.3417 13.0488 12.1464 12.8536L7.5 8.20711L6.85355 8.85355C6.65829 9.04882 6.34171 9.04882 6.14645 8.85355L4.14645 6.85355C3.95118 6.65829 3.95118 6.34171 4.14645 6.14645ZM5.20711 6.5L6.5 7.79289L7.79289 6.5L6.5 5.20711L5.20711 6.5ZM1 6.5C1 6.22386 1.22386 6 1.5 6H2.5C2.77614 6 3 6.22386 3 6.5C3 6.77614 2.77614 7 2.5 7H1.5C1.22386 7 1 6.77614 1 6.5ZM11 7H10.5C10.2239 7 10 6.77614 10 6.5C10 6.22386 10.2239 6 10.5 6H11C11.2761 6 11.5 6.22386 11.5 6.5C11.5 6.77614 11.2761 7 11 7ZM3.85355 9.14645C4.04882 9.34171 4.04882 9.65829 3.85355 9.85355L2.85355 10.8536C2.65829 11.0488 2.34171 11.0488 2.14645 10.8536C1.95118 10.6583 1.95118 10.3417 2.14645 10.1464L3.14645 9.14645C3.34171 8.95118 3.65829 8.95118 3.85355 9.14645ZM6 11V10.5C6 10.2239 6.22386 10 6.5 10C6.77614 10 7 10.2239 7 10.5V11C7 11.2761 6.77614 11.5 6.5 11.5C6.22386 11.5 6 11.2761 6 11Z"
                    fill="#fff"
                  />
                </svg>

                <span>Get the Help You Need</span>
              </a>
            </div>
            <a
              href="https://designdisciplin.gumroad.com/l/navigator-library"
              target="_blank"
              className="anchor-plain opacity-90 row-start-1 sd:row-start-auto"
              data-splitbee-event="Click Offerings Upsell"
            >
              <Image
                placeholder="blur"
                alt="Level up as a designer with Offerings from Design Disciplin"
                src={offerings}
                className="h-full w-full object-cover"
              />
            </a>
          </div>
        </motion.section>

        <CareerSelector
          repeatButton
          message="...or check out:"
        ></CareerSelector>
      </motion.div>
    </>
  );
}
