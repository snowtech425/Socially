"use client";
import { useVoice } from "@humeai/voice-react";
import { AnimatePresence, motion } from "framer-motion";
import { Button } from "./ui/button";
import { AudioLines, Phone, SpeechIcon } from "lucide-react";
import React from "react";
import { useDispatch } from "react-redux";
import { addUserToSpreadsheet } from "@/store/slices/authSlice";
import { toast } from "sonner";

export default function StartCall({
  // name,
  // email,
  gender,
  scenario,
  age,
  setShowBox,
  setAlert,
  setToastId,
  alert,
}: any) {
  const { status, connect } = useVoice();
  const dispatch = useDispatch();

  type Scenario =
    | "Date"
    | "Approaching_stranger"
    | "Barista"
    | "Shared_workplace"
    | "Event_meetup"
    | "Speed_dating";

  const getToastContent = (scenario: Scenario) => {
    switch (scenario) {
      case "Date":
        return {
          title: "You’re on a first date.",
          description:
            "The AI is your date.  Say hello and start the conversation naturally.",
        };
      case "Approaching_stranger":
        return {
          title: "You’re walking past someone and decide to say hi.",
          description: "The AI is that person.  How would you start?",
        };
      case "Barista":
        return {
          title: "You’ve just walked up to the counter at your local café.",
          description: "The AI is the barista.  What’s your opener?",
        };
      case "Shared_workplace":
        return {
          title:
            "You’re at work and need to speak with a colleague or manager.",
          description: "Say what you’d normally say to open the conversation.",
        };
      case "Event_meetup":
        return {
          title:
            "You’re at a social event.  Maybe a meetup, party, or networking thing.",
          description:
            "The AI is someone you’d like to chat with.  What’s your first move?",
        };
      case "Speed_dating":
        return {
          title:
            "You’re sitting down for a speed date.  The clock just started.",
          description:
            "The AI is your date.  Kick things off with your opening line.",
        };
      default:
        return {
          title: "Talking with AI",
          description: "Speak first to continue.",
        };
    }
  };

  const { title, description } = getToastContent(scenario);

  return (
    <div className="m-auto pt-10">
      {status.value !== "connected" ? (
        <motion.div
          className="fixed left-0 right-0 top-[47%] p-4 flex flex-col items-center justify-center gap-y-20"
          initial="initial"
          animate="enter"
          exit="exit"
          variants={{
            initial: { opacity: 0 },
            enter: { opacity: 1 },
            exit: { opacity: 0 },
          }}
        >
          <Button
            className=" z-50 flex flex-col items-center justify-center h-20  shadow-lg  bg-gradient-to-r from-transparent to-white/20 dark:from-gray-200 dark:to-gray-400 hover:opacity-80"
            onClick={() => {
              setShowBox(false);
              setAlert(false);
              const toastId = toast.success(() => (
                <div className="w-full p-2" style={{ lineHeight: 1.4 }}>
                  <h2 className="font-semibold text-base mb-1 text-gray-900 dark:text-white">
                    {title}
                  </h2>
                  <span className="text-sm text-gray-700 dark:text-white">
                    {description}
                  </span>
                </div>
              ));

              setToastId(toastId);
              connect()
                .then(() => {
                  console.log("Connected");
                  dispatch(
                    addUserToSpreadsheet({
                      // name,
                      // email,
                      gender,
                      scenario,
                      age,
                    })
                  );
                })
                .catch((error) => console.error("Connection failed:", error));
            }}
          >
            <div className="flex flex-col items-center justify-center">
              <AudioLines
                className="size-12 mb-2 opacity-80 "
                strokeWidth={1}
                stroke="black"
              />
              <span className="text-black/80">Start the conversation</span>
            </div>
          </Button>
        </motion.div>
      ) : null}
    </div>
  );
}
