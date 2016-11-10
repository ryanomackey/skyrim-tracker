'use strict';

import React from 'react';

require('../css/stone-details.scss');


export default class StoneDetails extends React.Component {
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

  render() {
    const stone = this.props.stone;

    const style = {
      textDecoration: this.strikethrough(stone.location)
    };

    return (
      <tr className="stone-container">
        <td onClick={this.crossOff.bind(this)} style={style}>{stone.location}</td>
        <td><a href="http://youtube.com" target="_blank">Video</a></td>
      </tr>
    );
  }
}
