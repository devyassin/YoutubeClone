import React from "react";
import { VideoCard, ChannelCard } from "./index.js";

const Videos = ({ videos, details, colDetail }) => {
  return (
    <section
      id="videos"
      className={`grid  ${
        !colDetail &&
        "grid-cols-2 gap-4 lg:grid-cols-3 lg:gap-10 xl:grid-cols-4"
      }  ${details === "true" ? " h-[92vh]" : ""}`}
    >
      {videos.map((video, idx) => {
        if (video.id.videoId || video.id.channelId) {
          return (
            <div key={idx}>
              {video.id.videoId && <VideoCard video={video} />}
              {video.id.channelId && <ChannelCard channelDetails={video} />}
            </div>
          );
        }
      })}
    </section>
  );
};

export default Videos;
