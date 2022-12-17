import Image from "next/image";

import {
  ArrowDown,
  Blog,
  Book,
  Calendar,
  Course,
  Currency,
  Launch,
  Radio,
  Video,
  Time,
} from "@carbon/icons-react";

export default function ResourceCard(props) {
  const { type, img_src, title, caption, price, time, url } = props;

  return (
    <a
      className="grid sd:grid-cols-[6rem_1fr] gap-y-2 gap-x-2 items-center group"
      href={url}
      target="_blank"
    >
      <div className="flex sd:flex-col items-center sd:justify-center sd:text-center mt-6 mx-4 sd:m-0 gap-2 opacity-60 group-hover:opacity-100 transition-opacity">
        {
          {
            book: <Book size="24" />,
            course: <Course size="24" />,
            podcast: <Radio size="24" />,
            blog: <Blog size="24" />,
            channel: <Video size="24" />,
          }[type]
        }
        <h3 className="text-sm capitalize">Best {type}</h3>
      </div>
      <div className="flex flex-row items-center gap-4 rounded-2xl group-hover:bg-white/20 transition-colors p-4 relative">
        <Launch
          size="16"
          className="absolute top-4 right-4 opacity-0 -translate-x-1 translate-y-1 group-hover:opacity-60 transition-[opacity,transform] group-hover:translate-x-0 group-hover:translate-y-0"
        />
        <div className="h-48 w-72 rounded-xl overflow-hidden">
          <Image
            className="h-full w-full object-cover shadow-spt"
            src={img_src}
            placeholder="blur"
            alt={title}
          ></Image>
        </div>
        <div className="flex flex-col gap-2 w-full">
          <h4 className="font-display font-bold text-xl">{title}</h4>
          <div className="flex gap-2 text-sm items-center opacity-60">
            <div className="flex gap-1 items-center">
              <Currency size="20" />
              {price}
            </div>
            <div className="flex gap-1 items-center">
              <Time size="20" />
              {time}
            </div>
          </div>
          <p className="opacity-80 max-w-lg w-full leading-snug">{caption}</p>
        </div>
      </div>
    </a>
  );
}
