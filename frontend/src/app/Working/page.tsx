import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import React from "react";

function Working() {
  return (
    <MaxWidthWrapper>
      <div className="text-center">
        <h2 className="text-4xl font-bold text-gray-900 dark:text-white">
          How It Works
        </h2>
        <p className="mt-4 text-lg text-gray-600 dark:text-gray-400">
          It's simple and effective.
        </p>
      </div>
      <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {/* Step 1 */}
        <div className="p-6 bg-white dark:bg-gray-800 rounded-lg shadow-md">
          <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
            1. Pick Your Scenario
          </h3>
          <p className="mt-4 text-gray-600 dark:text-gray-400">
            Choose from hundreds of real-world situations, or create your own
            custom scenario.
          </p>
        </div>
        {/* Step 2 */}
        <div className="p-6 bg-white dark:bg-gray-800 rounded-lg shadow-md">
          <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
            2. Practice Naturally
          </h3>
          <p className="mt-4 text-gray-600 dark:text-gray-400">
            Interact through text or voice, just like you would in real life.
          </p>
        </div>
        {/* Step 3 */}
        <div className="p-6 bg-white dark:bg-gray-800 rounded-lg shadow-md">
          <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
            3. Get Smart Feedback
          </h3>
          <p className="mt-4 text-gray-600 dark:text-gray-400">
            Receive detailed insights about your communication style, body
            language, and word choice.
          </p>
        </div>
        {/* Step 4 */}
        <div className="p-6 bg-white dark:bg-gray-800 rounded-lg shadow-md">
          <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
            4. Build Real Confidence
          </h3>
          <p className="mt-4 text-gray-600 dark:text-gray-400">
            Watch your skills improve as you practice different approaches.
          </p>
        </div>
      </div>
    </MaxWidthWrapper>
  );
}

export default Working;
