import React, { Component } from "react";
import "./App.css";
import Navbar from "./components/layout/Navbar";
import User from "./components/users/Users";
import axios from "axios";

class App extends Component {
  state = {
    users: [],
    loading: false
  };

  async componentDidMount() {
    this.setState({ loading: true });
    const users = await axios.get("https://api.github.com/users");

    console.log(users.data);

    this.setState({ users: users, loading: false });
  }

  render() {
    return (
      <div className="App">
        <Navbar />
        <div className="container">
          <User />
        </div>
      </div>
    );
  }
}

export default App;
