'use strict';

import React from 'react';
import { connect } from 'react-redux';
import {toggleModal} from '../actions/mainActions';

require('../css/youtube-modal.scss');

class YouTubeModal extends React.Component {

  toggleModal(e) {
    if (e.target.className !== 'modal-content') {
      this.props.dispatch(toggleModal(''));
    }
  }

  render() {
    const {main} = this.props;
    const style = {display: 'none'};

    if (main.showModal) {
      style.display = 'block';
    } else {
      style.display = 'none';
    }

    return (
      <div className="modal" style={style} onClick={this.toggleModal.bind(this)}>
        <iframe
          type="text/html"
          width="640" height="360"
          src={main.videoURL + '&autoplay=1'}
          frameBorder="0"/>
      </div>
    );
  }
}

export default connect(
  store => ({
    main: store.main
  })
)(YouTubeModal);
