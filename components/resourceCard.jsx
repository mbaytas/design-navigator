import Image from "next/image";

import {
  Blog,
  Book,
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
      className="grid sd:grid-cols-[6rem_1fr] gap-y-2 gap-x-2 items-center group w-full"
      href={url}
      target="_blank"
    >
      <div className="flex sd:flex-col items-center sd:justify-center sd:text-center mt-6 mx-4 sd:m-0 gap-2 opacity-50 group-hover:opacity-100 group-active:opacity-100 transition-opacity group-active:transition-none">
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
      <div className="w-full grid grid-cols-[6rem_1fr] sd:grid-cols-[12rem_1fr] gap-4 rounded-xl bg-gradient-to-b from-white/10 via-white/5 to-white/5 group-hover:bg-white/10 group-active:bg-white/20 group-active:transition-none transition-[background-color,background-image] p-3 relative">
        <Launch
          size="16"
          className="absolute top-4 right-4 opacity-0 -translate-x-1 translate-y-1 group-hover:opacity-100 group-hover:translate-x-0 group-hover:translate-y-0 group-active:opacity-100 group-active:translate-x-0 group-active:translate-y-0 transition-[opacity,transform]  group-active:transition-none"
        />
        <div className="h-24 sd:h-48 sd:row-span-2 w-full rounded-lg overflow-hidden">
          <Image
            className="h-full w-full object-cover shadow-spt"
            src={img_src}
            placeholder="blur"
            alt={title}
          ></Image>
        </div>
        <div className="flex flex-col gap-3 w-full self-center sd:self-end">
          <h4 className="font-display font-bold text-r2">
            {title}
          </h4>
          <div className="flex flex-wrap gap-y-1 gap-x-3 text-sm items-center opacity-50">
            <div className="flex gap-1 items-center">
              <Currency size="16" />
              {price}
            </div>
            <div className="flex gap-1 items-center">
              <Time size="16" />
              {time}
            </div>
          </div>
        </div>
        <p className="col-span-2 sd:col-span-1 sd:col-start-2 opacity-80 max-w-sm w-full leading-snug text-sm sd:mt-2">
          {caption}
        </p>
      </div>
    </a>
  );
}
