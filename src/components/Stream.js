import React from 'react';

function Stream({tracks = [] }) {
  return (
    <div>
      {
        tracks.map((tracks) => {
          return <div className="track">{track.title}</div>;
        })
      }
    </div>
  );
};

export default Stream;
