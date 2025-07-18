import React from "react";
import MaxWidthWrapper from "./MaxWidthWrapper";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className=" h-20 relative bg-gradient-to-b dark:from-gray-800 dark:to-gray-900">
      <MaxWidthWrapper>
        <div className="border-t border-gray-200" />
        <div className="h-full flex flex-col md:flex-row md:justify-between justify-center items-center">
          <div className="text-center md:text-left pb-2 md:pb-0">
            <p className="text-sm text-muted-foreground">
              &copy; {new Date().getFullYear()} All rights reserved by{" "}
              <Link
                target="_blank"
                href={"/"}
                className="font-semibold text-[#422b80]"
              >
                SmallTalk
              </Link>
            </p>
          </div>
          <div className="flex items-center justify-center">
            <div className="flex space-x-8">
              {/* <Link
                href="#"
                className="text-sm text-muted-foreground hover:text-gray-600"
              >
                Terms
              </Link> */}
              <Link
                href="/Policies/PrivacyPolicy"
                className="text-sm text-muted-foreground hover:text-gray-600"
              >
                Privacy Policy
              </Link>
              <Link
                href="/Policies/CookiePolicy"
                className="text-sm text-muted-foreground hover:text-gray-600"
              >
                Cookie Policy
              </Link>
            </div>
          </div>
        </div>
      </MaxWidthWrapper>
    </footer>
  );
};

export default Footer;
