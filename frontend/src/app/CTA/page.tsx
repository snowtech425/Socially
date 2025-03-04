"use client";
import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import React, { useState } from "react";
import Modal from "@/components/Modal";

function CTA() {
  const [isModalOpen, setModalOpen] = useState(false);

  const handleModalToggle = () => {
    setModalOpen((prev) => !prev);
  };
  return (
    <MaxWidthWrapper>
      <div className="text-center">
        <h2 className="text-4xl font-bold text-white">
          See The Difference Yourself
        </h2>
        <p className="mt-4 text-lg text-green-100">
          Try SocialSkills AI free for 7 days. No credit card needed.
        </p>
        <button
          onClick={handleModalToggle}
          className="mt-8 px-8 py-3 bg-white text-green-600 font-semibold rounded-lg hover:bg-green-50 transition-colors"
        >
          Start Practicing Now
        </button>
      </div>
      <Modal isOpen={isModalOpen} onClose={handleModalToggle} />
    </MaxWidthWrapper>
  );
}

export default CTA;
