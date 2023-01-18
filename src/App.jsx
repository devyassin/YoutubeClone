import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import {
  Navbar,
  ChannelDetail,
  Feed,
  SearchFeed,
  VideoDetail,
} from "./components/index";

const App = () => {
  return (
    <BrowserRouter>
      <div className="bg-fashion5 text-white">
        <Navbar />
        
        <Routes>
          <Route path="/" exact element={<Feed />} />
          <Route path="/video/:id" element={<VideoDetail />} />
          <Route path="/channel/:id" element={<ChannelDetail />} />
          <Route path="/search/:searchTerm" element={<SearchFeed />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;
