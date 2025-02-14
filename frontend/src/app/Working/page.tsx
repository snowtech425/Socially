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
              How It <span className="text-green-500">Works</span>
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
                  "Choose from hundreds of real-world situations, or create your own custom scenario.",
              },
              {
                step: "2",
                title: "Practice Naturally",
                description:
                  "Interact through text or voice, just like you would in real life.",
              },
              {
                step: "3",
                title: "Get Smart Feedback",
                description:
                  "Receive detailed insights about your communication style, body language, and word choice.",
              },
              {
                step: "4",
                title: "Build Real Confidence",
                description:
                  "Watch your skills improve as you practice different approaches.",
              },
            ].map((item, idx) => (
              <div key={idx} className="relative flex items-center">
                {/* Step Number */}
                <div className="flex items-center justify-center w-8 h-7 p-2 md:w-8  md:h-8 lg:w-12 lg:h-12 rounded-full bg-green-600 text-white text-xl font-semibold shadow-lg">
                  {item.step}
                </div>

                {/* Step Content */}
                <div className="ml-6">
                  <h3 className="text-2xl font-semibold text-gray-900 dark:text-white">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
                    {item.description}
                  </p>
                </div>

                {/* Arrow - Except for the last step */}
                {idx !== 3 && (
                  <div className="absolute left-6 top-[80px] w-0.5 h-16 bg-gray-300 dark:bg-gray-600 hidden md:block"></div>
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
