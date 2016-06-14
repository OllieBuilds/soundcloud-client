import * as actionTypes from '../constants/actionTypes';

export function setTracks(tracks) {
  console.log('set tracks firing');
  return {
    type: actionTypes.TRACKS_SET,
    tracks
  };
};

export function playTrack(track) {
  return {
    type: actionTypes.TRACK_PLAY,
    track
  }
};
