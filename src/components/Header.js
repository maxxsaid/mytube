import React from "react";

function Header(props) {
  return (
    <div className="container-fluid border-bottom-1 shadow">
      <div className="col-md-12 pt-1 pb-0">
        <nav className="navbar">
          <div class="container-fluid">
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
                  className="form-control me-2"
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
