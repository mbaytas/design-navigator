import { useState } from "react";

import Head from "next/head";
import Image from "next/image";

import { RadioGroup } from "@headlessui/react";

import styles from "../styles/Home.module.css";

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
      text: "When people disagree with you, you...",
      a1: "Compromise",
      a2: "Defend Yourself",
      val1: 1,
      val2: 0,
    },
    {
      id: "q6",
      radioValue: progressive1,
      radioOnChange: setProgressive1,
      text: "When your can't figure it out, you...",
      a1: "Hit Google",
      a2: "Call a Friend",
      val1: 1,
      val2: 0,
    },
    {
      id: "q7",
      radioValue: progressive2,
      radioOnChange: setProgressive2,
      text: "When was the last time you learned how to use a new tool?",
      a1: "This Year",
      a2: "A Few Years Ago",
      val1: 1,
      val2: 0,
    },
    {
      id: "q8",
      radioValue: progressive3,
      radioOnChange: setProgressive3,
      text: "How many books have you read within the 12 months?",
      a1: "More than 5",
      a2: "More like 0",
      val1: 1,
      val2: 0,
    },
    {
      id: "q9",
      radioValue: progressive4,
      radioOnChange: setProgressive4,
      text: "If you could only have one, you'd choose...",
      a1: "YouTube",
      a2: "Netflix",
      val1: 1,
      val2: 0,
    },
    {
      id: "q10",
      radioValue: progressive5,
      radioOnChange: setProgressive5,
      text: "Would you accept to join the first crew to go to Mars?",
      a1: "Sign Me Up",
      a2: "No Thanks",
      val1: 1,
      val2: 0,
    },
    {
      id: "q11",
      radioValue: strategic1,
      radioOnChange: setStrategic1,
      text: "Are you as comfortable with Excel as you are with Photoshop?",
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
      text: "Would you rather pick stocks to invest in, or leave your savings in a fund managed by professionals?",
      a1: "Stocks",
      a2: "Fund",
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

  return (
    <div className="bg-black text-white">
      <Head>
        <title>Designer Lifestyles</title>
        <meta name="description" content="Discover the best path for you." />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="flex flex-col justify-between items-center min-h-screen">
        <header className="flex flex-row justify-between w-full max-w-7xl mx-8 my-4">
          <a className="font-display text-2xl" href="">
            <strong>Design</strong> Lifestyles
          </a>
          <a href="" className="text-2xl">
            SHARE
          </a>
        </header>

        <aside className="h-[2px] bg-white/20 w-96 flex flex-row justify-start items-center">
          <div
            className="progress bg-white h-full transition-[width] duration-300"
            style={{ width: (step * 100) / 15 + "%" }}
          ></div>
        </aside>

        <main className="border-2 border-white/40 w-96 h-[30rem] flex flex-col justify-between">
          <div
            className={
              "transition-transform duration-300 flex flex-row h-full [&>*]:opacity-10 [&>*]:pointer-events-none " +
              stepClasses[step]
            }
          >
            <div
              id="intro"
              className={
                "px-8 py-12 w-96 h-full flex flex-col items-start justify-evenly gap-4 shrink-0 transition-opacity duration-200"
              }
            >
              <h1 className="text-xl font-display font-bold">
                Discover the best path{" "}
                <span className="underline underline-offset-1 decoration-2 decoration-white/80">
                  for you
                </span>
                .
              </h1>
              <p className="opacity-80 leading-snug">
                Answer 15 questions to receive your personal list of resources
                that will make you a great designer.
              </p>
            </div>
            {questions.map((question, idx) => (
              <div
                key={question.id}
                id={question.id}
                className={
                  "px-8 py-12 w-96 h-full flex flex-col items-start justify-evenly gap-4 shrink-0  transition-opacity duration-200"
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
                  <div className="flex flex-row gap-2 w-full justify-between text-base leading-tight">
                    <RadioGroup.Option
                      className="flex flex-row items-center justify-center h-16 border rounded-lg w-full cursor-pointer overflow-hidden"
                      value={question.val1}
                    >
                      {({ checked }) => (
                        <div
                          className={`w-full h-full p-8 flex items-center justify-start transition-colors duration-150 ${
                            checked ? "bg-white text-black" : ""
                          }`}
                        >
                          {question.a1}
                        </div>
                      )}
                    </RadioGroup.Option>
                    <RadioGroup.Option
                      className="flex flex-row items-center justify-start h-16 border rounded-lg w-full cursor-pointer overflow-hidden"
                      value={question.val2}
                    >
                      {({ checked }) => (
                        <div
                          className={`w-full h-full p-8 flex items-center justify-center transition-colors duration-150 ${
                            checked ? "bg-white text-black" : ""
                          }`}
                        >
                          {question.a2}
                        </div>
                      )}
                    </RadioGroup.Option>
                  </div>
                </RadioGroup>
              </div>
            ))}
          </div>
          <div className="px-8 py-12 flex flex-row gap-4 justify-between items-center w-full">
            <button
              onClick={handleClickPrev}
              className="btn text-black py-2 px-8 rounded-full font-display text-xl font-medium flex flex-row justify-center items-center
          cursor-pointer
          transition-[background-color,transform] duration-150
          bg-white/80
          hover:bg-white/100 hover:scale-105
          active:bg-white/60 active:scale-95 active:-rotate-2
          disabled:bg-white/40 disabled:scale-95 disabled:cursor-default
          "
            >
              &larr;
            </button>
            <button
              onClick={handleClickNext}
              className="btn text-black py-2 px-8 rounded-full font-display text-xl font-medium flex flex-row justify-center items-center
          cursor-pointer
          transition-[background-color,transform] duration-150
          bg-white/80
          hover:bg-white/100 hover:scale-105 hover:rotate-2
          active:bg-white/60 active:scale-95 active:-rotate-2
          "
            >
              Next Step
            </button>
          </div>
        </main>

        <aside className="w-full flex justify-center items-end max-w-5xl mx-auto opacity-40 gap-10 flex-wrap">
          <div className="flex flex-col justify-end items-center gap-1">
            <svg
              id="icon"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 32 32"
              className="h-10 w-10"
            >
              <path
                className="fill-white"
                d="M25,16V15A9,9,0,0,0,7,15v1A5,5,0,0,0,7,26H9V15a7,7,0,0,1,14,0V26h2a5,5,0,0,0,0-10ZM4,21a3,3,0,0,1,3-3v6A3,3,0,0,1,4,21Zm21,3V18a3,3,0,0,1,0,6Z"
                transform="translate(0)"
              />
            </svg>
            <p className="font-display font-medium">Freelancer</p>
          </div>
          <div className="flex flex-col justify-end items-center gap-1">
            <svg
              id="icon"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 32 32"
              className="h-10 w-10"
            >
              <path
                className="fill-white"
                d="M28,10H22V6a2,2,0,0,0-2-2H12a2,2,0,0,0-2,2v4H4a2,2,0,0,0-2,2V26a2,2,0,0,0,2,2H28a2,2,0,0,0,2-2V12A2,2,0,0,0,28,10ZM12,6h8v4H12ZM4,26V12H28V26Z"
              />
            </svg>
            <p className="font-display font-medium">Corporate</p>
          </div>
          <div className="flex flex-col justify-end items-center gap-1">
            <svg
              id="icon"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 32 32"
              className="h-10 w-10"
            >
              <path
                className="fill-white"
                d="M4,2H2V28a2,2,0,0,0,2,2H30V28H4Z"
              />
              <path
                className="fill-white"
                d="M30,9H23v2h3.59L19,18.59l-4.29-4.3a1,1,0,0,0-1.42,0L6,21.59,7.41,23,14,16.41l4.29,4.3a1,1,0,0,0,1.42,0L28,12.41V16h2Z"
              />
            </svg>
            <p className="font-display font-medium">Founder</p>
          </div>
          <div className="flex flex-col justify-end items-center gap-1">
            <svg
              id="icon"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 32 32"
              className="h-10 w-10"
            >
              <rect
                className="fill-white"
                x="6.34"
                y="19"
                width="11.31"
                height="2"
                transform="translate(-10.63 14.34) rotate(-45)"
              />
              <path
                className="fill-white"
                d="M17,30a1,1,0,0,1-.37-.07,1,1,0,0,1-.62-.79l-1-7,2-.28.75,5.27L21,24.52V17a1,1,0,0,1,.29-.71l4.07-4.07A8.94,8.94,0,0,0,28,5.86V4H26.14a8.94,8.94,0,0,0-6.36,2.64l-4.07,4.07A1,1,0,0,1,15,11H7.48L4.87,14.26l5.27.75-.28,2-7-1a1,1,0,0,1-.79-.62,1,1,0,0,1,.15-1l4-5A1,1,0,0,1,7,9h7.59l3.77-3.78A10.92,10.92,0,0,1,26.14,2H28a2,2,0,0,1,2,2V5.86a10.92,10.92,0,0,1-3.22,7.78L23,17.41V25a1,1,0,0,1-.38.78l-5,4A1,1,0,0,1,17,30Z"
              />
            </svg>
            <p className="font-display font-medium">Startupper</p>
          </div>
          <div className="flex flex-col justify-end items-center gap-1">
            <svg
              id="icon"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 32 32"
              className="h-10 w-10"
            >
              <path
                className="fill-white"
                d="M29.707,5.293l-3-3a.9994.9994,0,0,0-1.414,0L19.5859,8H17.0947A11.0118,11.0118,0,0,0,6.7124,15.3662L2.0562,28.67a1,1,0,0,0,1.2744,1.2739l13.3037-4.6562A11.012,11.012,0,0,0,24,14.9053V12.4141L29.707,6.707A.9994.9994,0,0,0,29.707,5.293Zm-7.414,6A1,1,0,0,0,22,12v2.9053A9.01,9.01,0,0,1,15.9731,23.4l-9.1677,3.209L16,17.4141,14.5859,16,5.3914,25.1948,8.6,16.0269A9.01,9.01,0,0,1,17.0947,10H20a1,1,0,0,0,.707-.293L26,4.4141,27.5859,6Z"
              />
            </svg>
            <p className="font-display font-medium">Creator</p>
          </div>
          <div className="flex flex-col justify-end items-center gap-1">
            <svg
              id="icon"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 32 32"
              className="h-10 w-10"
            >
              <path
                className="fill-white"
                d="M28,2H16a2.002,2.002,0,0,0-2,2V14H4a2.002,2.002,0,0,0-2,2V30H30V4A2.0023,2.0023,0,0,0,28,2ZM9,28V21h4v7Zm19,0H15V20a1,1,0,0,0-1-1H8a1,1,0,0,0-1,1v8H4V16H16V4H28Z"
              />
              <rect className="fill-white" x="18" y="8" width="2" height="2" />
              <rect className="fill-white" x="24" y="8" width="2" height="2" />
              <rect className="fill-white" x="18" y="14" width="2" height="2" />
              <rect className="fill-white" x="24" y="14" width="2" height="2" />
              <rect
                className="fill-white"
                x="18"
                y="19.9996"
                width="2"
                height="2"
              />
              <rect
                className="fill-white"
                x="24"
                y="19.9996"
                width="2"
                height="2"
              />
            </svg>
            <p className="font-display font-medium">Agency Owner</p>
          </div>
          <div className="flex flex-col justify-end items-center gap-1">
            <svg
              id="icon"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 32 32"
              className="h-10 w-10"
            >
              <path
                className="fill-white"
                d="M25.3943,24a7.8772,7.8772,0,0,0-1.6707-8.5684,3.918,3.918,0,0,0-1.0844-4.414l2.7759-2.7759a2.0025,2.0025,0,0,0,0-2.8286L22.5869,2.5849a2.0021,2.0021,0,0,0-2.8286,0L6.5859,15.7573a2.0027,2.0027,0,0,0,0,2.8286l2.8282,2.8282a2.0024,2.0024,0,0,0,2.8286,0l4.7749-4.7754a3.9329,3.9329,0,0,0,5.5139.4326A5.9442,5.9442,0,0,1,23.1775,24H16v4H4v2H28V24ZM10.8281,20,8,17.1714,9.8787,15.293l2.8283,2.8281ZM16,14a3.9811,3.9811,0,0,0,.0762.7524L14.1211,16.707l-2.8284-2.8281,9.88-9.88L24.001,6.8271l-3.2488,3.2491A3.9771,3.9771,0,0,0,16,14Zm4,2a2,2,0,1,1,2-2A2.0023,2.0023,0,0,1,20,16Zm6,12H18V26h8Z"
              />
            </svg>
            <p className="font-display font-medium">Scholar</p>
          </div>
        </aside>

        <footer className="mx-8 my-4">
          <p>
            <span className="text-xs">Created by</span>
            <br />
            <a
              href="https://www.designdisciplin.com/"
              className="font-display font-bold"
            >
              Design Disciplin
            </a>
          </p>
        </footer>
      </div>
    </div>
  );
}
