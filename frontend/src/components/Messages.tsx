"use client";
import { cn } from "../lib/utils";
import { useVoice } from "@humeai/voice-react";
import { AnimatePresence, motion } from "framer-motion";
import { ComponentRef, forwardRef } from "react";
import React from "react";
import Expressions from "./Expressions";
import { FaCoffee, FaRobot, FaUser } from "react-icons/fa";
import { useSearchParams } from "next/navigation";
import dummydata from "./dummyDatas/dummydata";

const Messages = forwardRef<
  ComponentRef<typeof motion.div>,
  Record<never, never>
>(function Messages(_, ref) {
  const { messages } = useVoice();
  const searchParams = useSearchParams();
  const title = searchParams.get("title");

  // Find the matching item in dummydata based on the title
  const matchedData = dummydata.find((item) => item.title === title);

  // Use the matched data or fallback to default values
  const name = matchedData ? matchedData.name : "AI Assistant";
  const icon = matchedData ? matchedData.icon : <FaRobot />; // Default icon if no match

  return (
    <motion.div
      layoutScroll
      className={"grow rounded-md overflow-auto p-4"}
      ref={ref}
    >
      <motion.div
        className={"max-w-2xl mx-auto w-full flex flex-col gap-4 pb-24"}
      >
        <AnimatePresence mode="popLayout">
          {messages.map((msg, index) => {
            if (
              msg.type === "user_message" ||
              msg.type === "assistant_message"
            ) {
              return (
                <motion.div
                  key={msg.type + index}
                  className={cn(
                    "w-[80%] my-2 p-4 shadow-lg rounded-lg",
                    "bg-card border border-border dark:text-black",
                    msg.type === "user_message"
                      ? "ml-auto bg-blue-50 dark:bg-yellow-50"
                      : "bg-green-50"
                  )}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 0 }}
                >
                  <div
                    className={cn(
                      "flex items-center text-xs font-medium leading-none opacity-50 mb-2"
                    )}
                  >
                    {msg.type === "assistant_message" && (
                      <div className={`mr-2 ${matchedData?.color}`}>{icon}</div>
                    )}
                    <span className="capitalize">
                      {msg.type === "assistant_message" ? (
                        name
                      ) : (
                        <div
                          className={`mr-2 flex gap-x-1 ${matchedData?.color}`}
                        >
                          <span>
                            <FaUser />
                          </span>
                          &nbsp; <span>Me</span>
                        </div>
                      )}
                    </span>
                  </div>
                  <div className="text-sm text-gray-800">
                    {msg.message.content}
                  </div>
                  <Expressions values={{ ...msg.models.prosody?.scores }} />
                </motion.div>
              );
            }

            return null;
          })}
        </AnimatePresence>
      </motion.div>
    </motion.div>
  );
});

export default Messages;
