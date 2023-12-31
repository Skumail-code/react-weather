import React, { useState } from "react";
import CurrentLocation from "./currentLocation";
import "./App.css";

function App() {
  return (
    <React.Fragment>
      <div className="container">
        <CurrentLocation />
      </div>
      <div className="footer-info">
        <a href="https://github.com/Skumail-code/react-weather-app">
          Download Source Code
        </a>{" "}
        | Developed by{" "}
        <a target="_blank" href="https://github.com/Skumail-code">
          Kumail Rizvi
        </a>{" "}
        | Powered by{" "}
        <a target="_blank" href="">
          HTML, CSS, JavaScript, and React.JS
        </a>
      </div>
    </React.Fragment>
  );
}

export default App;
