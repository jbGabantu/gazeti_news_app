import React, { Component } from "react";
import SideDrawer from "./SideDrawer";
import Searchbar from "./Searchbar";

class Navbar extends Component {
  state = {};
  render() {
    return (
      <nav className="navbar navbar-light bg-light" expand="sm">
        <SideDrawer />
        <a href="/" className="navbar-brand">
          News App
        </a>
        <Searchbar />
      </nav>
    );
  }
}

export default Navbar;
