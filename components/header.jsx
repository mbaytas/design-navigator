import Link from "next/link";

import { Share } from "@carbon/icons-react";

export default function Header() {
  return (
    <header className="flex flex-row justify-between w-full px-8 py-2  border-b-2 border-white/40">
      <Link href="/" className="font-display text-2xl">
        <strong>Design</strong> Lifestyles
      </Link>
      <a
        href=""
        className="text-lg flex flex-row items-center gap-2 font-display uppercase opacity-60 hover:opacity-100 transition-opacity duration-150"
      >
        <Share size="20"></Share>
        <span>Share</span>
      </a>
    </header>
  );
}
