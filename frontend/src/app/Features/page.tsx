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
        <div className="p-6 bg-gradient-to-b from-[#422b80] to-[#1d1058] dark:bg-gray-800 rounded-lg shadow-md text-center ">
          <h3 className="text-xl font-semibold text-white dark:text-white">
            Never Go Blank Again
          </h3>
          <p className="mt-4 text-muted/90 dark:text-gray-400">
            Stop your mind from going blank when you talk to people
          </p>
        </div>

        {/* Feature 2 */}
        <div className="p-6 bg-gradient-to-b from-[#422b80] to-[#1d1058] dark:bg-gray-800 rounded-lg shadow-md text-center">
          <h3 className="text-xl font-semibold text-white dark:text-white">
            Build Confidence Through Practice
          </h3>
          <p className="mt-4 text-muted/90 dark:text-gray-400">
            Practice safely, so you don’t avoid conversations out of fear
          </p>
        </div>

        {/* Feature 3 */}
        <div className="p-6 bg-gradient-to-b from-[#422b80] to-[#1d1058] dark:bg-gray-800 rounded-lg shadow-md text-center">
          <h3 className="text-xl font-semibold text-white dark:text-white">
            Train Before the Real Thing
          </h3>
          <p className="mt-4 text-muted/90 dark:text-gray-400">
            Get conversational reps before it counts
          </p>
        </div>

        {/* Feature 4 */}
        <div className="p-6 bg-gradient-to-b from-[#422b80] to-[#1d1058] dark:bg-gray-800 rounded-lg shadow-md text-center">
          <h3 className="text-xl font-semibold text-white dark:text-white">
            Master the Art of Flow
          </h3>
          <p className="mt-4 text-muted/90 dark:text-gray-400">
            Keep the conversation going without awkward silences
          </p>
        </div>

        {/* Feature 5 */}
        <div className="p-6 bg-gradient-to-b from-[#422b80] to-[#1d1058] dark:bg-gray-800 rounded-lg shadow-md text-center">
          <h3 className="text-xl font-semibold text-white dark:text-white">
            Sound Like Yourself
          </h3>
          <p className="mt-4 text-muted/90 dark:text-gray-400">
            Sound natural—not robotic or scripted
          </p>
        </div>

        {/* Feature 6 */}
        <div className="p-6 bg-gradient-to-b from-[#422b80] to-[#1d1058] dark:bg-gray-800 rounded-lg shadow-md text-center">
          <h3 className="text-xl font-semibold text-white dark:text-white">
            Be Conversation-Ready
          </h3>
          <p className="mt-4 text-muted/90 dark:text-gray-400">
            Feel ready when real conversations happen
          </p>
        </div>
      </div>
    </MaxWidthWrapper>
  );
}

export default Features;
