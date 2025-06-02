"use client";

import dynamic from "next/dynamic";

// sections
import Hero from "./hero";
import { Navbar } from "@/components";
// import OutImpressiveStats from "./out-impressive-stats";
// import CoursesCategories from "./courses-categories";
// import ExploreCourses from "./explore-courses";
// import Testimonial from "./testimonial";
// import Events from "./events";
// import StudentsFeedback from "./students-feedback";
// import TrustedCompany from "./trusted-companies";

const OutImpressiveStats = dynamic(() => import("./out-impressive-stats"), { ssr: false });
const CoursesCategories = dynamic(() => import("./why-us"), { ssr: false });
const ExploreCourses = dynamic(() => import("./activities"), { ssr: false });
const Testimonial = dynamic(() => import("./testimonial"), { ssr: false });
const Events = dynamic(() => import("./events"), { ssr: false });
const StudentsFeedback = dynamic(() => import("./students-feedback"), { ssr: false });
const Footer = dynamic(() => import("@/components/footer"), { ssr: false });

export default function Campaign() {
  return (
    <>
      <Navbar />
      <Hero />
      <OutImpressiveStats />
      <CoursesCategories />
      <ExploreCourses />
      <Testimonial />
      <Events />
      <StudentsFeedback />
      <Footer />
    </>
  );
}
