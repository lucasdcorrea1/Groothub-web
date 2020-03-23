

import React, { Component } from 'react';
import './style.css'

class Footer extends Component {
  state = {
    date: new Date()
  };

  render() {
    return (
      <footer className="footer-distributed">
        <div className="footer-left">
        </div>
        <div className="footer-center">
          <div>
            <i className="fa fa-envelope"></i>
            <a href="https://github.com/lucasdcorrea1" target="_blanck" className="footer-company-name">Lucas Damas &copy; { this.state.date.getFullYear()}</a>
          </div>
        </div>
      </footer>
    );
  }
};

export default Footer;