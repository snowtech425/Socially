import React from "react";
import { FaHeartbeat, FaCoffee, FaAd, FaSlideshare } from "react-icons/fa";
import { FaPerson, FaPizzaSlice } from "react-icons/fa6";

// Dummy data
const dummydata = [
  {
    title: "Date",
    heading: "Date",
    icon: <FaHeartbeat />,
    color: "text-red-500",
    girl_name: "Sarah",
    boy_name: "Srijan",
    description:
      "Practice confident, engaging conversation for dates and tricky social moments.",
  },
  {
    title: "Barista",
    heading: "Barista",
    icon: <FaCoffee />,
    color: "text-red-900",
    girl_name: "Sangita",
    boy_name: "Suman",
    description: "Turn small talk into meaningful exchanges with café staff.",
  },
  {
    title: "Approaching_stranger",
    heading: "Approaching Someone New",
    icon: <FaPerson />,
    color: "text-blue-600",
    boy_name: "Abhishek",
    girl_name: "Simran",
    description:
      "Build confidence approaching people, reading social cues, and handling rejection.",
  },
  {
    title: "Shared_workplace",
    heading: "Workplace Conversations",
    icon: <FaSlideshare />,
    color: "text-black",
    boy_name: "Manish",
    girl_name: "Libby",
    description:
      "Navigate interactions at work, handle hesitation, disinterest, or knowing when to engage.",
  },
  {
    title: "Event_meetup",
    heading: "Event / meetup",
    icon: <FaPizzaSlice />,
    color: "text-blue-900",
    boy_name: "Prakash",
    girl_name: "Amy",
    description:
      "Manage social nerves and keep conversations flowing naturally at events.",
  },
];

export default dummydata;
