"use client";

import React from "react";
import { Typography } from "@material-tailwind/react";
import {
  PlayCircleIcon,
  PencilSquareIcon,
  PhoneArrowDownLeftIcon,
  AcademicCapIcon,
  UserGroupIcon,
  PuzzlePieceIcon,
} from "@heroicons/react/24/solid";

import StatsCard from "@/components/stats-card";


const STATS = [
  {
    icon: AcademicCapIcon,
    count: "10,200+",
    title: "Students",
  },
  {
    icon: UserGroupIcon,
    count: "50+",
    title: "Educators",
  },
  {
    icon: PuzzlePieceIcon,
    count: "10+",
    title: "Activities",
  },
  {
    icon: PhoneArrowDownLeftIcon,
    count: "24/7",
    title: "Support",
  },
];

export function OutImpressiveStats() {
  return (
    <section className="px-8 pt-80">
      <div className="container mx-auto text-center lg:text-left">
        <div className="grid place-items-center text-center">
          <Typography variant="h2" color="blue-gray" className="mb-2 text-4xl">
            Explore Our Impressive Stats
          </Typography>
          <Typography
            variant="lead"
            className="mx-auto mb-24 w-full !text-gray-500 lg:w-5/12"
          >
            We take pride in our commitment to excellence and our dedication to
            your success.
          </Typography>
        </div>
        <div className="grid gap-y-16 gap-x-10 md:grid-cols-2 lg:grid-cols-4">
          {STATS.map((props, key) => (
            <StatsCard key={key} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
export default OutImpressiveStats;