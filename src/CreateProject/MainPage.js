import "../CreateProject/MainPage.scss";
import React, { Component } from "react";
import { Link } from "react-router-dom";
import Project from "./Project";

class MainPage extends Component {
  state = {
    company: "",
    country: "",
    supplier: ""
  };

  saveStateToLocalStorage = () => {
    let data = JSON.parse(localStorage.getItem("data")) || [];
    // for every item in React state
    for (let key in this.state) {
      // save to localStorage
      data.setItem(key, JSON.stringify(this.state[key]));
    }
  };

  hydrateStateWithLocalStorage = () => {
    console.log("im in function");
    let data = JSON.parse(localStorage.getItem("data"));
    // for all items in state
    for (let key in this.state) {
      // if the key exists in localStorage
      if (data.hasOwnProperty(key)) {
        // get the key's value from localStorage
        let value = data.getItem(key);

        // parse the localStorage string and setState
        try {
          this.setState({ [key]: value });
        } catch (e) {
          // handle empty string
          this.setState({ [key]: value });
        }
      }
    }
  };

  componentWillMount() {
    this.hydrateStateWithLocalStorage();
  }

  render() {
    //this.hydrateStateWithLocalStorage();

    return (
      <div className="main-page">
        <div className="header">
          <h1>Projects</h1>
          <div className="btn-add-project">
            <button type="button" value="Add new project">
              <Link to="/business-info">+ Add new project</Link>
            </button>
          </div>
        </div>
        <div className="projects-list" />
        <Project />
        <p>{this.state.company}</p>
      </div>
    );
  }
}

export default MainPage;
