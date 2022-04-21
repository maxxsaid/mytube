import React from "react";

function ShowVideo({ currentVid, isLoading }) {
  console.log(currentVid);
  return (
    <div className="col-md-7" style={{ height: "600px", marginTop: "20px" }}>
      {isLoading ? (
        "Video is Loading"
      ) : (
        <>
          <iframe
            width="100%"
            height="60%"
            src={`https://www.youtube.com/embed/${currentVid.id.videoId}`}
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; fullscreen"
            title={currentVid.id.videoId}
          />
          <h5>{currentVid.snippet.title}</h5>
          <p className="text-right">
            <b>Channel Id : {currentVid.snippet.channelId} </b>
          </p>
          <p className="text-center">
            <b>Channel Name : {currentVid.snippet.channelTitle} </b>
          </p>
          <p className="text-center">{currentVid.snippet.description}</p>
        </>
      )}
    </div>
  );
}

export default ShowVideo;
