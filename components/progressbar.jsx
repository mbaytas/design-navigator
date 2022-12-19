export default function Progressbar(props) {
  return (
    <div className="flex flex-col gap-1 w-full mx-auto">
      <span className="text-sm font-display uppercase font-medium opacity-50">
        {props.label}
      </span>
      <div className="w-full h-[6px] bg-white/40">
        <div className="h-full bg-white" style={{width: props.value}} ></div>
      </div>
    </div>
  );
}
