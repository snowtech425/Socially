import { useVoice } from "@humeai/voice-react";
import { AnimatePresence, motion } from "framer-motion";
import { Button } from "./ui/button";
import { Phone } from "lucide-react";
import React from "react";

export default function StartCall() {
  const { status, connect } = useVoice();

  return (
    <AnimatePresence>
      {status.value !== "connected" ? (
        <motion.div
          className="fixed inset-0 p-4 flex flex-col items-center justify-center gap-y-20"
          initial="initial"
          animate="enter"
          exit="exit"
          variants={{
            initial: { opacity: 0 },
            enter: { opacity: 1 },
            exit: { opacity: 0 },
          }}
        >
          <AnimatePresence>
            <motion.div
              variants={{
                initial: { scale: 0.5 },
                enter: { scale: 1 },
                exit: { scale: 0.5 },
              }}
            >
              <div className="relative flex items-center justify-center">
                <div className="absolute w-52 h-52 border-8 border-green-400 rounded-full animate-pulse"></div>
                <div className="absolute w-56 h-56 border-8 border-green-200 rounded-full animate-pulse"></div>
                <div className="absolute w-48 h-48 border-8 border-green-400 rounded-full animate-pulse"></div>

                <Button
                  className="relative z-50 flex flex-col items-center justify-center w-44 h-44 rounded-full bg-green-400 text-white shadow-lg hover:scale-110 transition-transform 
      before:absolute before:inset-0 before:rounded-full before:border-4 before:border-blue-400/50 before:opacity-0 before:animate-[pulse-wave_2s_infinite] 
      after:absolute after:inset-0 after:rounded-full after:border-4 after:border-blue-400/50 after:opacity-0 after:animate-[pulse-wave_2s_1s_infinite]"
                  onClick={() => {
                    connect()
                      .then(() => console.log("Connected"))
                      .catch((error) =>
                        console.error("Connection failed:", error)
                      );
                  }}
                >
                  <Phone
                    className="size-20 opacity-80"
                    strokeWidth={1}
                    stroke="currentColor"
                  />
                </Button>
              </div>
            </motion.div>
          </AnimatePresence>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}
