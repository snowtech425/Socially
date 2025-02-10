"use client";
import React, { useState } from "react";
import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import Modal from "@/components/Modal";

function Hero() {
  const [isModalOpen, setModalOpen] = useState(false);

  const handleModalToggle = () => {
    setModalOpen((prev) => !prev);
  };

  return (
    <MaxWidthWrapper className="pb-24 pt-10 lg:grid lg:grid-cols-2 sm:pb-32 lg:gap-x-8 xl:gap-x-12 lg:pt-24 xl:pt-32 lg:pb-52">
      <div className="col-span-12 px-6 lg:px-0 lg:pt-4">
        <div className="relative mx-auto text-center lg:text-left flex flex-col items-center lg:items-start">
          <h1 className="relative w-full tracking-tight text-balance mt-16 font-bold !leading-tight text-5xl md:text-6xl lg:text-7xl text-gray-800 dark:text-white">
            How to Build Social Confidence Without Risking Real Relationships
          </h1>
          <p className="mt-6 text-2xl font-semibold text-gray-900 dark:text-gray-100 leading-snug tracking-wide">
            Practice{" "}
            <span className="text-green-700 dark:text-green-400 font-bold">
              real conversations
            </span>{" "}
            in private, get better in public.
          </p>
          <div>
            <p className="mt-6 text-lg text-gray-700 dark:text-gray-300 leading-relaxed tracking-wide">
              Ever noticed how the best advice for improving social skills is
              always
              <span className="italic text-gray-900 dark:text-gray-200">
                "just put yourself out there"
              </span>
              ?
            </p>

            <p className="mt-4 text-lg font-medium text-gray-800 dark:text-gray-400 leading-relaxed">
              <span className="text-gray-900 dark:text-gray-100 font-extrabold">
                Easier said than done.
              </span>
            </p>
            <button
              onClick={handleModalToggle}
              className="mt-8 px-8 py-3 bg-green-600 text-white font-semibold rounded-lg hover:bg-green-700 transition-colors"
            >
              Start Practicing Now
            </button>
          </div>
        </div>
      </div>
      <Modal isOpen={isModalOpen} onClose={handleModalToggle} />
    </MaxWidthWrapper>
  );
}

export default Hero;
