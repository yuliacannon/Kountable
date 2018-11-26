import React from "react";
import "./Project.scss";

const Project = props => {
  return (
    <div className="project-item">
      <div className="task">
        <p>
          <span className="span">3 Tasks</span>
        </p>
      </div>
      <p className="status">In Review</p>
      <p>{props.country}</p>
      <div class="progress">
        <div
          class="progress-bar progress-bar-success"
          role="progressbar"
          aria-valuenow="40"
          aria-valuemin="0"
          aria-valuemax="100"
        />
      </div>
      <p>
        <i class="fas fa-shopping-cart" />
        {props.company}
      </p>
      <div className="task">
        <p>999 USD</p>
      </div>
    </div>
  );
};

export default Project;
