export default function Progressbar(props) {
  return (
    <div className="flex flex-col w-full mx-auto">
      <span className="text-sm font-display uppercase font-medium opacity-60 mb-1">
        {props.label}
      </span>
      <div className="w-full h-[6px] bg-white/40 mb-2">
        <div className="h-full bg-white" style={{width: props.value}} ></div>
      </div>
      <span className="text-sm font-display font-medium opacity-50">
        {props.caption}
      </span>
    </div>
  );
}
