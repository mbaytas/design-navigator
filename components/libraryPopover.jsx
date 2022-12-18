import { Fragment, useState } from "react";

import { Popover, Transition } from "@headlessui/react";

import { CaretDown, Close } from "@carbon/icons-react";

export default function LibraryPopover() {
  return (
    <Popover>
      {({ open }) => (
        <div className="z-50 ml-auto sticky top-6 max-w-sm w-full flex flex-col items-end gap-3">
          <Popover.Button className="hinted-button max-w-max flex flex-row gap-1 items-center opacity-50 bg-white/10">
            Full Access
            <CaretDown size={16} />
          </Popover.Button>

          <Transition
            show={open}
            enter="transition duration-300 ease-out"
            enterFrom="transform scale-125 opacity-0"
            enterTo="transform scale-100 opacity-100"
            leave="transition duration-300 ease-out"
            leaveFrom="transform scale-100 opacity-100"
            leaveTo="transform scale-125 opacity-0"
            as={Fragment}
          >
            <Popover.Panel static className="">
              <div className="flex flex-col items-start w-full max-w-lg border border-white/20 rounded-xl bg-black/80 backdrop-blur-lg p-6 gap-3 text-white">
                <div className="flex w-full items-center justify-between gap-6">
                  <h1 className="font-display text-r3">Enter the Library</h1>
                  <div className="secret-button opacity-50">
                    <Close size={32} className></Close>
                  </div>
                </div>
                <p className="text-r1 opacity-50 mb-3">
                  The full library of Design Navigator with 100+ resources is
                  available to all Design Disciplin members.
                </p>
                <a
                  href="https://www.designdisciplin.com/#/portal/signup"
                  target="_blank"
                  className="font-display font-medium uppercase border-2 border-cyan-400 text-cyan-400 rounded-full px-6 py-3 w-max hover:border-white hover:text-white transition-colors"
                >
                  Sign Up
                </a>
              </div>
            </Popover.Panel>
          </Transition>
        </div>
      )}
    </Popover>
  );
}
