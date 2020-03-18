import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";

import Header from '../../components/Header';
import FeedGithub from '../../components/feedGithub';

class Home extends Component {
  state = {
    feedGithub: [],
    password: "",
    error: ""
  };

  render() {
    return (
      <section>
        {/* <Header/> */}
        <FeedGithub/>
      </section>
    );
  }
};

export default withRouter(Home);