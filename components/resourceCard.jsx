import Image from "next/image";

import { Time, Currency } from "@carbon/icons-react";

export default function ResourceCard(props) {
  const { img_src, title, caption, price, time, url } = props;

  return (
    <a className="flex flex-row items-center gap-4 rounded-2xl hover:bg-white/20 transition-colors duration-150 p-4 cursor-pointer" href={url}>
      <div className="h-48 w-96 rounded-xl overflow-hidden">
        <Image className="h-full w-full object-cover" src={img_src}></Image>
      </div>
      <div className="flex flex-col gap-2 w-full">
        <h4 className="font-display font-bold text-xl">{title}</h4>
        <p className="opacity-80">{caption}</p>
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
      </div>
    </a>
  );
}
