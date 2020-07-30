import React, { Component } from "react";
import "./styles/App.css";
import Navbar from "./components/Navbar";
import NewsFeed from "./components/NewsFeed";
import Footer from "./components/Footer";

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <div id="page-container">
          <Navbar />
          <main>
            <NewsFeed />
          </main>
          <Footer />
        </div>
      </React.Fragment>
    );
  }
}

export default App;
