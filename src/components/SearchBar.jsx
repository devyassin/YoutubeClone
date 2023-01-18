import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import SearchIcon from "@mui/icons-material/Search";

const SearchBar = () => {
  const [searchTerm, setsearchTerm] = useState("");
  const navigate = useNavigate();

  const handlSubmit = (e) => {
    e.preventDefault();
    if (searchTerm) {
      navigate(`/search/${searchTerm}`);
      setsearchTerm("");
    }
  };

  return (
    <form
      onSubmit={handlSubmit}
      className="flex text-black justify-between pl-4  items-center  bg-white w-96 rounded-[20px]"
    >
      {/* input */}
      <input
        value={searchTerm}
        onChange={(e) => setsearchTerm(e.target.value)}
        className="focus:outline-none  w-full"
        type="text"
        placeholder="Search ..."
      />
      {/* icon */}
      <button
        className="text-slate-600  hover:bg-gray-100 hover:text-red-500 duration-150   rounded-full p-3"
        type="submit"
      >
        <SearchIcon />
      </button>
    </form>
  );
};

export default SearchBar;
