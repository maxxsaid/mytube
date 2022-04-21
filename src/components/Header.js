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
      <div className="col-md-12 pt-1 pb-0">
        <nav className="navbar">
          <div className="container-fluid">
            <a className="navbar-brand font-weight-bold text-dark" href="/">
              myTube
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
                  className="btn btn-outline-danger col-md-1 ml-1"
                />
              </div>
            </form>
            <p>
              Welcome, <span className="text-danger">Guest</span>
            </p>
          </div>
        </nav>
      </div>
    </div>
  );
}

export default Header;
