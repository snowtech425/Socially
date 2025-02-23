"use client";

import { VoiceProvider } from "@humeai/voice-react";
import Messages from "./Messages";
import { ComponentRef, useRef, useState } from "react";
import React from "react";
import StartCall from "./StartCall";
import Controls from "./Controls";
import { useSearchParams } from "next/navigation";

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
  const configMap: Record<string, string | undefined> = {
    barista: process.env.NEXT_PUBLIC_HUME_CONFIG_ID_BARISTA,
    date: process.env.NEXT_PUBLIC_HUME_CONFIG_ID_DATE,
    event_meetup: process.env.NEXT_PUBLIC_HUME_CONFIG_ID_STRANGERMEETUP,
    shared_workplace: process.env.NEXT_PUBLIC_HUME_CONFIG_ID_SHAREDWORKPLACE,
    approaching_stranger:
      process.env.NEXT_PUBLIC_HUME_CONFIG_ID_APPROACHINGSTRANGER,
  };

  const configId = title ? configMap[title.toLowerCase()] : undefined;


  // State for user input
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [age, setAge] = useState<number | "">(""); // Age input field
  const [gender, setGender] = useState<"male" | "female">("male");
  const [showBox, setShowBox] = useState(true);

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

  return (
    <div className="relative grow flex flex-col gap-y-10 mx-auto w-full h-[78vh] md:h-[85vh] z-20 ">
      {/* Name, Email, Age, and Gender Section */}
      {showBox && (
        <div className="mt-4 p-2 md:p-6 border rounded-md bg-gray-100 z-30 w-[95%] md:w-1/2 xl:w-1/3 m-auto shadow-lg transition-all duration-300">
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

            <div className="flex items-center gap-4">
              <button
                onClick={() => handleGenderChange("male")}
                className={`px-4 py-2 rounded-md transition-colors ${
                  gender === "male" ? "bg-blue-500 text-white" : "bg-gray-200"
                } hover:bg-blue-300 focus:outline-none focus:ring-2 focus:ring-blue-500`}
              >
                Male
              </button>
              <button
                onClick={() => handleGenderChange("female")}
                className={`px-4 py-2 rounded-md transition-colors ${
                  gender === "female" ? "bg-pink-500 text-white" : "bg-gray-200"
                } hover:bg-pink-300 focus:outline-none focus:ring-2 focus:ring-pink-500`}
              >
                Female
              </button>
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

        <Messages ref={ref} username={name} gender={gender} />
        <Controls setShowBox={setShowBox} />
        {name && email && gender && <StartCall setShowBox={setShowBox} />}
      </VoiceProvider>
    </div>
  );
}
