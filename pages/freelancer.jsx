import Head from "next/head";
import Image from "next/image";

import ResourceCard from "../components/resourceCard";

import book_creativeStrategy from "../public/book_creativestrategy.png";
import course_6figure from "../public/course_6figure.jpg";
import podcast_double from "../public/podcast_double.jpg";
import blog_futur from "../public/blog_futur.jpeg";
import yt_mizko from "../public/yt_mizko.jpg";

import {
  ArrowDown,
  Blog,
  Book,
  Course,
  Headphones,
  Radio,
  Video,
} from "@carbon/icons-react";

import Header from "../components/header";
import Footer from "../components/footer";

import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className="bg-black text-white">
      <div className="flex flex-col justify-between items-center min-h-screen">
        <Header></Header>

        <div className="w-full max-w-lg flex flex-col gap-2 mih-h-[38vh]">
          <Headphones size="64" className="opacity-80"></Headphones>
          <p className="text-r1 opacity-60">We think you'll thrive as a...</p>
          <h1 className="font-display text-r4 font-bold">Freelancer</h1>
          <p className="text-r2 opacity-80">
            Freelancers are self-employed, usually not committed to a particular
            employer long-term. Freelancers might be fully independent, or be
            represented by an agency that markets their work to clients.
          </p>
        </div>

        <div className="w-full max-w-4xl flex flex-col gap-8 mih-h-[38vh]">
          <h2 className="font-display uppercase text-center flex gap-2 justify-center items-center mx-auto">
            <ArrowDown size="16" />
            Suggested Resources
            <ArrowDown size="16" />
          </h2>
          <div className="grid grid-cols-[6rem_1fr] gap-y-2 gap-x-2 items-center">
            <div className="flex flex-col items-center justify-center text-center gap-2">
              <Book size="24" />
              <h3 className="text-xs">Best Book</h3>
            </div>
            <ResourceCard
              img_src={book_creativeStrategy}
              title="Creative Strategy and the Business of Design"
              caption="Left-brain business skills for right-brain creative thinkers &ndash;
          learn about business and marketing to drive your creative work."
              price="$16"
              time="208 pages"
            />
            <div className="flex flex-col items-center justify-center text-center gap-2">
              <Course size="24" />
              <h3 className="text-xs">Best Course</h3>
            </div>
            <ResourceCard
              img_src={course_6figure}
              title="6-figure Freelancer"
              caption="Attract a steady stream of high-value clients, break free from
              feast-and-famine cycles, and regain control over your
              schedule."
              price="$695"
              time="12 weeks"
            />
            <div className="flex flex-col items-center justify-center text-center gap-2">
              <Radio size="24" />
              <h3 className="text-xs">Best Podcast</h3>
            </div>
            <ResourceCard
              img_src={podcast_double}
              title="Double Your Freelancing"
              caption="Generate leads, automate your business, and close big deals."
              price="Free"
              time="30 minutes"
            />
            <div className="flex flex-col items-center justify-center text-center gap-2">
              <Blog size="24" />
              <h3 className="text-xs">Best Blog</h3>
            </div>
            <ResourceCard
              img_src={blog_futur}
              title="The Futur Blog"
              caption="The latest tips, tricks, and happenings in business and design."
              price="Free"
              time="10 minutes"
              url="https://thefutur.com/blog"
            />
            <div className="flex flex-col items-center justify-center text-center gap-2">
              <Video size="24" />
              <h3 className="text-xs">Best YouTube Channel</h3>
            </div>
            <ResourceCard
              img_src={yt_mizko}
              title="Mizko"
              caption="Weekly videos on product design, growth, business strategies and entrepreneurship."
              price="Free"
              time="10 minutes"
              url="https://www.youtube.com/@Mizko"
            />
          </div>
        </div>

        <Footer></Footer>
      </div>
    </div>
  );
}
