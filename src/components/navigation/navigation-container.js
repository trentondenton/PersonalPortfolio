import React, { Component, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from 'axios';
import { NavLink } from "react-router-dom";
import { withRouter } from "react-router";

import MobileNav from "./mobile-nav";


class NavigationContainer extends Component {
  constructor(props) {
    super(props);

    this.dynamicLink = this.dynamicLink.bind(this);
    this.handleSignOut = this.handleSignOut.bind(this);
  }


  dynamicLink = (route, linkText) => {
    return (
        <div className="nav-link-wrapper">
            <NavLink to={route} activeClassName="nav-link-active">
            {linkText}
            </NavLink>
        </div>
    );
  };

  handleSignOut = () => {
      axios.delete("https://api.devcamp.space/logout", {withCredentials: true})
      .then(response => {
          if (response.status === 200) {
              this.props.history.push("/");
              this.props.handleSuccessfulLogout();
          }
          return response.data;
      })
      .catch(error => {
          console.log("Error Signing Out", error);
      });
  };

  render() {
    return (
      <div className="nav-wrapper">
        <MobileNav/>
        <div className="left-side">
          <div className="nav-link-wrapper">
            <NavLink exact to="/" activeClassName="nav-link-active">
              Home
            </NavLink>
          </div>
  
          <div className="nav-link-wrapper">
            <NavLink to="/about-me" activeClassName="nav-link-active">
              About
            </NavLink>
          </div>
  
          <div className="nav-link-wrapper">
            <NavLink to="/contact" activeClassName="nav-link-active">
              Contact
            </NavLink>
          </div>
  
          <div className="nav-link-wrapper">
            <NavLink to="/blog" activeClassName="nav-link-active">
              Blog
            </NavLink>
          </div>
  
          {this.props.loggedInStatus === "LOGGED_IN" ? (
            this.dynamicLink("/portfolio-manager", "Portfolio Manager")
          ) : null}
        </div>
  
        <div className="right-side">
          TRENTON DENTON
          {this.props.loggedInStatus === 'LOGGED_IN' ? (
            <a onClick={this.handleSignOut}>
              <FontAwesomeIcon icon="sign-out-alt" />
            </a>
          ) : 
          <a href="/auth">
            <FontAwesomeIcon icon="sign-in-alt" />
          </a>}
        </div>
      </div>
    );

  }
};

export default withRouter(NavigationContainer);



