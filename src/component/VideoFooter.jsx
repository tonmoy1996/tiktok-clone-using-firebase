import React from 'react';
import '../css/VideoFooter.css';
import MusicNoteIcon from '@material-ui/icons/MusicNote';
import Ticker from 'react-ticker';

function VideoFooter({ channel, song, des }) {
  return (
    <div className='videoFooter'>
      <div className='videoFooter_text'>
        <h3>@{channel}</h3>
        <p>{des}...</p>
        <div className='videofooter_ticker'>
          <MusicNoteIcon className='videofooter_icon' />
          <Ticker className='ticker' mode='smooth'>
            {({ index }) => (
              <>
                <p>{song}.</p>
              </>
            )}
          </Ticker>
        </div>
      </div>
      <img className='logo' src='spinner.png' alt='spinner' />
    </div>
  );
}

export default VideoFooter;
