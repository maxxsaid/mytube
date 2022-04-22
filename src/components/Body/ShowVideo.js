import React from "react";

function ShowVideo({ currentVideo, isLoading }) {
  console.log(currentVideo);
  return (
    <div
      className="col-md-7 mb-1 p-3 glassSide"
      style={{ height: "600px", marginTop: "20px" }}
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
          <h5 className="text h3">{currentVideo.snippet.title}</h5>
          <p className="text-left text h6">
            <b>Channel Name : {currentVideo.snippet.channelTitle} </b>
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
