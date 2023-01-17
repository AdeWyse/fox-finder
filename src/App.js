import { useState } from 'react';
import './App.css';
import axios from 'axios';



function App() {
  const [photo, setPhoto] = useState('');

  const find = () => {
      axios.get("https://randomfox.ca/floof/").then((response) => {
        setPhoto(response.data.image);
    });
  }
  return (
    <div className="App" >
      <header className="App-header">
        <h3 className='siteTitle'>FoxFinder</h3>
      </header>
      <main>
        <button className='finder' onClick={find}>Find a Fox!</button>
        <div className='imgContainer'>
        {photo !== '' ?  (<img className='imgFound'  src={photo} alt='Random fox.'></img>) : (<div></div>)}
            
        </div>
      </main>
      <footer className="App-footer">
        <div className='pads'>FoxFinder by  <a href='https://github.com/AdeWyse' target ='blank'>AdeWyse</a></div>
        <div className='pads'> Photos from <a href='https://randomfox.ca/' target ='blank'>https://randomfox.ca/</a></div>
      </footer>
    </div>
  );
}

export default App;
