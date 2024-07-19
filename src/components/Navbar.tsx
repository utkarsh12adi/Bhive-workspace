import React from "react";
import Logo from "../assets/Logo.png";
import PhoneIcon from "../assets/PhoneIcon";

const Navbar = () => {
  return (
    <div className="bg-white shadow-md px-4 md:px-24 py-4 flex justify-between">
      <img className="h-10" src={Logo} />
      <div className="border-2 border-yellow-500 p-2 rounded-md cursor-pointer">
        <PhoneIcon />
      </div>
    </div>
  );
};

export default Navbar;
