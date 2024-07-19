import React from "react";
import Arrows from "../assets/Arrows";
import DirectionIcon from "../assets/DirectionIcon";
// import { getImagePath } from "@assets/utils";

type OverviewCardType = {
  name: string;
  images: Array<string>;
  day_pass_price: number;
};

const OverviewCard: React.FC<OverviewCardType> = ({
  name,
  images,
  day_pass_price,
}) => {
  const getImagePath = (imageName: string) => {
    return require(`../assets/${imageName}`);
  };

  const pricingData = [
    {
      name: "Day Pass",
      price: day_pass_price,
      validity: "/Day",
      background: "bg-gray-100",
      showDiscountLabel: false,
    },
    {
      name: "Bulk Pass",
      price: 2400,
      validity: "/10 Days",
      background: "bg-amber-300",
      showDiscountLabel: true,
    },
  ];

  console.log("image path", getImagePath(images[0]));
  return (
    <div className="w-full bg-white border-1 rounded-md p-2 shadow-md">
      <div className="container h-12 flex justify-between items-center">
        <label className="text-md font-semibold line-clamp-2">{name}</label>
        <div className="border p-1 min-w-fit rounded-md bg-slate-100 flex flex-col items-center">
          <DirectionIcon />
          <label className="text-xs text-slate-600">6 kms</label>
        </div>
      </div>
      <div className="py-2">
        {images.map((imageName, index) => (
          <img
            className="rounded-md w-full h-auto"
            key={index}
            src={getImagePath(imageName)}
            alt={name}
          />
        ))}
      </div>

      <div className="flex gap-2 mt-2">
        {pricingData.map((d, i) => (
          <PricingCard key={i} {...d} />
        ))}
      </div>
    </div>
  );
};

export default OverviewCard;

export const PricingCard = ({
  name,
  price,
  validity,
  background,
  showDiscountLabel,
}: any) => {
  return (
    <div
      className={`flex flex-col items-center justify-between relative rounded-md border ${background} w-1/2 px-2 py-1`}
    >
      {showDiscountLabel && (
        <label className="text-[10px] mt-[-10px] bg-black text-white px-1 rounded-sm whitespace-nowrap">
          20% discount
        </label>
      )}
      <div className="flex items-center w-full">
        <div className=" bg-black text-white rounded-md min-w-max"></div>
        <div className="w-4/5">
          <label className="text-xs">{name}</label>
          <br />
          <label className="text-base font-medium">₹ {price}</label>
          <label className="text-[10px]">{validity}</label>
        </div>
        <div className="w-1/5">
          <button>
            <Arrows />
          </button>
        </div>
      </div>
    </div>
  );
};
