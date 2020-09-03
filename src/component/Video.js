import React, { useRef, useState } from 'react';
import '../css/video.css';
import VideoFooter from '../component/VideoFooter';
import VideoSidebar from '../component/VideoSidebar';
function Video({ src, channel, des, song, likes, shares, messages }) {
  const [play, setPlay] = useState(false);
  const videoRef = useRef(null);
  const onVideoPress = () => {
    if (!play) {
      videoRef.current.play();
      setPlay(true);
    } else {
      videoRef.current.pause();
      setPlay(false);
    }
  };

  return (
    <div className='video'>
      <video
        className='video_player'
        onClick={onVideoPress}
        loop
        ref={videoRef}
        src={src}
      ></video>
      <VideoFooter channel={channel} des={des} song={song} />
      <VideoSidebar likes={likes} shares={shares} messages={messages} />
    </div>
  );
}

export default Video;
