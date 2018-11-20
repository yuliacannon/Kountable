import React, { Component } from "react";
import logo from "./img/logo2.png";
import logo2 from "./img/logo3.png";
import user from "./img/user.png";
import "./App.scss";
import { BrowserRouter } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <header>
            <img src={logo} alt="logo" />
            <img src={user} alt="logoUser" />
          </header>
          <div className="content">{this.props.children}</div>

          <footer>
            <div className="footer-left">
              <img src={logo2} alt="logo" />
              <ul>
                <li>
                  <a href="#">Privacy</a>
                </li>
                <li>
                  <a href="#">Terms of Service</a>
                </li>
              </ul>
            </div>
            <p>Copyright 2018 | v2018.11.1</p>
          </footer>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
