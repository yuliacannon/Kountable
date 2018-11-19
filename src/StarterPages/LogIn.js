import React, { Component } from "react";
import "./SignUp.css";
import { Link, Redirect } from "react-router-dom";
import eye from "../img/round-remove_red_eye-24px.svg";
import { withRouter } from "react-router-dom";

export const fakeAuth = {
  isAuthenticated: false,
  authenticate(cb) {
    this.isAuthenticated = true;
    setTimeout(cb, 100);
  },
  signout(cb) {
    this.isAuthenticated = false;
    setTimeout(cb, 100);
  }
};

class LogIn extends Component {
  state = {
    type: "password",
    email: "",
    password: "",
    validateForm: false,
    redirectToReferrer: false
  };

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  showPassword = () => {
    this.setState({
      type: this.state.type === "password" ? "text" : "password"
    });
  };

  logIn = e => {
    e.preventDefault();
    fakeAuth.authenticate(() => {
      let users = JSON.parse(localStorage.getItem("users")) || [];

      let filteredUsers = users.filter(user => {
        return (
          user.email === this.state.email &&
          user.password === this.state.password
        );
      });

      if (filteredUsers.length) {
        const { from } = this.props.location.state || {
          from: { pathname: "/business-info" }
        };
        this.props.history.push(from);
      }
    });
  };

  render() {
    return (
      <div className="main-wrapper">
        <form onSubmit={this.logIn} className="registration-form">
          <h1>Log in to your account</h1>

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
            <label htmlFor="password">
              Password
              <input
                type={this.state.type}
                onChange={this.handleChange}
                placeholder="******"
                value={this.state.password}
                name="password"
                required
              />
              <img src={eye} onClick={this.showPassword} alt="hide" />
            </label>
          </div>

          <p className="forgot-pass">
            <a href="#">Forgot password?</a>
          </p>
          <div className="btn-submit" id="login">
            <input type="submit" value="Log in" />
          </div>
        </form>
        <p>
          Don't have an account yet? <Link to="/signup">Sign up</Link>
        </p>
      </div>
    );
  }
}

export default withRouter(LogIn);
