import { AlignLeft } from "lucide-react";
import React from "react";

const MobileMenu = () => {
  return (
    <>
      <button>
        <AlignLeft className="hover:text-darkColor hoverEffect md:hidden" />
      </button>
    </>
  );
};

export default MobileMenu;
