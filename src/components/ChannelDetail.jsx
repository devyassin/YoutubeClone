import React from "react";
import { useState, useEffect } from "react";
import { fetchFromAPI } from "../utils/FetchFromAPI";
import { useParams } from "react-router-dom";
import { Videos, ChannelCard } from "./index";

const ChannelDetail = () => {
  const [channelDetails, setchannelDetails] = useState(null);
  const [videos, setVideo] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    fetchFromAPI(`channels?part=snippet&id=${id}`).then((data) => {
      setchannelDetails(data?.items[0]);
    });

    fetchFromAPI(`search?channelId=${id}&part=snippet&order=date`).then(
      (data) => {
        setVideo(data?.items);
      }
    );
  }, [id]);

  console.log(channelDetails);
  console.log(videos);
  return (
    <div className="flex flex-col space-y-10  bg-black">
      {/* Profile */}
      <div className="z-10 bg-profile-background bg-no-repeat bg-cover h-44"></div>
      {/* Channel Card */}
      <div className="flex justify-center z-10 -translate-y-40 text-white">
        <ChannelCard channelDetails={channelDetails} />
      </div>
      <div className="px-8 -translate-y-36 ">
        <Videos videos={videos} />
      </div>
    </div>
  );
};

export default ChannelDetail;
