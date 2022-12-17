import Head from "next/head";

import Lifestyles from "../components/lifestyles";
import PersonCard from "../components/personCard";
import ResourceCard from "../components/resourceCard";
import ToolCard from "../components/toolCard";

import book from "../public/book_embedded.png";
import course from "../public/course_buildonce.png";
import podcast from "../public/podcast_indie.png";
import blog from "../public/blog_interested.png";
import yt from "../public/yt_ali.png";

import personJackButcher from "../public/personJackButcher.png";
import personMalewicz from "../public/personMalewicz.png";
import personArvidKahl from "../public/personArvid.png";

import { ArrowDown, Calendar } from "@carbon/icons-react";

export default function Creator() {
  return (
    <div className="bg-black text-white">
      <div className="flex flex-col justify-between items-center min-h-screen gap-24 p-6">

        <div className="w-full max-w-md flex flex-col justify-center gap-3 min-h-[38vh]">
          <Calendar size="32" className="opacity-80" />
          <p className="text-r1 opacity-60">We think you'll thrive as a...</p>
          <h1 className="font-display text-r4 font-bold">Creator</h1>
          <p className="opacity-60">
            Creator-designers build media, products, and services for an online
            audience. Creators often work alone, using an army of digital tools
            to build their craft into a business. The creator lifestyle can
            provide a lot of freedom and fulfillment, but requires substantial
            time and effort to build if you're starting from scratch.
          </p>
        </div>

        <div className="w-full max-w-4xl flex flex-col gap-6 mih-h-[62vh]">
          <h2 className="font-display uppercase text-center flex gap-2 justify-center items-center mx-auto">
            <ArrowDown size="16" />
            Suggested Resources
            <ArrowDown size="16" />
          </h2>
          <div className="flex flex-col gap-3">
            <ResourceCard
              type="book"
              img_src={book}
              title="The Embedded Entrepreneur"
              caption="Instead of building solutions looking for customers, Arvid Kahl described how to find customers first, and build a solution with them."
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
        </div>

        {/* TOOLS */}
        <div className="w-full max-w-7xl flex flex-col justify-center gap-6 min-h-[38vh]">
          <h2 className="font-display uppercase text-center flex gap-2 justify-center items-center mx-auto">
            <ArrowDown size="16" />
            Tools to Learn
            <ArrowDown size="16" />
          </h2>
          <div className="flex flex-row flex-wrap justify-center gap-3">
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
            <ToolCard title="Gumroad" url="https://www.gumroad.com/">
              <svg
                width="716"
                height="716"
                viewBox="0 0 716 716"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clip-path="url(#clip0_12_12)">
                  <path
                    d="M472.09 449.603C512.656 449.603 512.656 510.329 472.09 510.329C431.659 510.329 431.659 449.603 472.09 449.603ZM636.3 33.0927C676.732 33.0927 676.732 93.8185 636.3 93.8185C595.734 93.8185 595.734 33.0927 636.3 33.0927V33.0927ZM99.0542 92.655H579.893C586.547 105.529 597.402 115.742 610.657 121.6C623.912 127.458 638.772 128.61 652.771 124.863C666.771 121.117 679.069 112.697 687.627 101.002C696.184 89.3062 700.487 75.0368 699.822 60.56C699.156 46.0832 693.562 32.2688 683.968 21.4077C674.373 10.5465 661.354 3.29128 647.07 0.845041C632.786 -1.6012 618.095 0.908569 605.433 7.95813C592.771 15.0077 582.899 26.1735 577.454 39.6039H99.0766C52.6932 39.6039 16.2219 74.9116 16.2219 119.908V631.736C16.2219 677.426 54.2147 716 99.0766 716H610.905C656.013 716 692.596 678.231 692.596 631.736V328.04C692.596 282.35 656.013 245.185 610.905 245.185H307.321C260.937 245.185 221.781 283.178 221.781 328.04V423.492C221.781 467.772 260.132 503.796 307.321 503.796H413.378C418.102 515.503 426.219 525.531 436.684 532.592C447.15 539.653 459.488 543.424 472.113 543.422C488.96 543.422 505.117 536.729 517.03 524.816C528.943 512.904 535.635 496.746 535.635 479.899C535.635 463.052 528.943 446.895 517.03 434.982C505.117 423.069 488.96 416.376 472.113 416.376C460.48 416.392 449.075 419.607 439.147 425.668C429.218 431.73 421.147 440.405 415.817 450.744H307.321C291.703 450.744 274.81 440.362 274.81 423.469V328.018C274.81 312.4 290.316 298.192 307.321 298.192H610.905C626.992 298.192 639.567 311.371 639.567 328.018V631.713C639.567 648.607 626.388 662.949 610.905 662.949H99.0766C83.2351 662.949 69.2507 648.271 69.2507 631.713V119.885C69.2507 104.379 82.1834 92.7221 99.0766 92.7221L99.0542 92.655Z"
                    fill="white"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_12_12">
                    <rect width="716" height="716" fill="white" />
                  </clipPath>
                </defs>
              </svg>
            </ToolCard>
            <ToolCard
              title="Premiere"
              url="https://www.adobe.com/products/premiere.html"
            >
              <svg
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clip-path="url(#clip0_1_97)">
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
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
                    <rect width="16" height="16" fill="white" />
                  </clipPath>
                </defs>
              </svg>
            </ToolCard>
          </div>
        </div>

        {/* PEOPLE */}
        <div className="w-full max-w-7xl flex flex-col justify-center gap-6 min-h-[38vh]">
          <h2 className="font-display uppercase text-center flex gap-2 justify-center items-center mx-auto">
            <ArrowDown size="16" />
            People to Follow
            <ArrowDown size="16" />
          </h2>
          <div className="flex flex-row flex-wrap justify-center gap-3">
            <PersonCard
              title="Jack Butcher"
              handle="@jackbutcher"
              caption="Visualize Value"
              url="https://twitter.com/jackbutcher"
              img_src={personJackButcher}
            ></PersonCard>
            <PersonCard
              title="Michal Malewicz"
              handle="@michalmalewicz"
              caption="Designer, Author, YouTuber"
              url="https://twitter.com/michalmalewicz"
              img_src={personMalewicz}
            ></PersonCard>
            <PersonCard
              title="Arvid Kahl"
              handle="@arvidkahl"
              caption="The Bootstrapped Founder"
              url="https://twitter.com/arvidkahl"
              img_src={personArvidKahl}
            ></PersonCard>
          </div>
        </div>

        <div className="z-50 fixed bottom-6 left-6 max-w-md w-full rounded-xl bg-black/80 backdrop-blur-lg p-6 flex flex-col gap-3">
          <h1 className="font-display text-r3">
            Enter the Library
          </h1>
          <p className="text-r1 opacity-50 mb-3">
            The full library of Design Navigator with 100+ resources is available
            to all Design Disciplin members.
          </p>
          <a
            href="https://www.designdisciplin.com/#/portal/signup"
            target="_blank"
            className="font-display font-medium uppercase border-2 border-cyan-400 text-cyan-400 rounded-full px-6 py-3 w-max hover:border-white hover:text-white transition-colors"
          >
            Join Design Disciplin
          </a>
        </div>

        <Lifestyles message="You can also check out:"></Lifestyles>

      </div>
    </div>
  );
}
