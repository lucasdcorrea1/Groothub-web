import React, { Component } from "react";
import { withRouter } from "react-router-dom";

import Page404 from '../../components/Page404';

class PageNotFound extends Component {
  state = {
  };

  render() {
    return (
      <section>
        <Page404/>
      </section>
    );
  }
};

export default withRouter(PageNotFound);