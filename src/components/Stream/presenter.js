'use strict';

import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { CLIENT_ID } from '../../constants/auth';
import ReactBootstrap from 'react-bootstrap';
// import HoverMixin from '../HoverEffect';

class Stream extends Component {
  // mixins: [HoverMixin]

  componentDidUpdate() {
    const audioElement = ReactDOM.findDOMNode(this.refs.audio);

    if (!audioElement) { return; }

    const { activeTrack } = this.props;

    if (activeTrack) {
      audioElement.play();
    } else {
      audioElement.pause();
    }
  }


  // style() {
  //   if (this.state.hovered) {
  //     return { backgroundColor: "red" }
  //   } else {
  //     return { backgroundColor: "grey"}
  //     }
  //   }

  // render() {

  render () {
    let btnStyle = {
      color: 'black',
      fontSize: '62px',
      margin: '3em'
    };

    const { user, tracks = [], activeTrack, onAuth, onPlay } = this.props;

    return (
      <div>
        <div>
          {
            user ?
              <div>{user.username}</div> :
              <button
                style={btnStyle} onClick={onAuth} type="button">Login</button>
          }
        </div>
        <br/>
        <div>
          {
            tracks.map((track, key) => {
              return (
                <div className="track" key={key}>
                  {track.origin.title}
                  <button type="button" onClick={() => onPlay(track)}>Play</button>
                </div>
              );
            })
          }
        </div>
        {
          activeTrack ?
            // Need to find correct URL property to access streaming url
            // <h1>{`${activeTrack.origin}`}</h1>:
            <audio id="audio" ref="audio" src={`${activeTrack.origin.stream_url}?client_id=${CLIENT_ID}`}></audio> :
            null
        }
      </div>
    );
  }

}

export default Stream;
