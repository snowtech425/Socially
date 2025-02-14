"use client";

import { VoiceProvider } from "@humeai/voice-react";
import Messages from "./Messages";
import { ComponentRef, useRef } from "react";
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

  return (
    <div
      className={
        "relative grow flex flex-col mx-auto w-full  h-[80vh] mb-10 z-20 "
      }
    >
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
        <Messages ref={ref} />
        <Controls />
        <StartCall />
      </VoiceProvider>
    </div>
  );
}
