import "./SupplierInfo.scss";
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
    data[0].supplier = supplier;

    localStorage.setItem("data", JSON.stringify(data));
    //<Redirect to="supplier" />;
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
        <Supplier handleData={this.handleData} />
        <p>
          <a href="#">
            <i className="fas fa-plus-circle" />
            Add Another Supplier
          </a>
        </p>
        <div className="btn-submit">
          <Link to="/">
            <input
              //disabled={this.validateForm}
              onClick={this.next}
              type="button"
              value="Next"
            />
          </Link>
        </div>
      </div>
    );
  }
}

export default SupplierInformation;
