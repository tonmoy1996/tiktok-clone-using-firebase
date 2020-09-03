import React, { useState } from 'react';
import '../css/VideoSidebar.css';
import FavoriteIcon from '@material-ui/icons/Favorite';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import ChatIcon from '@material-ui/icons/Chat';
import ShareIcon from '@material-ui/icons/Share';
function VideoSidebar({ likes, shares, messages }) {
  const [liked, setLiked] = useState(false);
  return (
    <div className='videoSideBar'>
      <div className='videoSideBar_Button'>
        {liked ? (
          <FavoriteIcon fontSize='large' onClick={() => setLiked(false)} />
        ) : (
          <FavoriteBorderIcon fontSize='large' onClick={() => setLiked(true)} />
        )}
        <p>{likes}</p>
      </div>
      <div className='videoSideBar_Button'>
        <ShareIcon fontSize='large' />
        <p>{shares}</p>
      </div>
      <div className='videoSideBar_Button'>
        <ChatIcon />
        <p>{messages}</p>
      </div>
    </div>
  );
}

export default VideoSidebar;
