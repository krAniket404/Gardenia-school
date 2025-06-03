import React from "react";
import Image from "next/image";
import {
  Navbar as MTNavbar,
  Collapse,
  Button,
  IconButton,
  Typography,
} from "@material-tailwind/react";
import {
  HomeIcon,
  XMarkIcon,
  Bars3Icon,
  MagnifyingGlassIcon,
  EnvelopeIcon,
  PuzzlePieceIcon,
  AcademicCapIcon,
  PhotoIcon,
} from "@heroicons/react/24/solid";
import Link from "next/link";

const NAV_MENU = [
  {
    name: "Home",
    icon: HomeIcon,
    href: "/",
  },
  {
    name: "About",
    icon: MagnifyingGlassIcon,
    href: "/about",
  },
  {
    name: "Activities",
    icon: PuzzlePieceIcon,
    href: "/activities",
  },
  {
    name: "Gallery",
    icon: PhotoIcon,
    href: "/gallery",
  },
  {
    name: "Contact",
    icon: EnvelopeIcon,
    href: "https://wa.me/+916200814842",
  },
];

interface NavItemProps {
  children: React.ReactNode;
  href?: string;
}

function NavItem({ children, href }: NavItemProps) {
  return (
    <li>
      <Typography
        as="a"
        href={href || "#"}
        variant="paragraph"
        color="red"
        className="flex items-center gap-2 font-medium text-gray-900 hover:text-red-500 transition-all duration-300"
      >
        {children}
      </Typography>
    </li>
  );
}

export function Navbar() {
  const [open, setOpen] = React.useState(false);

  function handleOpen() {
    setOpen((cur) => !cur);
  }

  React.useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpen(false)
    );
  }, []);

  return (
    <div className="px-10 sticky top-4 z-50">
      <div className="mx-auto container">
        <MTNavbar
          blurred
          color="white"
          className="z-50 mt-6 relative border-0 pr-3 py-3 pl-6"
        >
          <div className="flex items-center justify-between">
            <Link href="/">
              <Image src="/image/logos/logo.png" priority alt="logo" width={100} height={100} />
            </Link>
            <ul className="ml-10 hidden items-center gap-8 xl:flex">
              {NAV_MENU.map(({ name, icon: Icon, href }) => (
                <NavItem key={name} href={href}>
                  <Icon className="h-5 w-5" />
                  {name}
                </NavItem>
              ))}
            </ul>
            <div className="hidden items-center gap-4 xl:flex">
              <a
                href="#"
              >
                <Button color="red">Enroll Now</Button>
              </a>
            </div>
            <IconButton
              variant="text"
              color="gray"
              onClick={handleOpen}
              className="ml-auto inline-block xl:hidden"
            >
              {open ? (
                <XMarkIcon strokeWidth={2} className="h-6 w-6" />
              ) : (
                <Bars3Icon strokeWidth={2} className="h-6 w-6" />
              )}
            </IconButton>
          </div>
          <Collapse open={open}>
            <div className="container mx-auto mt-3 border-t border-gray-200 px-2 pt-4">
              <ul className="flex flex-col gap-4">
                {NAV_MENU.map(({ name, icon: Icon, href }) => (
                  <NavItem key={name} href={href}>
                    <Icon className="h-5 w-5" />
                    {name}
                  </NavItem>
                ))}
              </ul>
              <div className="mt-6 mb-4 flex items-center gap-4">
                <a
                  href="#"
                >
                  <Button color="red">Enroll Now</Button>
                </a>
              </div>
            </div>
          </Collapse>
        </MTNavbar>
      </div>
    </div>
  );
}

export default Navbar;
