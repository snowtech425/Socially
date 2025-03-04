import React from "react";
import MaxWidthWrapper from "@/components/MaxWidthWrapper";

function PrivacyPolicyPage() {
  return (
    <MaxWidthWrapper className="pb-24  lg:grid lg:grid-cols-2 sm:pb-32 lg:gap-x-8 xl:gap-x-12 lg:pb-52">
      <div className="col-span-12 px-6 lg:px-0 lg:pt-4">
        <div className="relative mx-auto text-center lg:text-left flex flex-col items-center lg:items-start">
          <h1 className="relative w-full tracking-tight text-balance mt-16 font-bold !leading-tight text-5xl md:text-6xl lg:text-7xl text-primary dark:text-white">
            Privacy Policy
          </h1>
          <p className="mt-6 text-2xl font-semibold text-gray-900 dark:text-gray-100 leading-snug tracking-wide">
            Protecting Your Personal Data
          </p>
          <div>
            <p className="mt-6 text-lg text-gray-700 dark:text-gray-300 leading-relaxed tracking-wide">
              <strong>Effective Date: 4 March 2025</strong>
            </p>
            <p className="mt-6 text-lg text-gray-700 dark:text-gray-300 leading-relaxed tracking-wide">
              <strong>1. Data We Collect</strong> - We collect the following
              types of personal data: Account Information, Chat Interactions,
              and Technical Data.
            </p>
            <p className="mt-6 text-lg text-gray-700 dark:text-gray-300 leading-relaxed tracking-wide">
              <strong>2. How We Use Your Data</strong> - We use your data to
              provide services, improve AI models, manage accounts, and ensure
              security.
            </p>
            <p className="mt-6 text-lg text-gray-700 dark:text-gray-300 leading-relaxed tracking-wide">
              <strong>3. AI Model Training & Data Usage</strong> - All chat
              interactions are used to improve our AI models.
            </p>
            <p className="mt-6 text-lg text-gray-700 dark:text-gray-300 leading-relaxed tracking-wide">
              <strong>4. Data Storage & Security</strong> - Your personal data
              is securely stored and anonymized where possible.
            </p>
            <p className="mt-6 text-lg text-gray-700 dark:text-gray-300 leading-relaxed tracking-wide">
              <strong>5. Your Rights Under UK GDPR</strong> - You have the right
              to access, correct, delete, or restrict processing of your data.
            </p>
            <p className="mt-6 text-lg text-gray-700 dark:text-gray-300 leading-relaxed tracking-wide">
              <strong>6. Data Sharing & Third Parties</strong> - We do not sell
              personal data to third parties and share data only with service
              providers.
            </p>
          </div>
        </div>
      </div>
    </MaxWidthWrapper>
  );
}

export default PrivacyPolicyPage;
