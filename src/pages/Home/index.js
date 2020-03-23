import React, { Component } from "react";
import { withRouter } from "react-router-dom";

// Component
import Header from '../../components/Header';
import FeedGroothub from '../../components/FeedGroothub';
import UserInfo from '../../components/UserInfo';

class Home extends Component {
  state = {
    feedGroothub: [],
    password: "",
    error: ""
  };

  render() {
    return (
      <section>
        <Header/>
        <UserInfo/>
        <FeedGroothub/>
      </section>
    );
  }
};

export default withRouter(Home);