import React from "react";
import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import ReactPlayer from "react-player";
import { CheckCircle } from "@mui/icons-material";
import { Videos } from "./index";
import { fetchFromAPI } from "../utils/FetchFromAPI";

const VideoDetail = () => {
  const [videoDetail, setVideoDetail] = useState(null);
  const [videos, setVideos] = useState(null);
  const { id } = useParams();
  useEffect(() => {
    fetchFromAPI(`videos?part=snippet,statistics&id=${id}`).then((data) => {
      setVideoDetail(data.items[0]);
      console.log(data);
    });

    fetchFromAPI(`search?part=snippet&relatedToVideoId=${id}&type=video`).then(
      (data) => {
        setVideos(data.items);
      }
    );
  }, [id]);

  if (!videoDetail?.snippet) return "Loading ...";
  if (!videos) return "Loading ...";

  const {
    statistics: { likeCount, viewCount },
    snippet: { title, channelId, channelTitle },
  } = videoDetail;

  console.log(title, channelId, channelTitle, likeCount, viewCount);
  return (
    <div className="flex flex-col   space-y-4 md:flex-row md:space-y-0 md:space-x-4">
      {/* Item 1 */}
      <div className="flex flex-col w-[100vw]   md:h-[88vh] md:w-[75vw]">
        <ReactPlayer
          className="react-player w-full"
          url={`https://www.youtube.com/watch?v=${id}`}
          controls
        />
        <div className="flex flex-col space-y-4 px-10 py-8 bg-SoftBlack">
          {/* Row 1 */}
          <h1 className="font-bold max-w-lg text-2xl">{title}</h1>
          {/* Row 2 */}
          <div className="flex flex-row items-center justify-between">
            {/* Chanel */}
            <Link to={`/channel/${channelId}`}>
              <div className="flex flex-row space-x-2 text-[12px]  opacity-40 items-center">
                {channelTitle}
                <CheckCircle sx={{ width: 15 }} />
              </div>
            </Link>
            <div className="flex space-x-4">
              {/* Views */}
              <span className="text-sm opacity-40">
                {parseInt(viewCount).toLocaleString()} Views
              </span>
              {/* Likes */}
              <span className="text-sm opacity-40">
                {parseInt(likeCount).toLocaleString()} Views
              </span>
            </div>
          </div>
        </div>
      </div>
      {/* Item 2 */}
      <div className="px-4 bg-black overflow-y-auto z-10 h-[100vh]">
        <Videos videos={videos} colDetail="colDetail" />
      </div>
    </div>
  );
};

export default VideoDetail;
