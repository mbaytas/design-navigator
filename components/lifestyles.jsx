import Link from "next/link";

import {
  Headphones,
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
      className="flex flex-col justify-end items-center gap-1 opacity-40 hover:opacity-100 hover:scale-105 transition-[opacity,transform] duration-150"
      href={href}
    >
      {icon}
      <p className="font-display font-medium">{label}</p>
    </Link>
  );
}

export default function Lifestyles() {
  return (
    <aside className="w-full flex justify-center items-end max-w-5xl mx-auto gap-x-8 gap-y-6 flex-wrap">
      <div className="w-full text-center text-sm opacity-40">
        ...or jump to the resources:
      </div>
      <LifestyleLink
        label="Freelancer"
        href="/freelancer"
        icon={<Headphones size="32" />}
      />
      <LifestyleLink
        label="Corporate"
        href="/corporate"
        icon={<Portfolio size="32" />}
      />
      <LifestyleLink
        label="Founder"
        href="/founder"
        icon={<Analytics size="32" />}
      />
      <LifestyleLink
        label="Startupper"
        href="/startupper"
        icon={<Rocket size="32" />}
      />
      <LifestyleLink
        label="Creator"
        href="/creator"
        icon={<PenFountain size="32" />}
      />
      <LifestyleLink
        label="Agency"
        href="/agency"
        icon={<Building size="32" />}
      />
      <LifestyleLink
        label="Scholar"
        href="/scholar"
        icon={<Microscope size="32" />}
      />
    </aside>
  );
}
