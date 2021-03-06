import React, { Component } from "react";
import SideDrawer from "./SideDrawer";
import Searchbar from "./Searchbar";

class Navbar extends Component {
  state = {};
  render() {
    return (
      <nav className="navbar sticky-top navbar-light bg-light flex" expand="sm">
        <SideDrawer />
        <a className="navbar-brand flex-sm-fill" href="/">
          <h3>
            <img src="./logo.png" alt="gazeti_news_logo" className="logo" />
          </h3>
        </a>
        <Searchbar />
      </nav>
    );
  }
}

export default Navbar;
