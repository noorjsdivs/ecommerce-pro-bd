import React from "react";
import Container from "./Container";
import HeaderMenu from "./HeaderMenu";
import Logo from "./Logo";
import MobileMenu from "./MobileMenu";
import { ListOrdered, SearchIcon } from "lucide-react";
import CartIcon from "./CartIcon";
import Link from "next/link";

const Header = () => {
  return (
    <header className="bg-white border-b border-b-gray-400 py-5">
      <Container className="flex items-center justify-between gap-7 text-lightColor">
        <HeaderMenu />
        <div className="w-auto md:w-1/3 flex items-center justify-center gap-2.5">
          <MobileMenu />
          <Logo>Tulos</Logo>
        </div>
        <div className="w-auto md:w-1/3 flex items-center justify-end gap-5">
          <SearchIcon />
          <CartIcon />
          <Link href={"/orders"} className="group relative">
            <ListOrdered className="w-5 h-5 group-hover:text-darkColor hoverEffect" />
            <span className="absolute -top-1 -right-1 bg-darkColor text-white h-3.5 w-3.5 rounded-full text-xs font-semibold flex items-center justify-center">
              0
            </span>
          </Link>
          user
        </div>
      </Container>
    </header>
  );
};

export default Header;
