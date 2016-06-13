import React from 'react';
import ReactDOM from 'react-dom';
import Stream from './components/Stream';

const tracks = [
  {
    title: 'Some track',
  },
  {
    title: 'Some other track',
  },
];

const store = configureStore();
store.dispatch(actions.setTracks(tracks));

ReactDOM.render(
  <Stream />,
  document.getElementById('app'),
);
