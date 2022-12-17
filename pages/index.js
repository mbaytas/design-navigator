import { useState } from "react";

import Head from "next/head";
import Image from "next/image";
import { useRouter } from "next/router";

import { ArrowLeft, ArrowRight } from "@carbon/icons-react";

import AboutDialog from "../components/aboutDialog";
import Footer from "../components/footer";
import Header from "../components/header";
import Lifestyles from "../components/lifestyles";

import { RadioGroup } from "@headlessui/react";

import styles from "../styles/Home.module.css";
import { Router } from "@carbon/icons-react";

export default function Home() {
  let [step, setStep] = useState(0);

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

    if (progressiveScore >= 4 && socialScore >= 4 && strategicScore >= 4) {
      router.push("/startupper");
    } else if (
      progressiveScore >= 4 &&
      socialScore >= 0 &&
      strategicScore >= 4
    ) {
      router.push("/creator");
    } else if (
      progressiveScore >= 3 &&
      socialScore >= 1 &&
      strategicScore >= 2
    ) {
      router.push("/freelancer");
    } else {
      router.push("/employee");
    }
  }

  const stepClasses = {
    0: "[&>:nth-child(1)]:opacity-100 [&>:nth-child(1)]:pointer-events-auto translate-x-0 ",
    1: "[&>:nth-child(2)]:opacity-100 [&>:nth-child(2)]:pointer-events-auto translate-x-[-24rem] ",
    2: "[&>:nth-child(3)]:opacity-100 [&>:nth-child(3)]:pointer-events-auto translate-x-[-48rem]",
    3: "[&>:nth-child(4)]:opacity-100 [&>:nth-child(4)]:pointer-events-auto translate-x-[-72rem]",
    4: "[&>:nth-child(5)]:opacity-100 [&>:nth-child(5)]:pointer-events-auto translate-x-[-96rem]",
    5: "[&>:nth-child(6)]:opacity-100 [&>:nth-child(6)]:pointer-events-auto translate-x-[-120rem]",
    6: "[&>:nth-child(7)]:opacity-100 [&>:nth-child(7)]:pointer-events-auto translate-x-[-144rem]",
    7: "[&>:nth-child(8)]:opacity-100 [&>:nth-child(8)]:pointer-events-auto translate-x-[-168rem]",
    8: "[&>:nth-child(9)]:opacity-100 [&>:nth-child(9)]:pointer-events-auto translate-x-[-192rem]",
    9: "[&>:nth-child(10)]:opacity-100 [&>:nth-child(10)]:pointer-events-auto translate-x-[-216rem]",
    10: "[&>:nth-child(11)]:opacity-100 [&>:nth-child(11)]:pointer-events-auto translate-x-[-240rem]",
    11: "[&>:nth-child(12)]:opacity-100 [&>:nth-child(12)]:pointer-events-auto translate-x-[-264rem]",
    12: "[&>:nth-child(13)]:opacity-100 [&>:nth-child(13)]:pointer-events-auto translate-x-[-288rem]",
    13: "[&>:nth-child(14)]:opacity-100 [&>:nth-child(14)]:pointer-events-auto translate-x-[-312rem]",
    14: "[&>:nth-child(15)]:opacity-100 [&>:nth-child(15)]:pointer-events-auto translate-x-[-336rem]",
    15: "[&>:nth-child(16)]:opacity-100 [&>:nth-child(16)]:pointer-events-auto translate-x-[-360rem]",
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
      text: "Your inbox is...",
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
      text: "Are you as comfortable with Excel as you are with Photoshop or Figma?",
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
        className="flex flex-row items-center justify-start text-base leading-tight h-16 border rounded-xl w-full cursor-pointer overflow-hidden"
        value={value}
      >
        {({ checked }) => (
          <div
            className={`w-full h-full p-8 flex items-center justify-start text-white bg-black transition-colors ${
              checked ? "bg-white text-black" : ""
            }`}
          >
            {label}
          </div>
        )}
      </RadioGroup.Option>
    );
  }

  let [isAboutDialogOpen, setIsAboutDialogOpen] = useState(false);

  return (
    <div className="bg-black text-white w-full min-w-[100vw] max-w-[100vw] overflow-x-hidden">
      <Head>
        <title>Designer Life</title>
        <meta name="description" content="Discover the best path for you." />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="flex flex-col justify-between items-center min-h-screen gap-8">
        <Header setIsAboutDialogOpen={setIsAboutDialogOpen}></Header>

        <AboutDialog isAboutDialogOpen={isAboutDialogOpen} setIsAboutDialogOpen={setIsAboutDialogOpen}></AboutDialog>

        <aside className="h-[2px] bg-white/20 w-full max-w-sm flex flex-row justify-start items-center">
          <div
            className="progress bg-white h-full transition-[width]"
            style={{ width: (step * 100) / 15 + "%" }}
          ></div>
        </aside>

        <main className="border-2 border-white/40 w-full max-w-sm h-[30rem] flex flex-col justify-between">
          <div
            className={
              "transition-transform flex flex-row h-full [&>*]:opacity-10 [&>*]:pointer-events-none " +
              stepClasses[step]
            }
          >
            <div
              id="intro"
              className={
                "px-8 py-12 w-96 h-full flex flex-col items-start justify-evenly gap-4 shrink-0 transition-opacity"
              }
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
                  "px-8 py-12 w-96 h-full flex flex-col items-start justify-evenly gap-4 shrink-0  transition-opacity"
                }
              >
                <RadioGroup
                  className={
                    "flex flex-col justify-between items-start h-full w-full"
                  }
                  value={question.radioValue}
                  onChange={question.radioOnChange}
                >
                  <p className="text-sm opacity-60">{idx + 1}/15</p>
                  <RadioGroup.Label className="text-base">
                    {question.text}
                  </RadioGroup.Label>
                  <div className="flex flex-row gap-2 w-full justify-between">
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
          <div className="px-8 py-12 flex flex-row gap-4 justify-between items-center w-full">
            <button
              onClick={handleClickPrev}
              className={`${step === 0 ? "invisible" : "visible"}
              btn text-black py-2 px-8 h-12 rounded-full font-display text-xl font-medium flex flex-row justify-center items-center gap-2
          cursor-pointer
          transition-[background-color,transform]
          bg-white/80
          hover:bg-white/100 hover:scale-105
          active:bg-white/60 active:scale-95 active:-rotate-2
          disabled:bg-white/40 disabled:scale-95 disabled:cursor-default
          `}
            >
              <ArrowLeft size="24" />
            </button>
            <button
              onClick={handleClickNext}
              className={`${step === 15 ? "hidden" : "flex"}
              btn text-black py-2 px-8 h-12 rounded-full  flex flex-row justify-center items-center gap-2
              font-display text-xl font-medium
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
              <ArrowRight size="24" />
            </button>
            <button
              onClick={handleResults}
              className={`${step === 15 ? "flex" : "hidden"}
               btn text-black py-2 px-8 h-12 rounded-full flex-row justify-center items-center gap-2
              font-display text-xl font-medium
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
              <ArrowRight size="24" />
            </button>
          </div>
        </main>

        <Lifestyles message="...or jump to the resources:"></Lifestyles>

        <Footer></Footer>
      </div>
    </div>
  );
}
