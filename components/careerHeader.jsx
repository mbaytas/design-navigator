import CareerBackground from "./careerBackground";

export default function CareerHeader(props) {
  return (
    <>
      <CareerBackground
        src={props.bg_src}
        alt={props.bg_alt}
      ></CareerBackground>
      <header className="career-header">
        <div className="flex gap-6 justify-between items-center mb-3">
          <div className="">
            <p className="text-r1 font-display font-sem opacity-50 mb-3">
              You would do well as...
            </p>
            <h1 className="font-display text-r4 font-bold mb-3">
              {props.title}
            </h1>
          </div>
          <div className="bg-black/30 backdrop-blur p-5 rounded-full border-2 flex justify-center items-center">
            <props.Icon size={32} className="opacity-80" />
          </div>
        </div>
        <p className="opacity-80 text-r2">{props.p1}</p>
        <p className="opacity-50 text-r1">{props.p2}</p>
      </header>
    </>
  );
}
