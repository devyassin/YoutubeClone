import React from "react";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import { Link } from "react-router-dom";
import { demoChannelUrl } from "../utils/constant.js";

const ChannelCard = ({ channelDetails }) => {
  console.log(channelDetails);
  if (!channelDetails?.snippet) return "Loading ...";
  return (
    <Link
      to={
        channelDetails?.id?.channelId
          ? `/channel/${channelDetails?.id?.channelId || channelDetails?.id}`
          : `${demoChannelUrl}`
      }
    >
      <div className="flex flex-col  h-full justify-center  items-center">
        {/* picture of the channel */}
        <img
          className="rounded-full mb-6 w-52 "
          src={channelDetails?.snippet?.thumbnails?.high?.url}
          alt={channelDetails?.snippet?.title}
        />
        {/* Channel Title */}
        <div className="flex items-center space-x-1">
          <h1>
            {channelDetails?.snippet?.channelTitle ||
              channelDetails?.snippet?.title}
          </h1>
          <CheckCircleIcon className="opacity-20 " sx={{ width: 20 }} />
        </div>
        {channelDetails?.statistics?.subscriberCount && (
          <h1 className="text-[12px] font-thin opacity-40 tracking-wider">
            {parseInt(channelDetails?.statistics?.subscriberCount).toLocaleString()} Subscribers
          </h1>
        )}
      </div>
    </Link>
  );
};

export default ChannelCard;
