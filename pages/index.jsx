import { useLayoutEffect, useRef, useState } from "react";

import { useRouter } from "next/router";

import { motion } from "framer-motion";

import { ArrowLeft, ArrowRight } from "@carbon/icons-react";

import CareerSelector from "../components/careerSelector";

import { RadioGroup } from "@headlessui/react";

import { motionVars } from "../utils/consts";

export default function Home() {
  const questionnaireContainer = useRef(null);

  let [step, setStep] = useState(0);
  let [containerWidth, setContainerWidth] = useState(0);

  useLayoutEffect(() => {
    setContainerWidth(questionnaireContainer.current.clientWidth);
    const getContainerWidth = () => {
      setContainerWidth(questionnaireContainer.current.clientWidth);
    };
    window.addEventListener("resize", getContainerWidth);
    // remove the event listener before the component gets unmounted
    return () => window.removeEventListener("resize", getContainerWidth);
  }, []);

  let [progressive1, setProgressive1] = useState(null);
  let [progressive2, setProgressive2] = useState(null);
  let [progressive3, setProgressive3] = useState(null);
  let [progressive4, setProgressive4] = useState(null);
  let [progressive5, setProgressive5] = useState(null);
  let [social1, setSocial1] = useState(null);
  let [social2, setSocial2] = useState(null);
  let [social3, setSocial3] = useState(null);
  let [social4, setSocial4] = useState(null);
  let [social5, setSocial5] = useState(null);
  let [strategic1, setStrategic1] = useState(null);
  let [strategic2, setStrategic2] = useState(null);
  let [strategic3, setStrategic3] = useState(null);
  let [strategic4, setStrategic4] = useState(null);
  let [strategic5, setStrategic5] = useState(null);

  const handleClickNext = (event) => {
    if (step < 15) {
      setStep(step + 1);
    }
  };
  const handleClickPrev = (event) => {
    if (step > 0) {
      setStep(step - 1);
    }
  };

  const router = useRouter();

  function handleResults(event) {
    let progressiveScore =
      progressive1 + progressive2 + progressive3 + progressive4 + progressive5;
    let socialScore = social1 + social2 + social3 + social4 + social5;
    let strategicScore =
      strategic1 + strategic2 + strategic3 + strategic4 + strategic5;
    console.log(progressiveScore);
    console.log(strategicScore);
    console.log(socialScore);

    if (progressiveScore >= 3 && socialScore >= 3 && strategicScore >= 4) {
      router.push("/founder");
    } else if (
      progressiveScore >= 4 &&
      socialScore >= 0 &&
      strategicScore >= 3
    ) {
      router.push("/creator");
    } else if (
      progressiveScore >= 2 &&
      socialScore >= 1 &&
      strategicScore >= 3
    ) {
      router.push("/freelancer");
    } else {
      router.push("/employee");
    }
  }

  const stepClasses = {
    0: `[&>:nth-child(1)]:opacity-100 [&>:nth-child(1)]:pointer-events-auto`,
    1: `[&>:nth-child(2)]:opacity-100 [&>:nth-child(2)]:pointer-events-auto`,
    2: `[&>:nth-child(3)]:opacity-100 [&>:nth-child(3)]:pointer-events-auto`,
    3: `[&>:nth-child(4)]:opacity-100 [&>:nth-child(4)]:pointer-events-auto`,
    4: `[&>:nth-child(5)]:opacity-100 [&>:nth-child(5)]:pointer-events-auto`,
    5: `[&>:nth-child(6)]:opacity-100 [&>:nth-child(6)]:pointer-events-auto`,
    6: `[&>:nth-child(7)]:opacity-100 [&>:nth-child(7)]:pointer-events-auto`,
    7: `[&>:nth-child(8)]:opacity-100 [&>:nth-child(8)]:pointer-events-auto`,
    8: `[&>:nth-child(9)]:opacity-100 [&>:nth-child(9)]:pointer-events-auto`,
    9: `[&>:nth-child(10)]:opacity-100 [&>:nth-child(10)]:pointer-events-auto`,
    10: `[&>:nth-child(11)]:opacity-100 [&>:nth-child(11)]:pointer-events-auto`,
    11: `[&>:nth-child(12)]:opacity-100 [&>:nth-child(12)]:pointer-events-auto`,
    12: `[&>:nth-child(13)]:opacity-100 [&>:nth-child(13)]:pointer-events-auto`,
    13: `[&>:nth-child(14)]:opacity-100 [&>:nth-child(14)]:pointer-events-auto`,
    14: `[&>:nth-child(15)]:opacity-100 [&>:nth-child(15)]:pointer-events-auto`,
    15: `[&>:nth-child(16)]:opacity-100 [&>:nth-child(16)]:pointer-events-auto`,
  };

  const questions = [
    {
      id: "q1",
      radioValue: social1,
      radioOnChange: setSocial1,
      text: "Do you get more done working solo or together with collaborators?",
      a1: "Solo",
      a2: "Together",
      val1: 0,
      val2: 1,
    },
    {
      id: "q2",
      radioValue: social2,
      radioOnChange: setSocial2,
      text: "Do you enjoy going to conferences?",
      a1: "Yes",
      a2: "No",
      val1: 1,
      val2: 0,
    },
    {
      id: "q3",
      radioValue: social3,
      radioOnChange: setSocial3,
      text: "Your DMs are...",
      a1: "Open",
      a2: "Private",
      val1: 1,
      val2: 0,
    },
    {
      id: "q4",
      radioValue: social4,
      radioOnChange: setSocial4,
      text: "Do you enjoy talking in front of an audience?",
      a1: "Yes",
      a2: "No",
      val1: 1,
      val2: 0,
    },
    {
      id: "q5",
      radioValue: social5,
      radioOnChange: setSocial5,
      text: "Your first instinct in a disagreement is to...",
      a1: "Defend Yourself",
      a2: "Find a Middle Way",
      val1: 0,
      val2: 1,
    },
    {
      id: "q6",
      radioValue: progressive1,
      radioOnChange: setProgressive1,
      text: "When you can't figure it out, you...",
      a1: "Read the Docs",
      a2: "Call a Friend",
      val1: 1,
      val2: 0,
    },
    {
      id: "q7",
      radioValue: progressive2,
      radioOnChange: setProgressive2,
      text: "When was the last time you learned to use a new tool?",
      a1: "This Year",
      a2: "Years Ago",
      val1: 1,
      val2: 0,
    },
    {
      id: "q8",
      radioValue: progressive3,
      radioOnChange: setProgressive3,
      text: "How many books have you read within the last year?",
      a1: "More than 5",
      a2: "More like 0",
      val1: 1,
      val2: 0,
    },
    {
      id: "q9",
      radioValue: progressive4,
      radioOnChange: setProgressive4,
      text: "If you could have only one of them, you'd choose...",
      a1: "YouTube",
      a2: "Netflix",
      val1: 1,
      val2: 0,
    },
    {
      id: "q10",
      radioValue: progressive5,
      radioOnChange: setProgressive5,
      text: "Would you join the first crew to Mars?",
      a1: "Sign Me Up",
      a2: "No Thanks",
      val1: 1,
      val2: 0,
    },
    {
      id: "q11",
      radioValue: strategic1,
      radioOnChange: setStrategic1,
      text: "Are you as comfortable with Excel as you are with Figma?",
      a1: "Yes",
      a2: "No",
      val1: 1,
      val2: 0,
    },
    {
      id: "q12",
      radioValue: strategic2,
      radioOnChange: setStrategic2,
      text: "Weekends are for...",
      a1: "Family",
      a2: "Side Projects",
      val1: 0,
      val2: 1,
    },
    {
      id: "q13",
      radioValue: strategic3,
      radioOnChange: setStrategic3,
      text: "Would you rather pick stocks to invest in, or let a professional manage your savings?",
      a1: "Pick Stocks",
      a2: "Leave It to the Pros",
      val1: 1,
      val2: 0,
    },
    {
      id: "q14",
      radioValue: strategic4,
      radioOnChange: setStrategic4,
      text: "An economic crisis would be...",
      a1: "Scary",
      a2: "Full of Opportunities",
      val1: 0,
      val2: 1,
    },
    {
      id: "q15",
      radioValue: strategic5,
      radioOnChange: setStrategic5,
      text: "Your hero is...",
      a1: "Steve Jobs",
      a2: "Jony Ive",
      val1: 1,
      val2: 0,
    },
  ];

  function ChoiceButton(props) {
    const { value, label } = props;
    return (
      <RadioGroup.Option
        className="flex flex-row items-center justify-start text-base leading-tight h-16 border-2 border-white/80 rounded-lg w-full cursor-pointer overflow-hidden"
        value={value}
      >
        {({ checked }) => (
          <div
            className={`w-full h-full p-3 flex items-center justify-start text-white bg-black transition-colors ${
              checked ? "bg-white text-black" : ""
            }`}
          >
            {label}
          </div>
        )}
      </RadioGroup.Option>
    );
  }

  return (
    <motion.div
      className="flex flex-col justify-evenly items-center gap-12 w-full"
      initial="initial"
      animate="animate"
      transition={motionVars.parentTransition}
    >
      <motion.main
        className="material-static w-full max-w-sm h-[30rem] flex flex-col gap-6 justify-between"
        ref={questionnaireContainer}
        variants={motionVars.childVariants}
        transition={motionVars.childTransition}
      >
        <div
          className={
            "transition-transform flex flex-row h-96 [&>*]:opacity-10 [&>*]:pointer-events-none " +
            stepClasses[step]
          }
          style={{
            transform: `translate(${-step * containerWidth}px`,
          }}
        >
          <div
            id="intro"
            className={`p-6 h-full flex flex-col items-start justify-center gap-12 shrink-0 transition-opacity`}
            style={{
              width: containerWidth,
            }}
          >
            <h1 className="text-xl font-display font-bold">
              Discover the best path{" "}
              <span className="underline underline-offset-1 decoration-2 decoration-white/80">
                for you
              </span>
              .
            </h1>
            <div className="flex flex-col gap-2">
              <p className="opacity-80 leading-snug">Answer 15 questions.</p>
              <p className="opacity-80 leading-snug">
                Receive your personal list of resources that will make you a
                great designer.
              </p>
            </div>
          </div>
          {questions.map((question, idx) => (
            <div
              key={question.id}
              id={question.id}
              className={
                "p-6 h-full flex items-center justify-center shrink-0  transition-opacity"
              }
              style={{
                width: containerWidth,
              }}
            >
              <RadioGroup
                className={
                  "flex flex-col justify-center items-start h-full w-full gap-6"
                }
                value={question.radioValue}
                onChange={question.radioOnChange}
              >
                <p className="text-r1 opacity-50 mb-6">{idx + 1}/15</p>
                <RadioGroup.Label className="text-base">
                  {question.text}
                </RadioGroup.Label>
                <div className="flex flex-col xs:flex-row gap-2 w-full justify-between">
                  <ChoiceButton
                    value={question.val1}
                    label={question.a1}
                  ></ChoiceButton>
                  <ChoiceButton
                    value={question.val2}
                    label={question.a2}
                  ></ChoiceButton>
                </div>
              </RadioGroup>
            </div>
          ))}
        </div>
        <div className="px-6 pb-12 flex flex-row gap-3 justify-between items-center w-full">
          <button
            onClick={handleClickPrev}
            className={`${
              step === 0 ? "opacity-0 cursor-default" : "opacity-100"
            }
              btn text-black p-2 px-6 h-12 rounded-full font-display text-xl font-medium flex flex-row justify-center items-center gap-2
          cursor-pointer
          transition-[background-color,transform,opacity]
          bg-white/80
          hover:bg-white/100 hover:scale-105
          active:bg-white/60 active:scale-95 active:-rotate-2
          disabled:bg-white/40 disabled:scale-95 disabled:cursor-default
          `}
          >
            <ArrowLeft size="20" />
          </button>
          <button
            onClick={handleClickNext}
            className={`${step === 15 ? "hidden" : "flex"}
              btn text-black py-2 px-6 h-12 rounded-full  flex flex-row justify-center items-center gap-2
              font-display text-r2 font-medium
              leading-none
          cursor-pointer
          transition-[background-color,transform]
          bg-white/80
          hover:bg-white/100 hover:scale-105
          active:bg-white/60 active:scale-95 active:rotate-2
          `}
          >
            <span>
              <nobr>Next Step</nobr>
            </span>
            <ArrowRight size="20" />
          </button>
          <button
            onClick={handleResults}
            className={`${step === 15 ? "flex" : "hidden"}
               btn text-black py-2 px-6 h-12 rounded-full flex-row justify-center items-center gap-2
              font-display text-r2 font-medium
              leading-none
          cursor-pointer
          transition-[background-color,transform]
          bg-white/80
          hover:bg-white/100 hover:scale-105
          active:bg-white/60 active:scale-95 active:rotate-2
          `}
          >
            <span className="">
              <nobr>See Results</nobr>
            </span>
            <ArrowRight size="20" />
          </button>
        </div>
      </motion.main>

      <motion.aside
        className="h-[2px] bg-white/20 w-full max-w-sm flex flex-row justify-start items-center"
        variants={motionVars.childVariants}
        transition={motionVars.childTransition}
      >
        <div
          className="progress bg-white h-full transition-[width]"
          style={{ width: (step * 100) / 15 + "%" }}
        ></div>
      </motion.aside>

      <motion.div
        className="div"
        variants={motionVars.childVariants}
        transition={motionVars.childTransition}
      >
        <CareerSelector message="...or jump to the resources:"></CareerSelector>
      </motion.div>
    </motion.div>
  );
}
