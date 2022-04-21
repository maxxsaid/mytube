import { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import axios from "axios";

function App() {
  // search item
  const [search, setSearch] = useState("");
  // searched data
  const [data, setData] = useState("");
  // function to retrieve data from API
  const searchData = (text) => {
    setSearch(text);
    axios
      .get("https://www.googleapis.com/youtube/v3/search", {
        params: {
          q: search,
          maxResults: 20,
          key: "AIzaSyAKIESKm9AzibuHaj_e-wZ9XiRJ1J842us",
          part: "snippet",
        },
      })
      // .then((videos) => console.log(videos))
      .then((videos) => {
        console.log(videos);
        setData(videos.data.items);
        alert("search successfull");
      })
      .catch((err) => console.log(err));
  };
  return (
    <div className="App">
      {/* passing the searchData function as a prop */}
      <Header search={searchData} />
      <h1>myTube</h1>
      {/* body */}
    </div>
  );
}

export default App;
