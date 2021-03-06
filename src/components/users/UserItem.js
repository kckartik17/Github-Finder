import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const UserItem = ({ user: { avatar_url, html_url, login } }) => {
  return (
    <div className="card text-center">
      <img
        className="round-img"
        style={{ width: "60px" }}
        src={avatar_url}
        alt="Avatar"
      />
      <h3>{login}</h3>
      <Link to={`/user/${login}`} className="btn btn-dark btn-sm my-1">
        More
      </Link>
    </div>
  );
};

UserItem.propTypes = {
  user: PropTypes.object.isRequired
};

export default UserItem;
