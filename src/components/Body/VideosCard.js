import React from "react";

function VideosCard({ video, changeCurrentVideo }) {
  return (
    <div
      key={video.id.videoId}
      className="glassSide border col-md-12 d-flex mb-1 p-2"
      style={{ cursor: "Pointer" }}
      onClick={() => changeCurrentVideo(video)}
    >
      <img
        src={video.snippet.thumbnails.default.url}
        alt={video.snippet.title}
        height="100%"
        width="30%"
        className="mr-1"
      />
      <div style={{ width: "68%" }}>
        <b>
          <p className="text h5">{video.snippet.title}</p>
        </b>
        <p className="text-right text h6">{video.snippet.channelTitle}</p>
      </div>
    </div>
  );
}

export default VideosCard;
