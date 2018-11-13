import "./MainPage.css";
import React, { Component } from "react";
import { Link } from "react-router-dom";

class MainPage extends Component {
  render() {
    return (
      <div className="main-wrapper">
        <div className="header">
          <h1>Projects</h1>
          <div className="btn-add-project">
            <button type="button" value="Add new project">
              <Link to="/business-info">Add new project</Link>
            </button>
          </div>
        </div>
        <div className="projects-list" />
        fdgtrdhy
      </div>
    );
  }
}

export default MainPage;
