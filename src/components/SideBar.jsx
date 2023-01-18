import { Button } from "@mui/material";
import React from "react";
import { categories } from "../utils/constant.js";
import ButtonCategory from "./ButtonCategory.jsx";

const SideBar = ({ selectedCategory, setselectedCategory }) => {
  return (
    <div className="flex overflow-y-auto h-full pt-4 md:pt-10  space-x-4 items-center md:flex-col md:space-x-0 md:space-y-5 md:justify-between">
      {/* Items */}
      {categories.map((category) => {
        return (
          <ButtonCategory
            setselectedCategory={setselectedCategory}
            key={category.name}
            {...category}
            type={selectedCategory}
          />
        );
      })}

      <p className="text-sm text-white">
        Copyright © 2023 <a href="#">Y.Lamouadden</a>
      </p>
    </div>
  );
};

export default SideBar;
