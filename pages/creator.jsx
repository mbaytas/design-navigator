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

import bg from "../public/bg_Creator.png";

import { PenFountain } from "@carbon/icons-react";

import { motionVars } from "../utils/consts";

export default function Creator() {
  return (
    <>
      <LibraryPopover />

      <motion.div
        className="career-container"
        initial="initial"
        animate="animate"
        transition={motionVars.parentTransition}
      >
        {/* BG */}
        <CareerBackground
          src={bg}
          alt="Content creator working in her home office, imagined by Midjourney"
        ></CareerBackground>

        {/* HEADER */}
        <CareerHeader
          title="Creator"
          Icon={PenFountain}
          p1="Creator-designers build media, products, and services for an online audience, using the internet to develop business from their craft."
          p2="The creator lifestyle can provide freedom and fulfillment, but requires substantial time and effort to build if you're starting from scratch."
          bg_src={bg}
          bg_alt="Content creator working in her home office, imagined by Midjourney"
        ></CareerHeader>

        {/* CHARACTER */}
        <CareerCharacter
          p1="Creators often work alone and rely on self-learning. You cannot go to school to become a creator."
          p2="Fortunately, the internet is abundant with resources, tools, and communities for creators."
          progressive="85%"
          social="38%"
          strategic="62%"
        />

        {/* RESOURCES */}
        <motion.section
          className="section-resources"
          variants={motionVars.childVariants}
          transition={motionVars.childTransition}
        >
          <SectionHeading title="Suggested Resources" />
          <div className="flex flex-col gap-3 w-full">
            <ResourceCard
              type="book"
              img_src={book}
              title="The Embedded Entrepreneur"
              caption="Instead of building solutions looking for customers, Arvid Kahl describes how to find customers first, and build a solution with them."
              price="$25"
              time="308 pages"
              url="https://geni.us/embedded-entrepreneur"
            />
            <ResourceCard
              type="course"
              img_src={course}
              title="Build Once, Sell Twice"
              caption="The definitive curriculum on packaging your expertise into digital products that work without you, to scale your influence, impact and income."
              price="$297"
              time="5 hours"
              url="https://visualizevalue.com/products/build-once-sell-twice-the-productization-playbook?sca_ref=2199061.e9BKrbEmIi"
            />
            <ResourceCard
              type="podcast"
              img_src={podcast}
              title="Indie Hackers"
              caption="Interviews with indie hackers who are turning their ideas and side projects into profitable online businesses."
              price="Free"
              time="60 minutes"
              url="https://www.indiehackers.com/podcasts"
            />
            <ResourceCard
              type="blog"
              img_src={blog}
              title="For The Interested"
              caption="Ideas to help you produce, promote, and profit from your creations."
              price="Free"
              time="5 minutes"
              url="https://fortheinterested.com/"
            />
            <ResourceCard
              type="channel"
              img_src={yt}
              title="Ali Abdaal"
              caption="Doctor-turned entrepreneur Ali Abdaal shares evidence-based strategies and tools to be more productive, and build a life we love."
              price="Free"
              time="15 minutes"
              url="https://www.youtube.com/@aliabdaal"
            />
          </div>
        </motion.section>

        {/* UPSELL */}
        <motion.div
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
        </motion.div>

        {/* TOOLS */}
        <motion.section
          className="section-tools"
          variants={motionVars.childVariants}
          transition={motionVars.childTransition}
        >
          <SectionHeading title="Tools to Learn" />

          <div className="flex flex-row flex-wrap justify-center gap-3">
            <ToolCard
              title="Figma"
              url="https://figma.com/"
            >
              <svg
                width="100%"
                viewBox="0 0 800 800"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M590 290C615 275 632.5 252.5 642.5 225C652.5 197.5 652.5 170 645 142.5C637.5 115 620 92.5 597.5 75C575 57.5 545 50 517.5 50H287.5C257.5 50 230 60 207.5 75C180 92.5 165 117.5 155 142.5C147.5 170 147.5 200 157.5 225C167.5 252.5 185 275 210 290C192.5 302.5 175 317.5 165 337.5C155 357.5 150 377.5 150 400C150 422.5 155 442.5 165 462.5C175 482.5 190 497.5 210 510C185 525 167.5 547.5 157.5 575C147.5 602.5 147.5 630 155 657.5C162.5 685 180 707.5 205 725C227.5 742.5 257.5 750 285 750C320 750 355 735 382.5 712.5C407.5 687.5 422.5 655 422.5 620V500C447.5 522.5 480 535 512.5 535H515C545 535 572.5 525 595 510C617.5 492.5 635 470 642.5 442.5C650 415 650 387.5 640 360C632.5 327.5 612.5 305 590 290V290ZM422.5 92.5H515C527.5 92.5 540 92.5 550 97.5C562.5 102.5 572.5 107.5 580 117.5C590 125 595 135 600 147.5C605 160 607.5 170 607.5 182.5C607.5 195 605 207.5 600 217.5C595 227.5 587.5 237.5 580 247.5C570 255 560 262.5 550 267.5C537.5 272.5 525 272.5 515 272.5H422.5V92.5V92.5ZM285 92.5H377.5V267.5H285C262.5 267.5 240 257.5 225 240C207.5 225 200 202.5 200 180C200 157.5 210 135 225 120C240 105 262.5 95 285 92.5V92.5ZM195 400C195 377.5 205 355 222.5 337.5C240 320 262.5 312.5 287.5 312.5H380V487.5H287.5C262.5 487.5 240 477.5 222.5 462.5C205 445 195 422.5 195 400V400ZM377.5 617.5C377.5 642.5 367.5 665 350 680C332.5 697.5 310 705 285 705C272.5 705 260 705 250 700C237.5 695 227.5 690 220 682.5C210 675 205 665 200 652.5C195 642.5 192.5 630 192.5 617.5C192.5 605 195 592.5 200 582.5C205 572.5 212.5 562.5 220 552.5C230 545 240 537.5 250 532.5C262.5 527.5 275 527.5 285 527.5H377.5V617.5V617.5ZM515 487.5H512.5C490 487.5 467.5 477.5 452.5 460C437.5 442.5 427.5 422.5 427.5 400C427.5 377.5 437.5 355 452.5 340C467.5 322.5 490 315 512.5 312.5H515C527.5 312.5 540 312.5 550 317.5C562.5 322.5 572.5 327.5 580 337.5C590 345 595 355 600 367.5C605 377.5 607.5 390 607.5 402.5C607.5 415 605 427.5 600 437.5C595 447.5 587.5 457.5 580 467.5C570 475 560 482.5 550 487.5H515V487.5Z"
                  fill="white"
                />
              </svg>
            </ToolCard>
            <ToolCard
              title="Gumroad"
              url="https://www.gumroad.com/"
            >
              <svg
                width="716"
                height="716"
                viewBox="0 0 716 716"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clipPath="url(#clip0_12_12)">
                  <path
                    d="M472.09 449.603C512.656 449.603 512.656 510.329 472.09 510.329C431.659 510.329 431.659 449.603 472.09 449.603ZM636.3 33.0927C676.732 33.0927 676.732 93.8185 636.3 93.8185C595.734 93.8185 595.734 33.0927 636.3 33.0927V33.0927ZM99.0542 92.655H579.893C586.547 105.529 597.402 115.742 610.657 121.6C623.912 127.458 638.772 128.61 652.771 124.863C666.771 121.117 679.069 112.697 687.627 101.002C696.184 89.3062 700.487 75.0368 699.822 60.56C699.156 46.0832 693.562 32.2688 683.968 21.4077C674.373 10.5465 661.354 3.29128 647.07 0.845041C632.786 -1.6012 618.095 0.908569 605.433 7.95813C592.771 15.0077 582.899 26.1735 577.454 39.6039H99.0766C52.6932 39.6039 16.2219 74.9116 16.2219 119.908V631.736C16.2219 677.426 54.2147 716 99.0766 716H610.905C656.013 716 692.596 678.231 692.596 631.736V328.04C692.596 282.35 656.013 245.185 610.905 245.185H307.321C260.937 245.185 221.781 283.178 221.781 328.04V423.492C221.781 467.772 260.132 503.796 307.321 503.796H413.378C418.102 515.503 426.219 525.531 436.684 532.592C447.15 539.653 459.488 543.424 472.113 543.422C488.96 543.422 505.117 536.729 517.03 524.816C528.943 512.904 535.635 496.746 535.635 479.899C535.635 463.052 528.943 446.895 517.03 434.982C505.117 423.069 488.96 416.376 472.113 416.376C460.48 416.392 449.075 419.607 439.147 425.668C429.218 431.73 421.147 440.405 415.817 450.744H307.321C291.703 450.744 274.81 440.362 274.81 423.469V328.018C274.81 312.4 290.316 298.192 307.321 298.192H610.905C626.992 298.192 639.567 311.371 639.567 328.018V631.713C639.567 648.607 626.388 662.949 610.905 662.949H99.0766C83.2351 662.949 69.2507 648.271 69.2507 631.713V119.885C69.2507 104.379 82.1834 92.7221 99.0766 92.7221L99.0542 92.655Z"
                    fill="white"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_12_12">
                    <rect
                      width="716"
                      height="716"
                      fill="white"
                    />
                  </clipPath>
                </defs>
              </svg>
            </ToolCard>
            <ToolCard
              title="Premiere"
              url="https://www.adobe.com/products/premiere.html"
            >
              <svg
                width="100%"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clipPath="url(#clip0_1_97)">
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M8.08128 8.61829C7.61684 9.2685 6.96662 9.75617 6.2119 10.0348C5.42235 10.3251 4.55152 10.4296 3.59942 10.4296L3.01887 10.418L2.51959 10.4064V14.1335C2.52289 14.1527 2.52212 14.1724 2.51733 14.1913C2.51255 14.2102 2.50386 14.2278 2.49183 14.2432C2.47979 14.2585 2.46468 14.2711 2.44746 14.2802C2.43024 14.2893 2.41131 14.2947 2.39187 14.2961H0.139333C0.0464444 14.2961 0 14.2496 0 14.1451V2.19739C0 2.11611 0.0348334 2.06967 0.116111 2.06967L0.766329 2.05806L1.64877 2.03483L2.65893 2.01161L3.71553 2C4.66763 2 5.45718 2.11611 6.1074 2.35994C6.68795 2.55733 7.22206 2.88244 7.66328 3.31205C8.03483 3.6836 8.32511 4.13643 8.51089 4.6357C8.68505 5.12337 8.77794 5.62264 8.77794 6.14514C8.77794 7.14369 8.54572 7.96807 8.08128 8.61829ZM3.79681 4.28737C4.26462 4.26969 4.73105 4.34874 5.16691 4.51959C5.50525 4.64849 5.79303 4.88301 5.98754 5.18838C6.18206 5.49375 6.27295 5.85369 6.24673 6.2148C6.24673 6.72569 6.13062 7.12046 5.88679 7.41074C5.63135 7.70102 5.30624 7.92162 4.93469 8.02612C4.50508 8.16546 4.05225 8.23512 3.59942 8.23512H2.98404L2.53121 8.2119V4.31059C2.95261 4.28631 3.3748 4.27856 3.79681 4.28737Z"
                    fill="white"
                  />
                  <path
                    d="M16 4.96081V7.22496C16 7.31785 15.9419 7.35269 15.8142 7.35269C15.0481 7.32486 14.2858 7.47177 13.5849 7.78229C13.3643 7.88679 13.1553 8.02613 12.9927 8.2119V14.1335C12.9927 14.2496 12.9463 14.2961 12.8418 14.2961H10.5544C10.5331 14.2994 10.5112 14.2983 10.4903 14.2931C10.4693 14.2878 10.4496 14.2784 10.4323 14.2654C10.415 14.2525 10.4004 14.2362 10.3895 14.2175C10.3786 14.1988 10.3715 14.1782 10.3687 14.1567V7.67779L10.357 6.80697L10.3338 5.90131C10.3338 5.64495 10.3124 5.3993 10.2902 5.1438L10.2874 5.11176C10.2834 5.08427 10.2894 5.05626 10.3043 5.03283C10.3192 5.00939 10.3421 4.99208 10.3687 4.98403H12.4354C12.5515 4.98403 12.6444 5.06531 12.6676 5.16981C12.7726 5.516 12.8235 5.87631 12.8186 6.23803C13.1669 5.83164 13.5965 5.49492 14.0726 5.23948C14.6123 4.93967 15.2201 4.78373 15.8374 4.78665C15.9187 4.77504 15.9884 4.83309 16 4.91437V4.96081Z"
                    fill="white"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_1_97">
                    <rect
                      width="16"
                      height="16"
                      fill="white"
                    />
                  </clipPath>
                </defs>
              </svg>
            </ToolCard>
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
            <PersonCard
              title="Arvid Kahl"
              handle="@arvidkahl"
              caption="The Bootstrapped Founder"
              url="https://twitter.com/arvidkahl"
              img_src={personArvid}
            ></PersonCard>
            <PersonCard
              title="Jack Butcher"
              handle="@jackbutcher"
              caption="Visualize Value"
              url="https://twitter.com/jackbutcher"
              img_src={personJackButcher}
            ></PersonCard>
            <PersonCard
              title="Mehmet Aydın Baytaş"
              handle="@doctorbaytas"
              caption="Design Disciplin"
              url="https://twitter.com/doctorbaytas"
              img_src={personBaytas}
            ></PersonCard>
            <PersonCard
              title="Michal Malewicz"
              handle="@michalmalewicz"
              caption="Designer, Author, YouTuber"
              url="https://twitter.com/michalmalewicz"
              img_src={personMalewicz}
            ></PersonCard>
            <PersonCard
              title="Oliur"
              handle="@UltraLinx"
              caption="Designer and Creator"
              url="https://twitter.com/UltraLinx"
              img_src={personOliur}
            ></PersonCard>
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
