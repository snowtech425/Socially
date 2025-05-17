/* eslint-disable react/no-unescaped-entities */
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
    <MaxWidthWrapper className="pb-24 h-screen pt-10 lg:grid lg:grid-cols-2 sm:pb-32 lg:gap-x-8 xl:gap-x-12 lg:pt-24 xl:pt-32 lg:pb-52">
      <div className="col-span-12 px-6 lg:px-0 lg:pt-4">
        <div className="relative mx-auto text-center md:text-left flex flex-col items-center md:items-start">
          <h1 className="relative w-full md:w-9/12 tracking-tight text-balance mt-16 font-bold !leading-tight text-5xl md:text-6xl lg:text-7xl text-[#422b80]">
            How can you stop freezing in conversations?
          </h1>
          {/* <p className="mt-6 text-2xl font-semibold text-[#422b80] dark:text-gray-100 leading-snug tracking-wide">
            Practice{" "}
            <span className="text-[#a783d8] dark:text-[#a783d8] font-bold">
              real conversations
            </span>{" "}
            in private, get better in public.
          </p> */}
          <div>
            <p className="mt-6 text-md text-center md:text-left  md:text-2xl w-full md:w-8/12 text-[#422b80]/70 dark:text-gray-300 leading-relaxed tracking-wide">
              SmallTalk gives you a{" "}
              <strong className="text-[#422b80]">safe, judgment-free</strong>{" "}
              space to practice real conversations
              <span className="italic text-[#422b80] dark:text-gray-200">
                "—before you have to do it for real."
              </span>
              ?
            </p>

            <p className="mt-4 text-lg font-medium text-[#422b80] dark:text-gray-400 leading-relaxed">
              <span className="text-[#422b80]/80 dark:text-gray-100 font-extrabold"></span>
            </p>
            <button
              onClick={handleModalToggle}
              className="mt-8 px-8 py-3 bg-[#a783d8] text-[#E2EAFF] font-semibold rounded-lg hover:bg-[#a783d8]/90 transition-colors"
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
