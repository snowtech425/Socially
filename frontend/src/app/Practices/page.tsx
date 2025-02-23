"use client";
/* eslint-disable react/no-unescaped-entities */
import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import React from "react";
import {
  FaRunning,
  FaMusic,
  FaMicrophone,
  FaEye,
  FaComments,
  FaPalette,
  FaCheckCircle,
} from "react-icons/fa";

const features = [
  {
    title: "Preview Approaches",
    desc: "See how different approaches might land before trying them in real life.",
    icon: <FaEye className="text-4xl text-green-500" />,
  },
  {
    title: "Practice Conversations",
    desc: "Practice difficult conversations until they feel natural.",
    icon: <FaComments className="text-4xl text-green-500" />,
  },
  {
    title: "Experiment with Styles",
    desc: "Try new communication styles without fear of judgment.",
    icon: <FaPalette className="text-4xl text-green-500" />,
  },
  {
    title: "Build Confidence",
    desc: "Gain genuine confidence through repetition and feedback.",
    icon: <FaCheckCircle className="text-4xl text-green-500" />,
  },
];

function ScienceAndPractice() {
  return (
    <section className="bg-green-50 dark:bg-gray-900 py-24">
      <MaxWidthWrapper>
        {/* The Science Behind It */}
        <div className="text-center">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white">
            The <span className="text-green-500">Science</span> Behind It
          </h2>
          <p className="mt-4 text-lg text-gray-700 dark:text-gray-300 max-w-2xl mx-auto">
            Social confidence isn't magic – it's a skill. And like any skill, it
            improves with deliberate practice.
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              title: "Athletes",
              desc: "Perfect their technique through slow-motion replay.",
              icon: <FaRunning className="text-5xl text-green-500" />,
            },
            {
              title: "Musicians",
              desc: "Master pieces by practicing difficult sections.",
              icon: <FaMusic className="text-5xl text-green-500" />,
            },
            {
              title: "Public Speakers",
              desc: "Refine their delivery through recorded practice.",
              icon: <FaMicrophone className="text-5xl text-green-500" />,
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

        <div className="mt-16 text-center">
          <p className="text-lg text-gray-700 dark:text-gray-300 max-w-3xl mx-auto">
            But instead of just recording yourself, you get intelligent feedback
            and natural responses that help you understand the subtle dynamics
            of social interaction.
          </p>
        </div>

        {/* No More Learning Through Painful Experiences */}
        <div className="relative mt-52 text-center">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white relative inline-block">
            No More Learning Through
            <span className="text-green-500"> Painful Experiences</span>
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
                className="p-6 w-72 bg-transparent dark:bg-gray-800 rounded-2xl border text-center flex-shrink-0"
              >
                <div className="mb-4 flex justify-center">{item.icon}</div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                  {item.title}
                </h3>
                <p className="mt-2 text-gray-600 dark:text-gray-300">
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
