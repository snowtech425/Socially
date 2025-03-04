import React from "react";
import MaxWidthWrapper from "@/components/MaxWidthWrapper";

function CookiePolicyPage() {
  return (
    <MaxWidthWrapper className="pb-24  lg:grid lg:grid-cols-2 sm:pb-32 lg:gap-x-8 xl:gap-x-12  lg:pb-52">
      <div className="col-span-12 px-6 lg:px-0 lg:pt-4">
        <div className="relative mx-auto text-center lg:text-left flex flex-col items-center lg:items-start">
          <h1 className="relative w-full tracking-tight text-balance mt-16 font-bold !leading-tight text-5xl md:text-6xl lg:text-7xl text-primary dark:text-white">
            Cookie Policy
          </h1>
          <p className="mt-6 text-2xl font-semibold text-gray-900 dark:text-gray-100 leading-snug tracking-wide">
            Understanding How We Use Cookies
          </p>
          <div>
            <p className="mt-6 text-lg text-gray-700 dark:text-gray-300 leading-relaxed tracking-wide">
              <strong>1. Introduction</strong> - This Cookie Policy explains how
              we use cookies and similar tracking technologies on our website.
              By using our website, you agree to the use of cookies in
              accordance with this policy.
            </p>
            <p className="mt-6 text-lg text-gray-700 dark:text-gray-300 leading-relaxed tracking-wide">
              <strong>2. What Are Cookies?</strong> - Cookies are small text
              files stored on your device (computer, tablet, or mobile) when you
              visit a website. They help improve your browsing experience by
              remembering preferences and providing insights into website usage.
            </p>
            <p className="mt-6 text-lg text-gray-700 dark:text-gray-300 leading-relaxed tracking-wide">
              <strong>3. How We Use Cookies</strong> - We use cookies for the
              following purposes:
            </p>
            <ul className="list-disc ml-6">
              <li>
                Essential Cookies: Necessary for the website to function
                properly, including security and accessibility features.
              </li>
              <li>
                Performance Cookies: Help us analyse website traffic and improve
                functionality.
              </li>
              <li>
                Functionality Cookies: Store user preferences to enhance
                experience.
              </li>
              <li>
                Advertising & Targeting Cookies: Used by third parties to
                deliver relevant advertisements based on browsing habits.
              </li>
            </ul>

            <p className="mt-6 text-lg text-gray-700 dark:text-gray-300 leading-relaxed tracking-wide">
              <strong>4. Managing Cookies</strong> - You can control and manage
              cookies through your browser settings. Most browsers allow you to
              block or delete cookies, but this may affect website
              functionality.
            </p>
          </div>
        </div>
      </div>
    </MaxWidthWrapper>
  );
}

export default CookiePolicyPage;
