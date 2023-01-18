import React from "react";
import { Videos } from "./index.js";
import { useEffect, useState } from "react";
import { fetchFromAPI } from "../utils/FetchFromAPI";
import { useParams } from "react-router-dom";

const SearchFeed = () => {

  const { searchTerm } = useParams();
  const [videos, setvideos] = useState([]);

  useEffect(() => {
    fetchFromAPI(`search?part=snippet&q=${searchTerm}`).then((data) => {
      setvideos(data.items);
    });
  }, [searchTerm]);

  return (
    // Global Container

    <div className="flex p-4 font-semibold flex-1 flex-col">
      <h1 className="text-white text-4xl">
        Seatch Results for: {" "}
        <span className="text-LightBlue">" {searchTerm} "</span>
      </h1>
      <Videos videos={videos} />
    </div>
  );
};

export default SearchFeed;
