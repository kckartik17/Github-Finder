import React, { Component } from "react";

class Navbar extends Component {
  static defaultProps = {
    icon: "fa fa-github",
    title: "Github Finder"
  };

  render() {
    return (
      <nav className="navbar bg-primary">
        <h1>
          <i className={this.props.icon}> {this.props.title}</i>
        </h1>
      </nav>
    );
  }
}

export default Navbar;
