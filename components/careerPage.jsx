import { Children } from "react";
import Link from "next/link";

import { motion } from "framer-motion";

import CareerBackground from "../components/careerBackground";
import CareerCharacter from "../components/careerCharacter";
import CareerHeader from "../components/careerHeader";
import LibraryPopover from "../components/libraryPopover";
import CareerSelector from "../components/careerSelector";
import PersonCard from "../components/personCard";
import ResourceCard from "../components/resourceCard";
import SectionHeading from "../components/sectionHeading";
import ToolCard from "../components/toolCard";

import book from "../public/book_embedded.png";
import course from "../public/course_buildonce.png";
import podcast from "../public/podcast_indie.png";
import blog from "../public/blog_interested.png";
import yt from "../public/yt_ali.png";

import personJackButcher from "../public/personJackButcher.png";
import personMalewicz from "../public/personMalewicz.png";
import personArvid from "../public/personArvid.png";
import personOliur from "../public/personOliur.png";
import personBaytas from "../public/personBaytas.png";

import { PenFountain } from "@carbon/icons-react";

import { motionVars } from "../utils/consts";

export default function CareerPage(props) {
  return (
    <>
      <motion.div
        className="career-container"
        initial="initial"
        animate="animate"
        transition={motionVars.parentTransition}
      >
        {/* BG */}
        <CareerBackground
          src={props.bg_src}
          alt="bg_alt"
        ></CareerBackground>

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
