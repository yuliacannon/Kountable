import React, { Component } from "react";
import { Link } from "react-router-dom";

class Supplier extends Component {
  render() {
    return (
      <div className="supplier-item">
        <h1>Supplier Information</h1>
        <form>
          <label htmlFor="supplier">
            What is the name of your supplier?
            <input
              type="text"
              //onChange={this.handleChange}
              //value={this.state.email}
              placeholder="Company name"
              name="email"
              required
            />
          </label>
          <label htmlFor="goods">
            What goods are you purchasing from this supplier?
            <input
              type="text"
              placeholder="Name of Goods"
              name="email"
              required
            />
          </label>
          <label htmlFor="goods">
            What goods are you purchasing from this supplier?
            <input
              type="text"
              placeholder="Name of Goods"
              name="email"
              required
            />
          </label>
          <fieldset>
            <label htmlFor="goods">
              How much are you paying for these goods?
              <input type="number" step="any" required />
            </label>
            <input type="text" required />
          </fieldset>
        </form>
      </div>
    );
  }
}

export default Supplier;
