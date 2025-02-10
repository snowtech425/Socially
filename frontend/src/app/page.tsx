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
      <section className="bg-gradient-to-b from-green-50 to-white dark:from-gray-800 dark:to-gray-900">
        <Hero />
      </section>
      {/* Features Section */}
      <section className="bg-white dark:bg-gray-900 py-24">
        <Features />
      </section>
      {/* How It Works Section */}
      <section className="bg-gradient-to-b from-white to-green-50 dark:from-gray-900 dark:to-gray-800 py-24">
        <Working />
      </section>
      {/* ScienceAndPractices Section */}
      <section className="bg-white ">
        <ScienceAndPractice />
      </section>
      {/* CTA Section */}ly
      <section className="bg-green-600 py-24">
        <CTA />
      </section>
    </div>
  );
}
