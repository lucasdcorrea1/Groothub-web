import React, { Component } from 'react';
import './style.css';

import api from '../../services/Api.js'
import shareIcon from '../../assets/Images/share.svg';

import {
  Alert,
  Icon,
} from 'rsuite';

const imgSrc = 'http://www.toyslife.it/sito/wp-content/uploads/sideshow-marvel-guardians-of-the-galaxy-vol-2-baby-groot-maquette-toyslife-icon-555x741.jpg';

class FeedGroothub extends Component {
  state = {
    feed: []
  };

  async componentDidMount() {
    try {
      const response = await api.get('users/lucasdcorrea1/repos');
    
      this.setState({ feed: response.data });
    } catch (err) {
      Alert.error('Erro ao carregar feed');
    };
  };

  render() {
    const feed = this.state.feed
    console.log(feed)
    return (
      <section id="post-list">
        {feed.map(post => (
          <div key={post.id} className='feed'>
            <div className='header'>
              <h6>
                <img src={post.owner.avatar_url} alt="InstaHeader" />
                <span>{post.name}</span>
              </h6>
              <h6>
                <span>
                  <Icon icon='ellipsis-h' size="1x" />
                </span>
              </h6>
            </div>
            <div className='midiun'>
              <img src={imgSrc} alt="" />
            </div>
            <div className='footer'>
              <Icon icon='hand-spock-o' size="2x" />
              <Icon icon='share-alt-square' size="2x" />
            </div>
          </div>
        ))
        }
      </section>
    );
  }
};

export default FeedGroothub;