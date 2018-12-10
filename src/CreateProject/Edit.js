import "./styles/Edit.scss";
import React, { Component } from "react";

class Edit extends Component {
  render() {
    return (
      <div className="edit-card">
        <i class="far fa-check-circle fa-2x" />

        <h1>Project Submission Review</h1>
        <form>
          <label htmlFor="text">
            Your Business
            <hr />
            <input
              type="text"
              //onChange={this.handleChange}
              //value={this.state.company}
              value="Company"
              name="company"
              required
            />
            <input
              type="text"
              //onChange={this.handleChange}
              //value={this.state.company}
              value="Country"
              name="country"
              required
            />
          </label>
          <label htmlFor="text">
            Supplier(s)
            <hr />
            <input
              type="text"
              //onChange={this.handleChange}
              //value={this.state.company}
              value="Supplier"
              name="supplier"
              required
            />
            <input
              type="text"
              //onChange={this.handleChange}
              //value={this.state.company}
              value="Goods"
              name="goods"
              required
            />
            <input
              type="number"
              //onChange={this.handleChange}
              //value={this.state.company}
              value="100"
              name="price"
              required
            />
            <input
              type="text"
              //onChange={this.handleChange}
              //value={this.state.company}
              value="USD"
              name="currency"
              required
            />
          </label>
        </form>
        <div className="btn-submit">
          <input type="button" value="Submit project" />
        </div>
      </div>
    );
  }
}

export default Edit;
