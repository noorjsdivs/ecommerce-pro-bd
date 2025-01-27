"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const data = [
  { label: "Home", href: "/" },
  { label: "Featured", href: "/category" },
  { label: "New", href: "/featured" },
  { label: "Accessories", href: "/featured" },
  { label: "T-shirt", href: "/featured" },
  { label: "Men", href: "/featured" },
];

const HeaderMenu = () => {
  const pathName = usePathname();

  return (
    <div className="hidden md:inline-flex w-1/3 items-center gap-5 text-sm capitalize font-semibold">
      {data?.map((category) => (
        <Link
          href={category?.href}
          key={category?.label}
          className={`hover:text-darkColor hoverEffect relative group ${pathName === category?.href && "text-darkColor"} `}
        >
          {category?.label}
          <span
            className={`absolute -bottom-0.5 left-1/2 w-0 h-0.5 bg-darkColor group-hover:w-1/2 group-hover:left-0 hoverEffect ${pathName === category?.href && "w-1/2"}`}
          />
          <span
            className={`absolute -bottom-0.5 right-1/2 w-0 h-0.5 bg-darkColor group-hover:w-1/2 group-hover:right-0 hoverEffect ${pathName === category?.href && "w-1/2"}`}
          />
          <span />
        </Link>
      ))}
    </div>
  );
};

export default HeaderMenu;
