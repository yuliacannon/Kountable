import "../CreateProject/MainPage.scss";
import React, { Component } from "react";
import { Link } from "react-router-dom";
import Project from "./Project";

class MainPage extends Component {
  state = {
    data: []
  };

  hydrateStateWithLocalStorage = () => {
    let d = JSON.parse(localStorage.getItem("data"));
    this.setState({ data: d });
  };

  componentWillMount() {
    this.hydrateStateWithLocalStorage();
  }

  render() {
    let projects = null;

    projects = (
      <div>
        {this.state.data.map(dataItem => {
          return (
            <Project country={dataItem.country} company={dataItem.company} />
          );
        })}
      </div>
    );

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
        {projects}
      </div>
    );
  }
}

export default MainPage;
