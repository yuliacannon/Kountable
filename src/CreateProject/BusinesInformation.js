import "./BusinesInformation.css";
import React, { Component } from "react";
import Select from "react-select";
import { Link, withRouter, Redirect } from "react-router-dom";
import { Countries } from "./CountriesList";
import SupplierInformation from "./SupplierInformation";

class BusinesInformation extends Component {
  state = {
    company: "",
    country: "",
    isFormValid: false,
    list: []
  };

  options = Countries.map(function(country) {
    return { label: country, value: country };
  });

  handleChange = e => {
    this.setState(
      {
        [e.target.name]: e.target.value
      },
      this.validateForm
    );
  };

  next = () => {
    let data = JSON.parse(localStorage.getItem("data")) || [];
    data.push({
      company: this.state.company,
      country: this.state.country
    });
    localStorage.setItem("data", JSON.stringify(data));
    //<Redirect to="supplier" />;
    this.props.history.push("supplier");
  };

  validateForm = () => {
    this.setState({
      isFormValid: this.state.company.length > 0 //&& this.state.country.length > 0
    });
  };

  render() {
    return (
      <div className="main-wrapper">
        <Link to="/login">
          <span className="close" />
        </Link>
        <form className="busines-info">
          <h1>Business Information</h1>

          <label htmlFor="text">
            What is the name of your business?
            <input
              type="text"
              onChange={this.handleChange}
              value={this.state.company}
              placeholder="Company name"
              name="company"
              required
            />
          </label>

          <label htmlFor="text">
            In what country is your business registered?
            <Select
              type="text"
              onChange={opt => this.setState({ country: opt.value })}
              options={this.options}
              placeholder="Country"
              name="country"
              //value={this.options.value}
              selectValue={this.state.country}
            />
          </label>

          <div className="btn-submit">
            <input
              disabled={!this.state.isFormValid}
              onClick={this.next}
              type="button"
              value="Next"
            />
          </div>
        </form>
      </div>
    );
  }
}

export default withRouter(BusinesInformation);
