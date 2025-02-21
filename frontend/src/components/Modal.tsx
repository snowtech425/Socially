"use client"; // If using Next.js App Router (optional)

import React from "react";
import { useRouter } from "next/navigation"; // For Next.js 13+ (App Router) OR use "next/router" for older versions
import { Card, CardContent } from "./ui/card";
import dummydata from "../components/dummyDatas/dummydata";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose }) => {
  const router = useRouter();

  if (!isOpen) return null;

  const handleCardClick = (title: string) => {
    router.push(`/Hume?title=${encodeURIComponent(title)}`);
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
        <h2 className=" text-sm  md:text-md font-bold text-gray-900 dark:text-white text-center mb-6">
          Select a &nbsp;
          <span className="text-primary underline">Scenario</span> to Get
          Started With 🎉 🎉 🎉
        </h2>

        {/* Modal Content */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {dummydata.map((item, index) => (
            <Card
              key={index}
              onClick={() => handleCardClick(item.title)}
              className="cursor-pointer bg-gradient-to-br from-blue-100 via-green-100 to-pink-100 dark:from-green-800 dark:via-green-800 dark:to-green-800 dark:text-white rounded-xl p-5 md:p-4 shadow-lg hover:shadow-2xl transition-shadow"
            >
              <CardContent className="h-fit p-0 md:p-3">
                <p className="text-md md:text-lg font-semibold mb-0 md:mb-2 flex items-center gap-x-3 w-full ">
                  <span className={item.color}>{item.icon}</span>
                  <span className=" text-gray-900 text-sm md:text-base dark:text-white break-all mb-2 md:mb-0 ">
                    {item.title}
                  </span>
                </p>
                <p className=" md:flex text-sm text-gray-700 dark:text-white text-center md:text-left">
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
