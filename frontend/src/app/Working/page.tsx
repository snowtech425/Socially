/* eslint-disable react/no-unescaped-entities */
import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import Image from "next/image";
import React from "react";

function Working() {
  return (
    <MaxWidthWrapper>
      <div className="flex flex-col md:flex-row items-center gap-12">
        {/* Left Section: Steps */}
        <div className="md:w-full">
          <div className="md:text-start">
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white">
              Why Practice <span className="text-[#422b80]"> Matters </span>
            </h2>
            <p className="mt-4 text-lg text-gray-600 dark:text-gray-400">
              Follow these simple steps to improve your skills effortlessly.
            </p>
          </div>

          <div className="mt-12 flex flex-col gap-8 md:gap-12 relative">
            {[
              {
                step: "1",
                title: "Pick Your Scenario",
                description:
                  "The only way to get better at conversations is to practice.But practicing with real people is hard. It feels awkward, unpredictable, and the stakes feel too high.",
              },
              {
                step: "2",
                title: "Practice Naturally",
                description:
                  "SmallTalk gives you a safe space to practice first—so you can walk into real conversations feeling calm, clear, and confident.",
              },
              {
                step: "3",
                title: "Get Smart Feedback",
                description:
                  "You don’t have to be perfect. You just need a place to practice.",
              },
              {
                step: "4",
                title: "Build Real Confidence",
                description:
                  "I built SmallTalk because I struggled too. I used to freeze mid-sentence, panic, and walk away wishing I’d said more. There was nowhere safe to practice—so I made one.",
              },
            ].map((item, idx) => (
              <div key={idx} className="relative flex items-center">
                {/* Step Number */}
                <div className="flex items-center justify-center w-8 h-7 p-2 md:w-8  md:h-8 lg:w-12 lg:h-16 rounded-e-full bg-[#422b80] text-white text-xl font-semibold shadow-lg">
                  {item.step}
                </div>

                {/* Step Content */}
                <div className="ml-6">
                  {/* <h3 className="text-2xl font-semibold text-gray-900 dark:text-white">
                    {item.title}
                  </h3> */}
                  <h5 className="mt-2 text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
                    {item.description}
                  </h5>
                </div>

                {/* Arrow - Except for the last step */}
                {idx !== 3 && (
                  <div>
                    <div className="absolute left-0 top-[85px] w-1 h-4 bg-gray-300 dark:bg-gray-600 hidden md:block"></div>
                    <div className="absolute left-2 top-[75px] w-1 h-8 bg-gray-300 dark:bg-gray-600 hidden md:block"></div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Right Section: Image */}
        <div className="hidden lg:flex md:w-1/2  md:justify-center">
          <Image
            src="/working.jpg"
            alt="Working Process"
            width={500}
            height={500}
            className="w-full "
          />
        </div>
      </div>
    </MaxWidthWrapper>
  );
}

export default Working;
