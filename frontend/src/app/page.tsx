import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import Image from "next/image";
import Hero from "./Hero/page";
import Features from "./Features/page";
import Working from "./Working/page";
import CTA from "./CTA/page";
import ScienceAndPractice from "./Practices/page";

export default async function Home() {
  return (
    <div className="bg-white dark:bg-gray-900">
      {/* Hero Section */}
      <section className="bg-gradient-to-t from-[rgba(226,234,255,0)] to-[#E2EAFF] dark:from-gray-800 dark:to-gray-900">
        <Hero />
      </section>
      {/* Features Section */}
      <section className="bg-[#ffffffb3] dark:bg-gray-900 pb-24">
        <Features />
      </section>
      {/* How It Works Section */}
      <section className="bg-gradient-to-b from-[rgba(226,234,255,0)] to-[#E2EAFF] dark:from-gray-900 dark:to-gray-800 py-24">
        <Working />
      </section>
      {/* ScienceAndPractices Section */}
      <section className="bg-[#E2EAFF] to-[#E2EAFF] dark:bg-gray-900 ">
        <ScienceAndPractice />
      </section>
      {/* CTA Section */}
      <section className="bg-[#a783d8] py-24">
        <CTA />
      </section>
    </div>
  );
}
