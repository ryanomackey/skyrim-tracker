'use strict';

const initialState = {
  showModal: false,
  videoURL: ''
};

export default function reducer(state=initialState, action) {
  switch(action.type) {
    case "TOGGLE_MODAL": {
      return Object.assign({}, state, {
        showModal: state.showModal = !state.showModal,
        videoURL: action.payload
      });
    }
    default: {
      return state;
    }
  }
}
