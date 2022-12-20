import SectionHeading from "./sectionHeading";
import Progressbar from "./progressbar";

export default function CareerCharacter(props) {
  return (
    <section className="section-character">
      {/* <SectionHeading title="Characteristics" /> */}
      <div className="bg-black/40 backdrop-blur p-6 justify-center gap-3 rounded-none grid sd:grid-cols-3 items-center gap-x-6 gap-y-6 mx-auto w-full border-2 border-white/20">
        <div className="opacity-80 text-r1 col-span-full max-w-md mb-3 flex flex-col gap-3">
          <p>{props.p1}</p>
          <p>{props.p2}</p>
        </div>
        <Progressbar value={props.progressive} label="progressive" />
        <Progressbar value={props.social} label="social" />
        <Progressbar value={props.strategic} label="strategic" />
      </div>
    </section>
  );
}
