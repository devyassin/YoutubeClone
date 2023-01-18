import React from "react";

const ButtonCategory = ({ name, icon, type, setselectedCategory }) => {
  return (
    <button
      onClick={() => {
        setselectedCategory(name);
      }}
      className={`flex py-2 px-6 rounded-tl-full rounded-br-full group hover:bg-LightBlue duration-150  ${
        name === type ? "bg-LightBlue active" : "opacity-80"
      }  w-full items-center space-x-4`}
    >
      <div
        className={`flex   justify-center items-center ${
          name !== type ? "text-LightBlue group-hover:text-black" : ""
        }`}
      >
        {icon}
      </div>
      <span className="text-sm group-hover:text-black">{name}</span>
    </button>
  );
};

export default ButtonCategory;
