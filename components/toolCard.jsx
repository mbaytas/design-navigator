import Image from "next/image";

import { Launch } from "@carbon/icons-react";

export default function ToolCard(props) {
  const { title, url, children } = props;

  return (
    <a
      href={url}
      target="_blank"
      className="flex flex-col justify-between gap-4 rounded-xl bg-gradient-to-b from-white/10 via-white/5 to-white/5 hover:bg-white/10 active:bg-white/20 active:transition-none transition-colors w-36 p-6 relative group cursor-pointer"
    >
      <Launch
        size="16"
        className="absolute top-4 right-4 opacity-0 -translate-x-1 translate-y-1 group-hover:opacity-100 group-hover:translate-x-0 group-hover:translate-y-0 group-active:opacity-100 group-active:translate-x-0 group-active:translate-y-0 transition-[opacity,transform] group-active:transition-none"
      />
      <div className="h-9 w-9 overflow-hidden flex items-center justify-center opacity-50 group-hover:opacity-100 group-active:opacity-100 transition-opacity group-active:transition-none">
        {children}
      </div>
      <h4 className="font-display font-medium text-base leading-tight">
        {title}
      </h4>
    </a>
  );
}
