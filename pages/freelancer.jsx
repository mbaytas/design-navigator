import Head from "next/head";

import Lifestyles from "../components/lifestyles";
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
  Calendar,
  Radio,
  Video,
} from "@carbon/icons-react";

export default function Freelancer() {
  return (
    <div className="bg-black text-white">
      <div className="flex flex-col justify-between items-center min-h-screen gap-16">

        <div className="w-full max-w-md flex flex-col justify-center gap-2 min-h-[38vh]">
          <Calendar size="32" className="opacity-80" />
          <p className="text-r1 opacity-60">We think you'll thrive as a...</p>
          <h1 className="font-display text-r4 font-bold">Freelancer</h1>
          <p className="opacity-60">
            Freelancers are self-employed, usually taking up short-term projects
            rather than long-term employment. Freelancers might be fully
            independent, or be represented by an agency that markets their work
            to clients.
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
          </div>
        </div>

        <Lifestyles message="You can also check out:"></Lifestyles>

      </div>
    </div>
  );
}
