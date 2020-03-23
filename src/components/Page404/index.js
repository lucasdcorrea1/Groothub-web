import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import './styles.css';

class FeedGroothub extends Component {
	state = {
		feedGroothub: []
	};

	render() {
		return (
			<div id='page404'>
				<section className="error-container">
					<span className="four"><span className="screen-reader-text">4</span></span>
					<span className="zero"><span className="screen-reader-text">0</span></span>
					<span className="four"><span className="screen-reader-text">4</span></span>
				</section>
				<h3>Hmm... Perdido no <span>ESPAÇO</span>? Parece que essa página não existe, </h3>
				<h3>talvez queira voltar para a</h3>
				<div className="link-container">
					<Link to="/">
						<a href='page404' className="more-link">
							Pagina Inicial
					</a>
					</Link>
				</div>
			</div>
		);
	}
};

export default FeedGroothub;