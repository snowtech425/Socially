/* eslint-disable react/no-unescaped-entities */
import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import React from "react";
// force git to detect change
function Features() {
  return (
    <MaxWidthWrapper>
      <div className="text-center">
        <h2 className="text-4xl font-bold text-gray-900 dark:text-white">
          Pain Bullets{" "}
          {/* <span className="text-[#422b80] underline">SmallTalk</span>? */}
        </h2>
        <p className="mt-4 text-lg text-gray-700/90 dark:text-gray-400">
          Your Conversation Confidence Roadmap
        </p>
      </div>
      <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {/* Feature 1 */}
        <div className="p-6 bg-gradient-to-b from-[#422b80] to-[#1d1058] dark:bg-gray-800 rounded-lg shadow-md">
          <h3 className="text-xl font-semibold text-white dark:text-white">
            Stop your mind from going blank when you talk to people
          </h3>
          {/* <p className="mt-4 text-muted/90 dark:text-gray-400">
            Practice job interviews, first dates, or difficult conversations
            without the anxiety of real-world consequences.
          </p> */}
        </div>

        {/* Feature 2 */}
        <div className="p-6 bg-gradient-to-b from-[#422b80] to-[#1d1058] dark:bg-gray-800 rounded-lg shadow-md">
          <h3 className="text-xl font-semibold text-white dark:text-white">
            Practice safely, so you don’t avoid conversations out of fear
          </h3>
          {/* <p className="mt-4 text-muted/90 dark:text-gray-400">
            Understand exactly what works (and what doesn't) in your
            communication style.
          </p> */}
        </div>

        {/* Feature 3 */}
        <div className="p-6 bg-gradient-to-b from-[#422b80] to-[#1d1058] dark:bg-gray-800 rounded-lg shadow-md">
          <h3 className="text-xl font-semibold text-white dark:text-white">
            Get conversational reps before it counts
          </h3>
          {/* <p className="mt-4 text-muted/90 dark:text-gray-400">
            Choose the scenarios that matter to you and practice until you feel
            confident.
          </p> */}
        </div>

        {/* Feature 4 */}
        <div className="p-6 bg-gradient-to-b from-[#422b80] to-[#1d1058] dark:bg-gray-800 rounded-lg shadow-md">
          <h3 className="text-xl font-semibold text-white dark:text-white">
            Keep the conversation going without awkward silences
          </h3>
          {/* <p className="mt-4 text-muted/90 dark:text-gray-400">
            Choose the scenarios that matter to you and practice until you feel
            confident.
          </p> */}
          </div>

          {/* Feature 5 */}
        <div className="p-6 bg-gradient-to-b from-[#422b80] to-[#1d1058] dark:bg-gray-800 rounded-lg shadow-md">
          <h3 className="text-xl font-semibold text-white dark:text-white">
            Sound natural—not robotic or scripted
          </h3>
          {/* <p className="mt-4 text-muted/90 dark:text-gray-400">
            Choose the scenarios that matter to you and practice until you feel
            confident.
          </p> */}
        </div>

         {/* Feature 6 */}
        <div className="p-6 bg-gradient-to-b from-[#422b80] to-[#1d1058] dark:bg-gray-800 rounded-lg shadow-md">
          <h3 className="text-xl font-semibold text-white dark:text-white">
            Feel ready when real conversations happen
          </h3>
          {/* <p className="mt-4 text-muted/90 dark:text-gray-400">
            Choose the scenarios that matter to you and practice until you feel
            confident.
          </p> */}
        </div>
      </div>
    </MaxWidthWrapper>
  );
}

export default Features;
