import React, { useState } from "react";

function Header(props) {
  // input data
  const [text, setText] = useState("");
  // onSubmit function
  const handleSubmit = (e) => {
    e.preventDefault();
    props.search(text);
  };
  return (
    <div className="container-fluid border-bottom-1 shadow">
      <div className="col-md-9 pt-2 pb-2">
        <nav className="navbar">
          <div className="container-fluid">
            <a className="title" href="/">
              my<span>Tube</span>
            </a>
            <form className="col-md-7" onSubmit={(e) => handleSubmit(e)}>
              <div className="form-group d-flex">
                <input
                  type="text"
                  name="search"
                  id="search"
                  placeholder="Search"
                  className="form-control me-2"
                  value={text}
                  // input data updates text
                  onChange={(e) => setText(e.target.value)}
                />
                <input
                  type="submit"
                  value="Search"
                  className="btn btn-grad  col-md-2 ml-1"
                />
              </div>
            </form>
          </div>
        </nav>
      </div>
    </div>
  );
}

export default Header;
