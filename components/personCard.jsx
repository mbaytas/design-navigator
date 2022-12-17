import Image from "next/image";

import { Launch } from "@carbon/icons-react";

export default function ToolCard(props) {
  const { title, handle, caption, url, img_src } = props;

  return (
    <a
      href={url}
      target="_blank"
      className="flex flex-row items-end gap-3 rounded-xl bg-white/5 hover:bg-white/10 transition-colors w-full max-w-sm p-3 relative group cursor-pointer"
    >
      <Launch
        size="16"
        className="absolute top-4 right-4 opacity-0 -translate-x-1 translate-y-1 group-hover:opacity-100 transition-[opacity,transform] group-hover:translate-x-0 group-hover:translate-y-0"
      />
      <div className="h-36 w-36 rounded-xl overflow-hidden flex justify-center items-center shrink-0">
        <Image
          className="h-full w-full object-cover shadow-spt"
          src={img_src}
          placeholder="blur"
          alt={title}
        ></Image>
      </div>
      <div className="flex flex-col gap-1 shrink">
        <p className="text-xs uppercase opacity-50 group-hover:opacity-100 transition-opacity mb-2">
          {handle}
        </p>
        <h4 className="font-display font-medium text-xl">
          {title}
        </h4>
        <p className="text-sm opacity-50">
          {caption}
        </p>
      </div>
    </a>
  );
}
