import React from 'react';
import GifListContainer from './GifListContainer';
import NavBar from './NavBar';

function App() {
  return (
    <div>
      <NavBar color="jade green" title="Giphy Search"/>
      <div className="container">
        <GifListContainer />
      </div>
    </div>
  );
}

export default App;
