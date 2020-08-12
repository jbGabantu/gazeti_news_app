import React, { Component } from "react";
//import { Provider } from "react-redux";
//import store from "./store";
import "./styles/App.scss";
import Navbar from "./components/Navbar";
import NewsFeed from "./components/NewsFeed";
import Footer from "./components/Footer";

class App extends Component {
  render() {
    return (
      //<Provider store={store}>
      <div id="page-container">
        <Navbar />
        <main>
          <NewsFeed />
        </main>
        <Footer />
      </div>
      //</Provider>
    );
  }
}

export default App;
