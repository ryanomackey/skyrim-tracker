'use strict';

import React from 'react';
import {connect} from 'react-redux';
import {toggleModal} from '../actions/mainActions';

require('../css/stone-details.scss');


class StoneDetails extends React.Component {
  crossOff(e) {
    const location = e.target.innerHTML;
    if (localStorage.getItem(location) === 'true') {
      localStorage.setItem(location, 'false');
      e.target.style.textDecoration = 'none';
    } else {
      localStorage.setItem(location, 'true');
      e.target.style.textDecoration = 'line-through';
    }
  }

  strikethrough(stoneLocation) {
    return localStorage.getItem(stoneLocation) === 'true' ? 'line-through' : 'none';
  }

  toggleModal(videoURL) {
    this.props.dispatch(toggleModal(videoURL));
  }

  render() {
    const stone = this.props.stone;

    const style = {
      textDecoration: this.strikethrough(stone.location)
    };

    return (
      <tr className="stone-container">
        <td onClick={this.crossOff.bind(this)} style={style}>{stone.location}</td>
        <td onClick={this.toggleModal.bind(this, stone.videoURL)}>Video</td>
      </tr>
    );
  }
}

export default connect(
  store => ({
    main: store.main
  })
)(StoneDetails);
