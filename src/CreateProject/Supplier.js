import "./Supplier.scss";
import React, { Component } from "react";
import { Link } from "react-router-dom";

class Supplier extends Component {
  state = {
    company: "",
    goods: "",
    price: "",
    currency: ""
  };
  handleChange = e => {
    this.props.handleData(e, e.target.value);
    this.setState(
      {
        [e.target.name]: e.target.value
      },
      this.validateForm
    );
  };

  render() {
    return (
      <div className="supplier-item">
        <Link to="/">
          <span className="close" />
        </Link>
        <form>
          <h1>Supplier Information</h1>
          <label htmlFor="supplier">
            What is the name of your supplier?
            <input
              type="text"
              onChange={this.handleChange}
              value={this.state.company}
              placeholder="Company name"
              name="company"
              required
            />
          </label>
          <label htmlFor="goods">
            What goods are you purchasing from this supplier?
            <input
              type="text"
              onChange={this.handleChange}
              value={this.state.goods}
              placeholder="Name of Goods"
              name="goods"
              required
            />
          </label>

          <fieldset>
            <label htmlFor="price">
              How much are you paying for these goods?
              <input
                type="number"
                step="any"
                onChange={this.handleChange}
                value={this.state.price}
                name="price"
                placeholder="0.00"
                required
              />
            </label>
            <input
              type="text"
              placeholder="USD"
              onChange={this.handleChange}
              value={this.state.currency}
              name="currency"
              required
            />
          </fieldset>
        </form>
      </div>
    );
  }
}

export default Supplier;
