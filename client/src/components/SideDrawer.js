import React, { Component } from "react";

class Navbar extends Component {
  state = {
    isOpen: false,
  };
  toggle = () => {
    this.setState({
      isOpen: !this.state.isOpen,
    });
  };
  render() {
    return (
      <div className="sideDrawer">
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#collapseExample"
          aria-expanded="false"
          aria-controls="collapseExample"
          onClick={this.toggle}
        >
          <i class="fas fa-bars"></i>
        </button>
        <div className="collapse navbar-collapse" isOpen={this.state.isOpen}>
          <div className="nav ml-auto" navbar>
            <div className="nav-item">
              <a className="nav-link" href="https://github.com/jbGabantu">
                Github
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Navbar;
