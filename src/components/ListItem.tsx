import React from "react";

type ListItemType = {
  icon: React.ReactNode;
  name: string;
  border?: string;
};

const ListItem: React.FC<ListItemType> = ({ icon, name, border }) => {
  return (
    <div
      className={`py-4 md:pl-4 flex flex-col md:flex-row justify-center md:justify-start bg-white md:bg-transparent rounded-md md:rounded-none items-center ${border} `}
    >
      {icon}
      <span className="md:ml-4 mt-2 md:mt-0 font-sans text-sm">{name}</span>
    </div>
  );
};

export default ListItem;
