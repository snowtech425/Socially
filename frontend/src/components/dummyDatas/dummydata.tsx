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
    description: "Make your Date Perfect Before your Actual Date",
  },
  {
    title: "Barista",
    icon: <FaCoffee />,
    color: "text-red-900",
    girl_name: "Sangita",
    boy_name: "Suman",
    description:
      "Breaking out of robotic interactions and making light, natural conversation.",
  },
  {
    title: "Approaching_stranger",
    icon: <FaPerson />,
    color: "text-blue-600",
    boy_name: "Abhishek",
    girl_name: "Simran",
    description:
      "Overcoming approach anxiety, reading social cues, and handling polite rejections.",
  },
  {
    title: "Shared_workplace",
    icon: <FaSlideshare />,
    color: "text-black",
    boy_name: "Manish",
    girl_name: "Libby",
    description:
      "Overcoming hesitation, handling possible disinterest, and knowing when to continue or exit.",
  },
  {
    title: "Event_meetup",
    icon: <FaPizzaSlice />,
    color: "text-blue-900",
    boy_name: "Prakash",
    girl_name: "Amy",
    description:
      "Overcoming nervousness, handling pauses, and knowing what to say next.",
  },
];

export default dummydata;
