'use strict';

import React from 'react';
import StoneDetails from './StoneDetails';
import YouTubeModal from './YouTubeModal';


require('../css/checklist.scss');

export default class Checklist extends React.Component {
  constructor() {
    super();
    this.state = {
      videoURL: '',
      showModal: false
    };
  }

  setURL(videoURL) {
    this.setState({
      videoURL: videoURL,
      showModal: true,
    });
  }

  render() {
    const stones = require('json!../barenziah.json')
    .sort((a, b) => {
      if (a.location > b.location) {
        return 1;
      }
      if (a.location < b.location) {
        return -1;
      }
    })
    .map((stone, index) => {
      return <StoneDetails stone={stone} key={index} setURL={this.setURL}/>;
    });

    const showModal = function() {
      if (this.state.showModal) {
        return <YouTubeModal videoURL={this.state.videoURL}/>
      } else {
        return null;
      }
    }

    return (
      <div>
        <table className="checklist">
          <tbody>
            {stones}
          </tbody>
        </table>
        {showModal}
      </div>

    );
  }
}
