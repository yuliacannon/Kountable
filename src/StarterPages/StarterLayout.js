import React, { Component } from "react";
import logo from "../img/logo2.png";
import "./StarterLayout.css";
import { BrowserRouter } from "react-router-dom";

class StarterLayout extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="main-wrapper">
          <div className="logo">
            <img src={logo} alt="logo" />
          </div>
          {this.props.children}
        </div>
      </BrowserRouter>
    );
  }
}

export default StarterLayout;
