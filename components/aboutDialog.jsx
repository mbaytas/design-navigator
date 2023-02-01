import { Fragment } from "react";

import { Dialog, Transition } from "@headlessui/react";

import { Close } from "@carbon/icons-react";

export default function AboutDialog(props) {
  return (
    <Transition
      show={props.isAboutDialogOpen}
      as={Fragment}
    >
      <Dialog
        onClose={() => props.setIsAboutDialogOpen(false)}
        className="z-40"
      >
        {/* Backdrop */}
        <Transition.Child
          as={Fragment}
          enter="transition duration-300 ease-out"
          enterFrom="transform scale-105 opacity-0"
          enterTo="transform scale-100 opacity-90"
          leave="transition duration-300 ease-out"
          leaveFrom="transform scale-100 opacity-90"
          leaveTo="transform scale-105 opacity-0"
        >
          <div
            className="fixed inset-0 bg-black backdrop-blur-2xl z-40"
            aria-hidden="true"
          />
        </Transition.Child>

        <Transition.Child
          as={Fragment}
          enter="transition duration-300 ease-out"
          enterFrom="transform scale-105 opacity-0"
          enterTo="transform scale-100 opacity-100"
          leave="transition duration-300 ease-out"
          leaveFrom="transform scale-100 opacity-100"
          leaveTo="transform scale-105 opacity-0"
        >
          {/* Scroll Container */}
          <div className="z-50 fixed inset-0 overflow-y-auto overflow-x-clip">
            {/* Layout Container */}
            <div className="flex flex-col justify-center items-center p-6 gap-3 text-white min-h-full">
              {/* Close Button */}
              <div className="flex w-full max-w-lg justify-end">
                <button className="secret-button opacity-50">
                  <Close
                    size={32}
                    className
                  ></Close>
                </button>
              </div>
              {/* Panel */}
              <Dialog.Panel className="">
                <div className="flex flex-col items-start w-full max-w-lg gap-12 p-6 bg-black/90 border-2">
                  <Dialog.Title className="flex flex-col gap-6">
                    <p className="text-r1 font-display opacity-50 font-medium">
                      February 3, 2023
                    </p>
                    <h1 className="text-r3 font-display font-bold">
                      Dear Designer,
                    </h1>
                  </Dialog.Title>
                  <Dialog.Description className="flex flex-col gap-3 text-r1">
                    <p className="leading-relaxed opacity-80">
                      I have been designing for 20 years, and studying the
                      design profession for 10 years.
                    </p>
                    <p className="leading-relaxed opacity-50">
                      I reformed my own career more than once: moving between
                      freelancing, academia, and recently, the creator economy.
                    </p>
                    <p className="leading-relaxed opacity-50">
                      These transitions were challenging. The choice of being an
                      employee, freelancer, or founder is not simply doing the
                      same work in different clothes. It means to immerse
                      yourself in different ecosystems, resources, and
                      communities.
                    </p>
                    <p className="leading-relaxed opacity-80">
                      These are different worlds in the multiverse of design.
                    </p>
                    <p className="leading-relaxed opacity-50">
                      It's possible to have great success in any of these
                      worlds. And what brings success is commitment. The skills,
                      resources, and connections you accumulate compound over
                      time. But move between worlds, and you start over.
                    </p>
                    <p className="leading-relaxed opacity-80">
                      Sounds simple. But it took me 20 years to figure it out.
                    </p>
                    <p className="leading-relaxed opacity-50">
                      Design Navigator is a resource I developed to help
                      designers choose their world and excel in it.
                    </p>
                    <p className="leading-relaxed opacity-50">
                      We focus where design meets technology: UX, UI, web,
                      interaction, and digital product designers will find the
                      most value in our library. But the tool will inspire all.
                    </p>
                  </Dialog.Description>

                  <div className="flex flex-col">
                    <p className="leading-relaxed opacity-50 mb-3 font-display font-medium">
                      Sincerely,
                    </p>
                    <p className="font-display text-r2 font-bold leading-normal overflow-ellipsis overflow-hidden whitespace-nowrap">
                      dr. Mehmet Aydın Baytaş{" "}
                      <span className="font-normal opacity-80">
                        {" "}
                        |{" "}
                        <a
                          href="https://twitter.com/doctorBaytas"
                          target="_blank"
                          className="text-r1 anchor-plain opacity-80 font-medium"
                        >
                          @DOCTORBAYTAS
                        </a>
                      </span>
                    </p>
                    <p className="font-display font-medium text-r2 opacity-50 mt-1">
                      Founder + Editor-in-Chief, Design Disciplin
                    </p>
                  </div>
                </div>

                <div className="flex flex-col items-start w-full max-w-lg gap-1 p-6 text-sm leading-normal">
                  <p>
                    <span className="opacity-50">Research by</span>{" "}
                    <a
                      href="https://www.linkedin.com/in/fabiocassisa/"
                      target="_blank"
                      className="anchor-plain opacity-50"
                    >
                      Fabio Cassisa
                    </a>
                    <span className="opacity-50">.</span>
                  </p>
                  <p>
                    <span className="opacity-50">Inspired by</span>{" "}
                    <a
                      href="https://www.designerpaths.com/"
                      target="_blank"
                      className="anchor-plain opacity-50"
                    >
                      DesignerPaths
                    </a>
                    <span className="opacity-50">.</span>
                  </p>
                  <p>
                    <span className="opacity-50">
                      Designed and engineered by
                    </span>{" "}
                    <a
                      href="https://www.weatherlight.com/"
                      target="_blank"
                      className="anchor-plain opacity-50"
                    >
                      WEATHERLIGHT c/o dr. M.A. Baytaş
                    </a>{" "}
                    <span className="opacity-50">
                      using Next.js, TailwindCSS, and Framer Motion.
                    </span>
                  </p>
                </div>
              </Dialog.Panel>
            </div>
          </div>
        </Transition.Child>
      </Dialog>
    </Transition>
  );
}
