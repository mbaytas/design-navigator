import CareerBackground from "../components/careerBackground";
import LibraryPopover from "../components/libraryPopover";
import Lifestyles from "../components/lifestyles";
import PersonCard from "../components/personCard";
import Progressbar from "../components/progressbar";
import ResourceCard from "../components/resourceCard";
import SectionHeading from "../components/sectionHeading";
import ToolCard from "../components/toolCard";

import book from "../public/book_hardthing.png";
import course from "../public/course_altman.png";
import podcast from "../public/podcast_masters.png";
import blog from "../public/blog_blank.png";
import yt from "../public/yt_garrytan.png";

import personChesky from "../public/personChesky.png";
import personPG from "../public/personPG.png";
import personSinger from "../public/personSinger.png";

import bg from "../public/bg_Founder.png";

import { Rocket } from "@carbon/icons-react";

export default function Founder() {
  return (
    <>
      <LibraryPopover />

      <CareerBackground
        src={bg}
        alt="Content creator working in her home office, imagined by Midjourney"
      ></CareerBackground>

      <div className="career-container">
        <header className="career-header">
          <Rocket size="32" className="opacity-80" />
          <p className="text-r1 font-display font-medium opacity-60">
            We think you'll thrive as a...
          </p>
          <h1 className="font-display text-r4 font-bold mb-3">Founder</h1>
          <p className="opacity-80 text-r2">
            Design-driven founders wield the superpower of combining product
            thinking with leadership.
          </p>
          <p className="opacity-50 text-r1">
            Startup founders and employees may have to drive and navigate
            profound strategic shifts, which means that job descriptions are
            seldom set in stone.
          </p>
        </header>

        {/* CHARACTER */}
        <section className="section-character">
          <SectionHeading title="Characteristics" />
          <div className="grid sd:grid-cols-3 items-center gap-x-6 gap-y-6 mx-auto w-full border border-white/20 rounded-xl p-6">
            <div className="opacity-80 text-r1 col-span-full max-w-md mb-3 flex flex-col gap-3">
              <p>
                Founders operate in dynamic environments with high risk and high
                potential for extraordinary results.
              </p>
              <p>
                Startups can be leveraged or bootstrapped. What both have in
                common is the necessity to use resources effectively. Strategy
                makes the difference between life and death.
              </p>
            </div>
            <Progressbar value={"62%"} label="progressive" />
            <Progressbar value={"85%"} label="social" />
            <Progressbar value={"85%"} label="strategic" />
          </div>
        </section>

        {/* RESOURCES */}
        <section className="section-resources">
          <SectionHeading title="Suggested Resources" />
          <div className="flex flex-col gap-2">
            <ResourceCard
              type="book"
              img_src={book}
              title="The Hard Thing About Hard Things"
              caption="a16z co-founder Ben Horowitz shares war stories from a lifetime of startup leadership."
              price="$16"
              time="304 pages"
              url="https://geni.us/the-hard-thing"
            />
            <ResourceCard
              type="course"
              img_src={course}
              title="How To Start a Startup"
              caption="Sam Altman's class at Stanford hosts guest lectures from Silicon Valley legends sharing everything they know about startups."
              price="Free"
              time="14 hours"
              url="http://startupclass.samaltman.com/"
            />
            <ResourceCard
              type="podcast"
              img_src={podcast}
              title="Masters of Scale"
              caption="Hosted by LinkedIn co-founder Reid Hoffman, Masters of Scale is a podcast on a mission to democratize entrepreneurship."
              price="Free"
              time="40 minutes"
              url="https://mastersofscale.com/"
            />
            <ResourceCard
              type="blog"
              img_src={blog}
              title="Steve Blank"
              caption="An OG who was among the first to codify methodologies for startups, Steve Blank continues to teach new lessons on his blog."
              price="Free"
              time="5 minutes"
              url="https://steveblank.com/"
            />
            <ResourceCard
              type="channel"
              img_src={yt}
              title="Garry Tan"
              caption="Designer, engineer, and investor Garry Tan shares insights from a carreer spanning some of the most successul startups in the world."
              price="Free"
              time="10 minutes"
              url="https://www.youtube.com/@GarryTan"
            />
          </div>
        </section>

        {/* TOOLS */}
        <section className="section-tools">
          <SectionHeading title="Tools to Learn" />

          <div className="flex flex-row flex-wrap justify-center gap-3">
            <ToolCard title="Calendly" url="https://www.calendly.com/">
              <svg
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clip-path="url(#clip0_18_82)">
                  <path
                    d="M8.19463 16C10.149 16 11.7168 15.4416 12.7906 14.3893C13.8859 13.3154 14.6161 11.5973 14.6376 10.0725H12.7262C12.5329 12.3275 11.1584 14.3034 8.25906 14.3034C5.05906 14.3034 2.97584 11.7691 2.97584 8.01074C2.97584 4.40268 4.86577 1.67517 8.23758 1.67517C10.6644 1.67517 12.1893 2.98523 12.5544 4.89664H14.4443C14.0362 2.06174 11.8671 0 8.28054 0C3.70604 0 1 3.50067 1 8.01074C1 12.6711 3.8349 16 8.19463 16Z"
                    fill="white"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_18_82">
                    <rect width="16" height="16" fill="white" />
                  </clipPath>
                </defs>
              </svg>
            </ToolCard>
            <ToolCard title="Figma" url="https://figma.com/">
              <svg
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clip-path="url(#clip0_2_2)">
                  <path
                    d="M10.568 5.98733H7.50933V0H10.568C12.2187 0 13.5613 1.34267 13.5613 2.99333C13.5613 4.644 12.2187 5.98733 10.568 5.98733V5.98733ZM8.49 5.00667H10.568C11.678 5.00667 12.5807 4.10333 12.5807 2.994C12.5807 1.88467 11.6773 0.981333 10.568 0.981333H8.49V5.00667V5.00667ZM8.49 5.98733H5.432C3.78133 5.98733 2.43867 4.64467 2.43867 2.994C2.43867 1.34333 3.78133 0 5.432 0H8.49067V5.98733H8.49ZM5.432 0.980667C4.322 0.980667 3.41933 1.884 3.41933 2.99333C3.41933 4.10267 4.322 5.00667 5.432 5.00667H7.51V0.980667H5.432ZM8.49 10.9933H5.432C3.78133 10.9933 2.43867 9.65067 2.43867 8C2.43867 6.34933 3.78133 5.00667 5.432 5.00667H8.49067V10.9933H8.49ZM5.432 5.98733C4.322 5.98733 3.41933 6.89067 3.41933 8C3.41933 9.10933 4.32267 10.0127 5.432 10.0127H7.51V5.98733H5.432ZM5.448 16C3.78867 16 2.438 14.6573 2.438 13.0067C2.438 11.356 3.78067 10.0133 5.43133 10.0133H8.49V12.974C8.49 14.6427 7.12533 16 5.448 16V16ZM5.432 10.9933C4.89842 10.994 4.3869 11.2063 4.00961 11.5836C3.63231 11.9609 3.42004 12.4724 3.41933 13.006C3.41933 14.116 4.32933 15.0187 5.44867 15.0187C6.58533 15.0187 7.51067 14.1013 7.51067 12.9733V10.9933H5.432V10.9933ZM10.568 10.9933H10.5027C8.852 10.9933 7.50933 9.65067 7.50933 8C7.50933 6.34933 8.852 5.00667 10.5027 5.00667H10.568C12.2187 5.00667 13.5613 6.34933 13.5613 8C13.5613 9.65067 12.2187 10.9933 10.568 10.9933V10.9933ZM10.5033 5.98733C9.39333 5.98733 8.49067 6.89067 8.49067 8C8.49067 9.10933 9.394 10.0127 10.5033 10.0127H10.5687C11.6787 10.0127 12.5813 9.10933 12.5813 8C12.5813 6.89067 11.678 5.98733 10.5687 5.98733H10.5033V5.98733Z"
                    fill="white"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_2_2">
                    <rect width="16" height="16" fill="white" />
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
                <g clip-path="url(#clip0_13_6)">
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
            </ToolCard>{" "}
          </div>
        </section>

        {/* PEOPLE */}
        <section className="section-people">
          <SectionHeading title="People to Follow" />
          <div className="flex flex-row flex-wrap justify-center gap-3 w-full">
            <PersonCard
              title="Brian Chesky"
              handle="@bchesky"
              caption="Airbnb"
              url="https://twitter.com/bchesky"
              img_src={personChesky}
            ></PersonCard>
            <PersonCard
              title="Jordan Singer"
              handle="@jsngr"
              caption="Diagram"
              url="https://twitter.com/jsngr"
              img_src={personSinger}
            ></PersonCard>
            <PersonCard
              title="Paul Graham"
              handle="@paulg"
              caption="Y Combinator"
              url="https://twitter.com/paulg"
              img_src={personPG}
            ></PersonCard>
          </div>
        </section>

        <Lifestyles message="...also check out:"></Lifestyles>
      </div>
    </>
  );
}
