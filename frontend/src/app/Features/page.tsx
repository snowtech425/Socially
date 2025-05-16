/* eslint-disable react/no-unescaped-entities */
import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import React from "react";

function Features() {
  return (
    <MaxWidthWrapper>
      <div className="text-center">
        <h2 className="text-4xl font-bold text-gray-900 dark:text-white">
          Why Choose{" "}
          <span className="text-[#422b80] underline">Socially.ai</span>?
        </h2>
        <p className="mt-4 text-lg text-gray-700/90 dark:text-gray-400">
          Here's what makes it different:
        </p>
      </div>
      <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {/* Feature 1 */}
        <div className="p-6 bg-gradient-to-b from-[#422b80] to-[#1d1058] dark:bg-gray-800 rounded-lg shadow-md">
          <h3 className="text-xl font-semibold text-white dark:text-white">
            Real Scenarios, Zero Pressure
          </h3>
          <p className="mt-4 text-muted/90 dark:text-gray-400">
            Practice job interviews, first dates, or difficult conversations
            without the anxiety of real-world consequences.
          </p>
        </div>
        {/* Feature 2 */}
        <div className="p-6 bg-gradient-to-b from-[#422b80] to-[#1d1058] dark:bg-gray-800 rounded-lg shadow-md">
          <h3 className="text-xl font-semibold text-white dark:text-white">
            Instant, Actionable Feedback
          </h3>
          <p className="mt-4 text-muted/90 dark:text-gray-400">
            Understand exactly what works (and what doesn't) in your
            communication style.
          </p>
        </div>
        {/* Feature 3 */}
        <div className="p-6 bg-gradient-to-b from-[#422b80] to-[#1d1058] dark:bg-gray-800 rounded-lg shadow-md">
          <h3 className="text-xl font-semibold text-white dark:text-white">
            Your Pace, Your Focus
          </h3>
          <p className="mt-4 text-muted/90 dark:text-gray-400">
            Choose the scenarios that matter to you and practice until you feel
            confident.
          </p>
        </div>
      </div>
    </MaxWidthWrapper>
  );
}

export default Features;
