import React from "react";
import ShowVideo from "./ShowVideo";
import VideosCard from "./VideosCard";

const Body = ({ currentVideo, isLoading, videos, changeCurrentVideo }) => {
  return (
    <div className="container">
      <div className="row">
        {/**current video component */}
        <ShowVideo currentVideo={currentVideo} isLoading={isLoading} />
        {/** videos list component */}
        <div className="videos">
          {isLoading ? (
            <p className="text">Waiting for the videos...</p>
          ) : (
            videos.map((video) => (
              <VideosCard
                key={video.id.videoId}
                video={video}
                changeCurrentVideo={changeCurrentVideo}
              />
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default Body;
