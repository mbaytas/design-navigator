import { Information } from "@carbon/icons-react";

export default function Footer() {
  return (
    <footer className="px-3 py-6 flex flex-row gap-3 flex-wrap justify-between items-center w-full">
      <p className="w-full max-w-xs leading-tight">
        <span className="text-r1 opacity-80 font-display">Created by</span>
        <br />
        <a
          href="https://www.designdisciplin.com/"
          target="_blank"
          className="font-bold text-r2 opacity-80 hover:opacity-100 transition-opacity"
        >
          Design Disciplin
        </a>
      </p>
      <p className="w-full max-w-xs text-xs opacity-40">
        &copy; 2022{" "}
        <a
          href="https://www.weatherlight.com/"
          target="_blank"
          className="anchor"
        >
          WEATHERLIGHT
        </a>{" "}
        d/b/a Design Disciplin
        <br />
        Commissions may be earned from links on this website.
      </p>
    </footer>
  );
}
