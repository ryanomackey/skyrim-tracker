'use strict';

import React from 'react';
import StoneDetails from './StoneDetails';

require('../css/checklist.scss');

export default class Checklist extends React.Component {
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
      return <StoneDetails stone={stone} key={index} />;
    });
    return (
      <table className="checklist">
        <tbody>
          {stones}
        </tbody>
      </table>
    );
  }
}
