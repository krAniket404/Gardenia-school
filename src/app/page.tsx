"use client";

import dynamic from "next/dynamic";

// sections
import Hero from "./hero";
import { Navbar } from "@/components";
const OutImpressiveStats = dynamic(() => import("./out-impressive-stats"), { ssr: false });
const WhyUs = dynamic(() => import("./why-us"), { ssr: false });
const Activities = dynamic(() => import("./activities"), { ssr: false });
const Director = dynamic(() => import("./director"), {ssr: false});
const Footer = dynamic(() => import("@/components/footer"), { ssr: false });

export default function Campaign() {
  return (
    <>
      <Navbar />
      <Hero />
      <OutImpressiveStats />
      <WhyUs />
      <Activities />
      <Director />
      <Footer />
    </>
  );
}
