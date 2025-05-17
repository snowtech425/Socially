"use client";

import { VoiceProvider } from "@humeai/voice-react";
import Messages from "./Messages";
import { ComponentRef, useEffect, useRef, useState } from "react";
import React from "react";
import StartCall from "./StartCall";
import Controls from "./Controls";
import { useSearchParams } from "next/navigation";
import { Alert, AlertDescription, AlertTitle } from "./ui/alert";
import { FaSuperpowers } from "react-icons/fa";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "./ui/select";
import { Button } from "./ui/button";
import { motion } from "framer-motion";
import Link from "next/link";

export default function ClientComponent({
  accessToken,
}: {
  accessToken: string;
}) {
  const timeout = useRef<number | null>(null);
  const ref = useRef<ComponentRef<typeof Messages> | null>(null);

  const searchParams = useSearchParams();
  const title = searchParams.get("title");

  // Map title values to corresponding config IDs
  const configMap: Record<
    string,
    { male: string | undefined; female: string | undefined }
  > = {
    barista: {
      male: process.env.NEXT_PUBLIC_HUME_CONFIG_ID_MALE_BARISTA,
      female: process.env.NEXT_PUBLIC_HUME_CONFIG_ID_FEMALE_BARISTA,
    },
    date: {
      male: process.env.NEXT_PUBLIC_HUME_CONFIG_ID_MALE_DATE,
      female: process.env.NEXT_PUBLIC_HUME_CONFIG_ID_FEMALE_DATE,
    },
    event_meetup: {
      male: process.env.NEXT_PUBLIC_HUME_CONFIG_ID_MALE_STRANGERMEETUP,
      female: process.env.NEXT_PUBLIC_HUME_CONFIG_ID_FEMALE_STRANGERMEETUP,
    },
    shared_workplace: {
      male: process.env.NEXT_PUBLIC_HUME_CONFIG_ID_MALE_SHAREDWORKPLACE,
      female: process.env.NEXT_PUBLIC_HUME_CONFIG_ID_FEMALE_SHAREDWORKPLACE,
    },
    approaching_stranger: {
      male: process.env.NEXT_PUBLIC_HUME_CONFIG_ID_MALE_APPROACHINGSTRANGER,
      female: process.env.NEXT_PUBLIC_HUME_CONFIG_ID_FEMALE_APPROACHINGSTRANGER,
    },
  };

  // State for user input
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [age, setAge] = useState<number | "">("");
  const [gender, setGender] = useState<"male" | "female">();
  const [AIGender, setAIGender] = useState<"male" | "female">();
  const [showBox, setShowBox] = useState(true);
  const [consentGiven, setConsentGiven] = useState(false);
  const [proceed, setProceed] = useState(false);
  const [isCompleted, setIsCompleted] = useState(false);
  const [isDragging, setIsDragging] = useState(false);
  const [alert, setAlert] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  const configId =
    title && AIGender ? configMap[title.toLowerCase()]?.[AIGender] : undefined;

  // Handle name, email, and age change
  const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  };

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const handleAgeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setAge(e.target.value ? parseInt(e.target.value) : "");
  };

  // Handle gender selection
  const handleGenderChange = (selectedGender: "male" | "female") => {
    setGender(selectedGender);
  };

  const handleAIGenderChange = (selectedGender: "male" | "female") => {
    setAIGender(selectedGender);
  };

  const handleConsentChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setConsentGiven(e.target.checked); // Update consent state
  };

  // useEffect(() => {
  //   // Wait for search params like "title" to be available
  //   if (title) {
  //     setTimeout(() => {
  //       setIsLoading(false);
  //     }, 800); // adjust delay as needed
  //   }
  // }, [title]);

  // if (isLoading) {
  //   return (
  //     <div className="flex items-center justify-center h-[78vh]">
  //       <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-500" />
  //     </div>
  //   );
  // }
  useEffect(() => {
    console.log("Hydrated title:", title);
  }, [title]);

  return (
    <div className="relative grow flex flex-col gap-y-10 mx-auto w-full h-[78vh] md:h-[85vh] z-20  ">
      {/* Name, Email, Age, and Gender Section */}
      {showBox && !proceed && (
        <div className="mt-4 p-2 md:p-6 xl:p-3 2xl:p-6 border rounded-md bg-[#E2EAFF] dark:bg-background z-30 h-auto  xl:h-auto 2xl:h-auto xl:w-6/12 w-[95%] md:w-1/2 2xl:w-1/3 m-auto shadow-lg shadow-[#cfdcff] dark:shadow-none transition-all duration-300">
          <div className="flex flex-col gap-2 md:gap-6 xl:gap-y-4 2xl:gap-y-6">
            {/* <div className="flex flex-col xl:flex-row 2xl:flex-col xl:justify-between xl:w-6/6 gap-y-2 xl:gap-y-0 2xl:gap-y-6">
              <input
                type="text"
                value={name}
                onChange={handleNameChange}
                className="p-1 md:p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 xl:w-3/6 2xl:w-full xl:mr-5 2xl:mr-0"
                placeholder="Enter your name"
              />

              <input
                type="email"
                value={email}
                onChange={handleEmailChange}
                className="p-1 md:p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 xl:w-3/6 2xl:w-full"
                placeholder="Enter your email"
              />
            </div> */}

            <input
              type="number"
              required={false}
              value={age || ""}
              onChange={handleAgeChange}
              className="p-1 md:p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter your age (Optional)"
              min="0"
            />

            <div className="flex flex-col md:flex-row gap-x-5 gap-y-2">
              <Select value={gender} onValueChange={handleGenderChange}>
                <SelectTrigger className="w-full  md:w-3/6">
                  <SelectValue placeholder="How should we refer to you?" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectItem value="male">Male</SelectItem>
                    <SelectItem value="female">Female</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>

              <Select value={AIGender} onValueChange={handleAIGenderChange}>
                <SelectTrigger className="w-full md:w-3/6">
                  <SelectValue placeholder="How should the AI sound" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectItem value="male">Male</SelectItem>
                    <SelectItem value="female">Female</SelectItem>
                    {/* <SelectItem value="Prefer not to say">Prefer not to say</SelectItem> */}
                  </SelectGroup>
                </SelectContent>
              </Select>
            </div>
            {/* Consent Checkbox */}
            <div className="flex items-center gap-2 mt-1">
              <input
                type="checkbox"
                id="consent"
                checked={consentGiven}
                onChange={handleConsentChange}
                className="h-4 w-4 border rounded-md"
              />
              <label htmlFor="consent" className="text-xs md:text-xs">
                I agree that my chat content will be used to improve SmallTalk’s
                AI. Personal details are not shared.
              </label>
            </div>
          </div>
        </div>
      )}

      <VoiceProvider
        auth={{ type: "accessToken", value: accessToken }}
        configId={configId}
        onMessage={() => {
          if (timeout.current) {
            window.clearTimeout(timeout.current);
          }

          timeout.current = window.setTimeout(() => {
            if (ref.current) {
              const scrollHeight = ref.current.scrollHeight;

              ref.current.scrollTo({
                top: scrollHeight,
                behavior: "smooth",
              });
            }
          }, 200);
        }}
      >
        <Messages
          ref={ref}
          username={name}
          gender={gender}
          AIGender={AIGender}
        />
        <Controls setShowBox={setShowBox} setAlert={setAlert} />
        {/* {
          // name && email &&

          gender && AIGender && consentGiven && proceed && (
           
          )
        } */}
        {
          // name && email &&

          gender &&
            AIGender &&
            consentGiven &&
            !proceed &&
            (isCompleted ? (
              "Calling..."
            ) : (
              <div className="flex">
                <StartCall
                  onClick={() => {
                    setIsCompleted(true);
                    setProceed(true);
                    setTimeout(() => setIsCompleted(false), 2000);
                  }}
                  // name={name}
                  // email={email}
                  gender={gender}
                  scenario={title}
                  age={age}
                  setShowBox={setShowBox}
                  setAlert={setAlert}
                />
              </div>
            ))
        }
      </VoiceProvider>
      {alert && (
        <Alert className="flex flex-col m-auto justify-center w-fit items-center border backdrop-blur-sm bg-tranparent/20 shadow-lg animate-bounce">
          <div className="flex flex-col">
            <div className="flex gap-x-2">
              <FaSuperpowers className="h-4 w-4" />
              <AlertTitle className="font-bold">
                Your Feeback Is Appreciated
              </AlertTitle>
            </div>
            <Link
              href={"https://forms.gle/AL3nJgQWGsxnJ6Hr7"}
              target="__blank"
              onClick={() => setAlert(false)}
            >
              <AlertDescription className="underline">
                Click here to send us a feedback and help us improve for you.
              </AlertDescription>
            </Link>
          </div>
        </Alert>
      )}
    </div>
  );
}
