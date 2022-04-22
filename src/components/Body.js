import React from "react";
import ShowVideo from "./ShowVideo";
import VideosCard from "./VideosCard";

function Body({ currentVideo, isLoading, videos, changeCurrentVideo }) {
  return (
    <div className="container">
      <div className="row">
        {/* current video */}
        <ShowVideo currentVideo={currentVideo} isLoading={isLoading} />
        {/* video list */}
        <div className="col-md-5" style={{ marginTop: "20px" }}>
          {isLoading
            ? "Videos are loading..."
            : videos.map((video) => (
                <VideosCard
                  key={video.id.videoId}
                  video={video}
                  changeCurrentVideo={changeCurrentVideo}
                />
              ))}
        </div>
      </div>
    </div>
  );
}

export default Body;
