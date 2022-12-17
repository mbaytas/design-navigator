import { Dialog } from "@headlessui/react";

import { Close } from "@carbon/icons-react";

export default function AboutDialog(props) {
  return (
    <Dialog
      open={props.isAboutDialogOpen}
      onClose={() => props.setIsAboutDialogOpen(false)}
      className="fixed w-screen h-screen top-0 left-0 bg-transparent text-white backdrop-blur-xl flex flex-col justify-center items-center p-6 gap-3"
    >
      <div className="flex w-full max-w-lg justify-end">
        <div className="p-6 cursor-pointer opacity-40 hover:opacity-100 transition-opacity">
          <Close size={32} className></Close>
        </div>
      </div>
      <Dialog.Panel className="">
        <div className="flex flex-col items-start w-full max-w-lg gap-12 p-6 bg-black/90 border border-white/20 rounded-xl">
          <Dialog.Title className="flex flex-col gap-6">
            <p className="text-r1 font-display leading-relaxed opacity-50">
              December 22, 2022
            </p>
            <h1 className="text-r3 font-display font-bold">Dear Designer,</h1>
          </Dialog.Title>
          <Dialog.Description className="flex flex-col gap-3 text-r1">
            <p className="leading-relaxed opacity-80">
              I have been designing for 20 years, studying the design profession
              for 10 years, and mentoring designers for 8 years.
            </p>
            <p className="leading-relaxed opacity-50">
              I reformed my own career more than once: moving between
              freelancing, academia, and recently, the creator economy.
            </p>
            <p className="leading-relaxed opacity-50">
              These transitions were challenging. The choice of being an
              employee, freelancer, or founder is not simply to do the same work
              in different clothes. It means to immerse yourself in different
              ecosystems of communities and resources.
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
              We focus where design meets technology: UX, UI, web, interaction,
              and digital product designers will find the most value in our
              library. But the tool will inspire all.
            </p>
          </Dialog.Description>

          <div className="flex flex-col gap-1">
            <p className="leading-relaxed opacity-50 mb-2">Sincerely,</p>
            <p className="font-display text-r2 font-bold leading-normal">
              dr. Mehmet Aydın Baytaş
            </p>
            <p className="font-display text-r2 opacity-50 leading-normal">
              Founder + Editor-in-Chief, Design Disciplin
            </p>
          </div>
        </div>

        <div className="flex flex-col items-start w-full max-w-lg gap-1 p-6">
          <p className="text-xs opacity-40 leading-normal">
            Research by{" "}
            <a
              href="https://www.linkedin.com/in/fabiocassisa/"
              target="blank"
              className="font-medium underline"
            >
              Fabio Cassisa
            </a>
          </p>
          <p className="text-xs opacity-40 leading-normal">
            Inspired by{" "}
            <a
              href="https://www.designerpaths.com/"
              target="blank"
              className="font-medium underline"
            >
              DesignerPaths
            </a>
          </p>
          <p className="text-xs opacity-40 leading-normal max-w-sm">
            Designed and engineered by{" "}
            <a
              href="https://www.weatherlight.com/"
              target="blank"
              className="font-medium underline"
            >
              WEATHERLIGHT c/o dr. M.A. Baytaş
            </a>{" "}
            using Next.js, TailwindCSS, and Framer Motion.
          </p>
        </div>
      </Dialog.Panel>
    </Dialog>
  );
}
