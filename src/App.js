import { useEffect, useState } from "react";
import "./App.css";
import Header from "./components/Header";
import axios from "axios";
import Body from "./components/Body";

function App() {
  // search item
  const [search, setSearch] = useState("");
  // searched data, videos list
  const [data, setData] = useState([]);
  // current video
  const [currentVid, setCurrentVid] = useState({});
  // isLoading
  const [isLoading, setIsLoading] = useState(true);
  const Api = process.env.REACT_APP_API_KEY;
  // function to retrieve data from API
  const searchData = (text) => {
    setSearch(text);
    axios
      .get("https://www.googleapis.com/youtube/v3/search", {
        params: {
          q: search,
          maxResults: 15,
          key: Api,

          part: "snippet",
        },
      })
      // .then((videos) => console.log(videos))
      .then((videos) => {
        // console.log(videos);
        const videosFiltered = filterVideos(videos.data.items);
        setData(videosFiltered);
        setCurrentVid(videosFiltered[0]);
        // console.log(currentVid);
        setIsLoading(false);
        // alert("search successfull");
      })
      .catch((err) => console.log(err));
  };
  const filterVideos = (videoList) => {
    const filteredVideos = [];

    videoList.map(function (video) {
      if (video.id.kind === "youtube#video") {
        filteredVideos.push(video);
      }
      return false;
    });

    return filteredVideos;
  };

  const changeCurrentVid = (video) => {
    setCurrentVid(video);
  };

  useEffect(() => {
    searchData("Drake");
  }, []);
  return (
    <div className="App">
      {/* passing the searchData function as a prop */}
      <Header search={searchData} />
      <Body
        currentVid={currentVid}
        isLoading={isLoading}
        videos={data}
        changeCurrentVid={changeCurrentVid}
      />
    </div>
  );
}

export default App;
