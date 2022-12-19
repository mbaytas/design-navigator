import { Fragment } from "react";

import { Dialog, Transition } from "@headlessui/react";

import { Close } from "@carbon/icons-react";

export default function AboutDialog(props) {
  return (
    <Transition
      show={props.isAboutDialogOpen}
      enter="transition duration-300 ease-out"
      enterFrom="transform scale-125 opacity-0"
      enterTo="transform scale-100 opacity-100"
      leave="transition duration-300 ease-out"
      leaveFrom="transform scale-100 opacity-100"
      leaveTo="transform scale-125 opacity-0"
      as={Fragment}
    >
      <Dialog
        onClose={() => props.setIsAboutDialogOpen(false)}
        className="z-50 fixed inset-0 w-screen h-screen bg-transparent text-white backdrop-blur-xl flex flex-col justify-start items-center p-6 gap-3 overflow-y-scroll"
      >
        <div className="flex w-full max-w-lg justify-end">
          <div className="secret-button opacity-50">
            <Close size={32} className></Close>
          </div>
        </div>
        <Dialog.Panel className="">
          <div className="flex flex-col items-start w-full max-w-lg gap-12 p-6 bg-black/90 border border-white/20 rounded-lg">
            <Dialog.Title className="flex flex-col gap-6">
              <p className="text-r1 font-display opacity-50">
                December 23, 2022
              </p>
              <h1 className="text-r3 font-display font-bold">Dear Designer,</h1>
            </Dialog.Title>
            <Dialog.Description className="flex flex-col gap-3 text-r1">
              <p className="leading-relaxed opacity-80">
                I have been designing for 20 years, studying the design
                profession for 10 years, and mentoring designers for 8 years.
              </p>
              <p className="leading-relaxed opacity-50">
                I reformed my own career more than once: moving between
                freelancing, academia, and recently, the creator economy.
              </p>
              <p className="leading-relaxed opacity-50">
                These transitions were challenging. The choice of being an
                employee, freelancer, or founder is not simply to do the same
                work in different clothes. It means to immerse yourself in
                different ecosystems of communities and resources.
              </p>
              <p className="leading-relaxed opacity-80">
                These are different worlds in the multiverse of design.
              </p>
              <p className="leading-relaxed opacity-50">
                It's possible to have great success in each of these worlds. And
                the way to achieve success is commitment. The skills, resources,
                and connections you accumulate will compound over time. But move
                between worlds, and you will start over.
              </p>
              <p className="leading-relaxed opacity-80">
                Sounds simple. But it took me 20 years to figure it out.
              </p>
              <p className="leading-relaxed opacity-50">
                Design Navigator is a resource I developed to help designers
                choose their world and excel in it.
              </p>
              <p className="leading-relaxed opacity-50">
                We focus where design meets technology: UX, UI, web,
                interaction, and digital product designers will find the most
                value in our library. But the tool will inspire all.
              </p>
            </Dialog.Description>

            <div className="flex flex-col">
              <p className="leading-relaxed opacity-50 mb-2">Sincerely,</p>
              <p className="font-display text-r2 font-bold leading-normal overflow-ellipsis overflow-hidden whitespace-nowrap">
                  dr. Mehmet Aydın Baytaş{" "}
                  <span className="font-normal opacity-80">
                    {" "}
                    |{" "}
                    <a
                      href="https://twitter.com/doctorBaytas"
                      target="_blank"
                      className="text-r1 anchor font-normal"
                    >
                      @DOCTORBAYTAS
                    </a>
                  </span>
              </p>
              <p className="font-display text-r2 opacity-50 mt-1">
                Founder + Editor-in-Chief, Design Disciplin
              </p>
            </div>
          </div>

          <div className="flex flex-col items-start w-full max-w-lg gap-1 p-6">
            <p className="text-xs opacity-50 leading-normal">
              Research by{" "}
              <a
                href="https://www.linkedin.com/in/fabiocassisa/"
                target="_blank"
                className="anchor"
              >
                Fabio Cassisa
              </a>
            </p>
            <p className="text-xs opacity-50 leading-normal">
              Inspired by{" "}
              <a
                href="https://www.designerpaths.com/"
                target="_blank"
                className="anchor"
              >
                DesignerPaths
              </a>
            </p>
            <p className="text-xs opacity-50 leading-normal max-w-sm">
              Designed and engineered by{" "}
              <a
                href="https://www.weatherlight.com/"
                target="_blank"
                className="anchor"
              >
                WEATHERLIGHT c/o dr. M.A. Baytaş
              </a>{" "}
              using Next.js, TailwindCSS, and Framer Motion.
            </p>
          </div>
        </Dialog.Panel>
      </Dialog>
    </Transition>
  );
}
