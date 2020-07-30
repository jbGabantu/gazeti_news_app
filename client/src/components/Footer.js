import React, { Component } from "react";

class Footer extends Component {
  state = {};

  render() {
    return (
      <footer id="footer">
        <div className="card-body">
          <h5 className="card-title">Special title treatment</h5>
          <p className="card-text" id="content-wrap">
            With supporting text below as a natural lead-in to additional
            content.
          </p>
          <a href="https://github.com/jbGabantu">Github</a>
        </div>
        <div className="card-footer text-muted" id="muted-footer">
          <p>Powered by NEWS API</p>
          <p>Copyright &copy; {new Date().getFullYear()}</p>
        </div>
      </footer>
    );
  }
}

export default Footer;
