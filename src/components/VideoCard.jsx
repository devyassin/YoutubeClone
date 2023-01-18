import React from "react";
import { Link } from "react-router-dom";
import { demoVideoUrl, demoChannelUrl } from "../utils/constant";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";

const VideoCard = ({
  video: {
    id: { videoId },
    snippet,
  },
}) => {
  const sliceFunction = (str) => {
    if (str.length > 50) {
      return str.slice(0, 50) + "...";
    }
    return str;
  };

  return (
    <div className="flex flex-col rounded-2xl bg-SoftBlack h-full ">
      <Link to={videoId ? `/video/${videoId}` : `${demoVideoUrl}`}>
        <img
          className="overflow-hidden "
          src={snippet?.thumbnails?.high?.url}
          alt={snippet.title}
        />
      </Link>
      <div className="flex flex-col space-y-6 p-4 pt-10 bg-SoftBlack z-10 -translate-y-8">
        {/* Title */}
        <Link to={videoId ? `video/${videoId}` : `${demoVideoUrl}`}>
          <h1 className="leading-8">{sliceFunction(snippet.title)}</h1>
        </Link>
        {/* Chanel Name */}

        <Link
          to={
            snippet?.channelId
              ? `/channel/${snippet.channelId}`
              : `${demoChannelUrl}`
          }
        >
          <div className="flex items-center space-x-1 text-sm opacity-40 font-thin">
            <p>{snippet.channelTitle}</p>
            <CheckCircleIcon sx={{ width: 15 }} />
          </div>
        </Link>
      </div>
    </div>
  );
};

export default VideoCard;
