import Image from "next/image";

import { motion, useScroll, useTransform } from "framer-motion";

import CareerCharacter from "../components/careerCharacter";
import CareerHeader from "../components/careerHeader";
import CareerSelector from "../components/careerSelector";
import SectionHeading from "../components/sectionHeading";

import { motionVars } from "../utils/consts";

export default function CareerPage(props) {
  const { scrollY } = useScroll();
  let yVal = useTransform(scrollY, [0, 1], [0, -0.38], { clamp: false });

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
          style={{ x: "-50%", y: yVal }}
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
          {/* UPSELL */}
          <button className="hinted-button mt-6 flex flex-row items-center gap-2 font-display text-r2 px-6 py-3 font-medium opacity-80 bg-orange-400/20 cursor-pointer">
            Discover More Resources
          </button>
        </motion.section>

        {/* <motion.div
          className="material-static flex items-end justify-between w-full max-w-4xl  p-6 gap-3 text-white"
          variants={motionVars.childVariants}
          transition={motionVars.childTransition}
        >
          <div className="flex flex-col gap-6">
            <h1 className="font-display text-r3">Discover More Resources</h1>
            <p className="text-r1 opacity-50 max-w-sm">
              Access to the full Design Navigator Library with 100+ resources is
              available to purchase, as well as open to all Design Disciplin
              members.
            </p>
          </div>
          <a
            href="https://www.designdisciplin.com/#/portal/signup"
            target="_blank"
            className="font-display font-medium uppercase border-2 border-cyan-400 text-cyan-400 rounded-full px-6 py-3 w-max hover:border-white hover:text-white transition-colors"
          >
            Purchase Library Access
          </a>
        </motion.div> */}

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

        <CareerSelector
          repeatButton
          message="...or check out:"
        ></CareerSelector>
      </motion.div>
    </>
  );
}
