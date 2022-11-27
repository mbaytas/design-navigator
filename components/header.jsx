import Link from "next/link";

import { Share } from "@carbon/icons-react";

export default function Header() {
  return (
    <header className="flex flex-row justify-between w-full max-w-7xl mx-8 my-4">
      <Link href="/" className="font-display text-2xl">
        <strong>Design</strong> Lifestyles
      </Link>
      <a
        href=""
        className="text-xl flex flex-row items-center gap-2 font-display uppercase opacity-60 hover:opacity-100 transition-opacity duration-150"
      >
        <Share size="24"></Share>
        <span>Share</span>
      </a>
    </header>
  );
}
