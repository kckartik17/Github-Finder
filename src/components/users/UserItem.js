import React, { Component } from "react";

class UserItem extends Component {
  render() {
    const { avatar_url, html_url, login } = this.props.user;
    return (
      <div className="card text-center">
        <img
          className="round-img"
          style={{ width: "60px" }}
          src={avatar_url}
          alt="Avatar"
        />
        <h4>{login}</h4>
        <a href={html_url} className="btn btn-dark sm">
          More
        </a>
      </div>
    );
  }
}

export default UserItem;
