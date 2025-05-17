"use client";
import { useVoice } from "@humeai/voice-react";
import { AnimatePresence, motion } from "framer-motion";
import { Button } from "./ui/button";
import { Phone } from "lucide-react";
import React from "react";
import { useDispatch } from "react-redux";
import { addUserToSpreadsheet } from "@/store/slices/authSlice";

export default function StartCall({
  // name,
  // email,
  gender,
  scenario,
  age,
  setShowBox,
  setAlert,
  alert,
}: any) {
  const { status, connect } = useVoice();
  const dispatch = useDispatch();
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
          <motion.div
            variants={{
              initial: { scale: 0.5 },
              enter: { scale: 1 },
              exit: { scale: 0.5 },
            }}
          >
            <div className="relative flex items-center justify-center">
              <Button
                className="relative z-50 flex flex-col items-center justify-center w-36 h-36 rounded-full bg-green-400 dark:bg-green-900 text-white shadow-lg hover:bg-green-600 hover:border-2 hover:border-green-500 "
                onClick={() => {
                  setShowBox(false);
                  setAlert(false);

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
                    .catch((error) =>
                      console.error("Connection failed:", error)
                    );
                }}
              >
                <Phone
                  className="size-12 mb-2 opacity-80 "
                  strokeWidth={1}
                  stroke="currentColor"
                />
                <span>Proceed to call</span>
              </Button>
            </div>
          </motion.div>
        </motion.div>
      ) : null}
    </div>
  );
}
