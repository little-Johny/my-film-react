import './App.css';

import React from 'react';
import { Title } from './Components/Title';
import { VideoList } from './Components/VideoList';






function App() {

  const [videos, setVideos] = React.useState([]);

  return (
    <>
      <header className="App-header">
        <Title
          total={videos.length}
        />


        
        
        <VideoList
          ApiVideos={videos}
          SetApiVideo={setVideos}
        />
        

        
      </header>

    </>
  );
}

export default App;
