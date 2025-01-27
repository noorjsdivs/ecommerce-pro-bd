import { Search } from "lucide-react";
import Link from "next/link";
import React from "react";

const SearchBar = () => {
  return (
    <Link href={"/"}>
      <Search className="w-5 h-5 hover:text-darkColor hoverEffect" />
    </Link>
  );
};

export default SearchBar;
