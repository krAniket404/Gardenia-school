"use client";
import { Typography } from "@material-tailwind/react";
import Image from "next/image";
import Link from "next/link";
import { InstagramFilled, YoutubeFilled, FacebookFilled } from "@ant-design/icons";

const LINKS = [
  {name: "Home", href: "/"},
  {name: "About", href: "/about"},
  {name: "Activities", href: "/activities"},
  {name: "Gallery", href: "/gallery"},
  {name: "Contact", href: "https://wa.me/6200814842"},
];

const SOCIAL_LINKS = [
  {name: "Facebook", href: "https://www.facebook.com/share/1EhgJBE3Le/", icon: <FacebookFilled />},
  {name: "Instagram", href: "https://www.instagram.com/gardenia_world_school/?utm_source=qr&igsh=MmFsd29iem9kODQ4#", icon: <InstagramFilled />},
  {name: "YouTube", href: "https://www.youtube.com/@Gardenia_World_School", icon: <YoutubeFilled />},
]

const CURRENT_YEAR = new Date().getFullYear();

export function Footer() {
  return (
    <footer className="px-8 pt-24 pb-8 border-t bg-red-500 text-white mt-10">
      <div className="container max-w-6xl flex flex-col mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-full justify-between gap-20">
          <div className="flex flex-col gap-4">
            <Image src="/image/logos/logo-footer.jpeg" alt="logo" width={200} height={200} />
            <Typography variant="paragraph" color="white" className="mb-3">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloremque ad pariatur corporis praesentium. Incidunt corporis debitis totam modi! Facilis quas assumenda
            </Typography>
            <ul className="list-none flex gap-4">
              {SOCIAL_LINKS.map((link) => (
                <li key={link.name} className="text-2xl">
                  <Link href={link.href} className="hover:border-b-2 border-white">
                    {link.icon}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="flex flex-col gap-4">
            <Typography variant="h3" color="white" className="mb-5">Quick Links</Typography>
            <ul className="list-none flex flex-col gap-2">
              {LINKS.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="hover:border-b-2 border-white">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="flex flex-col gap-4">
            <Typography variant="h3" color="white" className="mb-5">Get In Touch</Typography>
            <Typography variant="paragraph" color="white" className="mb-3">
              PACE tower, opposite Jyoti Raj complex, Near Metro Pillar No. 31, 90 feet Road, Kankarbagh, Patna. 800020
            </Typography>
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3609.829626003572!2d84.4126679!3d25.208967500000004!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x398d73f96b6176b7%3A0x2205813af9f35c2c!2sGardenia!5e0!3m2!1sen!2sin!4v1748794973531!5m2!1sen!2sin" width="100%" style={{border:0}} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
          </div>
        </div>
        <div className="flex justify-center items-center mt-10 border-t border-gray-200 pt-10">
          <Typography variant="paragraph" color="white" className="mb-3">
            &copy; {CURRENT_YEAR} Gardenia World School. All rights reserved.
          </Typography>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
