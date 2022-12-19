import { useState } from "react";

import Link from "next/link";

import { Information } from "@carbon/icons-react";

export default function Header(props) {
  return (
    <header className="flex flex-row justify-between items-center w-full px-3 py-2 border-b-2 border-white/40">
      <Link
        href="/"
        className="font-display text-2xl opacity-80 hover:opacity-100 active:opacity-70 transition-opacity"
      >
        <strong>Design</strong> Navigator
      </Link>
      <div
        href="#"
        className="secret-button flex flex-row items-center gap-2 font-display text-r1 font-medium uppercase opacity-80 cursor-pointer"
        onClick={() => props.setIsAboutDialogOpen(true)}
      >
        <Information size="20"></Information>{" "}
        <span className="hidden sd:block">About</span>
      </div>
    </header>
  );
}
