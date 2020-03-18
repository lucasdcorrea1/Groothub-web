import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import '../styles/css/header.css';

import logo from '../assets/images/marvel.svg';
import user from '../assets/images/user.svg';

class Header extends Component {
	state = {
		feedGithub: []
	};
	render() {
		return (
			<header id="main-header">
				<div className="header-content">
					<Link to="/">
						<img src={logo} alt="InstaHeader" />
					</Link>
					<Link to="/signin">
						<img src={user} alt="Enviar Publicação" />
					</Link>
				</div>
			</header>
		);
	}
};

export default Header;