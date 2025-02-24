"use client";

import { VoiceProvider } from "@humeai/voice-react";
import Messages from "./Messages";
import { ComponentRef, useRef, useState } from "react";
import React from "react";
import StartCall from "./StartCall";
import Controls from "./Controls";
import { useSearchParams } from "next/navigation";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "./ui/select";

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
  const [age, setAge] = useState<number | "">(""); // Age input field
  const [gender, setGender] = useState<"male" | "female">();
  const [AIGender, setAIGender] = useState<"male" | "female">();
  const [showBox, setShowBox] = useState(true);

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

  return (
    <div className="relative grow flex flex-col gap-y-10 mx-auto w-full h-[78vh] md:h-[85vh] z-20 ">
      {/* Name, Email, Age, and Gender Section */}
      {showBox && (
        <div className="mt-4 p-2 md:p-6 border rounded-md bg-gray-100 dark:bg-background z-30 w-[95%] md:w-1/2 xl:w-1/3 m-auto shadow-lg transition-all duration-300">
          <div className="flex flex-col gap-2 md:gap-6">
            <input
              type="text"
              value={name}
              onChange={handleNameChange}
              className="p-2 md:p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter your name"
            />

            <input
              type="email"
              value={email}
              onChange={handleEmailChange}
              className="p-2 md:p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter your email"
            />

            <input
              type="number"
              required={false}
              value={age || ""}
              onChange={handleAgeChange}
              className="p-2 md:p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter your age (Optional)"
              min="0"
            />

            <div className="flex flex-row gap-x-5 gap-y-2">
              <Select value={gender} onValueChange={handleGenderChange}>
                <SelectTrigger className="w-[180px]">
                  <SelectValue placeholder="Select your gender" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectItem value="male">Male</SelectItem>
                    <SelectItem value="female">Female</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>

              <Select value={AIGender} onValueChange={handleAIGenderChange}>
                <SelectTrigger className="w-[180px]">
                  <SelectValue placeholder="Select  AI gender" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectItem value="male">Male</SelectItem>
                    <SelectItem value="female">Female</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
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
        <Controls setShowBox={setShowBox} />
        {name && email && gender && AIGender && (
          <StartCall
            name={name}
            email={email}
            gender={gender}
            scenario={title}
            age={age}
            setShowBox={setShowBox}
          />
        )}
      </VoiceProvider>
    </div>
  );
}
