import React from 'react';

const VideosList = ({ videos }) => (
    <div className="videos">{
      videos.map((video, index) => {
        return (
          <div key={ index } className="video">
            {
              video.type === 'youtube' &&
                <iframe src={`https://www.youtube.com/embed/${video.embed}?controls=0` } frameborder="0" allow="encrypted-media"></iframe>
            }
            
            {
              video.type === 'vimeo' &&
                <iframe src={ `https://player.vimeo.com/video/${video.embed}` } frameborder="0"></iframe>
            }
          </div>
        );
      })
    }</div>
  );

  export default VideosList;
  