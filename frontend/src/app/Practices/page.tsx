"use client";
/* eslint-disable react/no-unescaped-entities */
import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import React from "react";
import {
  FaRunning,
  FaMusic,
  FaMicrophone,
  FaEye,
  FaShieldVirus,
  FaComments,
  FaPalette,
  FaCheckCircle,
  FaShieldAlt,
} from "react-icons/fa";
import { FaHandsBound, FaShield } from "react-icons/fa6";

const features = [
  {
    title: "Preview Approaches",
    desc: "See how different approaches might land before trying them in real life.",
    icon: <FaEye className="text-4xl text-[#a783d8]" />,
  },
  {
    title: "Practice Conversations",
    desc: "Practice difficult conversations until they feel natural.",
    icon: <FaComments className="text-4xl text-[#a783d8]" />,
  },
  {
    title: "Experiment with Styles",
    desc: "Try new communication styles without fear of judgment.",
    icon: <FaPalette className="text-4xl text-[#a783d8]" />,
  },
  {
    title: "Build Confidence",
    desc: "Gain genuine confidence through repetition and feedback.",
    icon: <FaCheckCircle className="text-4xl text-[#a783d8]" />,
  },
];

function ScienceAndPractice() {
  return (
    <section className=" py-24">
      <MaxWidthWrapper>
        {/* The Science Behind It */}
        <div className="text-center">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white">
            How <span className="text-[#422b80]">SmallTalk</span> Works
          </h2>
          {/* <p className="mt-4 text-lg text-gray-700 dark:text-gray-300 max-w-2xl mx-auto">
            Social confidence isn't magic – it's a skill. And like any skill, it
            improves with deliberate practice
          </p> */}
        </div>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              title: "Safe practice space",
              desc: "Practice conversations without the fear of messing up in front of real people.",
              icon: <FaRunning className="text-5xl text-[#422b80]" />,
            },
            {
              title: "Real conversation reps",
              desc: "Get as many practice reps as you want. The only way to build confidence is to practice.",
              icon: <FaMusic className="text-5xl text-[#422b80]" />,
            },
            {
              title: "Conversation rescue support (Coming Soon)",
              desc: "Stuck or frozen? We’ll gently guide you to keep the conversation going.",
              icon: <FaShieldAlt className="text-5xl text-[#422b80]" />,
            },
            {
              title: "Low-pressure feedback (Coming Soon)",
              desc: "Get simple feedback on what went well and what could improve.",
              icon: <FaHandsBound className="text-5xl text-[#422b80]" />,
            },
            {
              title: "Scenario practice modules",
              desc: "Practice real-life situations like dates, meeting new people, ordering coffee, networking at events, or workplace conversations.",
              icon: <FaMicrophone className="text-5xl text-[#422b80]" />,
            },
          ].map((item, idx) => (
            <div
              key={idx}
              className="p-8 bg-white dark:bg-gray-800 rounded-2xl shadow-lg transition duration-300 transform hover:scale-105 text-center"
            >
              <div className="mb-4 flex justify-center">{item.icon}</div>
              <h3 className="text-2xl font-semibold text-gray-900 dark:text-white">
                {item.title}
              </h3>
              <p className="mt-4 text-gray-600 dark:text-gray-300">
                {item.desc}
              </p>
            </div>
          ))}
        </div>

        {/* <div className="mt-16 text-center">
          <p className="text-lg text-gray-700 dark:text-gray-300 max-w-3xl mx-auto">
            But instead of just recording yourself, you get intelligent feedback
            and natural responses that help you understand the subtle dynamics
            of social interaction.
          </p>
        </div> */}

        {/* No More Learning Through Painful Experiences */}
        <div className="relative mt-52 text-center">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white relative inline-block">
            No More Learning Through
            <span className="text-[#422b80]"> Painful Experiences</span>
          </h2>

          <p className="mt-6 text-lg text-gray-700 dark:text-gray-300 max-w-2xl mx-auto">
            Instead of using your real relationships as a testing ground, you
            can:
          </p>
        </div>

        {/* Seamless Scrolling Effect */}
        <div className="relative overflow-hidden mt-24">
          <div className="flex space-x-6 animate-marquee">
            {[...features, ...features].map((item, idx) => (
              <div
                key={idx}
                className="p-6 w-72 bg-gradient-to-b from-[#422b80] to-[#1d1058] dark:bg-gray-800 rounded-2xl border text-center flex-shrink-0"
              >
                <div className="mb-4 flex justify-center">{item.icon}</div>
                <h3 className="text-xl font-semibold text-white dark:text-white">
                  {item.title}
                </h3>
                <p className="mt-2 text-white dark:text-gray-300">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </MaxWidthWrapper>

      {/* Tailwind CSS for Continuous Scrolling */}
      <style jsx>{`
        @keyframes marquee {
          from {
            transform: translateX(0);
          }
          to {
            transform: translateX(-50%);
          }
        }

        .animate-marquee {
          display: flex;
          gap: 1.5rem;
          width: max-content;
          animation: marquee 15s linear infinite;
        }
      `}</style>
    </section>
  );
}

export default ScienceAndPractice;
