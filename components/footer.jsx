import { Information } from "@carbon/icons-react";

export default function Footer() {
  return (
    <footer className="px-8 py-4 flex flex-row flex-wrap justify-between items-center w-full">
      <p className="w-full max-w-xs">
        <Information size='32'className="opacity-60 hover:opacity-100 transition-opacity cursor-pointer"/>
      </p>
      <p className="w-full max-w-xs">
        <span className="text-xs">Created by</span>
        <br />
        <a
          href="https://www.designdisciplin.com/"
          className="font-display font-bold"
        >
          Design Disciplin
        </a>
      </p>
      <p className="w-full max-w-xs text-xs opacity-60">
        Links to products on this website may utilize affiliate
        programs where we receive a commission at no extra cost to you if you
        make a purchase using them.
      </p>
    </footer>
  );
}
