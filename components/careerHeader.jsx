import CareerBackground from "./careerBackground";

export default function CareerHeader(props) {
  return (
    <>
      <CareerBackground
        src={props.bg_src}
        alt={props.bg_alt}
      ></CareerBackground>
      <header className="career-header">
        <div className="flex gap-6 justify-between items-center">
          <div className="">
            <p className="text-r1 font-display font-medium opacity-50 mb-1">
              You would do well as a...
            </p>
            <h1 className="font-display text-r4 font-bold mb-3">
              {props.title}
            </h1>
          </div>
          <div className="bg-black/30 backdrop-blur p-6 rounded-full">
            <props.Icon size={42} className="opacity-80" />
          </div>
        </div>
        <p className="opacity-80 text-r2">{props.p1}</p>
        <p className="opacity-50 text-r1">{props.p2}</p>
      </header>
    </>
  );
}
