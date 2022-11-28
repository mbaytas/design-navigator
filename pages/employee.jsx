import Head from "next/head";
import Image from "next/image";

import Lifestyles from "../components/lifestyles";
import ResourceCard from "../components/resourceCard";

import book_creativeConfidence from "../public/book_creativeconfidence.jpg";
import course_shiftnudge from "../public/course_shiftnudge.avif";
import podcast_designdetails from "../public/podcast_designdetails.jpg";
import blog_nngroup from "../public/blog_nngroup.webp";
import yt_craft from "../public/yt_craft.jpg";

import { ArrowDown, Portfolio } from "@carbon/icons-react";

import Header from "../components/header";
import Footer from "../components/footer";

export default function Employee() {
  return (
    <div className="bg-black text-white">
      <div className="flex flex-col justify-between items-center min-h-screen gap-16">
        <Header></Header>

        <div className="w-full max-w-md flex flex-col justify-center gap-2 min-h-[38vh]">
          <Portfolio size="64" className="opacity-80" />
          <p className="text-r1 opacity-60">We think you'll thrive as a...</p>
          <h1 className="font-display text-r4 font-bold">Career Employee</h1>
          <p className="text-r2 opacity-60">
            Employment at an established company provides stability and peace of
            mind, as well as opportunities for long-term, large-scale projects.
            Larger companies offer well-defined carreer paths where you can
            thrive for many years while growing your expertise and influence.
          </p>
        </div>

        <div className="w-full max-w-4xl flex flex-col gap-8 mih-h-[38vh]">
          <h2 className="font-display uppercase text-center flex gap-2 justify-center items-center mx-auto">
            <ArrowDown size="16" />
            Suggested Resources
            <ArrowDown size="16" />
          </h2>
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
        </div>

        <Lifestyles message="You can also check out:"></Lifestyles>

        <Footer></Footer>
      </div>
    </div>
  );
}
