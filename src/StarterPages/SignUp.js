import React, { Component } from "react";
import "./SignUp.css";
import { Link, Redirect } from "react-router-dom";
import { withRouter } from "react-router-dom";
import eye from "../img/round-remove_red_eye-24px.svg";

class SignUp extends Component {
  state = {
    type: "password",
    email: "",
    password: "",
    isFormValid: false
  };

  handleChange = e => {
    this.setState(
      {
        [e.target.name]: e.target.value
      },
      this.validateForm
    );
  };

  validateForm = () => {
    this.setState({
      isFormValid: this.state.email.length > 0 && this.state.password.length > 0
    });
  };

  showPassword = () => {
    this.setState({
      type: this.state.type === "password" ? "text" : "password"
    });
  };

  saveAccount = () => {
    let users = JSON.parse(localStorage.getItem("users")) || [];

    let filteredUsers = users.filter(user => {
      return (
        user.email === this.state.email && user.password === this.state.password
      );
    });

    if (!filteredUsers.length) {
      users.push({ email: this.state.email, password: this.state.password });
      localStorage.setItem("users", JSON.stringify(users));
    } else {
      alert("The user already exists.");
    }
  };

  render() {
    return (
      <div className="main-wrapper">
        <form className="registration-form">
          <h1>Create an account</h1>

          <label htmlFor="email">
            Email address
            <input
              type="text"
              onChange={this.handleChange}
              value={this.state.email}
              placeholder="Enter email"
              name="email"
              required
            />
          </label>

          <div className="password-input">
            <label htmlFor="psw">
              Create a password
              <input
                type={this.state.type}
                onChange={this.handleChange}
                value={this.state.password}
                placeholder="******"
                name="password"
                required
              />
              <img src={eye} onClick={this.showPassword} alt="hide" />
            </label>
          </div>

          <div className="btn-submit">
            <input
              disabled={!this.state.isFormValid}
              onClick={this.saveAccount}
              type="submit"
              value="Sign up"
            />
          </div>
        </form>
        <p>
          Already have a Kountable account? <Link to="/login">Log in</Link>
        </p>
      </div>
    );
  }
}

export default withRouter(SignUp);
