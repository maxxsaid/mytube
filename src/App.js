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
  const [currentVideo, setCurrentVideo] = useState({});
  // isLoading
  const [isLoading, setisLoading] = useState(true);
  const APIs = [
    "AIzaSyAKIESKm9AzibuHaj_e-wZ9XiRJ1J842us",
    "AIzaSyCbKOaWHInU1RxDAkcmVOqwIYZ-l-3eCh0",
    "AIzaSyBEvweT558_4Rew5gLKP3gsYWgqViuuZ1w",
    "AIzaSyCTSOdscqiZ7JtbheW10gvOe4XrzopNFqM",
    "AIzaSyDK1vnWO7tWwYYVPun0Z-a1ctTOMHrNMnQ",
    "AIzaSyBgp4QomsXScsUG2jfYeaa3FQyXBeUnQFo",
  ];
  const randomNum = Math.floor(Math.random() * APIs.length);
  const randomAPI = APIs[randomNum];
  const Apikey = "AIzaSyBgp4QomsXScsUG2jfYeaa3FQyXBeUnQFo";
  // function to retrieve data from API
  const searchData = (text) => {
    setSearch(text);
    axios
      .get(
        `https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=10&q=${search}&type=video&key=${Apikey}`
      )
      // .then((videos) => console.log(videos))
      .then((videos) => {
        // console.log(videos);
        const videosFiltered = filterVideos(videos.data.items);
        setData(videosFiltered);
        setCurrentVideo(videosFiltered[0]);
        // console.log(currentVideo);
        setisLoading(false);
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

  const changeCurrentVideo = (video) => {
    setCurrentVideo(video);
  };

  useEffect(() => {
    searchData("Drake");
    //eslint-disable-next-line
  }, []);
  return (
    <div className="App">
      {/* passing the searchData function as a prop */}
      <Header search={searchData} />
      <Body
        currentVideo={currentVideo}
        isLoading={isLoading}
        videos={data}
        changeCurrentVideo={changeCurrentVideo}
      />
    </div>
  );
}

export default App;
