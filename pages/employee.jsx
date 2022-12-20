import CareerHeader from "../components/careerHeader";
import LibraryPopover from "../components/libraryPopover";
import CareerSelector from "../components/careerSelector";
import PersonCard from "../components/personCard";
import Progressbar from "../components/progressbar";
import ResourceCard from "../components/resourceCard";
import SectionHeading from "../components/sectionHeading";
import ToolCard from "../components/toolCard";

import book_creativeConfidence from "../public/book_creativeconfidence.jpg";
import course_shiftnudge from "../public/course_shiftnudge.avif";
import podcast_designdetails from "../public/podcast_designdetails.jpg";
import blog_nngroup from "../public/blog_nngroup.webp";
import yt_craft from "../public/yt_craft.jpg";

import personFemke from "../public/personFemke.png";
import personSho from "../public/personSho.png";
import personPorcini from "../public/personPorcini.png";
import personMalewicz from "../public/personMalewicz.png";
import personMds from "../public/personMds.png";

import bg from "../public/bg_Employee.png";

import { Portfolio } from "@carbon/icons-react";

export default function Employee() {
  return (
    <>
      <LibraryPopover />

      <div className="career-container">
        <CareerHeader
          title="Employee"
          Icon={Portfolio}
          p1="Employment at an established company provides stability and peace of mind, as well as opportunities for long-term, large-scale projects."
          p2="Larger companies offer well-defined carreer paths where you can thrive for many years while growing your expertise and influence."
          bg_src={bg}
          bg_alt="The design department of a Silicon Valley tech company, imagined by Midjourney"
        ></CareerHeader>

        {/* CHARACTER */}
        <section className="section-character">
          <SectionHeading title="Characteristics" />
          <div className="grid sd:grid-cols-3 items-center gap-x-6 gap-y-6 mx-auto w-full border border-white/20 rounded-xl p-6">
            <div className="opacity-80 text-r1 col-span-full max-w-md mb-3 flex flex-col gap-3">
              <p>
                To thrive in established companies requires high empathy and
                collaboration skills.
              </p>
              <p>
                Make sure you find the right culture for you. Be a good citizen,
                make friends, and enjoy the ride.
              </p>
            </div>
            <Progressbar value={"38%"} label="progressive" />
            <Progressbar value={"85%"} label="social" />
            <Progressbar value={"62%"} label="strategic" />
          </div>
        </section>

        <section className="section-resources">
          <SectionHeading title="Suggested Resources" />

          <div className="flex flex-col gap-2">
            <ResourceCard
              type="book"
              img_src={book_creativeConfidence}
              title="Creative Confidence"
              caption="IDEO partners David and Tom Kelley identify the principles and strategies to tap into our creative potential and innovate."
              price="$13"
              time="304 pages"
              url="https://geni.us/creative-confidence"
            />
            <ResourceCard
              type="course"
              img_src={course_shiftnudge}
              title="Shift Nudge"
              caption="Learn the systematic process and visual skills of creating beautiful and functional interfaces."
              price="$1,100+"
              time="30+ hours"
              url="https://shiftnudge.com/"
            />
            <ResourceCard
              type="podcast"
              img_src={podcast_designdetails}
              title="Design Details"
              caption="Brian Lovin from GitHub and Marshall Bock from Youtube love talking 
              about design, development, products, interfaces, games, and more."
              price="Free"
              time="30 minutes"
              url="https://designdetails.fm/"
            />
            <ResourceCard
              type="blog"
              img_src={blog_nngroup}
              title="Nielsen Norman Group"
              caption="Articles from the world leaders in research-based user experience."
              price="Free"
              time="5 minutes"
              url="https://www.nngroup.com/articles/"
            />
            <ResourceCard
              type="channel"
              img_src={yt_craft}
              title="The Craft"
              caption="Sera Tajima shares her knowledge working in the tech industry: interviewing, design portfolios, product strategy, UX research, and more."
              price="Free"
              time="10 minutes"
              url="https://www.youtube.com/@TheCraftwithSeraTajima"
            />
          </div>
        </section>

        {/* TOOLS */}
        <section className="section-tools">
          <SectionHeading title="Tools to Learn" />

          <div className="flex flex-row flex-wrap justify-center gap-3">
            <ToolCard title="Figma" url="https://figma.com/">
              <svg
                width="800"
                height="800"
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
              title="Google Slides"
              url="https://www.google.com/slides/about/"
            >
              <svg
                width="1600"
                height="1600"
                viewBox="0 0 1600 1600"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clipPath="url(#clip0_13_8)">
                  <path
                    d="M1413.1 489.432C1413.1 489.191 1412.86 488.717 1412.86 488.476C1411.43 484.652 1409.03 481.311 1406.41 478.21C1406.17 477.969 1406.17 477.736 1405.94 477.495L971.422 11.4632C964.738 4.29763 955.187 0 945.162 0H293.864C233.704 0 184.516 48.9468 184.516 109.347V1490.49C184.516 1550.65 233.463 1599.84 293.864 1599.84H1306.15C1366.31 1599.84 1415.49 1550.89 1415.49 1490.49L1415.48 502.084C1415.48 497.553 1414.53 493.496 1413.1 489.432L1413.1 489.432ZM979.773 125.584L1297.31 466.035H1017.5C996.722 466.035 979.771 449.085 979.771 428.311L979.773 125.584ZM1343.86 1490.49C1343.86 1511.27 1326.91 1528.22 1306.14 1528.22H293.855C273.082 1528.22 256.131 1511.27 256.131 1490.49V109.588C256.131 88.8149 273.081 71.8639 293.855 71.8639H908.148V428.55C908.148 488.71 957.095 537.897 1017.5 537.897H1343.86V1490.49Z"
                    fill="white"
                  />
                  <path
                    d="M986.458 631.485H463.366C443.549 631.485 427.554 647.48 427.554 667.297V1174.39C427.554 1194.21 443.549 1210.2 463.366 1210.2H577.968V1324.56C577.968 1344.38 593.962 1360.38 613.78 1360.38H1136.63C1156.45 1360.38 1172.44 1344.38 1172.44 1324.56V817.468C1172.44 797.65 1156.45 781.656 1136.63 781.656H1022.03V667.297C1022.27 647.48 1006.04 631.485 986.46 631.485H986.458ZM613.776 1138.34H612.579H499.183V703.109H950.651V817.227V817.468V817.709V1138.58L614.736 1138.58C614.503 1138.58 614.021 1138.33 613.78 1138.33L613.776 1138.34ZM1100.82 853.28V1288.75H649.588V1210.2H986.458C1006.28 1210.2 1022.27 1194.21 1022.27 1174.39V853.28H1100.82Z"
                    fill="white"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_13_8">
                    <rect width="1600" height="1600" fill="white" />
                  </clipPath>
                </defs>
              </svg>
            </ToolCard>
            <ToolCard title="Notion" url="https://www.notion.com">
              <svg
                width="800"
                height="800"
                viewBox="0 0 800 800"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clipPath="url(#clip0_13_6)">
                  <path
                    d="M148.7 140.225C173.45 160.4 182.825 158.975 229.55 155.85L670.05 129.425C679.425 129.425 671.625 120.05 668.475 118.475L595.3 65.6001C581.375 54.6501 562.625 42.3001 526.8 45.2751L100.375 76.5251C84.75 77.9501 81.625 85.7751 87.875 92.0251L148.7 140.225ZM175.125 242.975V706.375C175.125 731.25 187.5 740.625 215.5 739.05L699.625 711.05C727.625 709.475 730.875 692.425 730.875 672.125V211.85C730.875 191.525 723.05 180.725 705.875 182.3L200.025 211.85C181.275 213.425 175.15 222.65 175.15 242.85L175.125 242.975ZM653 267.7C656.125 281.775 653 295.7 638.925 297.4L615.625 302.1V644.15C595.3 655.1 576.7 661.35 561.2 661.35C536.2 661.35 529.95 653.525 511.325 630.225L358.725 390.65V622.425L407.025 633.375C407.025 633.375 407.025 661.375 368.1 661.375L260.675 667.625C257.55 661.375 260.675 645.75 271.625 642.75L299.625 634.925V328.55L260.7 325.425C257.575 311.35 265.4 291.175 287.125 289.625L402.35 281.8L561.2 524.5V309.775L520.7 305.075C517.575 288.025 529.95 275.525 545.575 274.075L653 267.7ZM64.575 34.5001L508.2 1.82506C562.625 -2.87493 576.7 0.250066 610.925 25.1251L752.6 124.725C775.9 141.775 783.725 146.475 783.725 165.1V711.075C783.725 745.325 771.225 765.5 727.725 768.625L212.35 799.75C179.8 801.325 164.175 796.625 146.975 774.875L42.675 639.45C24.05 614.575 16.25 595.95 16.25 574.225V88.9501C16.25 60.9501 28.75 37.6501 64.55 34.5251L64.575 34.5001Z"
                    fill="white"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_13_6">
                    <rect width="800" height="800" fill="white" />
                  </clipPath>
                </defs>
              </svg>
            </ToolCard>
          </div>
        </section>

        {/* PEOPLE */}
        <section className="section-people">
          <SectionHeading title="People to Follow" />
          <div className="flex flex-row flex-wrap justify-center gap-3 w-full">
            <PersonCard
              title="Femke van Schoonhoven"
              handle="@femkesvs"
              caption="femke.design"
              url="https://twitter.com/femkesvs"
              img_src={personFemke}
            ></PersonCard>
            <PersonCard
              title="Mauro Porcini"
              handle="@MauroPorcini"
              caption="Chief Design Officer, PepsiCo"
              url="https://twitter.com/MauroPorcini"
              img_src={personPorcini}
            ></PersonCard>
            <PersonCard
              title="Matt D. Smith"
              handle="@mds"
              caption="Designer, Educator"
              url="https://twitter.com/mds"
              img_src={personMds}
            ></PersonCard>
            <PersonCard
              title="Michal Malewicz"
              handle="@michalmalewicz"
              caption="Designer, Author, YouTuber"
              url="https://twitter.com/michalmalewicz"
              img_src={personMalewicz}
            ></PersonCard>
            <PersonCard
              title="Sho Kuwamoto"
              handle="@skuwamoto"
              caption="VP of Product, Figma"
              url="https://twitter.com/skuwamoto"
              img_src={personSho}
            ></PersonCard>
          </div>
        </section>

        <CareerSelector message="...also check out:"></CareerSelector>
      </div>
    </>
  );
}
