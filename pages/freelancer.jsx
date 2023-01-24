import { NextSeo } from "next-seo";

import CareerPage from "../components/careerPage";
import PersonCard from "../components/personCard";
import ResourceCard from "../components/resourceCard";
import ToolCard from "../components/toolCard";

import book_creativeStrategy from "../public/book_creativestrategy.png";
import course_6figure from "../public/course_6figure.jpg";
import podcast_double from "../public/podcast_double.jpg";
import blog_futur from "../public/blog_futur.jpeg";
import yt_mizko from "../public/yt_mizko.jpg";

import personChrisDo from "../public/personChrisDo.png";
import personGleb from "../public/personGleb.png";
import personMalewicz from "../public/personMalewicz.png";
import personFons from "../public/personFons.png";
import personMds from "../public/personMds.png";

import bg from "../public/bg_Freelancer.png";

import { Calendar } from "@carbon/icons-react";

export default function Freelancer() {
  return (
    <>
      <NextSeo
        title="Resources for Freelance Designers"
        description="Design Navigator is a tool that helps you choose your path to become a great designer, and a library of 100+ books, podcasts, courses, and other resources to help you navigate."
        openGraph={{
          images: [
            {
              url: "https://navigator.designdisciplin.com/card_freelancer.png",
              width: 1920,
              height: 1080,
              alt: "Resources for Freelance Designers | Curated by Design Navigator",
              type: "image/png",
            },
          ],
        }}
      />{" "}
      <CareerPage
        title="Freelancer"
        icon={Calendar}
        bg_src={bg}
        bg_alt="Freelancer's home workspace setup, imagined by Midjourney"
        header_p1="Freelancers are self-employed, usually taking up short-term projects rather than long-term employment."
        header_p2="Freelancers might be fully independent, or be represented by an agency that markets their work to clients."
        char_p1="The challenge of freelancing is that it requires double mastery over craft and business."
        char_p2="Successful freelancers often graduate to being agency owners or highly focused specialists."
        char_progressive="38%"
        char_social="62%"
        char_strategic="85%"
      >
        <>
          <ResourceCard
            type="book"
            img_src={book_creativeStrategy}
            title="Creative Strategy and the Business of Design"
            caption="Left-brain business skills for right-brain creative thinkers &ndash;
          learn about business and marketing to drive your creative work."
            price="$16"
            time="208 pages"
            url="https://geni.us/creative-strategy"
          />
          <ResourceCard
            type="course"
            img_src={course_6figure}
            title="6-figure Freelancer"
            caption="Attract a steady stream of high-value clients, break free from
              feast-and-famine cycles, and regain control over your
              schedule."
            price="$695"
            time="12 weeks"
            url="https://www.flux-academy.com/courses/the-6-figure-freelance-designer"
          />
          <ResourceCard
            type="podcast"
            img_src={podcast_double}
            title="Double Your Freelancing"
            caption="Generate leads, automate your business, and close big deals."
            price="Free"
            time="30 minutes"
            url="https://doubleyourfreelancing.com/podcast/"
          />
          <ResourceCard
            type="blog"
            img_src={blog_futur}
            title="The Futur Blog"
            caption="The latest tips, tricks, and happenings in business and design."
            price="Free"
            time="10 minutes"
            url="https://thefutur.com/blog"
          />
          <ResourceCard
            type="channel"
            img_src={yt_mizko}
            title="Mizko"
            caption="Weekly videos on product design, growth, business strategies and entrepreneurship."
            price="Free"
            time="10 minutes"
            url="https://www.youtube.com/@Mizko"
          />
        </>

        {/* TOOLS */}
        <>
          <ToolCard
            title="Calendly"
            url="https://www.calendly.com/"
          >
            <svg
              width="100%"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clipPath="url(#clip0_18_82)">
                <path
                  d="M8.19463 16C10.149 16 11.7168 15.4416 12.7906 14.3893C13.8859 13.3154 14.6161 11.5973 14.6376 10.0725H12.7262C12.5329 12.3275 11.1584 14.3034 8.25906 14.3034C5.05906 14.3034 2.97584 11.7691 2.97584 8.01074C2.97584 4.40268 4.86577 1.67517 8.23758 1.67517C10.6644 1.67517 12.1893 2.98523 12.5544 4.89664H14.4443C14.0362 2.06174 11.8671 0 8.28054 0C3.70604 0 1 3.50067 1 8.01074C1 12.6711 3.8349 16 8.19463 16Z"
                  fill="white"
                />
              </g>
              <defs>
                <clipPath id="clip0_18_82">
                  <rect
                    width="16"
                    height="16"
                    fill="white"
                  />
                </clipPath>
              </defs>
            </svg>
          </ToolCard>
          <ToolCard
            title="Figma"
            url="https://figma.com/"
          >
            <svg
              width="100%"
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
            title="Notion"
            url="https://www.notion.com"
          >
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
                  <rect
                    width="800"
                    height="800"
                    fill="white"
                  />
                </clipPath>
              </defs>
            </svg>
          </ToolCard>
        </>

        {/* PEOPLE */}
        <>
          <PersonCard
            title="Chris Do"
            handle="@thechristo"
            caption="The Futur"
            url="https://twitter.com/thechrisdo"
            img_src={personChrisDo}
          ></PersonCard>
          <PersonCard
            title="Fons Mans"
            handle="@FonsMans"
            caption="Designer, Author, YouTuber"
            url="https://twitter.com/FonsMans"
            img_src={personFons}
          ></PersonCard>
          <PersonCard
            title="Gleb Kuznetsov"
            handle="@glebich"
            caption="Milkinside"
            url="https://twitter.com/glebich"
            img_src={personGleb}
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
        </>
      </CareerPage>
    </>
  );
}
