import { ArrowDown } from "@carbon/icons-react";

export default function SectionHeading(props) {
  return (
    <h2 className="font-display uppercase text-center flex gap-2 justify-center items-center mx-auto">
      <ArrowDown size="16" className="opacity-80" />
      {props.title}
      <ArrowDown size="16" className="opacity-80" />
    </h2>
  );
}
