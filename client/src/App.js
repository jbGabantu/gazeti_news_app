import React, { Component } from "react";
import "./styles/App.css";
import Navbar from "./components/Navbar";
import ArticlesContainer from "./components/ArticlesContainer";
import Footer from "./components/Footer";

function App() {
  return (
    <React.Fragment>
      <div id="page-container">
        <Navbar />
        <main>
          <ArticlesContainer />
        </main>
        <Footer />
      </div>
    </React.Fragment>
  );
}

export default App;
