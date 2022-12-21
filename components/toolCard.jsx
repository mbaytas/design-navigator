import Image from "next/image";

import { Launch } from "@carbon/icons-react";

export default function ToolCard(props) {
  const { title, url, children } = props;

  return (
    <a
      href={url}
      target="_blank"
      className="flex flex-col justify-between gap-4 rounded-xl bg-white/5 hover:bg-white/10 active:bg-white/20 active:transition-none transition-colors w-36 p-6 relative group cursor-pointer"
    >
      <Launch
        size="16"
        className="absolute top-4 right-4 opacity-0 -translate-x-1 translate-y-1 group-hover:opacity-100 transition-[opacity,transform] group-hover:translate-x-0 group-hover:translate-y-0"
      />
      <div className="h-12 w-12 overflow-hidden flex items-center justify-center opacity-50 group-hover:opacity-100 transition-opacity">
        {children}
      </div>
      <h4 className="font-display font-medium text-base leading-tight">{title}</h4>
    </a>
  );
}
