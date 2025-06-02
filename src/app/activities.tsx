"use client";

import { Typography } from "@material-tailwind/react";
import ExploreActivityCard from "@/components/explore-activity-card";

const ACTIVITIES = [
  {
    img: "/image/outdoor-game.jpg",
    title: "Outdoor Games",
    desc: "Outdoor games are a great way to get your children moving and having fun. We offer a variety of games that are sure to keep your children entertained for hours.",
  },
  {
    img: "/image/indoor-game.jpg",
    title: "Indoor Games",
    desc: "Indoor games are a great way to get your children moving and having fun. We offer a variety of games that are sure to keep your children entertained for hours.",
  },
  {
    img: "/image/dance-class.jpg",
    title: "Dance Class",
    desc: "Dance classes are a great way to get your children moving and having fun. We offer a variety of dance classes that are sure to keep your children entertained for hours.",
  }
];

export function Activities() {
  return (
    <section className="px-8">
      <div className="container mx-auto mb-24 text-center">
        <Typography variant="h2" color="blue-gray">
          Activities
        </Typography>
        <Typography
          variant="lead"
          className="mt-2 mx-auto w-full px-4 !text-gray-500 lg:w-6/12 lg:px-8"
        >
            We offer a variety of activities that are sure to keep your children entertained for hours.
        </Typography>
      </div>
      <div className="container mx-auto grid grid-cols-1 gap-x-10 gap-y-24 md:grid-cols-2 lg:grid-cols-3 lg:gap-x-14">
        {ACTIVITIES.map((props, idx) => (
          <ExploreActivityCard key={idx} {...props} />
        ))}
      </div>
    </section>
  );
}

export default Activities;
