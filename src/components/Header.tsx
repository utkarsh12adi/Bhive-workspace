import React from "react";
import ArrowRight from "../assets/ArrowRight";

type HeaderType = {
  title: string;
  customStyles?: string;
};
const Header: React.FC<HeaderType> = ({
  title,
  customStyles = "text-black",
}) => {
  return (
    <div className="flex justify-between items-center">
      {" "}
      <label className={`${customStyles} text-2xl font-bold`}>{title}</label>
      <div className="md:hidden">
        <ArrowRight />
      </div>
    </div>
  );
};

export default Header;
