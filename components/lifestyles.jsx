import Link from "next/link";

import {
  Calendar,
  Portfolio,
  Analytics,
  Rocket,
  PenFountain,
  Building,
  Microscope,
} from "@carbon/icons-react";

function LifestyleLink(props) {
  const { icon, label, href } = props;
  return (
    <Link
      className="flex flex-col justify-end items-center gap-1 opacity-40 hover:opacity-100 hover:scale-105 transition-[opacity,transform]"
      href={href}
    >
      {icon}
      <p className="font-display font-medium">{label}</p>
    </Link>
  );
}

export default function Lifestyles(props) {
  const { message } = props;

  return (
    <aside className="flex flex-wrap flex-row justify-center items-end max-w-5xl mx-auto gap-x-6 gap-y-6">
      <div className="w-full text-center text-sm opacity-40 col-span-full">
        {message}
      </div>
      <LifestyleLink
        label="Creator"
        href="/creator"
        icon={<PenFountain size="24" />}
      />
      <LifestyleLink
        label="Employee"
        href="/employee"
        icon={<Portfolio size="24" />}
      />
      <LifestyleLink
        label="Freelancer"
        href="/freelancer"
        icon={<Calendar size="24" />}
      />
      <LifestyleLink
        label="Startupper"
        href="/startupper"
        icon={<Rocket size="24" />}
      />
    </aside>
  );
}
