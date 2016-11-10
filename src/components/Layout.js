'use strict';

import React from 'react';
import Header from './Header';
import Checklist from './Checklist';

require('../css/layout.scss');

export default class Layout extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <Checklist />
      </div>
    );
  }
}
