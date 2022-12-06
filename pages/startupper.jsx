import Head from "next/head";

import Lifestyles from "../components/lifestyles";
import ResourceCard from "../components/resourceCard";

import book from "../public/book_hardthing.png";
import course from "../public/course_altman.png";
import podcast from "../public/podcast_masters.png";
import blog from "../public/blog_blank.png";
import yt from "../public/yt_garrytan.png";

import {
  ArrowDown,
  Blog,
  Book,
  Course,
  Calendar,
  Radio,
  Video,
} from "@carbon/icons-react";

import Header from "../components/header";
import Footer from "../components/footer";

import styles from "../styles/Home.module.css";

export default function Startupper() {
  return (
    <div className="bg-black text-white">
      <div className="flex flex-col justify-between items-center min-h-screen gap-16">
        <Header></Header>

        <div className="w-full max-w-md flex flex-col justify-center gap-2 min-h-[38vh]">
          <Calendar size="32" className="opacity-80" />
          <p className="text-r1 opacity-60">We think you'll thrive as a...</p>
          <h1 className="font-display text-r4 font-bold">Startupper</h1>
          <p className="opacity-60">
            Startups are very dynamic environments with high risk and high
            potential for extraordinary results. Startup founders and employees
            may have to drive and navigate profound strategic shifts, which
            means that job descriptions are seldom set in stone.
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
        </div>

        <Lifestyles message="You can also check out:"></Lifestyles>

        <Footer></Footer>
      </div>
    </div>
  );
}
