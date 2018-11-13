//import "./MainPage.css";
import React, { Component } from "react";
import Supplier from "./Supplier";

class SupplierInformation extends Component {
  render() {
    return (
      <div className="main-wrapper">
        <Supplier />
        <p>
          <a href="#">
            <i class="fas fa-plus-circle" />
            Add Another Supplier
          </a>
        </p>
        <div className="btn-submit">
          <input
            //disabled={this.validateForm}
            //onClick={this.next}
            type="submit"
            value="Next"
          />
        </div>
      </div>
    );
  }
}

export default SupplierInformation;
