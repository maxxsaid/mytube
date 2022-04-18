import React from "react";

function Header(props) {
  return (
    <div className="container-fluid border-bottom-1 shadow">
      <div className="col-md-12 pt-1 pb-0">
        <nav className="navbar">
          <a className="navbar-brand font-weight-bold text-dark" href="/">
            myTube
          </a>
          <form className="col-md-7">
            <div className="form-group d-flex">
              <input
                type="text"
                name="search"
                id="search"
                placeholder="Search"
                className="form-control col-md-10"
              />
              <input
                type="submit"
                value="Search"
                className="btn btn-danger col-md-1 ml-1"
              />
            </div>
          </form>
          <p>
            Welcome, <span className="text-primary">Guest</span>
          </p>
        </nav>
      </div>
    </div>
  );
}

export default Header;
