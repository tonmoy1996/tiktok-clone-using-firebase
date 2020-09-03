import React, { useState, useEffect } from 'react';
import './App.css';
import Video from './component/Video';
import db from './firebase';
function App() {
  const [videos, setVideos] = useState([]);
  useEffect(() => {
    db.collection('videos').onSnapshot((snapshot) =>
      setVideos(snapshot.docs.map((doc) => doc.data()))
    );
  }, [videos]);
  return (
    <div className='app'>
      <h2>Hello World</h2>
      <div className='app_videos'>
        {videos.map(({ src, channel, des, song, likes, shares, messages }) => (
          <Video
            src={src}
            channel={channel}
            des={des}
            song={song}
            likes={likes}
            shares={shares}
            messages={messages}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
