import React, { Component } from "react";
import MyComp from "./MyComp";
import MyRadarComp from "./MyRadarComp";

export default class App extends Component {
    render() {
        return (
          <div className="App">
            {/* <MyComp /> */}
            <MyRadarComp />
          </div>
        );
      }
}