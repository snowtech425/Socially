import React from "react";
import { FaHeartbeat, FaCoffee, FaAd, FaSlideshare } from "react-icons/fa";
import { FaPerson, FaPizzaSlice } from "react-icons/fa6";

// Dummy data
const dummydata = [
  {
    title: "Date",
    icon: <FaHeartbeat />,
    color: "text-red-500",
    girl_name: "Sarah",
    boy_name: "Srijan",
    description:
      "Master your date skills by practicing engaging conversation and handling tricky moments with ease.",
  },
  {
    title: "Barista",
    icon: <FaCoffee />,
    color: "text-red-900",
    girl_name: "Sangita",
    boy_name: "Suman",
    description:
      "Turn small talk into meaningful exchanges and make every café interaction feel natural and fun.",
  },
  {
    title: "Approaching_stranger",
    icon: <FaPerson />,
    color: "text-blue-600",
    boy_name: "Abhishek",
    girl_name: "Simran",
    description:
      "Build confidence in meeting new people, reading social cues, and handling rejections smoothly.",
  },
  {
    title: "Shared_workplace",
    icon: <FaSlideshare />,
    color: "text-black",
    boy_name: "Manish",
    girl_name: "Libby",
    description:
      "Navigate workplace interactions with confidence—handle hesitation, disinterest, and know when to engage or step back.",
  },
  {
    title: "Event_meetup",
    icon: <FaPizzaSlice />,
    color: "text-blue-900",
    boy_name: "Prakash",
    girl_name: "Amy",
    description:
      "Conquer social nerves, manage pauses gracefully, and keep the conversation flowing at events.",
  },
];

export default dummydata;
