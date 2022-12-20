import Link from "next/link";

import SecretButton from "./secretButton";

import {
  Calendar,
  Portfolio,
  Rocket,
  PenFountain,
  Repeat,
} from "@carbon/icons-react";

function CareerLink(props) {
  const { icon, label, href } = props;
  return (
    <Link
      className="secret-button flex flex-col justify-end items-center gap-1 opacity-50 hover:opacity-100 pt-3"
      href={href}
    >
      {icon}
      <p className="font-display font-medium text-r1 leading-none">{label}</p>
    </Link>
  );
}

export default function CareerSelector(props) {
  const { message } = props;

  return (
    <aside className="grid grid-cols-4 items-end max-w-5xl mx-auto gap-1">
      {props.repeatButton && (
        <div className="w-full col-span-full flex itemx-center justify-center mb-6">
          <Link
            href="/"
            className="hinted-button flex flex-row items-center gap-2 font-display text-r1 font-medium opacity-80 cursor-pointer"
          >
            <Repeat size={20}></Repeat>
            Repeat the Test
          </Link>
        </div>
      )}
      <div className="w-full text-center text-r1 opacity-40 col-span-full">
        {message}
      </div>
      <CareerLink
        label="Creator"
        href="/creator"
        icon={<PenFountain size="24" />}
      />
      <CareerLink
        label="Employee"
        href="/employee"
        icon={<Portfolio size="24" />}
      />
      <CareerLink
        label="Freelancer"
        href="/freelancer"
        icon={<Calendar size="24" />}
      />
      <CareerLink label="Founder" href="/founder" icon={<Rocket size="24" />} />
    </aside>
  );
}
