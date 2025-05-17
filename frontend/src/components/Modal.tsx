"use client"; // If using Next.js App Router (optional)

import React from "react";
import { useRouter } from "next/navigation"; // For Next.js 13+ (App Router) OR use "next/router" for older versions
import { Card, CardContent } from "./ui/card";
import dummydata from "../components/dummyDatas/dummydata";
import { v4 as uuidv4 } from "uuid";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose }) => {
  const router = useRouter();

  if (!isOpen) return null;

  const handleCardClick = (title: string) => {
    const uid = uuidv4();
    router.push(`/Hume?title=${encodeURIComponent(title)}&id=${uid}`);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 p-8 ">
      <div className="relative bg-background dark:bg-gray-800 rounded-2xl shadow-lg p-6 sm:p-8 w-[90%] max-w-3xl h-[80%] md:h-auto overflow-y-scroll md:overflow-y-hidden">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-500 dark:text-gray-400 hover:text-gray-800 dark:hover:text-white text-sm md:text-2xl transition-transform transform hover:scale-110"
        >
          ✖
        </button>

        {/* Title */}
        <h2 className=" text-sm mt-5  md:text-md font-bold text-[#1d1058] dark:text-white text-center mb-6">
          What do you want to{" "}
          <span className="text-[#1d1058] dark:text-white underline">
            Practice{" "}
          </span>{" "}
          today? &nbsp;
          {/* <span className="text-[#1d1058] dark:text-white underline">
            Scenario
          </span>{" "}
          to Get Started With  */}
          🎉 🎉 🎉
        </h2>

        {/* Modal Content */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {dummydata.map((item, index) => (
            <Card
              key={index}
              onClick={() => handleCardClick(item.title)}
              className="cursor-pointer bg-gradient-to-b from-[#433179] to-[#1d1058]  dark:text-white rounded-xl p-5 md:p-4 shadow-lg hover:shadow-2xl transition-shadow"
            >
              <CardContent className="h-fit p-0 md:p-3">
                <p className="text-md md:text-lg font-semibold mb-0 md:mb-2 flex items-center gap-x-3 w-full border-b ">
                  <span className={item.color}>{item.icon}</span>
                  <span className=" text-[#E2EAFF] text-sm md:text-base dark:text-white break-all mb-2 md:mb-0 ">
                    {item.heading}
                  </span>
                </p>
                <p className=" md:flex text-sm text-[#E2EAFF] dark:text-white text-center md:text-left">
                  {item.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Modal;
