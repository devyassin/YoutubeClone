import React from "react";
import { Videos, SideBar } from "./index.js";
import { useEffect, useState } from "react";
import { fetchFromAPI } from "../utils/FetchFromAPI";

const Feed = () => {
  const [selectedCategory, setselectedCategory] = useState("What is Programming");
  const [videos, setvideos] = useState([]);

  useEffect(() => {
    fetchFromAPI(`search?part=snippet&q=${selectedCategory}`).then((data) => {
      setvideos(data.items);
    });
  }, [selectedCategory]);

  return (
    // Global Container
    <div className="flex flex-col md:flex-row">
      {/* part 1 */}
      <div className=" h-auto md:h-[100vh] px-4 border-r-[1px] border-gray-600">
        {/* Side bar */}
        <SideBar
          selectedCategory={selectedCategory}
          setselectedCategory={setselectedCategory}
        />
      </div>

      {/* part 2 */}
      <div className="flex bg-black overflow-y-auto p-4 font-semibold flex-1 flex-col">
        <h1 className="text-white text-4xl">
          {selectedCategory} <span className="text-LightBlue">videos</span>
        </h1>
        <Videos videos={videos} details="true" />
      </div>
    </div>
  );
};

export default Feed;
