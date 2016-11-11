'use strict';

import React from 'react';
import Header from './Header';
import Checklist from './Checklist';
import YouTubeModal from './YouTubeModal';

require('../css/layout.scss');

export default class Layout extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <Checklist/>
        <YouTubeModal />
      </div>
    );
  }
}
