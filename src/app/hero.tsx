"use client";

import Image from "next/image";
import { Button, Typography, Card } from "@material-tailwind/react";
import { YoutubeFilled } from "@ant-design/icons";

function Hero() {
  return (
    <div className="!flex h-[55vh] w-full items-center justify-between px-10">
      <Image
        width={1200}
        height={1200}
        src="/image/hero-img.jpg"
        alt="bg-img"
        className="absolute inset-0 ml-auto w-[920px] h-[780px] rounded-bl-[100px] object-cover object-center"
      />
      <div className="container mx-auto mt-28">
        <div className="grid grid-cols-12 text-center lg:text-left">
          <Card className="col-span-full rounded-xl border border-white bg-white/90 py-10 p-8 shadow-lg shadow-black/10 backdrop-blur-sm backdrop-saturate-200 xl:col-span-7">
          <Typography variant="h6" className="text-red-500">
            Play. Learn. Grow.
          </Typography>
            <Typography
              variant="h1"
              color="blue-gray"
              className="lg:text-5xl !leading-snug text-3xl lg:max-w-3xl"
            >
              This is the place for the <span className="relative text-white z-1 after:absolute after:z-[-1] after:bottom-[-10%] after:left-[-10%] after:skew-x-[-20deg] after:h-[120%] after:w-[120%] after:bg-red-500">TAGLINE.</span>
            </Typography>
            <Typography variant="paragraph" className="mb-10 mt-6 !text-gray-900">
              Are you ready to embark on an exciting journey into the world of
              web development? Look no further! We are your trusted partner for
              mastering the art of web development.
            </Typography>
            <div className="mb-8 flex justify-center gap-4 lg:justify-start">
              <a href="#" target="_blank">
                <Button color="red" className="flex items-center gap-2">
                  Enroll now
                </Button>
              </a>
              <a href="https://www.youtube.com/@Gardenia_World_School" target="_blank">
              <Button color="red" className="flex items-center gap-2" variant="outlined">
                <YoutubeFilled className="mr-2 text-lg" /> View YouTube
              </Button>
              </a>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
}
export default Hero;
