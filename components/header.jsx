import { useState } from "react";

import Link from "next/link";

import { Information } from "@carbon/icons-react";

export default function Header(props) {

  return (
    <header className="flex flex-row justify-between w-full px-8 py-3  border-b-2 border-white/40">
      <Link href="/" className="font-display text-2xl">
        <strong>Design</strong> Navigator
      </Link>
      <div
        href="#"
        className="flex flex-row items-center gap-2 font-display font-medium uppercase opacity-60 hover:opacity-100 transition-opacity cursor-pointer"
        onClick={() => props.setIsAboutDialogOpen(true)}
      >
        <Information size="24"></Information> About
      </div>
      
    </header>
  );
}
