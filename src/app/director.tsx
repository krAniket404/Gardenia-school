"use client";

import Image from "next/image";
import { Typography, Card, CardBody, Avatar } from "@material-tailwind/react";


function Director() {
  return (
    <section className="px-8 py-40">
      <div className="container mx-auto">
        <Card color="transparent" shadow={false} className="">
          <CardBody className="col-span-full gap-10 place-items-center overflow-visible grid grid-cols-1 lg:grid-cols-4">
            <div className="w-full xl:w-[600px] flex items-center overflow-hidden rounded-xl justify-center col-span-2 h-full">
              <Image
                width={768}
                height={768}
                src="/image/director.jpg"
                alt="testimonial image"
                className="w-full h-full scale-110 object-cover max-h-[500px]"
              />
            </div>
            <div className="col-span-2 w-full">
              <Typography variant="h6" color="red" className="mb-4">
                The Director&apos;s Message
              </Typography>
              <Typography
                variant="h3"
                color="blue-gray"
                className="mb-4 font-bold"
              >
                Let&apos;s listen to the Director&apos;s message
              </Typography>
              <Typography className="mb-1 w-full font-normal !text-gray-500">
                I am delighted to welcome you to the website of the National Institute of Technology, Silchar. The Institute is a premier institution of higher education, located in the scenic and serene campus of Silchar, Assam. The Institute was established in 1963 as a Regional Engineering College and was later upgraded to a National Institute of Technology in 2002.

The Institute is committed to providing a holistic education to its students, fostering a spirit of inquiry, creativity, and innovation. The Institute offers a wide range of undergraduate and postgraduate programs in Engineering, Technology, and Science, catering to the needs of the industry and society.

The Institute is equipped with state-of-the-art facilities, including well-equipped laboratories, libraries, and research centers. The Institute also has a vibrant campus life, with a range of extracurricular activities, sports, and cultural events.

The Institute is committed to providing a holistic education to its students, fostering a spirit of inquiry, creativity, and innovation. The Institute offers a wide range of undergraduate and postgraduate programs in Engineering, Technology, and Science, catering to the needs of the industry and society.
              </Typography>
              <div className="grid mb-4">
                <div className="flex items-center gap-2">
                  <span className="h-1 w-1 bg-gray-500 rounded-full" />
                  <Typography className="w-full font-normal !text-gray-500">
                    The Institute is committed to providing a holistic education to its students, fostering a spirit of inquiry, creativity, and innovation. The Institute offers a wide range of undergraduate and postgraduate programs in Engineering, Technology, and Science, catering to the needs of the industry and society.
                  </Typography>
                </div>
                <div className="flex items-center gap-2">
                  <span className="h-1 w-1 bg-gray-500 rounded-full" />
                  <Typography className="w-full font-normal !text-gray-500">
                    The Institute is equipped with state-of-the-art facilities, including well-equipped laboratories, libraries, and research centers. The Institute also has a vibrant campus life, with a range of extracurricular activities, sports, and cultural events.
                  </Typography>
                </div>
              </div>
              <div className="flex items-center mt-8 gap-4">
                <Avatar
                  variant="circular"
                  src="/image/director.jpg"
                  alt="spotify"
                  size="md"
                />
                <div>
                  <Typography variant="h6" color="blue-gray" className="mb-0.5">
                    Director, Gardenia World School
                  </Typography>
                  <Typography
                    variant="small"
                    className="font-normal !text-gray-500"
                  >
                    Mr. Pratap Manish
                  </Typography>
                </div>
              </div>
            </div>
          </CardBody>
        </Card>
      </div>
    </section>
  );
}

export default Director;
