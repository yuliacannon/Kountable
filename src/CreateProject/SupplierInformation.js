import "./styles/SupplierInfo.scss";
import React, { Component } from "react";
import Supplier from "./Supplier";
import { Link } from "react-router-dom";

class SupplierInformation extends Component {
  //handleData = this.handleData.bind(this);
  state = {
    company: "",
    goods: "",
    price: "",
    currency: ""
  };

  next = () => {
    let data = JSON.parse(localStorage.getItem("data")) || [];
    let supplier = {
      company: this.state.company,
      goods: this.state.goods,
      price: this.state.price,
      currency: this.state.currency
    };
    let len = data.length;
    data[len - 1].supplier = supplier;

    localStorage.setItem("data", JSON.stringify(data));
    this.props.history.push("/");
  };

  handleData = (e, data) => {
    this.setState({
      [e.target.name]: data
    });
  };

  render() {
    return (
      <div className="supplier-info">
        <div className="supplier-card">
          <Link to="/">
            <span className="close" />
          </Link>

          <h1>Supplier Information</h1>
          <Supplier handleData={this.handleData} />
          <p>
            <a href="#">
              <i className="fas fa-plus-circle" />
              Add Another Supplier
            </a>
          </p>
          <div className="btn-submit">
            <button onClick={this.next} type="submit">
              Next
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default SupplierInformation;
