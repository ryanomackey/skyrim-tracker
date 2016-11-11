'use strict';

export function toggleModal(videoURL) {
  return function(dispatch) {
    dispatch({type: "TOGGLE_MODAL", payload: videoURL});
  };
}
