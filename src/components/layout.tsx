"use client";

import React from "react";
import { ThemeProvider } from "@material-tailwind/react";
import { usePathname } from "next/navigation";
import { useEffect } from "react";

export function Layout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return <ThemeProvider>{children}</ThemeProvider>;
}

export default Layout;
