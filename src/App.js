import { useState } from "react";
import "./App.css";
import Header from "./components/Header";

function App() {
  // search item
  const [search, setSearch] = useState("");
  // searched data
  const [data, setData] = useState("");
  // function to retrieve data from API
  const searchData = (text) => {
    alert(text);
  };
  return (
    <div className="App">
      <Header search={searchData} />
      <h1>myTube</h1>
      {/* body */}
    </div>
  );
}

export default App;
