import React from "react";
import { Card, CardContent } from "./ui/card";
import { FaCoffee, FaHeartbeat } from "react-icons/fa";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div className="relative bg-background dark:bg-gray-800 rounded-2xl shadow-lg p-6 sm:p-8 w-[90%] max-w-3xl">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-500 dark:text-gray-400 hover:text-gray-800 dark:hover:text-white text-2xl transition-transform transform hover:scale-110"
        >
          ✖
        </button>

        {/* Title */}
        <h2 className="text-md font-bold text-gray-900 dark:text-white text-center mb-6">
          Select a &nbsp;
          <span className="text-primary underline">Scenario</span> to Get
          Started With 🎉 🎉 🎉
        </h2>

        {/* Modal Content */}
        <div
          className={`grid grid-cols-1 ${
            2 > 1 ? "sm:grid-cols-2" : "sm:grid-cols-1"
          } gap-6`}
        >
          {[
            {
              title: "Date",
              icon: <FaHeartbeat />,
              color: "text-red-500",
              description: "Make your Date Perfect Before your Actual Date",
            },
            {
              title: "Barista",
              icon: <FaCoffee />,
              color: "text-red-900",
              description: "Learn How to Interact as a Professional Barista",
            },
          ].map((item, index) => (
            <Card
              key={index}
              className="bg-gradient-to-br from-blue-100 via-green-100 to-pink-100 dark:from-green-800 dark:via-green-800 dark:to-green-800 rounded-xl p-6 md:p-10 shadow-lg hover:shadow-2xl transition-shadow"
            >
              <CardContent className="cursor-pointer">
                <h3 className="text-lg font-semibold  mb-2 flex items-center gap-x-3">
                  <span className={item.color}> {item.icon}</span>
                  <span className="text-gray-900 dark:text-white">
                    {item.title}
                  </span>
                </h3>
                <p className="text-sm text-gray-700 dark:text-gray-300">
                  {item.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Modal;
