import Head from "next/head";

import Lifestyles from "../components/lifestyles";
import ResourceCard from "../components/resourceCard";

import book from "../public/book_embedded.png";
import course from "../public/course_buildonce.png";
import podcast from "../public/podcast_indie.png";
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

export default function Creator() {
  return (
    <div className="bg-black text-white">
      <div className="flex flex-col justify-between items-center min-h-screen gap-16">
        <Header></Header>

        <div className="w-full max-w-md flex flex-col justify-center gap-2 min-h-[38vh]">
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
              title="The Embedded Entrepreneur"
              caption="Instead of building solutions looking for customers, Arvid Kahl described how to find customers first, and build a solution with them."
              price="$25"
              time="308 pages"
              url="https://geni.us/embedded-entrepreneur"
            />
            <ResourceCard
              type="course"
              img_src={course}
              title="Build Once, Sell twice"
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
