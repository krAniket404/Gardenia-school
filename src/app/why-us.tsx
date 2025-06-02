"use client";

import React from "react";
import { useRouter } from "next/navigation";
import {
  Button,
  Typography,
  Card,
  CardBody,
} from "@material-tailwind/react";

import {
  PuzzlePieceIcon,
  HeartIcon,
  PaintBrushIcon,
  FaceSmileIcon,
} from "@heroicons/react/24/solid";

import WhyUsCard from "@/components/why-us-card";


const WHY_US = [
  {
    icon: HeartIcon,
    title: "Kindness",
    desc: "Nibh in sed venenatis, senectus fermentum nullam donec nulla quis ut facilisis",
  },
  {
    icon: PuzzlePieceIcon,
    title: "Innovation",
    desc: "Nibh in sed venenatis, senectus fermentum nullam donec nulla quis ut facilisis",
  },
  {
    icon: PaintBrushIcon,
    title: "Creativity",
    desc: "Nibh in sed venenatis, senectus fermentum nullam donec nulla quis ut facilisis",
  },
  {
    icon: FaceSmileIcon,
    title: "Responsibility",
    desc: "Nibh in sed venenatis, senectus fermentum nullam donec nulla quis ut facilisis",
  },
];

export function WhyUs() {
  const router = useRouter();
  return (
    <section className="container mx-auto px-8 py-36">
      <div className="mb-20 grid place-items-center text-center">
        <Typography variant="h2" color="blue-gray" className="my-3">
          Why Choose Us?
        </Typography>
        <Typography variant="lead" className="!text-gray-500 lg:w-6/12">
            Here&apos;s why you should choose us for your child&apos;s education.
        </Typography>
      </div>
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
        <Card
          className="relative grid h-full w-full place-items-center overflow-hidden text-center border border-red-200"
        >
          <div className="absolute inset-0 h-full w-full" />
          <CardBody className="relative w-full">
            <Typography className="text-xs font-bold opacity-50">
              Our Mission
            </Typography>
            <Typography variant="h4" className="mt-9">
              To provide a high-quality education that prepares students for success in the 21st century.
            </Typography>
            <Typography
            
              className="my-4 font-normal opacity-75"
            >
              We are committed to providing a safe, nurturing, and stimulating environment that fosters academic excellence, creativity, and social responsibility.
            </Typography>
            <Button size="sm" color="red" onClick={() => router.push("/about")}>
              Learn More
            </Button>
          </CardBody>
        </Card>
        <div className="col-span-1 flex flex-col gap-6">
          {WHY_US.slice(0, 2).map((props, key) => (
            <WhyUsCard key={key} {...props} />
          ))}
        </div>
        <div className="col-span-1 flex flex-col gap-6">
          {WHY_US.slice(2, 4).map((props, key) => (
            <WhyUsCard key={key} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default WhyUs;