import React from "react";
import ShowVideo from "./ShowVideo";
import VideosCard from "./VideosCard";

function Body({ currentVid, isLoading, videos, changeCurrentVid }) {
  return (
    <div className="container">
      <div className="row">
        {/* current video */}
        <ShowVideo currentVid={currentVid} isLoading={isLoading} />
        {/* video list */}
        <div className="col-md-5" style={{ marginTop: "20px" }}>
          {isLoading
            ? "Videos are loading..."
            : videos.map((video) => (
                <VideosCard
                  key={video.id.videoId}
                  video={video}
                  changeCurrentVid={changeCurrentVid}
                />
              ))}
        </div>
      </div>
    </div>
  );
}

export default Body;
