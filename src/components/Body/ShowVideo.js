import React from "react";

function ShowVideo({ currentVideo, isLoading }) {
  console.log(currentVideo);
  return (
    <div
      className="video p-2 glassSide"
      style={{ height: "700px", marginTop: "30px" }}
    >
      {isLoading ? (
        <p className="text">Search a video...</p>
      ) : (
        <>
          <iframe
            width="100%"
            height="60%"
            src={`https://www.youtube.com/embed/${currentVideo.id.videoId}`}
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; fullscreen"
            title={currentVideo.id.videoId}
          />
          <h5 className="text h4">
            <b>{currentVideo.snippet.title}</b>
          </h5>
          <p className="text-left text h5">
            Channel Name : {currentVideo.snippet.channelTitle}
          </p>
          <p className="text-left text h6">
            {currentVideo.snippet.description}
          </p>
        </>
      )}
    </div>
  );
}

export default ShowVideo;
