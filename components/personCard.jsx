import Image from "next/image";

import { Launch } from "@carbon/icons-react";

export default function ToolCard(props) {
  const { title, handle, caption, url, img_src } = props;

  return (
    <a
      href={url}
      target="_blank"
      className="grid grid-cols-[4.5rem_1fr] items-center gap-3 rounded-xl bg-gradient-to-b from-white/10 via-white/5 to-white/5 hover:bg-white/10 active:bg-white/20 active:transition-none transition-colors w-full max-w-sm p-3 relative group cursor-pointer"
    >
      <Launch
        size="16"
        className="absolute top-4 right-4 opacity-0 -translate-x-1 translate-y-1 group-hover:opacity-100  group-hover:translate-x-0 group-hover:translate-y-0 group-active:opacity-100  group-active:translate-x-0 group-active:translate-y-0 transition-[opacity,transform] group-active:transition-none"
      />
      <div className="h-[4.5rem] w-full rounded-full overflow-hidden flex justify-center items-center shrink-0">
        <Image
          className="h-full w-full object-cover shadow-spt"
          src={img_src}
          placeholder="blur"
          alt={title}
        ></Image>
      </div>
      <div className="flex flex-col gap-1 shrink">
        <h4 className="font-display font-medium text-base">{title}</h4>
        <p className="text-xs font-medium uppercase opacity-50 group-hover:opacity-100 group-active:opacity-100 transition-opacity group-active:transition-none">
          {handle}
        </p>
        <p className="text-sm opacity-40 mt-1">{caption}</p>
      </div>
    </a>
  );
}
